interface ButtonProps {
    className?: string;
    title: string;
    onClick?: () => void;
    type?: string;
}

const Button: React.FC<ButtonProps> = ({ className, title, onClick, type }) => {
    return (
        <div>
            <button
                className={className ?? "btn btn-neutral btn-outline"}
                onClick={onClick}
            >
                {title}
            </button>
        </div>
    )
}

export default Button