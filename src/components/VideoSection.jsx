import IntroVideo from "./IntroVideo";
import "../stylesheets/VideoSection.scss";
import PlayContext from "../contexts/PlayContext";
import { Link } from "react-router-dom";

const VideoSection = () => {
  return (
    <PlayContext>
      <section className="video-section">
        <h2 className="--header">Introductory Video</h2>
        <p className="--description">
          Watch the intro video below about our prestigious institution.
        </p>
        <IntroVideo />
        <Link to="/about" className="--cta-secondary">
          Learn more about us
        </Link>
      </section>
    </PlayContext>
  );
};

export default VideoSection;
