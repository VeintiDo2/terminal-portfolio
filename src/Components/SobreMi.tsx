import ModelViewer from "./3D/ModelViewer";
import { useEffect, useState } from "react";
import { Icons } from "../Components/Data/IconsComponent";
import InfoItem from "./Reusable/InfoItem";
import ImageComponent from "./Data/Images";
import TerminalButton from "./Buttons";
import { useUISounds } from "./Hook/UseUISounds";

import avatar from "../assets/images/Havoc 002 - copia.png";

type SpanProps = {
    title: string;
    description: string;
}

const CustomParagraph = ({ title, description }: SpanProps) => {
    return (
        <p>{title}: <span className="text-white">{description}</span></p>
    );
}

const SobreMi = ({ hasShownRef, soundActivated }: { hasShownRef: React.MutableRefObject<boolean>; soundActivated: boolean }) => {

    const [canShowCanvas, setCanShowCanvas] = useState<boolean>(false);
    const { playClick, playHover } = useUISounds();

    useEffect(() => {
        // Si el usuario ya ha entrado, evitamos el retraso a la hora de mostrar el modelo.
        if (hasShownRef.current) {
            setCanShowCanvas(true);
            return;
        }

        hasShownRef.current = true;

        // Timeout para esperar a que se monte el componente y evitar tamaños incorrectos del canvas.
        setTimeout(() => {
            setCanShowCanvas(true);
        }, 3000);

    }, []);

    return (
        <div className="flex flex-col w-full h-full p-3 gap-3 overflow-auto">

            {/* Información */}

            <article className="flex flex-col md:flex-row lg:flex-row gap-3">

                <aside className="flex flex-row md:flex-col lg:flex-col items-center md:justify-between w-full md:w-60 lg:w-80 gap-3 text-[10px] md:text-sm lg:text-md border p-2">
                    <img src={avatar} alt="perfil images"
                        className="w-30 md:w-full h-auto object-cover" />
                    <div className="flex flex-col w-full gap-1">
                        <span className="border-b border-dashed mb-2">{"> "} Perfil de Usuario</span>
                        <CustomParagraph title="Nombre" description="Jason" />
                        <CustomParagraph title="Rol" description="Estudiante de ingenieria de sistemas" />
                        <CustomParagraph title="Enfoque" description="FrontEnd" />
                        <CustomParagraph title="Estado" description="En busca de oportunidades laborales" />
                    </div>
                </aside>

                <div className="flex flex-col w-full gap-3">
                    <div className="flex flex-col w-full border p-2 text-[10px] md:text-sm lg:text-md">
                        <span>{"> "} Descripción:</span>
                        <p>
                            Desarrollador web con <span className="text-white">2 años</span> de experiencia creando aplicaciones independientes y colaborando en proyectos universitarios,
                            logrando soluciones funcionales y de buen rendimiento. Ágil en el uso de <span className="text-white">React.js</span>, <span className="text-white">TypeScript</span>, <span className="text-white">Node.js</span>, <span className="text-white">Express.js</span>, <span className="text-white">SQL Server</span> y <span className="text-white">GitHub</span>, con experiencia en integración de bases de datos y diseño de interfaces intuitivas.
                        </p>
                    </div>
                    <div className="flex flex-row w-full gap-3 text-xs md:text-sm lg:text-md">
                        <div className="flex flex-col justify-evenly border p-2 w-full">
                            <span className="text-xs md:text-sm lg:text-lg pb-2">{"> "} Habilidades Principales:</span>
                            <div className="grid grid-cols-4 gap-1 justify-items-center">
                                <ImageComponent imageName="HTML" />
                                <ImageComponent imageName="CSS" />
                                <ImageComponent imageName="JavaScript" />
                                <ImageComponent imageName="React" />
                            </div>
                            <div className="grid grid-cols-4 gap-1 justify-items-center">
                                <ImageComponent imageName="TypeScript" />
                                <ImageComponent imageName="SQL" />
                                <ImageComponent imageName="TailWind" />
                                <ImageComponent imageName="VSCode" />
                            </div>
                        </div>
                        <div className="relative w-full max-w-60 border overflow-hidden aspect-square mx-auto">
                            <div className="absolute top-1 right-1 w-7 animate-pulse">{Icons.warning}</div>
                            {canShowCanvas && <ModelViewer url="src\assets\3DModels\Craneo.glb" canAutoRotate={true} canZoom={false} canRotate={false} canPan={false} isWireframeVisible={true} canShowCanvas={canShowCanvas} />}
                        </div>
                    </div>

                    <div className="hazard-tape size-full flex items-center justify-center text-xl animate-pulse bg-terminalGreen">
                        <span className="bg-terminalBG">
                            [ No Signal ]
                        </span>
                    </div>
                </div>

            </article>

            {/* Habilidades */}

            <article
                className="
                grid
                grid-cols-1
                lg:grid-cols-3
                gap-3
                h-full
                text-xs md:text-sm
                "
            >

                <article className="flex flex-col p-3 justify-center border w-full">
                    <span>{">"} Contactos.exe</span>
                    <div className="grid grid-cols-2 grid-rows-2 pt-2 size-full">

                        <div className="col-span-2 flex">
                            <TerminalButton label="jasonbrenes22@gmail.com" icon="Email" adaptativeSize={true} soundActivated={soundActivated} sound={{ playHover: () => playHover() }} />

                        </div>

                        <TerminalButton label="GitHub" icon="GitHub" href="https://github.com/VeintiDo2" adaptativeSize={true} soundActivated={soundActivated} sound={{ playHover: () => playHover(), playClick: () => playClick() }} />

                        <TerminalButton label="Linkedin" icon="Linkedin" href="https://www.linkedin.com/in/jasonbrenesp%C3%A9rez/" adaptativeSize={true} soundActivated={soundActivated} sound={{ playHover: () => playHover(), playClick: () => playClick() }} />

                    </div>
                </article>

                <div className="flex flex-col gap-3 border p-3 lg:col-span-2">

                    <section className="flex flex-col gap-1">
                        <span>{">"} Habilidades_Blandas.exe</span>
                        <ul className="flex flex-wrap gap-2 mt-1">

                            <InfoItem label="Skill 1" value="[Trabajo en equipo]" />
                            <InfoItem label="Skill 2" value="[Adaptabilidad]" />
                            <InfoItem label="Skill 3" value="[Aprendizaje rápido]" />
                            <InfoItem label="Skill 4" value="[Comunicación]" />
                            <InfoItem label="Skill 5" value="[Creatividad]" />
                            <InfoItem label="Skill 6" value="[Resolución de problemas]" />
                            <InfoItem label="Skill 7" value="[Colaboración]" />
                        </ul>
                    </section>

                    <section className="flex flex-col gap-1">
                        <span>{">"} Habilidades_Técnicas.exe</span>
                        <ul className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-2">
                            <InfoItem label="Semántica" value="[HTML]" />
                            <InfoItem label="Diseño" value="[CSS]" />
                            <InfoItem label="Programación" value="[JavaScript]" />
                            <InfoItem label="Programación" value="[TypeScript]" />
                            <InfoItem label="Programación" value="[React.js]" />
                            <InfoItem label="Diseño" value="[TailwindCSS]" />
                            <InfoItem label="Base de datos" value="[SQL Server]" />
                            <InfoItem label="Programación" value="[Three.JS]" />
                            <InfoItem label="Programación" value="[Node.js]" />
                            <InfoItem label="Editor" value="[Visual Studio Code]" />
                            <InfoItem label="Versiones" value="[Git]" />
                        </ul>
                    </section>

                </div>

            </article>
        </div>
    )
}

export default SobreMi;