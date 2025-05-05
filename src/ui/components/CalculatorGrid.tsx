import CalculatorNumber from "./CalculatorNumber";
import { buttonGrid } from "../assets/buttonGrid";

interface Props {
    onClick: (label: string) => void;
}

export default function CalculatorGrid({ onClick }: Props) {
    return (
        <div className="grid">
            {buttonGrid.flat().map((btn, index) => (
                <CalculatorNumber
                    key={index}
                    label={btn.label}
                    type={btn.type}
                    onClick={onClick}
                />
            ))}
        </div>
    );
}
