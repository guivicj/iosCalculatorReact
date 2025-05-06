import styles from "./CalculatorScientificButtons.module.scss"

interface Props {
    label: string;
    onClick: (label: string) => void;
}

export default function CalculatorScientificButtons({label, onClick}: Props) {
    return (
        <button className={styles.calculatorButton} onClick={() => onClick(label)}>
            {label}
        </button>
    )
}
