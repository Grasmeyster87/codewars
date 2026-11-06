/*function find(object, path) {
    // 1. Розбиваємо рядок 'user.name.first' на масив ['user', 'name', 'first']
    const keys = path.split('.');
    
    let current = object;

    for (let key of keys) {
        // Якщо на якомусь етапі ми зустрінемо undefined, повертаємо undefined, 
        // щоб уникнути помилки "cannot read property of undefined"
        if (current === undefined || current === null) {
            return undefined;
        }
        // Переходимо на рівень глибше
        current = current[key];
    }

    return current;
}
*/
function find(object, path){
    return path.split('.').reduce((acc, key) => {
        if (acc !== null && typeof acc === 'object' && Object.prototype.hasOwnProperty.call(acc, key)) {
            return acc[key];
        }return undefined;
    }, object);
}


module.exports = find;
