export default function SortButton({ option, onClick }) {
    return (
        <button
            className={`btn ${option.active ? "bg-primary text-white" : ""}`}
            onClick={onClick}
        >
            {option.text}
        </button>
    );
}
