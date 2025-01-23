// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input)
// підставляє його поточне значення в span#name-output як ім’я для привітання. 
// Обов’язково очищай значення в інпуті по краях від пробілів . 
// Якщо інпут порожній або містить лише пробіли, то замість імені у спан має 
// підставлятися рядок "Anonymous".


// <input type="text" id="name-input" placeholder="Please enter your name" />
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1>

// Отримуємо елементи
const nameInput = document.getElementById('name-input');
const nameOutput = document.getElementById('name-output');

// Додаємо обробник події input для input#name-input
nameInput.addEventListener('input', () => {
  // Очищаємо значення інпуту від пробілів по краях
  const name = nameInput.value.trim();
  
  // Якщо значення інпуту порожнє, замість імені встановлюємо "Anonymous"
  nameOutput.textContent = name ? name : 'Anonymous';
});