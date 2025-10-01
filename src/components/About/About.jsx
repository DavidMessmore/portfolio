import myPhoto from './../../assets/myImage.jpeg'
import {
  FaCode,
  FaWordpress,
  FaCss3Alt,
  FaReact,
  FaGitAlt,
  FaArrowDown,
} from 'react-icons/fa'
import myCVEng from './../../assets/CurriculumDavidMessmore.pdf'
import myCVPort from './../../assets/CurrículoDavidMessmore.pdf'
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
    '💻 Sou desenvolvedor front-end com experiência em ',
    'React, JavaScript (ES6+), HTML5, CSS3 e Tailwind CSS,',
    ' além de trabalhar com ',
    'PHP e WordPress',
    ' para criação de sites completos e personalizados. Minha formação em ',
    'Ciência e Tecnologia (Bacharelado)',
    ' e os estudos atuais em ',
    'Ciência da Computação',
    ' também me deram noções de ',
    'back-end com Python e PHP, bancos de dados relacionais (MySQL)',
    ' e uma visão ampla do ciclo de desenvolvimento de software.',
    '📚 Tenho facilidade para aprender novas tecnologias, gosto de colaborar em equipe e sou movido por desafios. Acredito que a tecnologia é uma ferramenta poderosa para transformar vidas e negócios, e quero contribuir com ',
    'soluções criativas, funcionais e centradas no usuário.',
    '🎯 Busco sempre escrever ',
    'código limpo, acessível e eficiente',
    ', com atenção aos detalhes e foco na melhor experiência para o usuário.',
    'Baixar Curriculo',
    'Habilidades e Tecnologias',
    '✅ Front-end: React, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS',
    '✅ Back-end (noções): Python e PHP',
    '✅ Banco de Dados: MySQL (relacionais)',
    '✅ API’s: Consumo e integração de REST APIs',
    '✅ Ferramentas: Git, GitHub, Netlify, WordPress',
    '✅ Princípios: Lógica de programação, estrutura de dados e boas práticas de código',
    '✅ Outros: Noções de UI/UX e deploy de projetos',
    '🤝 Vamos transformar suas ideias em experiências digitais modernas, responsivas e elegantes!✨',
  ],
  eng: [
    'About Me',
    '💻 I am a front-end developer with experience in ',
    'React, JavaScript (ES6+), HTML5, CSS3, and Tailwind CSS,',
    ' as well as working with ',
    'PHP and WordPress',
    ' to build complete and customized websites. My academic background in ',
    'Science and Technology (Bachelor’s Degree)',
    ' and my current studies in ',
    'Computer Science',
    ' have also provided me with knowledge in ',
    'back-end development with Python and PHP, relational databases (MySQL),',
    ' and a broad understanding of the software development lifecycle.',
    '📚 I am eager to learn new technologies, enjoy collaborating in teams, and am driven by challenges. I believe technology is a powerful tool to transform lives and businesses, and I want to contribute with ',
    'creative, functional, and user-centered solutions.',
    '🎯 I always aim to write ',
    'clean, accessible, and efficient code',
    ', paying attention to detail and focusing on delivering the best user experience.',
    'Download Resume',
    'Skills and Technologies',
    '✅ Front-end: React, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS',
    '✅ Back-end (basic knowledge): Python and PHP',
    '✅ Databases: MySQL (relational)',
    '✅ APIs: Consumption and integration of REST APIs',
    '✅ Tools: Git, GitHub, Netlify, WordPress',
    '✅ Principles: Programming logic, data structures, and coding best practices',
    '✅ Others: Basic knowledge of UI/UX and project deployment',
    '🤝 Let’s turn your ideas into modern, responsive, and elegant digital experiences!✨',
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
        <div className="max-w-3xl p-8 rounded-lg text-justify">
          <p className="pt-10">
            {text[lan][1]}
            <span className="font-bold text-blue-800">{text[lan][2]}</span>
            {text[lan][3]}
            <span className="font-bold text-blue-800">{text[lan][4]}</span>
            {text[lan][5]}
            <span className="font-bold text-blue-800">{text[lan][6]}</span>
            {text[lan][7]}
            <span className="font-bold text-blue-800">{text[lan][8]}</span>
            {text[lan][9]}
            <span className="font-bold text-blue-800">{text[lan][10]}</span>
            {text[lan][11]}
          </p>
          <p className="py-4">
            {text[lan][12]}
            <span className="font-bold text-blue-800">{text[lan][13]}</span>
          </p>
          <p className="pb-4">
            {text[lan][14]}
            <span className="font-bold text-blue-800">{text[lan][15]}</span>
            {text[lan][16]}
          </p>

          <a
            href={cvs[lan]}
            download="DavidMessmoreCV"
            className="bg-blue-800 text-white px-4 py-2 rounded-md mt-10 block w-fit hover:bg-blue-600 duration-300"
          >
            <FaArrowDown className="inline-block align-middle " />{' '}
            {text[lan][17]}
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
          <FaCode className="inline-block" /> {text[lan][18]}
        </h2>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-10 sm:px-10">
          <div className="w-3/4 sm:w-1/2 ">
            <p className="py-1">{text[lan][19]}</p>
            <p className="py-1">{text[lan][20]}</p>
            <p className="py-1">{text[lan][21]}</p>
            <p className="py-1">{text[lan][22]}</p>
            <p className="py-1">{text[lan][23]}</p>
            <p className="py-1">{text[lan][24]}</p>
            <p className="py-1">{text[lan][25]}</p>
            <p className="py-1">{text[lan][26]}</p>
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
