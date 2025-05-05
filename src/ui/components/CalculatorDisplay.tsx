interface Props {
    expression: (string | number)[];
    current: string;
}

export default function CalculatorDisplay({expression, current}: Props) {
    return (
        <>
            <label className="operation">{[...expression, current].join(" ")}</label>
            <label className="display">{current}</label>
        </>
    );
}
