import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Navbar from "./components/navbar/Navbar";
import { useState } from "react";

function App() {
  const [lan, setLan] = useState("eng");

  return (
    <div className="overflow-x-hidden">
      <Navbar lan={lan} setLan={setLan} />
      <Hero lan={lan} />
      <About lan={lan} />
      <Projects lan={lan} />
      <Contact lan={lan} />
    </div>
  );
}

export default App;
