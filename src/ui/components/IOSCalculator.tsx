import {useState} from "react";
import styles from "./IOSCalculator.module.scss";
import CalculatorNumber from "./CalculatorNumber";
import {buttonGrid} from "../assets/buttonGrid";

export const IOSCalculator = () => {
    const [display, setDisplay] = useState("0");
    const [accumulator, setAccumulator] = useState<number | null>(null);
    const [operator, setOperator] = useState<string | null>(null);
    const [overwrite, setOverwrite] = useState<boolean>(true);

    const handleButtonClick = (label: string) => {
        if (/^\d$/.test(label)) {
            setDisplay(prev => overwrite ? label : prev + label);
            setOverwrite(false);
        } else if (label === ".") {
            if (!display.includes(".")) {
                setDisplay(prev => prev + ".");
                setOverwrite(false);
            }
        } else if (["+", "-", "×", "÷"].includes(label)) {
            const current = parseFloat(display);
            if (accumulator !== null && operator) {
                const result = calculate(accumulator, current, operator);
                setAccumulator(result);
                setDisplay(String(result));
            } else {
                setAccumulator(current);
            }
            setOperator(label);
            setOverwrite(true);
        } else if (label === "=") {
            if (operator && accumulator !== null) {
                const result = calculate(accumulator, parseFloat(display), operator);
                setDisplay(String(result));
                setAccumulator(null);
                setOperator(null);
                setOverwrite(true);
            }
        } else if (label === "AC") {
            setDisplay("0");
            setAccumulator(null);
            setOperator(null);
            setOverwrite(true);
        } else if (label === "±") {
            setDisplay(prev => (prev.startsWith("-") ? prev.slice(1) : "-" + prev));
        } else if (label === "%") {
            setDisplay(prev => String(parseFloat(prev) / 100));
        }
    };

    const calculate = (a: number, b: number, op: string): number => {
        switch (op) {
            case "+":
                return a + b;
            case "-":
                return a - b;
            case "×":
                return a * b;
            case "÷":
                return b !== 0 ? a / b : NaN;
            default:
                return b;
        }
    };

    return (
        <div className={styles.calculatorBackground}>
            <label className={styles.operation}>
                {operator && accumulator !== null ? `${accumulator} ${operator}` : "\u00A0"}
            </label>
            <label className={styles.display}>{display}</label>
            <div className={styles.grid}>
                {buttonGrid.flat().map((btn, index) => (
                    <CalculatorNumber
                        key={index}
                        label={btn.label}
                        type={btn.type}
                        onClick={handleButtonClick}
                    />
                ))}
            </div>
        </div>
    );
};
