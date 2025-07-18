import PokeApp from '../../assets/pokeApp.png'
import WeatherApp from '../../assets/weatherApp.png'
import PokeGuesser from '../../assets/poke-guesser.png'
import hiking from '../../assets/hiking-design.png'
import { BsSuitcaseLgFill } from 'react-icons/bs'

const text = {
  port: [
    'Projetos',
    'Aqui estão alguns projetos pessoais que eu fiz e atualmente trabalho:',
    [
      'Poke App',
      'Com este website o usuário consegue inserir um time pokemon e checar por suas fraquezas e resistências',
      'Criado com React e Tailwind',
    ],
    [
      'Weather App',
      'Com este website o usuário consegue inserir o nome de uma cidade e checar o tempo, a previsão, temperatura e outros detalhes',
      'Criado com React e Tailwind',
    ],
    [
      'Poke Guesser',
      'Este é um jogo divertido e interativo baseado na web, onde os usuários são desafiados a adivinhar um Pokémon aleatório a cada dia',
      'Criado com React e Tailwind',
    ],
    [
      'Hiking Website',
      'Este é um modelo de site criado para fins de aprendizagem e para testar minhas habilidades básicas',
      'Criado com HTML, CSS e Javascript',
    ],
  ],
  eng: [
    'Projects',
    'Here are a few personal projects that I did and currently doing:',
    [
      'Poke App',
      'With this website you can input a pokemon team and check your weaknesses and resistances',
      'Created with React, Tailwind',
    ],
    [
      'Weather App',
      "With this website you can input a city's name and check the weather, forecast, temperature and other details",
      'Created with React and Tailwind',
    ],
    [
      'Poke Guesser',
      'This is a fun and interactive web-based game where users are challenged to guess a randomized Pokémon each day',
      'Created with React and Tailwind',
    ],
    [
      'Hiking Website',
      'This is a template website created for learning purposes and testing my basic skills',
      'Created with HTML, CSS and Javascript',
    ],
  ],
}

const Card = ({ src, textCard, link }) => {
  return (
    <div className="max-w-lg border border-zinc-400 rounded-b-lg shadow-sm bg-zinc-900 hover:shadow-2xl hover:shadow-xl/50">
      <a href={link} target="_blank" className="">
        <img src={src} alt="" />
      </a>
      <div className="px-8 pb-6 text-white">
        <h2 className="text-2xl md:text-4xl py-2 md:py-7 font-bold">
          {textCard[0]}
        </h2>
        <p className="pb-2 md:pb-4">
          {'> '}
          {textCard[1]}
        </p>
        <p>
          {'> '}
          {textCard[2]}
        </p>
      </div>
    </div>
  )
}

const Projects = ({ lan }) => {
  return (
    <section
      id="projects"
      className="py-52 bg-white flex flex-col justify-center items-center gap-10 sm:text-lg w-4/5 mx-auto"
    >
      <h2 className="text-4xl sm:text-6xl text-center text-blue-800 font-black">
        <BsSuitcaseLgFill className="inline-block align-top" /> {text[lan][0]}
      </h2>
      <p className="text-center px-2">{text[lan][1]}</p>
      <div className=" drop-shadow-lg lg:text-lg">
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
          <Card
            src={PokeGuesser}
            textCard={text[lan][4]}
            link="https://davids-pokemon-guesser.netlify.app/"
          />
          <Card
            src={hiking}
            textCard={text[lan][5]}
            link="https://david-hiking.netlify.app/"
          />
        </div>
      </div>
    </section>
  )
}
export default Projects
