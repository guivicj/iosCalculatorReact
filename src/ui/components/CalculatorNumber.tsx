import styles from "./CalculatorNumber.module.scss";

interface Props {
    label: string;
    onClick: (label: string) => void;
    scientific: boolean;
    type?: "dark" | "light" | "orange";
}

export default function CalculatorNumber({label, onClick, scientific, type = "dark"}: Props) {
    let className = `${styles.calculatorNumber} ${
        type === "orange" ? styles.orange : type === "light" ? styles.light : ""
    }`;

    if (scientific) {
        className = `${className} ${styles.scientific}`;
    }

    return (
        <button className={className} onClick={() => onClick(label)}>
            {label}
        </button>
    );
}
