export class Calculator {
    //Receiver
    result = 0; //результат (левый операнд)
    history_line = ''; //строки
    value; //правый операнд
    memory_value; //значение в памяти
    memory_save(value) {
        this.memory_value = value;
    }
    memmory_plus(value) {
        try {
            if (this.memory_value == undefined) {
                throw new Error('Нет числа в памяти');
            }
            this.memory_value = this.memory_value + value;
        } catch (e) {
            this.result = e.message;
            console.log('lol');
        }
    }
    memmory_minus(value) {
        try {
            if (this.memory_value == undefined) {
                throw new Error('Нет числа в памяти');
            }
            this.memory_value = this.memory_value - value;
        } catch (e) {
            this.result = e.message;
            console.log('lol');
        }
    }
    memory_clear() {
        this.memory_value = undefined;
    }
    memory_recall() {
        try {
            if (this.memory_value == undefined) {
                throw new Error('Нет числа в памяти');
            }
            return this.memory_value;
        } catch (e) {
            this.result = e.message;
            console.log('lol');
            return e.message;
        }
    }
    add(value) {
        this.result += value;
    }
    sub(value) {
        this.result -= value;
    }
    equal() {}
    multiply(value) {
        this.result *= value;
    }
    divide(value) {
        try {
            if (value == 0) throw new Error('Нельзя делить на ноль');
            this.result /= value;
        } catch (e) {
            this.result = e.message;
            this.history_line = '';
        }
    }
    negative(value) {
        this.value = value * -1;
    }
    erase() {
        this.result = 0;
        this.history_line = '';
    }
    reverse(value) {
        try {
            if (value == 0) throw new Error('Нельзя делить на ноль');
            this.value = 1 / value;
        } catch (e) {
            this.value = e.message;
        }
    }
    sqrtX2(value) {
        try {
            if (value < 0) throw new Error('Неверный ввод');
            this.value = value ** 0.5;
        } catch (e) {
            this.value = e.message;
        }
    }
    sqrtX3(value) {
        try {
            if (value < 0) throw new Error('Неверный ввод');
            this.value = value ** (1 / 3);
        } catch (e) {
            this.value = e.message;
        }
    }
    sqrtXY(value) {
        try {
            if (this.result < 0 || value == 0) throw new Error('Неверный ввод');
            this.result = this.result ** (1 / value);
        } catch (e) {
            this.result = e.message;
        }
    }
    exp2(value) {
        this.value = value ** 2;
    }
    exp3(value) {
        this.value = value ** 3;
    }
    exp10(value) {
        this.value = 10 ** value;
    }
    expY(value) {
        this.result = this.result ** value;
    }
    factorial(rvalue) {
        try {
            if (rvalue > 0) {
                let value = rvalue - 1;
                this.value = rvalue;
                while (value > 1) {
                    this.value *= value;
                    value--;
                }
            } else if (rvalue == 0) {
                this.value = 1;
            } else {
                throw new Error('Неверный ввод');
            }
        } catch (e) {
            this.value = e.message;
        }
    }
    percent(value) {
        this.value = this.result * (value / 100);
    }
    //геттер и сеттер для правого операнда
    getResult() {
        return this.result;
    }
    setResult(value) {
        this.result = value;
    }
    //геттер и сеттер для левого операнда
    getValue() {
        return this.value;
    }
    setValue(value) {
        this.value = value;
    }
    //геттер и сеттер для строки истории
    getHistory() {
        return this.history_line;
    }
    setHistory(history) {
        this.history_line += history;
    }
    setNewHistory(history) {
        this.history_line = history;
    }
}

export class Command { //Абстрактный класс команды
    type;
    constructor(calc, type) {
        this.calc = calc;
        this.type = type;
    }

    execute() {} //Выполнение команды
    setHistory() {} //Добавление истории
    setNewHistory() { //Установка новой истории
        this.calc.setNewHistory('');
        this.setHistory();
    }
}

//Конкретные команды
export class Addition extends Command {
    constructor(calc, type) {
        super(calc, type);
    }
    execute() {
        this.calc.add(this.value);
    }
    setHistory() {
        this.calc.setHistory(' + ');
    }
}

