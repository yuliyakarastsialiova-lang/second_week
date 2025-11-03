/* eslint-disable no-undef */
import * as Command from '../assets/command.js';
const calc = new Command.Calculator();
describe('Addition', () => {
    beforeEach(() => {
        calc.setResult(0);
    });
    it('plus 5', () => {
        calc.add(5);
        expect(calc.getResult()).toBe(0 + 5);
    });
});

describe('Substraction', () => {
    beforeEach(() => {
        calc.setResult(0);
    });
    it('minus 5', () => {
        calc.sub(5);
        expect(calc.getResult()).toBe(0 - 5);
    });
});

describe('Multiply', () => {
    beforeEach(() => {
        calc.setResult(12);
    });
    it('mul 5', () => {
        calc.multiply(5);
        expect(calc.getResult()).toBe(12 * 5);
    });
});

describe('Divide', () => {
    beforeEach(() => {
        calc.setResult(6);
    });
    it('div 3', () => {
        calc.divide(3);
        expect(calc.getResult()).toBe(6 / 3);
    });
    it('div 0', () => {
        calc.divide(0);
        expect(calc.getResult()).toBe('Нельзя делить на ноль');
    });
});

describe('SqrtXY', () => {
    beforeEach(() => {
        calc.setResult(64);
    });
    it('Sqrt(64, 8)', () => {
        calc.sqrtXY(8);
        expect(calc.getResult()).toBe(64 ** (1 / 8));
    });
    it('Sqrt(-3, 2)', () => {
        calc.setResult(-3);
        calc.sqrtXY(2);
        expect(calc.getResult()).toBe('Неверный ввод');
    });
    it('Sqrt(64, 0)', () => {
        calc.sqrtXY(0);
        expect(calc.getResult()).toBe('Неверный ввод');
    });
});

describe('ExpY', () => {
    beforeEach(() => {
        calc.setResult(5);
    });
    it('pow(5, 4)', () => {
        calc.expY(4);
        expect(calc.getResult()).toBe(5 ** 4);
    });
    it('pow(5, -3)', () => {
        calc.expY(-3);
        expect(calc.getResult()).toBe(5 ** -3);
    });
});

describe('Negative', () => {
    beforeEach(() => {
        calc.setValue(0);
    });
    it('negative', () => {
        calc.negative(5);
        expect(calc.getValue()).toBe(-5);
    });
});

describe('Reverse', () => {
    beforeEach(() => {
        calc.setValue(0);
    });
    it('Reverse', () => {
        calc.reverse(5);
        expect(calc.getValue()).toBe(1 / 5);
    });
    it('Reverse 0', () => {
        calc.reverse(0);
        expect(calc.getValue()).toBe('Нельзя делить на ноль');
    });
});

describe('SqrtX2', () => {
    beforeEach(() => {
        calc.setValue(0);
    });
    it('sqrtX2', () => {
        calc.sqrtX2(9);
        expect(calc.getValue()).toBe(3);
    });
    it('sqrtX2', () => {
        calc.sqrtX2(-1);
        expect(calc.getValue()).toBe('Неверный ввод');
    });
});

describe('SqrtX3', () => {
    beforeEach(() => {
        calc.setValue(0);
    });
    it('sqrtX3', () => {
        calc.sqrtX3(27);
        expect(calc.getValue()).toBe(3);
    });
    it('sqrtX3', () => {
        calc.sqrtX3(-1);
        expect(calc.getValue()).toBe('Неверный ввод');
    });
});

describe('Exp2', () => {
    beforeEach(() => {
        calc.setValue(0);
    });
    it('exp2', () => {
        calc.exp2(6);
        expect(calc.getValue()).toBe(6 ** 2);
    });
});

describe('Exp3', () => {
    beforeEach(() => {
        calc.setValue(0);
    });
    it('exp3', () => {
        calc.exp3(6);
        expect(calc.getValue()).toBe(6 ** 3);
    });
});

describe('Exp10', () => {
    beforeEach(() => {
        calc.setValue(0);
    });
    it('exp10', () => {
        calc.exp10(4);
        expect(calc.getValue()).toBe(10 ** 4);
    });
});

describe('Factorial', () => {
    beforeEach(() => {
        calc.setValue(0);
    });
    it('factorial 5', () => {
        calc.factorial(5);
        expect(calc.getValue()).toBe(120);
    });
    it('factorial 0', () => {
        calc.factorial(0);
        expect(calc.getValue()).toBe(1);
    });
    it('factorial <0', () => {
        calc.factorial(-4);
        expect(calc.getValue()).toBe('Неверный ввод');
    });
});

describe('Percent', () => {
    beforeEach(() => {
        calc.setValue(0);
    });
    it('10%', () => {
        calc.setResult(100);
        calc.percent(10);
        expect(calc.getValue()).toBe(10);
    });
});

describe('MS', () => {
    it('ms', () => {
        calc.memory_save(10);
        expect(calc.memory_recall()).toBe(10);
    });
});

describe('M+', () => {
    beforeEach(() => {
        calc.memory_save(10);
    });
    it('m+', () => {
        calc.memmory_plus(5);
        expect(calc.memory_recall()).toBe(10 + 5);
    });
    it('m+ undef', () => {
        calc.memory_clear();
        calc.memmory_plus(5);
        expect(calc.getResult()).toBe('Нет числа в памяти');
    });
});

describe('M-', () => {
    beforeEach(() => {
        calc.memory_save(10);
    });
    it('m-', () => {
        calc.memmory_minus(5);
        expect(calc.memory_recall()).toBe(10 - 5);
    });
    it('m+ undef', () => {
        calc.memory_clear();
        calc.memmory_minus(5);
        expect(calc.getResult()).toBe('Нет числа в памяти');
    });
});

describe('MC', () => {
    it('mc', () => {
        calc.memory_clear();
        expect(calc.memory_value).toBe(undefined);
    });
});

describe('MR', () => {
    beforeEach(() => {
        calc.memory_save(10);
    });
    it('mr', () => {
        expect(calc.memory_recall()).toBe(10);
    });
    it('mr undef', () => {
        calc.memory_clear();
        calc.memory_recall();
        expect(calc.getResult()).toBe('Нет числа в памяти');
    });
});
