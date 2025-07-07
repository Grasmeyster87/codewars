/*

Here are some classic Christmas cracker jokes.

There is a made up API URL (http://great.jokes/christmas) that you can call to a get list of Christmas jokes in JSON format.
Your challenge

    Write an async function which takes an apiUrl and jokeId which returns a promise.
    The data will need to be filtered to get the specified joke by id.
    When you got the joke it should be accessible through a simple API of saySetup and sayPunchLine methods.

Handle error cases

    If a joke can't be found throw an error message in this format new Error('No jokes found id: {jokeId}').
    Getting jokes from a another API URL may return a different data shape, throw this error message new Error('No jokes at url: {url}') for an unexpected shape.

Throw error in a promise style
Info

Get the data using the mocked fetch(url) function, which implements the basics of the fetch api. Learn about fetch. Learn about async/await.

Joke data shape:

{
  jokes: [{ 
    id: 101,
    setup: "Who is Santa's favorite singer?",
    punchLine: "Elf-is Presley!"
  },
...moreJokes]
// Use for your tests ^^
//---------------------------------------------------------------------------
Ось кілька класичних різдвяних жартів.

Існує вигадана URL-адреса API (http://great.jokes/christmas), 
яку можна викликати, щоб отримати список різдвяних жартів у форматі JSON.
Ваше завдання

Напишіть асинхронну функцію, яка приймає apiUrl та jokeId, що повертає обіцянку. 
Дані потрібно буде відфільтрувати, щоб отримати вказаний жарт за ідентифікатором. 
Коли ви отримаєте жарт, він має бути доступний через простий API методів saySetup та sayPunchLine.

Обробка випадків помилок

Якщо жарт не знайдено, видайте повідомлення про помилку в такому форматі new Error('Жарти не знайдено id: {jokeId}').

Отримання жартів з іншої URL-адреси API може повернути іншу форму даних, 
видайте це повідомлення про помилку new Error('Жарти за адресою url: {url}') для неочікуваної форми.

Видайте помилку в стилі обіцянки
Інформація

Отримайте дані за допомогою зловмисної функції fetch(url), 
яка реалізує основи fetch api. Дізнайтеся про fetch. Дізнайтеся про async/await.

Форма даних жарту:

{
jokes: [{
id: 101,
setup: "Хто улюблений співак Санти?",
punchLine: "Ельф - це Преслі!"
},
...moreJokes]
// Використовуйте для своїх тестів ^^
*/

function sayJoke(apiUrl, jokeId){
  // use mocked `fetch(url)`
    return {
        saySetup () { return 'setup'; },
        sayPunchLine() { return 'punchline'; }
    };
}

async function sayJoke(apiUrl, jokeId) {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    if (!data.jokes || !Array.isArray(data.jokes)) {
      throw new Error(`No jokes at url: ${apiUrl}`);
    }

    const joke = data.jokes.find(j => j.id === jokeId);

    if (!joke) {
      throw new Error(`No jokes found id: ${jokeId}`);
    }

    return {
      saySetup() {
        return joke.setup;
      },
      sayPunchLine() {
        return joke.punchLine;
      }
    };
  } catch (error) {
    // Promise-style error throw
    return Promise.reject(error);
  }
}

