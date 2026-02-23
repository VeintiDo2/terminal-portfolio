import { Icons } from "./Data/IconsComponent";
import { buttonSizes } from "./Data/ButtonSizes";
import { useState } from "react";

interface SoundProps {
    playClick: () => void;
    playHover: () => void;
}

type ButtonVariant = "terminal" | "console";

type TerminalButtonProps = {
    label?: string;
    icon?: keyof typeof Icons;
    onClick?: () => void;
    active?: boolean;
    soundActivated?: boolean;
    sound?: SoundProps;
    size: "small" | "medium" | "large";
    variant?: ButtonVariant;
    absolutePosition?: boolean;
    touchToHiden?: boolean;
};

const TerminalButton = ({
    label,
    icon,
    onClick,
    active,
    soundActivated,
    sound,
    size,
    variant,
    absolutePosition,
    touchToHiden,
}: TerminalButtonProps) => {

    const [hide, setHide] = useState<boolean>(false);
    const styles = buttonSizes[size];
    const centeredClass = "items-center justify-center flex";
    const absoluteClass = "absolute -top-8 "; // Clase para posicionar el botón de forma absoluta.

    const handleClick = () => {
        onClick && onClick();
        if (soundActivated && sound) sound.playClick();
    };

    const handleHover = () => {
        if (soundActivated && sound) sound.playHover();
    };

    if (variant === "console") {
        return (
            <button
                className={`${hide === true ? "bg-terminalGreen text-terminalBG animate-disappear" : "flex"}  ${absolutePosition === true ? absoluteClass : ""} gap-2 w-full cursor-pointer text-left  hover:bg-terminalGreen hover:text-terminalBG`}
                onClick={() => {
                    handleClick();
                    setHide(touchToHiden ? true : false);
                }}
                onMouseEnter={handleHover}>

                <span>{">"}</span>
                {label && <span className={`${styles.text} ${centeredClass}`}>{label}</span>}
                {icon && <div className={`${styles.icon} ${centeredClass}`}>{Icons[icon]}</div>}

            </button>
        );
    }

    return (
        <button
            onClick={handleClick}
            onMouseEnter={handleHover}
            className={`flex flex-col items-center p-2 cursor-pointer
        ${active ? "bg-terminalGreen text-terminalBG" : "text-terminalGreen"}
        ${styles.container}
        hover:text-terminalBG hover:bg-terminalGreen transition-colors duration-100`}
        >
            {icon && <div className={`${styles.icon} ${centeredClass} flex-1`}>{Icons[icon]}</div>}
            {label && <span className={`${styles.text} ${centeredClass} flex-1`}>{label}</span>}

        </button>
    );
};

export default TerminalButton;