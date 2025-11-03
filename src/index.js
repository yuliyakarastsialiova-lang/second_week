import './assets/css/style.css';
import * as Command from './assets/command.js';

const calc = new Command.Calculator();
const invoker = new Command.Invoker(calc);
const map = new Map();
map.set('add', new Command.Addition(calc, 'operation'));
map.set('sub', new Command.Substraction(calc, 'operation'));
map.set('mul', new Command.Multiply(calc, 'operation'));
map.set('div', new Command.Division(calc, 'operation'));
map.set('sqrtxy', new Command.SqrtXY(calc, 'operation'));
map.set('expy', new Command.ExpanitationY(calc, 'operation'));
map.set('negative', new Command.Negative(calc, 'instant'));
map.set('factorial', new Command.Factorial(calc, 'instant'));
map.set('reverse', new Command.Reverse(calc, 'instant'));
map.set('sqrtx2', new Command.SqrtX2(calc, 'instant'));
map.set('sqrtx3', new Command.SqrtX3(calc, 'instant'));
map.set('exp2', new Command.Expanitation2(calc, 'instant'));
map.set('exp3', new Command.Expanitation3(calc, 'instant'));
map.set('exp10', new Command.Expanitation10(calc, 'instant'));
map.set('percent', new Command.Percent(calc, 'instant'));
map.set('equal', new Command.Equal(calc, 'operation'));
map.set('erase', new Command.Erase(calc, 'operation'));
map.set('ms', new Command.MemorySave(calc, 'memory'));
map.set('mc', new Command.MemoryClear(calc, 'memory'));
map.set('mplus', new Command.MemoryPlus(calc, 'memory'));
map.set('mminus', new Command.MemoryMinus(calc, 'memory'));
const calcGUI = new Command.CalcGUI(invoker, calc, map);

document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.getElementById('calc-buttons');

    buttons.onclick = function (event) {
        if (event.target.tagName === 'BUTTON') {
            calcGUI.processClick(event.target);
        }
    };

    let isMenuOpen = false;
    document.getElementById('menu-icon').addEventListener('click', function () {
        if (!isMenuOpen) {
            document.getElementById('theme-panel').style.right = '0';
            isMenuOpen = true;
        } else {
            document.getElementById('theme-panel').style.right = '-260px';
            isMenuOpen = false;
        }
    });

    let theme_buttons = document.getElementById('theme-buttons');
    let children = theme_buttons.children;
    theme_buttons.addEventListener('click', function (event) {
        let target = event.target;
        if (target.tagName === 'BUTTON') {
            document.body.setAttribute('data-theme', target.getAttribute('theme'));
            for (let i = 0; i < children.length; i++) {
                children[i].classList.remove('choosen-button');
            }
            target.classList.add('choosen-button');
        }
    });
});
