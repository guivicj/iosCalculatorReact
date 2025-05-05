
export type ButtonType = 'dark' | 'light' | 'orange';

export interface CalculatorButtonConfig {
    label: string;
    type?: ButtonType;
}

export const buttonGrid: CalculatorButtonConfig[][] = [
    [
        {label: 'AC', type: 'light'},
        {label: '±', type: 'light'},
        {label: '%', type: 'light'},
        {label: '÷', type: 'orange'}
    ],
    [
        {label: '7'},
        {label: '8'},
        {label: '9'},
        {label: '×', type: 'orange'}
    ],
    [
        {label: '4'},
        {label: '5'},
        {label: '6'},
        {label: '-', type: 'orange'}
    ],
    [
        {label: '1'},
        {label: '2'},
        {label: '3'},
        {label: '+', type: 'orange'}
    ],
    [
        {label: ' '},
        {label: '0'},
        {label: '.'},
        {label: '=', type: 'orange'}
    ]
];
