import { useEffect, useRef, useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaGlobe,
  FaBars,
} from "react-icons/fa6";
import { SiUpwork } from "react-icons/si";

const text = {
  port: ["Início", "Sobre", "Projetos", "Contato", "Inglês", "Português"],
  eng: ["Home", "About", "Projects", "Get in Contact", "English", "Portuguese"],
};

const Navbar = ({ lan, setLan }) => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [showMobileNav, setShowMobileNav] = useState(false);

  const dropRef = useRef(null);

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  });

  const handleOutsideClick = (e) => {
    if (dropRef.current && !dropRef.current.contains(e.target)) {
      setShowMobileNav(false);
    }
  };

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 60) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleButtonEng = () => {
    setLan("eng");
    setOpen(false);
  };
  const handleButtonPort = () => {
    setLan("port");
    setOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 w-screen text-white text-lg sm:text-2xl z-10 duration-200 ${
        scrolled ? " bg-zinc-800" : ""
      }`}
    >
      <div className="hidden lg:flex flex-row justify-center gap-10 items-center py-3">
        <a
          href="#home"
          className="py-2 px-4 hover:bg-blue-800 rounded-lg duration-200"
        >
          {text[lan][0]}
        </a>

        <a
          href="#about"
          className="py-2 px-4 hover:bg-blue-800 rounded-lg duration-200"
        >
          {text[lan][1]}
        </a>

        <a
          href="#projects"
          className="py-2 px-4 hover:bg-blue-800 rounded-lg duration-200"
        >
          {text[lan][2]}
        </a>
        <a
          href="https://github.com/DavidMessmore"
          target="_blank"
          className="hover:text-zinc-500 duration-200 text-3xl"
        >
          <FaGithub className="inline-block align-top" />
        </a>
        <a
          href="https://www.linkedin.com/in/david-m-50b230138/"
          target="_blank"
          className="hover:text-zinc-500 duration-200 text-3xl"
        >
          <FaLinkedin className="inline-block align-top" />
        </a>
        <a
          href="https://www.upwork.com/freelancers/~01c3ed148c653a6893"
          target="_blank"
          className="hover:text-zinc-500 duration-200 text-3xl"
        >
          <SiUpwork className="inline-block align-top" />
        </a>
        <a
          href="https://www.instagram.com/david_messmore/"
          target="_blank"
          className="hover:text-zinc-500 duration-200 text-3xl"
        >
          <FaInstagram className="inline-block align-top" />
        </a>

        <div className="relative ">
          <button
            onClick={() => setOpen((pv) => !pv)}
            className="hover:text-zinc-500 duration-200 "
          >
            <FaGlobe className="inline-block align-top" />
          </button>
          {open && (
            <ul className="flex flex-col gap-2 p-2 rounded-lg bg-white text-black shadow-xl absolute top-[120%] left-[50%] ">
              <li>
                <button
                  onClick={handleButtonEng}
                  className="px-4 py-2 w-full rounded hover:bg-blue-500 duration-200"
                >
                  {text[lan][4]}
                </button>
              </li>
              <li>
                <button
                  onClick={handleButtonPort}
                  className="px-4 py-2 w-full rounded hover:bg-blue-500 duration-200"
                >
                  {text[lan][5]}
                </button>
              </li>
            </ul>
          )}
        </div>

        <a
          href="#contact"
          className="bg-blue-800 rounded-lg h-fit py-2 px-4 hover:bg-blue-600 duration-200"
        >
          {text[lan][3]}
        </a>
      </div>
      <div className="block lg:hidden w-full py-5 px-10" ref={dropRef}>
        <div className="flex justify-end">
          <button
            onClick={() => setShowMobileNav(!showMobileNav)}
            className="text-5xl hover:text-zinc-500 duration-200"
          >
            <FaBars />
          </button>
        </div>
        {showMobileNav && (
          <div className="flex flex-col justify-center items-center gap-4 pt-5">
            <a
              href="#home"
              className="py-2 px-4 hover:bg-blue-800 rounded-lg duration-200"
            >
              {text[lan][0]}
            </a>

            <a
              href="#about"
              className="py-2 px-4 hover:bg-blue-800 rounded-lg duration-200"
            >
              {text[lan][1]}
            </a>

            <a
              href="#projects"
              className="py-2 px-4 hover:bg-blue-800 rounded-lg duration-200"
            >
              {text[lan][2]}
            </a>
            <div className="flex flex-row gap-4">
              <a
                href="https://github.com/DavidMessmore"
                target="_blank"
                className="hover:text-zinc-500 duration-200 text-3xl"
              >
                <FaGithub className="inline-block align-top" />
              </a>
              <a href="#" className="hover:text-zinc-500 duration-200 text-3xl">
                <FaLinkedin className="inline-block align-top" />
              </a>
              <a href="#" className="hover:text-zinc-500 duration-200 text-3xl">
                <SiUpwork className="inline-block align-top" />
              </a>
              <a href="#" className="hover:text-zinc-500 duration-200 text-3xl">
                <FaInstagram className="inline-block align-top" />
              </a>
              <div className="relative ">
                <button
                  onClick={() => setOpen((pv) => !pv)}
                  className="hover:text-zinc-500 duration-200 text-3xl"
                >
                  <FaGlobe className="inline-block align-top" />
                </button>
                {open && (
                  <ul className="flex flex-col gap-2 p-2 rounded-lg bg-white text-black shadow-xl absolute top-[120%] right-[50%] ">
                    <li>
                      <button
                        onClick={handleButtonEng}
                        className="px-4 py-2 w-full rounded hover:bg-blue-500 duration-200"
                      >
                        {text[lan][4]}
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={handleButtonPort}
                        className="px-4 py-2 w-full rounded hover:bg-blue-500 duration-200"
                      >
                        {text[lan][5]}
                      </button>
                    </li>
                  </ul>
                )}
              </div>
            </div>

            <a
              href="#contact"
              className="bg-blue-800 rounded-lg h-fit py-2 px-4 hover:bg-blue-600 duration-200"
            >
              {text[lan][3]}
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};
export default Navbar;
