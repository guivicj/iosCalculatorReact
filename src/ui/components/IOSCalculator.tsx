import {useState} from "react";
import styles from "./IOSCalculator.module.scss";
import CalculatorNumber from "./CalculatorNumber";
import {buttonGrid} from "../assets/buttonGrid";
import {scientificButtons} from "../assets/scientificButtons.ts";
import CalculatorScientificButtons from "./CalculatorScientificButtons.tsx";

export const IOSCalculator = () => {
    const [display, setDisplay] = useState("0");
    const [accumulator, setAccumulator] = useState<number | null>(null);
    const [operator, setOperator] = useState<string | null>(null);
    const [overwrite, setOverwrite] = useState<boolean>(true);
    const [scientific, setScientific] = useState<boolean>(false);

    const handleButtonClick = (label: string) => {
        const isDigit = /^\d$/.test(label);

        const actions: Record<string, () => void> = {
            ".": () => {
                if (!display.includes(".")) {
                    setDisplay(prev => prev + ".");
                    setOverwrite(false);
                }
            },
            "+": () => handleOperator(label),
            "-": () => handleOperator(label),
            "×": () => handleOperator(label),
            "÷": () => handleOperator(label),
            "=": () => {
                if (operator && accumulator !== null) {
                    const result = calculate(accumulator, parseFloat(display), operator);
                    setDisplay(String(result));
                    setAccumulator(null);
                    setOperator(null);
                    setOverwrite(true);
                }
            },
            "AC": () => {
                setDisplay("0");
                setAccumulator(null);
                setOperator(null);
                setOverwrite(true);
            },
            "±": () => {
                setDisplay(prev => (prev.startsWith("-") ? prev.slice(1) : "-" + prev));
            },
            "%": () => {
                setDisplay(prev => String(parseFloat(prev) / 100));
            },
            "🖩": () => {
                if (scientific) {
                    setScientific(false);
                } else {
                    setScientific(true);
                }
            }
        };

        if (isDigit) {
            setDisplay(prev => overwrite ? label : prev + label);
            setOverwrite(false);
        } else if (label in actions) {
            actions[label]();
        }
    };

    const handleOperator = (op: string) => {
        const current = parseFloat(display);
        if (accumulator !== null && operator) {
            const result = calculate(accumulator, current, operator);
            setAccumulator(result);
            setDisplay(String(result));
        } else {
            setAccumulator(current);
        }
        setOperator(op);
        setOverwrite(true);
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
            {scientific && (
                <div className={styles.scientificGrid}>
                    {scientificButtons.flat().map((btn, index) => (
                        <CalculatorScientificButtons
                            key={index}
                            label={btn.label}
                            onClick={handleButtonClick}/>
                    ))}
                </div>
            )}
            {scientific ? (
                <div className={styles.grid}>
                    {buttonGrid.flat().map((btn, index) => (
                        <CalculatorNumber
                            key={index}
                            label={btn.label}
                            onClick={handleButtonClick}
                            scientific={scientific}
                            type={btn.type}
                        />
                    ))}
                </div>
            ) : (
                <div className={styles.grid}>
                    {buttonGrid.flat().map((btn, index) => (
                        <CalculatorNumber
                            key={index}
                            label={btn.label}
                            onClick={handleButtonClick}
                            scientific={scientific}
                            type={btn.type}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};
