
//const Format = { tags: ['div', 'h1', 'p', 'span'] } // коментується для проходження тестів

const TAGS = Format.tags;

/**
 * Основна функція, яка створює метод форматування.
 * @param {string[]} tagChain - Масив тегів.
 * @returns {Function}
 */
function createFormatter(tagChain = []) {
    
    // 1. Створюємо функцію-обгортку (це не змінилося).
    const formatter = function(...content) {
        const innerContent = content.join('');
        return tagChain.reduceRight((acc, tag) => {
            return `<${tag}>${acc}</${tag}>`;
        }, innerContent);
    };

    // 2. (ВИПРАВЛЕНО) Додаємо "ліниві" геттери для ланцюгового виклику.
    TAGS.forEach(tag => {
        Object.defineProperty(formatter, tag, {
            // "get" означає, що цей код виконається тільки
            // коли ми спробуємо *отримати* цю властивість (напр., Format.div.h1)
            get() {
                // Створюємо і повертаємо новий форматор з доданим тегом
                return createFormatter([...tagChain, tag]);
            },
            // configurable: true дозволяє уникнути деяких проблем у середовищах тестування
            configurable: true 
        });
    });

    return formatter;
}

// 3. Наповнюємо існуючий об'єкт Format початковими методами (це не змінилося).
TAGS.forEach(tag => {
    Format[tag] = createFormatter([tag]);
});