const screen = document.querySelector('#screen');
const btns = document.querySelectorAll('.btn');
btns.forEach((item) => {
 item.addEventListener('click', (e) => {
 const btnText = e.target.innerText;
 const adjustedText = btnText === '×' ? '*' : btnText === '÷' ? '/' : btnText;
 screen.value += adjustedText;
 });
});
const sin = () => screen.value = Math.sin(screen.value);
const backspace = () => screen.value = screen.value.slice(0, -1);
const del = () => screen.value = '';
const ent = () => {
 screen.value = eval(screen.value);
};
const fact = () => {
 let f = 1;
 for (let i = 1; i <= screen.value; i++) {
 f *= i;
 }
 screen.value = f;
};
document.addEventListener('keydown', (event) => {
 const key = event.key;
 const allowedKeys = [
 '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '-', '*', '/', '.',
'(', ')', '%', '!',
 'Enter', 'Backspace', 'Delete'
 ];
 if (allowedKeys.includes(key)) {
 if (key === 'Enter') {
 ent();
 } else if (key === 'Backspace') {
 backspace();
 } else if (key === 'Delete') {
 del();
 } else if (key === '!') {
 fact();
 } else {
 screen.value += key;
 }
 }
});