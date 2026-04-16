//Imagenes
import htmlLogo from "../../assets/images/Logos/html-5-svgrepo-com.svg";
import cssLogo from "../../assets/images/Logos/css3-svgrepo-com.svg";
import javascriptLogo from "../../assets/images/Logos/javascript-svgrepo-com.svg";
import reactLogo from "../../assets/images/Logos/react-svgrepo-com.svg";
import typescriptLogo from "../../assets/images/Logos/typescript-icon-svgrepo-com.svg";
import sqlLogo from "../../assets/images/Logos/microsoft-sql-server-logo-svgrepo-com.svg";
import vscodeLogo from "../../assets/images/Logos/visual-studio-code-svgrepo-com.svg";
import tailwindLogo from "../../assets/images/Logos/tailwind-svgrepo-com.svg";
import nodeJsLogo from "../../assets/images/Logos/nodejs-icon-logo-svgrepo-com.svg";
import mongoDbLogo from "../../assets/images/Logos/mongo-svgrepo-com.svg";
import bootStrap from "../../assets/images/Logos/bootstrap-svgrepo-com.svg";

const Images = {
    HTML: htmlLogo,
    CSS: cssLogo,
    JavaScript: javascriptLogo,
    React: reactLogo,
    TypeScript: typescriptLogo,
    SQL: sqlLogo,
    TailWind: tailwindLogo,
    VSCode: vscodeLogo,
    nodeJsLogo: nodeJsLogo,
    mongoDbLogo: mongoDbLogo,
    bootStrap: bootStrap,
} as const;

type ImageName = keyof typeof Images;

const ImageComponent = ({ imageName }: { imageName: ImageName }) => {
    return (
        <img
            className="w-full max-w-15 md:max-w-20 lg:max-w-20 h-auto sepia-75 border border-transparent hover:drop-shadow-[0_0_4px_rgba(34,197,94,0.5)] hover:scale-110 duration-100 p-1"
            src={Images[imageName]}
            alt={imageName}
        />
    )
}

export default ImageComponent;