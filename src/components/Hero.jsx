import HeroBackground from "./HeroBackground";
import HeroText from "./HeroText"

import '../stylesheets/Hero.scss'

export default function Hero() {
  return (
    <section className="hero">
      <HeroBackground sliderSize={4}/>
      <HeroText />
    </section>
  );
}
