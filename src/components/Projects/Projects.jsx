import PokeApp from "../../assets/pokeApp.png";
import WeatherApp from "../../assets/weatherApp.png";
import { BsSuitcaseLgFill } from "react-icons/bs";

const text = {
  port: [
    "Projetos",
    "Aqui estão alguns projetos pessoais que eu fiz e atualmente trabalho:",
    [
      "Projeto em Destaque:",
      "Poke App",
      "Com este website o usuário consegue inserir um time pokemon e checar por suas fraquezas e resistências",
      "Criado com React e Tailwind",
    ],
    [
      "Projeto em Destaque:",
      "Weather App",
      "Com este website o usuário consegue inserir o nome de uma cidade e checar o tempo, a previsão, temperatura e outros detalhes",
      "Criado com React e Tailwind",
    ],
  ],
  eng: [
    "Projects",
    "Here are a few personal projects that I did and currently doing:",
    [
      "Featured Project:",
      "Poke App",
      "With this website you can input a pokemon team and check your weaknesses and resistances",
      "Created with React, Tailwind",
    ],
    [
      "Featured Project:",
      "Weather App",
      "With this website you can input a city's name and check the weather, forecast, temperature and other details",
      "Created with React and Tailwind",
    ],
  ],
};

const Card = ({ src, textCard, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      className="relative overflow-hidden md:w-[40rem] group"
    >
      <div className="absolute w-full inset-0 bg-zinc-800 opacity-90 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300 sm:py-6 px-6 text-xs sm:text-lg">
        <p className="hidden sm:block">{textCard[0]}</p>
        <h2 className="text-center text-2xl md:text-4xl py-2 md:py-7 font-bold">
          {textCard[1]}
        </h2>
        <p className="pb-2 md:pb-4">
          {"> "}
          {textCard[2]}
        </p>
        <p>
          {"> "}
          {textCard[3]}
        </p>
      </div>
      <img src={src} alt="" />
    </a>
  );
};

const Projects = ({ lan }) => {
  return (
    <section
      id="projects"
      className="py-52 bg-white flex flex-col justify-center items-center gap-10 sm:text-lg"
    >
      <h2 className="text-4xl sm:text-6xl text-center text-blue-800 font-black">
        <BsSuitcaseLgFill className="inline-block align-top" /> {text[lan][0]}
      </h2>
      <p className="text-center px-2">{text[lan][1]}</p>
      <div className="bg-blue-800 text-white p-8 rounded-lg drop-shadow-lg lg:text-lg">
        <div className="grid grid-cols-1 2xl:grid-cols-2 gap-10">
          <Card
            src={PokeApp}
            textCard={text[lan][2]}
            link="https://david-messmore-poke-app.netlify.app/"
          />
          <Card
            src={WeatherApp}
            textCard={text[lan][3]}
            link="https://david-messmore-weather-app.netlify.app/"
          />
        </div>
      </div>
    </section>
  );
};
export default Projects;
