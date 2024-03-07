import myPhoto from "./../../assets/myImage.jpg";
import {
  FaCode,
  FaWordpress,
  FaCss3Alt,
  FaReact,
  FaGitAlt,
  FaArrowDown,
} from "react-icons/fa";
import myCV from "./../../assets/DavidMessmoreCV.pdf";
import { FaUserAstronaut, FaHtml5, FaPhp } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTailwindcss } from "react-icons/si";

const text = {
  port: [
    "Sobre Mim",
    "Eu sou um front-end developer autodidata e",
    "um Bacharel Interdisciplinar em Ciência e Tecnologia",
    "baseado em Salvador, Bahia.",
    "Eu construo websites e conserto coisas com",
    "codigo limpo, responsividade e acessibilidade",
    ". Meu objetivo é crescer continuamente como um developer ao mesmo tempo em que me mantenho atualizado com as novas trends e tecnologias.",
    "Sou bastante entusiasmado enquanto aprendo, crio e resolvo desafios, e",
    "amaria poder trabalhar com um time que divide as mesmas inspirações que as minhas",
    " E sim, eu curto coisas espaciais e minhar cor favorita é azul.",
    "Baixar Curriculo",
    "Habilidades e Tecnologias",
    "Aqui estão algumas tecnologias que eu mais uso:",
  ],
  eng: [
    "About me",
    "I’m a self-taught passionate front-end developer and",
    "an interdisciplinary bachelor in science and technology",
    "based on Brazil.",
    "I build websites and fix stuff with",
    "clean code, responsiveness and accessibility",
    ". My goal is to continuously grow as a developer while staying up to the latest trends and technologies.",
    "I’m happiest when I’m learning, creating and solving challenges, and",
    "I would love to work for a team that shares the same passions as me",
    " And yes, I love space stuff and my favorite color is blue.",
    "Download Curriculum Vitae",
    "Skills & Technologies",
    "Here are a few technologies that I mostly use:",
  ],
};

const About = ({ lan }) => {
  return (
    <section
      id="about"
      className="pt-32 bg-white transition-all text-zinc-700 text-sm md:text-lg"
    >
      <h2 className="text-4xl sm:text-6xl text-center font-black text-blue-800 pb-20">
        <FaUserAstronaut className="inline-block align-top " /> {text[lan][0]}
      </h2>
      <article className="flex flex-col-reverse xl:flex-row justify-center items-center gap-10">
        <div className="max-w-3xl p-8 rounded-lg">
          <p className="pt-10">
            {text[lan][1]}{" "}
            <span className="text-blue-800 font-black">{text[lan][2]} </span>
            {text[lan][3]}
          </p>
          <p className="py-4">
            {text[lan][4]}{" "}
            <span className="text-blue-800 font-black">{text[lan][5]}</span>
            {text[lan][6]}
          </p>
          <p className="">
            {text[lan][7]}{" "}
            <span className="text-blue-800 font-black">{text[lan][8]}</span>.
            {text[lan][9]}
          </p>

          <a
            // href={myCV}
            // download="DavidMessmoreCV"
            className="bg-blue-800 text-white px-4 py-2 rounded-md mt-10 block w-fit hover:bg-blue-600 duration-300"
          >
            <FaArrowDown className="inline-block align-middle " />{" "}
            {text[lan][10]}
          </a>
        </div>
        <div className="max-w-xl drop-shadow-md hover:scale-110	duration-200">
          <img
            src={myPhoto}
            alt="my image"
            className="w-48 xl:w-96 rounded-xl"
          />
        </div>
      </article>
      <article className="flex flex-col justify-center items-center pt-32 transition-colors">
        <h2 className="text-3xl sm:text-5xl text-center font-black text-blue-800">
          <FaCode className="inline-block" /> {text[lan][11]}
        </h2>
        <p className="p-8">{text[lan][12]}</p>
        <div className="bg-blue-800 w-full py-3 px-4 sm:px-20">
          <div className="grid grid-cols-2 sm:grid-cols-4 xl:grid-cols-8 sm:gap-4 bg-white justify-evenly items-center my-4 rounded-lg p-4">
            <p className="p-2 duration-300 flex flex-col justify-center items-center hover:-translate-y-3">
              <FaHtml5 className="text-6xl text-[#e65027]" />
              HTML5
            </p>
            <p className="p-2 duration-300 flex flex-col justify-center items-center hover:-translate-y-3">
              <FaCss3Alt className="text-6xl text-[#1572b6]" />
              CSS3
            </p>
            <p className="p-2 duration-300 flex flex-col justify-center items-center hover:-translate-y-3">
              <IoLogoJavascript className="text-6xl text-[#efd81d]" />
              Javascript {"(E6+)"}
            </p>
            <p className="p-2 duration-300 flex flex-col justify-center items-center hover:-translate-y-3">
              <FaReact className="text-6xl text-[#5ed3f3]" />
              React
            </p>
            <p className="p-2 duration-300 flex flex-col justify-center items-center hover:-translate-y-3">
              <SiTailwindcss className="text-6xl text-[#38bdf8]" />
              TailwindCSS
            </p>
            <p className="p-2 duration-300 flex flex-col justify-center items-center hover:-translate-y-3">
              <FaGitAlt className="text-6xl text-[#e74423]" />
              Git
            </p>

            <p className="p-2 duration-300 flex flex-col justify-center items-center hover:-translate-y-3">
              <FaPhp className="text-6xl text-[#4d588e]" />
              PHP
            </p>
            <p className="p-2 duration-300 flex flex-col justify-center items-center hover:-translate-y-3">
              <FaWordpress className="text-6xl text-[#207196]" />
              Wordpress
            </p>
          </div>
        </div>
      </article>
    </section>
  );
};
export default About;
