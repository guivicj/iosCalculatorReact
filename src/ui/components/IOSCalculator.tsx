import { useState } from "react";
import styles from "./IOSCalculator.module.scss";
import CalculatorNumber from "./CalculatorNumber";
import { buttonGrid } from "../assets/buttonGrid";
import {evaluateExpression} from "../../utils/evaluateExpression.ts";

export const IOSCalculator = () => {
    const [display, setDisplay] = useState("0");
    const [tokens, setTokens] = useState<(string | number)[]>([]);

    const handleButtonClick = (label: string) => {
        if (/^\d$/.test(label)) {
            setDisplay(prev => (prev === "0" ? label : prev + label));
        } else if (label === ".") {
            if (!display.includes(".")) {
                setDisplay(prev => prev + ".");
            }
        } else if (["+", "-", "×", "÷"].includes(label)) {
            setTokens(prev => [...prev, parseFloat(display), label]);
            setDisplay("0");
        } else if (label === "=") {
            const allTokens = [...tokens, parseFloat(display)];
            const result = evaluateExpression(allTokens);
            setDisplay(String(result));
            setTokens([]);
        } else if (label === "AC") {
            setDisplay("0");
            setTokens([]);
        }
    };

    return (
        <div className={styles.calculatorBackground}>
            <label className={styles.operation}>
                {tokens.join(" ")}
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
