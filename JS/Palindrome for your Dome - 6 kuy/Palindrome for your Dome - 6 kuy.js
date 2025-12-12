function palindrome(string) {
  // Переводимо в нижній регістр і залишаємо тільки букви та цифри
  const cleaned = string.toLowerCase().replace(/[^a-z0-9]/g, "");
  
  // Порівнюємо з реверсом
  return cleaned === cleaned.split("").reverse().join("");
}

module.exports = palindrome;