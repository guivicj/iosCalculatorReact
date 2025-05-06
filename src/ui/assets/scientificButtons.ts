export interface ScientificCalculatorButtons {
    label: string;
}

export const scientificButtons: ScientificCalculatorButtons[][] = [
    [
        {label: '('},
        {label: ')'},
        {label: 'mc'},
        {label: 'm+'},
        {label: 'm-'},
        {label: 'mr'},
    ], [
        {label: '2nd'},
        {label: 'x2'},
        {label: 'x3'},
        {label: 'xy'},
        {label: 'ex'},
        {label: '10x'},
    ], [
        {label: '⅟x'},
        {label: '2√x'},
        {label: '3√x'},
        {label: 'y√x'},
        {label: 'ln'},
        {label: 'log10'},
    ], [
        {label: 'x!'},
        {label: 'sin'},
        {label: 'cos'},
        {label: 'tan'},
        {label: 'e'},
        {label: 'EE'},
    ], [
        {label: 'Rand'},
        {label: 'sinh'},
        {label: 'cosh'},
        {label: 'tanh'},
        {label: 'π'},
        {label: 'Rad'},
    ],
];
