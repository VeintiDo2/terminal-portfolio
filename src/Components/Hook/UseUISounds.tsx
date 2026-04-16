import { useRef } from "react";

export const useUISounds = () => {
    const hoverSound = useRef<HTMLAudioElement | null>(null);
    const clickSound = useRef<HTMLAudioElement | null>(null);
    const errorClickSound = useRef<HTMLAudioElement | null>(null)

    if (!hoverSound.current) {
        hoverSound.current = new Audio("src/Sounds/HoverSFX.mp3");
        hoverSound.current.volume = 0.05;
    }

    if (!clickSound.current) {
        clickSound.current = new Audio("src/Sounds/ClickButtonSFX.mp3");
        clickSound.current.volume = 0.05;
    }

    if (!errorClickSound.current) {
        errorClickSound.current = new Audio("src/Sounds/ErrorSFX.mp3");
        errorClickSound.current.volume = 0.05;
    }

    const playHover = () => {
        // NO reproducir hover si el click está sonando
        if (!clickSound.current?.paused) return;

        hoverSound.current!.currentTime = 0;
        hoverSound.current!.play();
    };

    const playClick = () => {
        // Cortar hover inmediatamente
        if (hoverSound.current) {
            hoverSound.current.pause();
            hoverSound.current.currentTime = 0;
        }

        clickSound.current!.currentTime = 0;
        clickSound.current!.play();
    };

    const playErrorClick = () => {
        if (hoverSound.current) {
            hoverSound.current.pause();
            hoverSound.current.currentTime = 0;
        }

        errorClickSound.current!.currentTime = 0;
        errorClickSound.current!.play();
    }

    return { playHover, playClick, playErrorClick };
}
