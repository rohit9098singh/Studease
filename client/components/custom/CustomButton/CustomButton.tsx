import HashLoader from "../loader/Loader";
interface props {
    content: string | React.ReactNode;
    onClick?: () => void;
    className?: string;
    isLoading?: boolean;
    disabled?: boolean
}

export const CustomButton = ({ content,
    onClick,
    className,
    isLoading = false,
    disabled = false, }: props) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled || isLoading}
            className={`bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors flex justify-center items-center cursor-pointer ${className}`}
        >
            {
                isLoading ? <HashLoader color="red" size={25} /> : content
            }
        </button>
    )
}