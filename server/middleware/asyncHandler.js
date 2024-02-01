const asyncHandler = (fn) => (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(error => {
        res.status(error.statusCode || 500).json({message: error.message})
    })
}

export default asyncHandler