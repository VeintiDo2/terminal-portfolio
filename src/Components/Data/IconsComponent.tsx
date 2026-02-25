import {
    HomeIcon, UserIcon, CodeBracketSquareIcon, PhoneIcon, LanguageIcon,
    XMarkIcon, SpeakerWaveIcon, ExclamationTriangleIcon
} from "@heroicons/react/24/outline";

export const Icons = {
    Home: <HomeIcon />,
    User: <UserIcon />,
    Projects: <CodeBracketSquareIcon />,
    Contact: <PhoneIcon />,
    Language: <LanguageIcon />,
    Close: <XMarkIcon />,
    Audio: <SpeakerWaveIcon />,
    warning: <ExclamationTriangleIcon />
} as const
