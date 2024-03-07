import BannerBg from "./../../assets/bannerBg.png";
import { motion } from "framer-motion";
import { useRef, useState } from "react";

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

const text = {
  port: ["Olá, meu nome é David", "Um Front-End Developer"],
  eng: ["Hello, my name is David", "A Front-End Developer"],
};

const HeroText = ({ lan }) => {
  const ref = useRef(null);

  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rY = mouseX / width - HALF_ROTATION_RANGE;
    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;

    setRotateX(rX);
    setRotateY(rY);
  };

  const handleMouseLeave = () => {
    if (!ref.current) return;
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
      }}
      animate={{
        rotateX,
        rotateY,
      }}
    >
      <h2
        style={{
          transform: "translateZ(75px)",
        }}
        className="text-2xl sm:text-5xl lg:text-7xl font-semibold text-center"
      >
        {text[lan][0]}
      </h2>
      <h3
        style={{
          transform: "translateZ(75px)",
        }}
        className="text-xl lg:text-3xl italic my-6 text-center"
      >
        {text[lan][1]}
      </h3>
    </motion.div>
  );
};

const Hero = ({ lan }) => {
  return (
    <header
      id="home"
      className="h-screen bg-cover flex flex-col items-center justify-center transition-colors text-white bg-blend-luminosity	bg-blue-700"
      style={{
        backgroundImage: `url(${BannerBg})`,
      }}
    >
      <HeroText lan={lan} />
    </header>
  );
};
export default Hero;
