import {useState} from "react";
import styles from "./IOSCalculator.module.scss";
import CalculatorNumber from "./CalculatorNumber";
import {buttonGrid} from "../assets/buttonGrid";

export const IOSCalculator = () => {
    const [display, setDisplay] = useState("0");
    const [prevValue, setPrevValue] = useState<string | null>(null);
    const [operator, setOperator] = useState<string | null>(null);
    const [overwrite, setOverwrite] = useState<boolean>(true);

    const operations: Record<string, () => void> = {
        AC: () => {
            setDisplay("0");
            setPrevValue(null);
            setOperator(null);
            setOverwrite(true);
        },
        "±": () => {
            setDisplay((prev) => (prev.startsWith("-") ? prev.slice(1) : "-" + prev));
        },
        "%": () => {
            setDisplay((prev) => String(parseFloat(prev) / 100));
        },
        "=": () => {
            if (!operator || !prevValue) return;
            const current = parseFloat(display);
            const previous = parseFloat(prevValue);
            let result = 0;
            switch (operator) {
                case "+":
                    result = previous + current;
                    break;
                case "-":
                    result = previous - current;
                    break;
                case "×":
                    result = previous * current;
                    break;
                case "÷":
                    result = current !== 0 ? previous / current : NaN;
                    break;
            }
            setDisplay(String(result));
            setOperator(null);
            setPrevValue(null);
            setOverwrite(true);
        },
    };

    const handleButtonClick = (label: string) => {
        if (/^\d$/.test(label)) {
            setDisplay((prev) => (prev === "0" || overwrite ? label : prev + label));
            setOverwrite(false);
        } else if (label === ".") {
            if (!display.includes(".")) {
                setDisplay((prev) => prev + ".");
                setOverwrite(false);
            }
        } else if (["+", "-", "×", "÷"].includes(label)) {
            setOperator(label);
            setPrevValue(display);
            setOverwrite(true);
        } else if (operations[label]) {
            operations[label]();
        }
    };

    return (
        <div className={styles.calculatorBackground}>
            <label className={styles.operation}>{prevValue} {operator}</label>
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
