// File: Simple Web Framework 1 Create a basic router - 6 kuy.js

/**
 * Клас маршрутизатора для веб-фреймворку.
 * Він дозволяє прив'язувати URL-адреси, HTTP-методи та функції-дії.
 */
let Router = function() {
    // Створюємо об'єкт для зберігання маршрутів
    this.routes = {};
};

/**
 * Прив'язує URL-адресу, HTTP-метод та функцію-дію.
 * Якщо маршрут вже існує, він буде перезаписаний.
 * 
 * @param {string} url - URL-адреса для прив'язки
 * @param {string} method - HTTP-метод (GET, POST і т.д.)
 * @param {function} action - Функція, яка виконується при запиті
 */
Router.prototype.bind = function(url, method, action) {
    // Якщо ще не існує об'єкта для цієї URL-адреси, створюємо його
    if (!this.routes[url]) {
        this.routes[url] = {};
    }
    
    // Прив'язуємо метод до функції
    this.routes[url][method] = action;
};

/**
 * Виконує запит до маршруту.
 * Якщо маршрут існує, викликається відповідна функція.
 * Якщо маршрут не знайдено, повертається повідомлення про помилку.
 * 
 * @param {string} url - URL-адреса запиту
 * @param {string} method - HTTP-метод запиту
 * @return {string|*} Результат виконання дії або повідомлення про помилку
 */
Router.prototype.runRequest = function(url, method) {
    // Перевіряємо, чи існує URL-адреса та метод
    if (this.routes[url] && this.routes[url][method]) {
        // Викликаємо функцію дії та повертаємо результат
        return this.routes[url][method]();
    }
    
    // Якщо маршрут не знайдено, повертаємо помилку
    return 'Error 404: Not Found';
};

module.exports = Router;
