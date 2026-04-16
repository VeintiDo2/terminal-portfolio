import { useState, type Dispatch, type SetStateAction } from "react";
import { useUISounds } from "./Hook/UseUISounds";
import TerminalButton from "./Buttons";

type LanguageModalProps = {
    setLanguageModelActive: Dispatch<SetStateAction<boolean>>,
    soundActivated: boolean,
};

const LanguageModal = ({ setLanguageModelActive, soundActivated }: LanguageModalProps) => {
    const { playErrorClick, playHover, playClick } = useUISounds();
    const [closing, setClosing] = useState<boolean>(false);

    const closeModal = () => {
        setClosing(true);
        setTimeout(() => {
            setLanguageModelActive(false);
        }, 300);
    };

    return (
        <div className={`${closing ? "animate-disappear" : "animate-appear"} fixed inset-0 z-50 flex items-center justify-center bg-black/25`} >
            <div className="bg-terminalGreenDark border border-terminalGreen shadow-glow min-w-100 min-h-50 text-terminalGreen">
                <TerminalButton icon="Close" adaptativeSize={true} onClick={closeModal} soundActivated={soundActivated} sound={{ playClick: () => playErrorClick(), playHover: () => playHover() }} />
                <article className="flex flex-col gap-1 p-2">

                    <TerminalButton label="Español" variant="console" soundActivated={soundActivated} sound={{ playClick: () => playClick(), playHover: () => playHover() }} />
                    <TerminalButton label="English" variant="console" soundActivated={soundActivated} sound={{ playClick: () => playClick(), playHover: () => playHover() }} />

                </article>
            </div>
        </div>
    );
};

export default LanguageModal;