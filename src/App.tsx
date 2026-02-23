import { useEffect, useState } from "react";
import { useUISounds } from "./Components/Hook/UseUISounds";
import LanguageModal from "./Components/LanguageModal";
import TerminalButton from "./Components/Buttons";
import SobreMi from "./Components/SobreMi";
import Proyectos from "./Components/Proyectos";
import Contacto from "./Components/Contacto";

type Section = "sobreMi" | "proyectos" | "contacto";

const App = () => {

  const [activeSection, setActiveSection] = useState<Section>("sobreMi");
  const [soundActivated, setSoundActivated] = useState<boolean>(false);
  const [languageModelActive, setLanguageModelActive] = useState<boolean>(false);
  const [systemBooted, setSystemBooted] = useState<boolean>(false);

  const { playClick, playHover } = useUISounds();

  const [bootMessages, setBootMessages] = useState<string[]>([]);
  const allMessages = ["Booting...", "Loading UI...", "Syncing Modules...", "> Ready_"];

  useEffect(() => {
    allMessages.forEach((message, index) => {
      setTimeout(() => {
        setBootMessages(prev => [...prev, message]);
      }, index * 300);
    });
    setTimeout(() => {
      console.log("Sistema iniciado");
      setSystemBooted(true);
    }, 2000);
  }, []);

  return (
    < main className="crt relative h-screen bg-terminalBG font-mono text-terminalGreen p-10" >

      {/* Mensajes de Boot */}
      <article className={`absolute ${systemBooted ? "hidden" : "flex"} flex-col gap-3.5`}>
        {bootMessages.map((message, index) => (
          <span className="animate-pulse text-xl" key={index}>{message}</span>
        ))}
      </article>

      <section className={` ${systemBooted ? "animate-systemBoot" : "hidden"} relative border shadow-xs shadow-terminalGreen h-full`}>

        <TerminalButton label="Clic para activar el sonido del sistema" icon="Audio" variant="console" touchToHiden={true} absolutePosition={true} size="small" onClick={() => setSoundActivated(true)} soundActivated={soundActivated} sound={{ playClick: () => playClick(), playHover: () => playHover() }} />

        {/* Barra lateral */}
        <aside className="border-r flex flex-col">
          <section className="flex flex-col items-center">

            <TerminalButton label="Sobre mi" icon="User" size="large" onClick={() => setActiveSection("sobreMi")} active={activeSection === "sobreMi"} soundActivated={soundActivated} sound={{ playClick: () => playClick(), playHover: () => playHover() }}></TerminalButton>
            <TerminalButton label="Proyectos" icon="Projects" size="large" onClick={() => setActiveSection("proyectos")} active={activeSection === "proyectos"} soundActivated={soundActivated} sound={{ playClick: () => playClick(), playHover: () => playHover() }}></TerminalButton>
            <TerminalButton label="Contacto" icon="Contact" size="large" onClick={() => setActiveSection("contacto")} active={activeSection === "contacto"} soundActivated={soundActivated} sound={{ playClick: () => playClick(), playHover: () => playHover() }}></TerminalButton>

          </section>

          <div className="flex flex-col flex-1 justify-end">
            <TerminalButton label="Cambiar idioma" icon="Language" size="large" onClick={() => setLanguageModelActive(true)} soundActivated={soundActivated} sound={{ playClick: () => playClick(), playHover: () => playHover() }}></TerminalButton>
          </div>
        </aside>

        {/* Contenedor principal */}
        <div className="flex items-center justify-center flex-1">

          {activeSection === "sobreMi" && <SobreMi />}
          {activeSection === "proyectos" && <Proyectos />}
          {activeSection === "contacto" && <Contacto />}
        </div>

        {/* Label de la version del sistema */}
        <span className="absolute -bottom-8 right-0 cursor-default">V.1.0.0</span>

      </section >

      {languageModelActive && <LanguageModal setLanguageModelActive={setLanguageModelActive} soundActivated={soundActivated} />}
    </main >
  );
}

export default App;
