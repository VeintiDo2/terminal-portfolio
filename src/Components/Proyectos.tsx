import ImageComponent from "./Data/Images";
import { useEffect, useState } from "react";
import TerminalButton from "./Buttons";
import { useUISounds } from "./Hook/UseUISounds";

const Proyectos = ({ soundActivated }: { soundActivated: boolean }) => {

    const [projectNumber, setProjectNumber] = useState<number>(0)
    const [showNoise, setShowNoise] = useState<boolean>(true)

    const { playClick, playHover } = useUISounds();

    const [project] = useState([
        {
            nombre: "Página Escolar",
            description: "Sitio web informativo para una escuela de una comunidad.",
            image: "PlaceHolder.jpg",
            icons: [
                <ImageComponent imageName="HTML" />,
                <ImageComponent imageName="CSS" />,
                <ImageComponent imageName="React" />,
                <ImageComponent imageName="VSCode" />,
                <ImageComponent imageName="JavaScript" />,
            ]
        },
        {
            nombre: "Sistema de requisiciones",
            description: "Sistema de gestión de requisiciones para una empresa, con funcionalidades de seguimiento y aprobación.",
            image: "PlaceHolder2.png",
            icons: [
                <ImageComponent imageName="HTML" />,
                <ImageComponent imageName="CSS" />,
                <ImageComponent imageName="React" />,
                <ImageComponent imageName="VSCode" />,
                <ImageComponent imageName="JavaScript" />,
                <ImageComponent imageName="bootStrap" />,
                <ImageComponent imageName="SQL" />,
                <ImageComponent imageName="nodeJsLogo" />,
            ]
        },
        {
            nombre: "Sistema de Gestión",
            description: "Sistema de gestión empresarial para una pequeña empresa, con módulos de inventario, ventas y finanzas.",
            image: "PlaceHolder4.png",
            icons: [
                <ImageComponent imageName="HTML" />,
                <ImageComponent imageName="CSS" />,
                <ImageComponent imageName="React" />,
                <ImageComponent imageName="VSCode" />,
                <ImageComponent imageName="JavaScript" />,
                <ImageComponent imageName="SQL" />,
                <ImageComponent imageName="nodeJsLogo" />,
            ]
        },
        {
            nombre: "E-Commerce 3D",
            description: "Proyecto de e-commerce con una experiencia de compra inmersiva en 3D, utilizando tecnologías como React Three Fiber para crear un entorno virtual donde los usuarios pueden explorar productos en 3D y realizar compras de manera interactiva.",
            image: "PlaceHolder3.jpg",
            icons: [
                <ImageComponent imageName="HTML" />,
                <ImageComponent imageName="CSS" />,
                <ImageComponent imageName="React" />,
                <ImageComponent imageName="VSCode" />,
                <ImageComponent imageName="TypeScript" />,
                <ImageComponent imageName="SQL" />,
                <ImageComponent imageName="nodeJsLogo" />,
                <ImageComponent imageName="TailWind" />,
            ]
        },
    ]);

    const ProjectButton = ({ label, projectNumber }: { label: string, projectNumber: number }) => {
        return (
            <li
                onClick={() => setProjectNumber(projectNumber)}
                className="group relative flex flex-col items-left justify-center px-1 h-10 md:h-12 border cursor-pointer hover:bg-terminalGreen duration-100"
            >
                <span className="text-xs sm:text-sm inline-block overflow-hidden whitespace-nowrap">
                    [ {label} ]
                </span>
                <div className="absolute text-sm sm:text-lg whitespace-nowrap overflow-hidden text-terminalBG opacity-0 group-hover:opacity-100 group-hover:animate-typing">
                    {"> "}[ EJECUTAR ]
                </div>
            </li>
        )
    }

    useEffect(() => {
        setShowNoise(true)
        const timer = setTimeout(() => setShowNoise(false), 500)
        return () => clearTimeout(timer)
    }, [projectNumber])

    return (
        <div className="flex flex-col md:flex-row w-full h-full min-h-0 p-3 gap-3">

            {/* Sidebar */}
            <aside className="w-full md:w-56 lg:w-64 shrink-0 border p-2">
                <h1 className="text-xl md:text-2xl lg:text-3xl">
                    Proyectos
                </h1>
                <nav aria-label="Lista de proyectos">
                    <ul className="grid grid-cols-2 md:flex md:flex-col gap-2 md:gap-3 mt-3 md:mt-4">
                        <ProjectButton label="PÁGINA ESCOLAR" projectNumber={0} />
                        <ProjectButton label="SISTEMA DE REQUISICIONES" projectNumber={1} />
                        <ProjectButton label="SISTEMA DE GESTIÓN" projectNumber={2} />
                        <ProjectButton label="E-COMMERCE 3D" projectNumber={3} />
                    </ul>
                </nav>
            </aside>

            {/* Contenido principal */}
            <section className="flex flex-col w-full h-full gap-3 overflow-auto">

                {/* Preview */}
                <figure className={`relative w-full overflow-hidden shrink-0 ${showNoise ? "shadow-[0_0_12px_#00ff66]" : "duration-1000 shadow-none"}`}>
                    <img
                        src={`src/assets/images/${project[projectNumber].image}`}
                        alt="Vista previa del proyecto seleccionado"
                        className="w-full aspect-video max-h-78 md:max-h-70 lg:max-h-80 2xl:max-h-90 object-cover sepia-75 hover:sepia-0 duration-300"
                    />
                    <div className={`absolute ${showNoise ? "opacity-100" : "duration-1000 opacity-0"} opacity-0 sepia -inset-500 z-50 pointer-events-none animate-noise noise-bg`} />
                    <figcaption className="absolute w-full bottom-0 left-0 text-base md:text-xl lg:text-3xl bg-terminalBG/75 px-2 py-1">
                        {project[projectNumber].nombre}
                    </figcaption>
                </figure>

                {/* Descripción */}
                <article className="w-full min-h-35 max-h-80 border p-2 text-xs sm:text-sm md:text-base">
                    <h3 className="mb-1 md:mb-2">{">"} Descripción.txt</h3>
                    <p>{project[projectNumber].description}</p>
                </article>

                {/* Hazard tape */}
                <div className="hazard-tape w-full min-h-8 md:min-h-8 text-center flex items-center justify-center text-base md:text-xl animate-pulse bg-terminalGreen shrink-0">
                    <span className="bg-terminalBG">[ Reconectando... ]</span>
                </div>

                {/* Herramientas + Links */}
                <div className="flex flex-col sm:flex-row w-full h-full gap-3">

                    {/* Herramientas */}
                    <article className="flex flex-col gap-2 p-2 border w-full h-full">
                        <span className="text-xs sm:text-sm">[ Herramientas usadas ]</span>
                        <div className="flex h-full items-center justify-center">
                            <div className="grid grid-cols-5 justify-items-center gap-2 ">
                                {project[projectNumber].icons.map((icon, i) => (
                                    <span key={i}>{icon}</span>
                                ))}
                            </div>
                        </div>
                    </article>

                    {/* GitHub / Sitio Web */}
                    <article className="flex flex-row border w-full h-full sm:w-auto sm:min-w-80">
                        <TerminalButton label="GitHub" icon="GitHub" href="https://www.linkedin.com/in/jasonbrenesp%C3%A9rez/" adaptativeSize={true} soundActivated={soundActivated} sound={{ playHover: () => playHover(), playClick: () => playClick() }} />

                        <TerminalButton label="Sitio Web" icon="Web" href="https://www.linkedin.com/in/jasonbrenesp%C3%A9rez/" adaptativeSize={true} soundActivated={soundActivated} sound={{ playHover: () => playHover(), playClick: () => playClick() }} />
                    </article>

                </div>
            </section>
        </div>
    )
}

export default Proyectos;