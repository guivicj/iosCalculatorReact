import styles from "./CalculatorNumber.module.scss";

interface Props {
    label: string;
    onClick: (label: string) => void;
    type?: "dark" | "light" | "orange"; // Optional prop
}

export default function CalculatorNumber({label, onClick, type = "dark"}: Props) {
    const className = `${styles.calculatorNumber} ${
        type === "orange" ? styles.orange : type === "light" ? styles.light : ""
    }`;

    return (
        <button className={className} onClick={() => onClick(label)}>
            {label}
        </button>
    );
}
