import { HeroProps } from "../types";

const Hero= ({ children, hero }: HeroProps) => {
  return <div className={hero}>{children}</div>;
};

export default Hero;