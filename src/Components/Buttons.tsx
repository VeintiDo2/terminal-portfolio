import { Icons } from "./Data/IconsComponent";
import { useState } from "react";

interface SoundProps {
    playClick?: () => void;
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
    variant?: ButtonVariant;
    absolutePosition?: boolean;
    touchToHiden?: boolean;
    adaptativeSize?: boolean;
    href?: string;
};

const TerminalButton = ({
    label,
    icon,
    onClick,
    active,
    soundActivated,
    sound,
    variant,
    absolutePosition,
    touchToHiden,
    adaptativeSize,
    href,
}: TerminalButtonProps) => {

    const [hide, setHide] = useState<boolean>(false);
    const absoluteClass = "absolute -top-6.5";

    const Component = href ? "a" : "button"; //NOTA: Es POSIBLE cambiar las etiquetas HTML dinamicamente.

    const handleClick = () => {
        onClick?.();
        if (soundActivated && sound) sound.playClick?.();
    };

    const handleHover = () => {
        if (soundActivated && sound) sound.playHover?.();
    };

    if (variant === "console") {
        return (
            <Component
                href={href}
                target="_blank"
                className={`crtGlowText flex gap-2 w-full cursor-pointer text-left text-sm
            ${hide ? "bg-terminalGreen text-terminalBG animate-disappear" : ""}
            ${absolutePosition ? absoluteClass : ""}
            hover:bg-terminalGreen hover:text-terminalBG duration-100`}
                onClick={() => {
                    handleClick();
                    if (!href) setHide(touchToHiden ? true : false);
                }}
                onMouseEnter={handleHover}
            >
                {label && <span className="flex items-center">{"> "}{label}</span>}
                {icon && <div className="flex items-center w-4">{Icons[icon]}</div>}
            </Component>
        );
    }

    return (
        <Component
            href={href}
            target="_blank"
            onClick={handleClick}
            onMouseEnter={handleHover}
            className={`crtGlowText flex flex-col items-center justify-center gap-1 cursor-pointer
            ${adaptativeSize ? "flex-1 flex-row" : "w-20 h-20 max-w-20 max-h-20"}
            ${active ? "bg-terminalGreen text-terminalBG" : "text-terminalGreen"}
            hover:text-terminalBG hover:bg-terminalGreen transition-colors duration-100`}
        >
            {icon && <div className="flex items-center justify-center w-10 text-5xl">{Icons[icon]}</div>}
            {label && <span className="flex items-center justify-center text-xs md:text-sm">{label}</span>}
        </Component>
    );
};

export default TerminalButton;