import myPhoto from './../../assets/myImage.jpeg'
import {
  FaCode,
  FaWordpress,
  FaCss3Alt,
  FaReact,
  FaGitAlt,
  FaArrowDown,
} from 'react-icons/fa'
import myCVEng from './../../assets/DavidMessmoreCV(English).pdf'
import myCVPort from './../../assets/DavidMessmoreCV(Português).pdf'
import { FaUserAstronaut, FaHtml5, FaPhp } from 'react-icons/fa6'
import { IoLogoJavascript } from 'react-icons/io5'
import { SiTailwindcss } from 'react-icons/si'

const cvs = {
  port: myCVPort,
  eng: myCVEng,
}

const text = {
  port: [
    'Sobre Mim',
    'Opa! Eu sou um',
    'Desenvolvedor Web',
    'aficionado com uma base sólida em desenvolvimento web e um olhar atento para design e experiência do usuário.',
    '📚 Eu tenho um ',
    'Bacharelado em Ciência e Tecnologia ',
    'e atualmente estou cursando Ciência da Computação na UFBA.',
    '🎯 Sou bastante entusiasmado enquanto aprendo, crio e resolvo desafios, e',
    'amaria poder trabalhar com um time que divide as mesmas inspirações que as minhas',
    ' E sim, eu curto coisas espaciais e minhar cor favorita é azul.',
    'Baixar Curriculo',
    'Habilidades e Tecnologias',
    '⭐Aqui está as coisas que eu posso fazer⭐',
    '✅Sou especialista em criar interfaces web responsivas, dinâmicas e visualmente atraentes usando JavaScript, React e Tailwind CSS. 🚀 Também trabalho com PHP e WordPress para desenvolver sites personalizados.',
    '✅Sou bastante responsivo, fácil de contatar e sempre focado em uma comunicação clara.',
    '✅Sou comprometido em escrever código limpo e eficiente, e entregar projetos que superem as expectativas.',
    '🤝 Vamos transformar suas ideias em experiências digitais elegantes e funcionais! 💼✨',
  ],
  eng: [
    'About me',
    "Hi! I'm a passionate",
    'Web Developer',
    'with a strong foundation in web development and a keen eye for design and user experience.',
    '📚 I hold a ',
    "Bachelor's degree in Science and Technology ",
    "and am currently pursuing a second Bachelor's in Computer Science to further sharpen my skills.",
    '🎯 I’m happiest when I’m learning, creating and solving challenges, and',
    'I would love to work for a team that shares the same passions as me',
    ' And yes, I love space stuff and my favorite color is blue.',
    'Download Curriculum Vitae',
    'Skills & Technologies',
    "⭐Here's what I can bring to you⭐",
    '✅I specialize in building responsive, dynamic, and visually appealing web interfaces using JavaScript, React, and Tailwind CSS. 🚀 I also work with PHP and WordPress to develop custom and powerful websites.',
    "✅I'm highly responsive, easy to reach, and always focused on clear communication.",
    "✅I'm committed to writing clean, efficient code and delivering projects that exceed expectations.",
    "🤝 Let's turn your ideas into beautiful, functional digital experiences! 💼✨",
  ],
}

const About = ({ lan }) => {
  return (
    <section
      id="about"
      className="pt-32 bg-white transition-all text-zinc-700 text-sm md:text-lg"
    >
      <h2 className="text-4xl sm:text-6xl text-center font-black text-blue-800 pb-20">
        <FaUserAstronaut className="inline-block align-top " /> {text[lan][0]}
      </h2>
      <article className="flex flex-col-reverse xl:flex-row justify-center items-center gap-10 mb-20">
        <div className="max-w-3xl p-8 rounded-lg">
          <p className="pt-10">
            {text[lan][1]}{' '}
            <span className="text-blue-800 font-black">{text[lan][2]} </span>
            {text[lan][3]}
          </p>
          <p className="py-4">
            {text[lan][4]}{' '}
            <span className="text-blue-800 font-black">{text[lan][5]}</span>
            {text[lan][6]}
          </p>
          <p className="">
            {text[lan][7]}{' '}
            <span className="text-blue-800 font-black">{text[lan][8]}</span>.
            {text[lan][9]}
          </p>

          <a
            href={cvs[lan]}
            download="DavidMessmoreCV"
            className="bg-blue-800 text-white px-4 py-2 rounded-md mt-10 block w-fit hover:bg-blue-600 duration-300"
          >
            <FaArrowDown className="inline-block align-middle " />{' '}
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
      <article className="flex flex-col py-10 w-full m-auto text-white bg-gradient-to-r from-indigo-900 to-zinc-900 ">
        <h2 className="text-3xl sm:text-5xl pb-10 text-center font-black">
          <FaCode className="inline-block" /> {text[lan][11]}
        </h2>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-10">
          <div className="w-1/2 ">
            <p className="py-4">{text[lan][12]}</p>
            <p className="py-2">{text[lan][13]}</p>
            <p className="py-2">{text[lan][14]}</p>
            <p className="py-2">{text[lan][15]}</p>
            <p className="py-2">{text[lan][16]}</p>
          </div>
          <div className="grid grid-cols-2 justify-evenly items-center ">
            <p className="py-4 px-2 duration-300 flex flex-col justify-center items-center hover:-translate-y-3">
              <FaHtml5 className="text-6xl text-[#e65027]" />
              HTML5
            </p>
            <p className="py-4 px-2 duration-300 flex flex-col justify-center items-center hover:-translate-y-3">
              <FaCss3Alt className="text-6xl text-[#1572b6]" />
              CSS3
            </p>
            <p className="py-4 px-2 duration-300 flex flex-col justify-center items-center hover:-translate-y-3">
              <IoLogoJavascript className="text-6xl text-[#efd81d]" />
              Javascript(E6+)
            </p>
            <p className="py-4 px-2 duration-300 flex flex-col justify-center items-center hover:-translate-y-3">
              <FaReact className="text-6xl text-[#5ed3f3]" />
              React
            </p>
            <p className="pt-4 px-2 duration-300 flex flex-col justify-center items-center hover:-translate-y-3">
              <SiTailwindcss className="text-6xl text-[#38bdf8]" />
              TailwindCSS
            </p>
            <p className="py-4 px-2 duration-300 flex flex-col justify-center items-center hover:-translate-y-3">
              <FaGitAlt className="text-6xl text-[#e74423]" />
              Git
            </p>

            <p className="py-4 px-2 duration-300 flex flex-col justify-center items-center hover:-translate-y-3">
              <FaPhp className="text-6xl text-[#4d588e]" />
              PHP
            </p>
            <p className="py-4 px-2 duration-300 flex flex-col justify-center items-center hover:-translate-y-3">
              <FaWordpress className="text-6xl text-[#207196]" />
              Wordpress
            </p>
          </div>
        </div>
      </article>
    </section>
  )
}
export default About