export class Substraction extends Command {
    constructor(calc, type) {
        super(calc, type);
    }
    execute() {
        this.calc.sub(this.value);
    }
    setHistory() {
        this.calc.setHistory(' - ');
    }
}

export class Equal extends Command {
    constructor(calc, type) {
        super(calc, type);
    }
    execute() {
        this.calc.equal();
    }
    setHistory() {
        this.calc.setHistory(' = ' + this.calc.getResult());
    }
}

export class Multiply extends Command {
    constructor(calc, type) {
        super(calc, type);
    }
    execute() {
        this.calc.multiply(this.value);
    }
    setHistory() {
        this.calc.setHistory(' * ');
    }
}

export class Division extends Command {
    constructor(calc, type) {
        super(calc, type);
    }
    execute() {
        this.calc.divide(this.value);
    }
    setHistory() {
        this.calc.setHistory(' / ');
    }
}

export class Negative extends Command {
    constructor(calc, type) {
        super(calc, type);
    }
    execute() {
        this.calc.negative(this.value);
    }
    setHistory() {
        this.calc.setHistory('negative(' + this.value + ')');
    }
}

export class Erase extends Command {
    constructor(calc, type) {
        super(calc, type);
    }
    execute() {
        this.calc.erase();
    }
}

export class Factorial extends Command {
    constructor(calc, type) {
        super(calc, type);
    }
    execute() {
        this.calc.factorial(this.value);
    }
    setHistory() {
        this.calc.setHistory(this.value + '!');
    }
}

export class Reverse extends Command {
    constructor(calc, type) {
        super(calc, type);
    }
    execute() {
        this.calc.reverse(this.value);
    }
    setHistory() {
        this.calc.setHistory('1/' + this.value);
    }
}

export class SqrtX2 extends Command {
    constructor(calc, type) {
        super(calc, type);
    }
    execute() {
        this.calc.sqrtX2(this.value);
    }
    setHistory() {
        this.calc.setHistory(' sqrt(' + this.value + ') ');
    }
}

export class SqrtX3 extends Command {
    constructor(calc, type) {
        super(calc, type);
    }
    execute() {
        this.calc.sqrtX3(this.value);
    }
    setHistory() {
        this.calc.setHistory(' sqrt3(' + this.value + ') ');
    }
}

export class SqrtXY extends Command {
    constructor(calc, type) {
        super(calc, type);
    }
    execute() {
        this.calc.sqrtXY(this.value);
    }
    setHistory() {
        this.calc.setHistory(' sqrt');
    }
}

export class Expanitation2 extends Command {
    constructor(calc, type) {
        super(calc, type);
    }
    execute() {
        this.calc.exp2(this.value);
    }
    setHistory() {
        this.calc.setHistory(this.value + ' ^2 ');
    }
}

export class Expanitation3 extends Command {
    constructor(calc, type) {
        super(calc, type);
    }
    execute() {
        this.calc.exp3(this.value);
    }
    setHistory() {
        this.calc.setHistory(this.value + ' ^3 ');
    }
}

export class ExpanitationY extends Command {
    constructor(calc, type) {
        super(calc, type);
    }
    execute() {
        this.calc.expY(this.value);
    }
    setHistory() {
        this.calc.setHistory(' ^ ');
    }
}

export class Expanitation10 extends Command {
    constructor(calc, type) {
        super(calc, type);
    }
    execute() {
        this.calc.exp10(this.value);
    }
    setHistory() {
        this.calc.setHistory(' 10^' + this.value);
    }
}

export class Percent extends Command {
    constructor(calc, type) {
        super(calc, type);
    }
    execute() {
        this.calc.percent(this.value);
    }
    setHistory() {
        this.calc.setHistory(this.value + '% ');
    }
}

export class MemorySave extends Command {
    constructor(calc, type) {
        super(calc, type);
    }
    execute() {
        this.calc.memory_save(this.value);
    }
}
export class MemoryPlus extends Command {
    constructor(calc, type) {
        super(calc, type);
    }
    execute() {
        this.calc.memmory_plus(this.value);
    }
}
export class MemoryMinus extends Command {
    constructor(calc, type) {
        super(calc, type);
    }
    execute() {
        this.calc.memmory_minus(this.value);
    }
}
export class MemoryClear extends Command {
    constructor(calc, type) {
        super(calc, type);
    }
    execute() {
        this.calc.memory_clear(this.value);
    }
}

