import ModelViewer from "./3D/ModelViewer";
import { useEffect, useState } from "react";
import { Icons } from "../Components/Data/IconsComponent";

//Imagenes
import avatar from "../assets/images/Havoc 002 - copia.png";
import htmlLogo from "../assets/images/Logos/html-5-svgrepo-com.svg";
import cssLogo from "../assets/images/Logos/css3-svgrepo-com.svg";
import javascriptLogo from "../assets/images/Logos/javascript-svgrepo-com.svg";
import reactLogo from "../assets/images/Logos/react-svgrepo-com.svg";
import typescriptLogo from "../assets/images/Logos/typescript-icon-svgrepo-com.svg";
import sqlLogo from "../assets/images/Logos/microsoft-sql-server-logo-svgrepo-com.svg";
import vscodeLogo from "../assets/images/Logos/visual-studio-code-svgrepo-com.svg";
import tailwindLogo from "../assets/images/Logos/tailwind-svgrepo-com.svg";

type ContactItemProps = {
    icon?: React.ReactNode
    label: string
    value: string
    url?: string
}

const InfoItem = ({ icon, label, value, url }: ContactItemProps) => {
    const content = (
        <div className="group min-w-0 flex items-center gap-2 cursor-pointer hover:translate-x-2 transition-all duration-100">

            <span className="opacity-0 group-hover:opacity-100 transition-opacity">{">"}</span>

            <span className="text-3xl opacity-70 group-hover:opacity-100 group-hover:drop-shadow-[0_0_4px_rgba(34,197,94,0.5)]">
                {icon}
            </span>

            <div className="flex w-full flex-col leading-tight">
                <span className="text-[10px] opacity-50 group-hover:opacity-100 group-hover:drop-shadow-[0_0_4px_rgba(34,197,94,0.5)]">
                    {label}
                </span>

                <span className="break-all text-white group-hover:text-terminalGreen group-hover:drop-shadow-[0_0_4px_rgba(34,197,94,0.5)] ">
                    {value}
                </span>
            </div>

        </div>
    )

    if (url) {
        return (
            <a href={url} target="_blank" className="block">
                {content}
            </a>
        )
    }

    return content
}

type SpanProps = {
    title: string;
    description: string;
}

const CustomParagraph = ({ title, description }: SpanProps) => {
    return (
        <p>{title}: <span className="text-white">{description}</span></p>
    );
}

const ImageComponent = ({ url }: { url: string }) => {
    return (
        <img
            className="w-full max-w-15 md:max-w-20 lg:max-w-20 h-auto sepia-75 border border-transparent hover:drop-shadow-[0_0_4px_rgba(34,197,94,0.5)] hover:scale-110 duration-100 p-1"
            src={url}
            alt="Icon"
        />
    )
}

const SobreMi = ({ hasShownRef }: { hasShownRef: React.MutableRefObject<boolean> }) => {

    const [canShowCanvas, setCanShowCanvas] = useState<boolean>(false);

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
        <div className="flex flex-col w-full h-full p-5 gap-5 overflow-auto">

            {/* Información */}

            <article className="flex flex-col md:flex-row lg:flex-row gap-5">

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

                <div className="flex flex-col w-full gap-5">
                    <div className="flex flex-col w-full border p-2 text-[10px] md:text-sm lg:text-md">
                        <span>{"> "} Descripción:</span>
                        <p>
                            Desarrollador web con <span className="text-white">2 años</span> de experiencia creando aplicaciones independientes y colaborando en proyectos universitarios,
                            logrando soluciones funcionales y de buen rendimiento. Ágil en el uso de <span className="text-white">React.js</span>, <span className="text-white">TypeScript</span>, <span className="text-white">Node.js</span>, <span className="text-white">Express.js</span>, <span className="text-white">SQL Server</span> y <span className="text-white">GitHub</span>, con experiencia en integración de bases de datos y diseño de interfaces intuitivas.
                        </p>
                    </div>
                    <div className="flex flex-row w-full gap-5 text-xs md:text-sm lg:text-md">
                        <div className="flex flex-col justify-evenly border p-2 w-full">
                            <span className="text-xs md:text-sm lg:text-lg pb-2">{"> "} Habilidades Principales:</span>
                            <div className="grid grid-cols-4 gap-1 justify-items-center">
                                <ImageComponent url={htmlLogo} />
                                <ImageComponent url={cssLogo} />
                                <ImageComponent url={javascriptLogo} />
                                <ImageComponent url={reactLogo} />
                            </div>
                            <div className="grid grid-cols-4 gap-1 justify-items-center">
                                <ImageComponent url={typescriptLogo} />
                                <ImageComponent url={sqlLogo} />
                                <ImageComponent url={tailwindLogo} />
                                <ImageComponent url={vscodeLogo} />
                            </div>
                        </div>
                        <div className="relative w-full max-w-60 border overflow-hidden aspect-square mx-auto">
                            <div className="absolute top-1 right-1 w-7 animate-pulse">{Icons.warning}</div>
                            {canShowCanvas && <ModelViewer url="src\assets\3DModels\Craneo.glb" canAutoRotate={true} canZoom={false} canRotate={false} canPan={false} isWireframeVisible={true} canShowCanvas={canShowCanvas} />}
                        </div>
                    </div>
                    <div className="hazard-tape size-full flex items-center justify-center text-xl animate-pulse bg-terminalGreen"><span className="bg-terminalBG">[ No Signal ]</span></div>
                </div>
            </article>

            {/* Habilidades */}

            <article className="flex flex-col  md:flex-row gap-4 h-full border p-2 text-xs md:text-sm lg:text-md">

                <div className="flex flex-col p-1 gap-3 w-full md:border-r">

                    <span>{">"} Contactos.exe</span>

                    <ul className="flex flex-col gap-3">

                        <InfoItem
                            icon={Icons.Email}
                            label="EMAIL"
                            value="jasonbrenes22@gmail.com"
                        />

                        <InfoItem
                            icon={Icons.Linkedin}
                            label="LINKEDIN"
                            value="www.linkedin.com/in/jasonbrenespérez"
                            url="https://www.linkedin.com/in/jasonbrenesp%C3%A9rez/"
                        />

                        <InfoItem
                            icon={Icons.GitHub}
                            label="GITHUB"
                            value="github.com/VeintiDo2"
                            url="https://github.com/VeintiDo2"
                        />

                    </ul>
                </div>

                <div className="flex flex-col gap-2 w-full md:border-r">
                    <span>{">"} Habilidades_Blandas.exe</span>
                    <ul className="flex flex-wrap gap-1">
                        <InfoItem label="Skill 1" value="[Trabajo en equipo]" />
                        <InfoItem label="Skill 2" value="[Adaptabilidad]" />
                        <InfoItem label="Skill 3" value="[Aprendizaje rápido]" />
                        <InfoItem label="Skill 4" value="[Comunicación]" />
                        <InfoItem label="Skill 5" value="[Creatividad]" />
                        <InfoItem label="Skill 6" value="[Resolución de problemas]" />
                        <InfoItem label="Skill 7" value="[Colaboración]" />
                    </ul>
                </div>

                <div className="flex flex-col gap-2 w-full">
                    <span>{">"} Habilidades_Técnicas.exe</span>
                    <ul className="flex flex-wrap gap-1">
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
                </div>

            </article>
        </div>
    )
}

export default SobreMi;