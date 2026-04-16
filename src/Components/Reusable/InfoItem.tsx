type ContactItemProps = {
    icon?: React.ReactNode
    label: string
    value: string
    url?: string
}

const InfoItem = ({ icon, label, value, url }: ContactItemProps) => {
    const content = (
        <div className="group relative min-w-0 flex items-center gap-2 cursor-pointer hover:translate-x-2 transition-all duration-100">

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

export default InfoItem;