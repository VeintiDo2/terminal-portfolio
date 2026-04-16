import { useEffect, useState, useRef } from "react";
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

  const hasShownSobreMiModel = useRef<boolean>(false); //Para controlar las animaciones y que solo se ejecuten una vez por sección.
  const [bootMessages, setBootMessages] = useState<string[]>([]);
  const allMessages = ["Booting...", "Loading UI...", "Syncing Modules...", "> Ready_"];

  useEffect(() => {
    allMessages.forEach((message, index) => {
      setTimeout(() => {
        setBootMessages(prev => [...prev, message]);
      }, index * 300);
    });
    setTimeout(() => {
      setSystemBooted(true);
    }, 2000);
  }, []);

  return (
    < main className="crt crtGlowText relative h-screen w-screen bg-terminalBG font-mono text-terminalGreen px-2 py-8 md:p-8" >

      {/* Mensajes de Boot */}
      <article className={`absolute ${systemBooted ? "hidden" : "flex"} flex-col gap-3.5`}>
        {bootMessages.map((message, index) => (
          <span className="animate-pulse text-xl" key={index}>{message}</span>
        ))}
      </article>

      <div className={`${systemBooted ? " animate-systemBoot" : "hidden"} flex flex-row w-full h-full relative border`}>

        {/* Botón de activación de sonido */}
        <TerminalButton label="Clic para activar el sonido del sistema" icon="Audio"
          variant="console" touchToHiden={true} absolutePosition={true}
          onClick={() => setSoundActivated(true)} soundActivated={soundActivated}
          sound={{ playClick: () => playClick(), playHover: () => playHover() }} />

        {/* Barra lateral */}
        <aside className="border-r flex flex-col ">
          <section className="flex flex-col items-center">

            <TerminalButton label="Sobre mi" icon="User" onClick={() => setActiveSection("sobreMi")} active={activeSection === "sobreMi"} soundActivated={soundActivated} sound={{ playClick: () => playClick(), playHover: () => playHover() }}></TerminalButton>
            <TerminalButton label="Proyectos" icon="Projects" onClick={() => setActiveSection("proyectos")} active={activeSection === "proyectos"} soundActivated={soundActivated} sound={{ playClick: () => playClick(), playHover: () => playHover() }}></TerminalButton>
            <TerminalButton label="Contacto" icon="Contact" onClick={() => setActiveSection("contacto")} active={activeSection === "contacto"} soundActivated={soundActivated} sound={{ playClick: () => playClick(), playHover: () => playHover() }}></TerminalButton>

          </section>

          <div className="flex flex-col flex-1 justify-end">
            <TerminalButton label="Cambiar idioma" icon="Language" onClick={() => setLanguageModelActive(true)} soundActivated={soundActivated} sound={{ playClick: () => playClick(), playHover: () => playHover() }}></TerminalButton>
          </div>
        </aside>

        <section className={"flex 2xl:items-center 2xl:justify-center w-full"}>

          {/* Contenedor principal */}
          <div className="flex 2xl:items-center 2xl:justify-center overflow-auto w-full h-full  xl:max-h-250 max-w-600">
            {activeSection === "sobreMi" && <SobreMi hasShownRef={hasShownSobreMiModel} soundActivated={soundActivated} />}
            {activeSection === "proyectos" && <Proyectos soundActivated={soundActivated} />}
            {activeSection === "contacto" && <Contacto />}
          </div>

          {/* Label de la version del sistema */}
          <span className="absolute -bottom-8 right-0 cursor-default">V.1.0.0</span>

        </section >
      </div>

      {languageModelActive && <LanguageModal setLanguageModelActive={setLanguageModelActive} soundActivated={soundActivated} />}
    </main >
  );
}

export default App;
