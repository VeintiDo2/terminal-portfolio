import {
    HomeIcon, UserIcon, CodeBracketSquareIcon, PhoneIcon, LanguageIcon,
    XMarkIcon, SpeakerWaveIcon, ExclamationTriangleIcon
} from "@heroicons/react/24/outline";

import { AiOutlineLinkedin, AiOutlineGithub, AiOutlineMail } from "react-icons/ai";

export const Icons = {
    Home: <HomeIcon />,
    User: <UserIcon />,
    Projects: <CodeBracketSquareIcon />,
    Contact: <PhoneIcon />,
    Language: <LanguageIcon />,
    Close: <XMarkIcon />,
    Audio: <SpeakerWaveIcon />,
    warning: <ExclamationTriangleIcon />,
    Linkedin: <AiOutlineLinkedin />,
    Email: <AiOutlineMail />,
    GitHub: <AiOutlineGithub />,
} as const
