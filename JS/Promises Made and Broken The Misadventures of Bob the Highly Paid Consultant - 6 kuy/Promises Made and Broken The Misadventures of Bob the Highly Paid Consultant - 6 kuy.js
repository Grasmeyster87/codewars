async function submitOrder(user) {
  // Отримуємо кошик та профіль користувача паралельно (обидва — async)
  const [shoppingCart, profile] = await Promise.all([
    OrderAPI.getShoppingCartAsync(user),
    CustomerAPI.getProfileAsync(user)
  ]);

  // Дістаємо ZIP-код з профілю
  const zipCode = profile.zipCode;

  // Обчислюємо вартість доставки (синхронна функція)
  const shippingRate = calculateShipping(shoppingCart, zipCode);

  // Відправляємо замовлення (async)
  const orderSuccessful = await OrderAPI.placeOrderAsync(shoppingCart, shippingRate);

  console.log(`Your order ${orderSuccessful ? "was" : "was NOT"} placed successfully`);
}