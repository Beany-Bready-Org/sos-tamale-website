const asyncHandler = require("../middleware/asyncHandler");
const Admin = require("../models/adminModel");
const bcrypt = require("bcrypt");
const path = require("path");
const fs = require("fs");
const createToken = require("../utils/createToken");

// @route /api/admin/validate-token
// @desc Validate access token
// @access PUBLIC
const validateToken = asyncHandler(async (req, res, next) => {
  // Retrieve access token
  const { accessToken } = req.body;
  // Check for existence of access token
  if (!accessToken) {
    return next(
      res
        .status(400)
        .json({ message: "No access token provided!", success: false })
    );
  }

  // Confirm access token
  if (accessToken !== process.env.ADMIN_TOKEN) {
    return next(
      res.status(401).json({ message: "Your token is invalid", success: false })
    );
  }

  // Send success message
  return next(
    res
      .status(200)
      .json({ message: "Access token verified!", success: true, accessToken })
  );
});

// @route /api/admin/register
// @desc Register admin account
// @access PRIVATE
const registerAccount = asyncHandler(async (req, res, next) => {
  const { name, email, password, accessToken } = req.body;

  if ((!name, !email, !password, !accessToken)) {
    return next(res.status(427).json({ message: "Invalid credentials" }));
  }
  // Verify access token
  if (accessToken !== process.env.ADMIN_TOKEN) {
    return next(
      res.status(401).json({ message: "Invalid access token, try again." })
    );
  } else {
    try {
      // Check if user already exists
      const userExists = await Admin.findOne({ email });

      if (userExists) {
        return next(
          res
            .status(401)
            .json({ message: "Account already exists, use different email." })
        );
      }

      // Secure user password
      // Create a salt
      const salt = await bcrypt.genSalt();
      const hashedPassword = await bcrypt.hash(password, salt);

      // Create new user
      const newUser = new Admin({
        name,
        email,
        password: hashedPassword,
      });

      // Save new user
      await newUser.save();
      // Generate token for user
      let token = createToken(res, newUser?.name, newUser?.email);

      if (newUser) {
        return next(
          res.status(200).json({
            message: "User created successfully",
            user: {
              _id: newUser._id,
              name: newUser?.name,
              email: newUser?.email,
            },
          })
        );
      }
    } catch (error) {
      next(res.status(500).json({ message: "An error ocurred on our end" }));
    }
  }
});

// @route /api/admin/login
// @desc Login admin account
// @access PRIVATE
const loginUser = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;

  if ((!email, !password)) {
    return next(
      res.status(401).json({ message: "Incorrect email or password" })
    );
  }

  // Find  user with incoming email
  const userAvailable = await Admin.findOne({ email });

  try {
    // Confirm incoming password with hashed password

    if (
      userAvailable &&
      (await bcrypt.compare(password, userAvailable?.password))
    ) {
      let token = createToken(res, userAvailable?.name, userAvailable?.email);

      next(
        res.status(200).json({
          user: {
            name: userAvailable?.name,
            email: userAvailable?.email,
            _id: userAvailable._id,
          },
          token,
          status: "User signed successfully",
        })
      );
    }
  } catch (error) {
    next(res.status(500).json({ message: "Something went wrong on our end" }));
  }
});

// @route /api/admin/logout
// @desc Logout admin account
// @access PRIVATE
const logoutUser = asyncHandler(async (req, res, next) => {
  if (!req.user) {
    return next(res.status(403).json({ message: "No user currently active" }));
  }

  // Remove http  cookie
  res.cookie("jwt", "", {
    httpOnly: true,
    sameSite: "strict",
    expires: new Date(0),
  });

  return next(
    res.status(200).json({ message: "User logged out successfully" })
  );
});

// @route /api/admin/add-event
// @desc Add new event
// @access PRIVATE
const addEvent = asyncHandler(async (req, res, next) => {
  if (!req.user) {
    return next(
      res
        .status(401)
        .json({ message: "You need to be logged in to  perform this action" })
    );
  }
  const { file, title, description } = req.body;

  if ((!title, !description)) {
    return next(res.status(427).json({ message }));
  }
});

module.exports = {
  registerAccount,
  loginUser,
  logoutUser,
  validateToken,
  addEvent,
};