export class MemoryRecall extends Command {
    constructor(calc, type) {
        super(calc, type);
    }
    execute() {
        this.calc.memory_recall(this.value);
    }
}

export class Invoker { //Класс Invoker
    command = null;
    command_history = []; //Журнал команд

    constructor(calc) {
        this.calc = calc;
    }

    setCommand(command) { //Установка команды
        this.prev_command = this.command;
        this.command = command;
        this.command_history.push(command);
        if (command !== null && (command.type == 'operation' || command.type == 'gui')) {
            command.setHistory();
        }
    }

    setOldCommand() { //Установка старой команды (без внесения в журнал команд)
        this.command = this.command_history.at(length - 2);
    }

    setValue(value) { //Установка значения
        this.command.value = value;
        if (this.command.type == 'operation') {
            if (this.command_history.at(length - 1) != undefined && this.command_history.at(length - 1).type == 'instant') {
                return;
            }
            this.calc.setHistory(value);
        } else {
            if (this.command_history.length == 1 && this.command.type == 'instant') this.command.setNewHistory();
            else this.command.setHistory();
        }
    }

    count() { //Выполнение команды
        this.command.execute();
    }
}

export class CalcGUI {
    value = '';
    buuttonsBlock = false;
    constructor(invoker, calc, command_map) {
        this.invoker = invoker;
        this.calc = calc;
        this.command_map = command_map;
    }
    display(result) {
        if (isNaN(Number(result))) {
            this.buuttonsBlock = true;
            this.calc.setNewHistory('');
        }
        document.getElementById('input').value = result;
    }
    processClick(target) {
        const attr = target.getAttribute('operation');
        if (target.classList.contains('numbers-button')) { //Кнопки ввода цифр
            if (this.buuttonsBlock) {
                this.buuttonsBlock = false;
                this.calc.setResult(0);
                this.value = '';
            }
            const newContent = target.textContent;
            if (newContent === '.' && this.value.includes('.')) {
                return;
            }
            if (this.value === '' && newContent === '.') {
                this.value = '0.';
            } else if (this.value === '0' && newContent !== '.') {
                this.value = newContent;
            } else {
                this.value += newContent;
            }
            if (this.invoker.command == null) {
                this.calc.setResult(Number(this.value));
                this.calc.setNewHistory(`${this.calc.getResult()}`);
            }
            this.display(this.value);
        } else if (attr == 'del') { //Стирание операнда
            if (this.value.length > 0) {
                this.value = this.value.slice(0, -1);
                this.display(this.value);
            }
        } else if (attr == 'mr') { //Вывод числа из памяти
            this.display(this.calc.memory_recall());
            this.value = this.calc.memory_recall();
        } else if (!this.buuttonsBlock || attr == 'erase') { //Кнопки операций
            let command = this.command_map.get(attr);
            switch (command.type) {
                case 'instant': //операции, которые проводятся над левым опернадом
                    this.invoker.setCommand(command);
                    this.invoker.setValue(Number(this.value));
                    this.invoker.count();
                    this.value = this.calc.getValue();
                    this.display(this.value);
                    this.invoker.setOldCommand();
                    if (this.invoker.command == null) {
                        this.calc.setResult(this.value);
                    }
                    break;
                case 'operation': //операции, которые проводятся над правым операндом (результатом)
                    if (this.invoker.command != null) {
                        this.invoker.setValue(Number(this.value));
                        this.invoker.count();
                    }
                    this.invoker.setCommand(command);
                    if (attr == 'erase' || attr == 'equal') {
                        this.invoker.count();
                        this.invoker.setCommand(null);
                        this.invoker.command_history = [];
                    }
                    this.value = '';
                    this.display(this.calc.getResult());
                    break;
                case 'memory': //операции над памятью
                    this.invoker.setCommand(command);
                    this.invoker.setValue(Number(document.getElementById('input').value));
                    this.invoker.count();
                    if (isNaN(Number(this.calc.getResult()))) this.display(this.calc.getResult());
                    break;
            }
        }
        document.getElementById('history-line').textContent = this.calc.getHistory();
    }
}
