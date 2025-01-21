// З використанням властивостей і методів DOM-елементів, напиши скрипт, який:
// 1. Порахує й виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// 2. Для кожного елемента li.item у списку ul#categories знайде й виведе в консоль текст 
//    заголовка елемента (тегу <h2>) і кількість елементів у категорії (усіх <li>, вкладених у 
//    нього).

// 1.
const categoriesList = document.querySelector('#categories'); // посилання на ul#categories
const categoryItems = categoriesList.querySelectorAll('.item'); // створюємо перелік на всі елементи li з класом item
console.log(`Number of categories: ${categoryItems.length}`); // виводимо кількість категорій

// 2. 
// Перебираємо кожен елемент li.item
categoryItems.forEach(item => {
  const categoryTitle = item.querySelector('h2').textContent; // Знаходимо текст заголовка (тег <h2>)
  const categoryElementsCount = item.querySelectorAll('ul li').length;   // Знаходимо кількість вкладених елементів <li>

  // Виводимо результат у консоль
  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${categoryElementsCount}`);
});