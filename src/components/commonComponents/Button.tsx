interface ButtonProps {
    className?: string;
    title: string;
    onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ className, title, onClick }) => {
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