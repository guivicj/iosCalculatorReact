export const evaluateExpression = (input: (string | number)[]): number => {
    const precedence: Record<string, number> = {"+": 1, "-": 1, "×": 2, "÷": 2};
    const ops: string[] = [];
    const output: (number | string)[] = [];

    for (const token of input) {
        if (typeof token === "number") {
            output.push(token);
        } else if (["+", "-", "×", "÷"].includes(token)) {
            while (
                ops.length &&
                precedence[ops[ops.length - 1]] >= precedence[token]
                ) {
                output.push(ops.pop()!);
            }
            ops.push(token);
        }
    }

    while (ops.length) output.push(ops.pop()!);

    const stack: number[] = [];
    for (const token of output) {
        if (typeof token === "number") {
            stack.push(token);
        } else {
            const b = stack.pop()!;
            const a = stack.pop()!;
            switch (token) {
                case "+":
                    stack.push(a + b);
                    break;
                case "-":
                    stack.push(a - b);
                    break;
                case "×":
                    stack.push(a * b);
                    break;
                case "÷":
                    stack.push(a / b);
                    break;
            }
        }
    }

    return stack[0];
};
