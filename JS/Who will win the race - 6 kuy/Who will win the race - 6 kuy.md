<div class="markdown prose max-w-none mb-8" id="description"><h1 id="who-will-win-the-race">Who Will Win the Race?</h1>
<p>A race has started! You need to determine who will win (if anyone).</p>
<p>Each racer has a set speed, given in the form of a string. They accelerate to this speed instantly and stay at it consistently for the entire race.</p>
<p>Pay attention that this race is not very fair, as there is not a set distance for everyone to run. The distance each racer needs to run to get to the finish line will be given as a string, which will need to be parsed to obtain the speed.</p>
<h2 id="your-task">Your Task:</h2>
<p>Create the function <code>whoWillWin</code> that will predict what will happen in the race and return it as a string.</p>
<h2 id="input">Input:</h2>
<p>You are given the array <code>arr</code> of racers.</p>
<p>Each racer is an object formatted like this: <code>{name:"Racer", speed:"1 meter(s) per second", distanceToRun:"1000 meters"}</code></p>
<p>Note that the values of <code>speed</code> and <code>distanceToRun</code> will be strings, so you will need to parse out the numbers to get useful values.</p>
<p>All racers will be valid and there will be no copies of names, but the array might be empty, in which case you should return the string <code>"No one raced!"</code></p>
<h2 id="output">Output:</h2>
<p>If no racers are present (arr is empty), return the string <code>"No one raced!"</code></p>
<p>If a racer starts at or beyond the finish line (<code>distanceToRun &lt;= 0</code>), or is not running forwards (<code>speed &lt;= 0</code>), they are disqualified.</p>
<p>If all racers are disqualified, return the string <code>"Everyone was disqualified!"</code></p>
<p>If someone finished the race, return the name of the winner and the time they finished rounded to the nearest second: <code>"Racer won the race in 1000 second(s)!"</code></p>
<p>If the race was a tie, return the string <code>"N people tied in S second(s)!"</code>, <code>N</code> being the number of people who tied and <code>S</code> being the time they finished in.</p>
<p>Good luck!</p>
</div>

<br><hr><br>

<div class="markdown prose max-w-none mb-8" id="description"><h1 id="who-will-win-the-race">Хто виграє гонку?</h1>
<p>Гонка розпочалася! Вам потрібно визначити, хто переможе (якщо хтось переможе).</p>
<p>Кожен гонщик має встановлену швидкість, задану у вигляді рядка. Вони миттєво розганяються до цієї швидкості та постійно підтримують її протягом усієї гонки.</p>
<p>Зверніть увагу, що ці гонки не дуже справедливі, оскільки немає встановленої дистанції для всіх. Відстань, яку кожен гонщик має пробігти, щоб дістатися до фінішу, буде задана у вигляді рядка, який потрібно буде проаналізувати, щоб отримати швидкість.</p>
<h2 id="your-task">Ваше завдання:</h2>
<p>Створіть функцію <code>whoWillWin</code>, яка передбачатиме, що станеться в гонці, і повертатиме її у вигляді рядка.</p>
<h2 id="input">Вхідні дані:</h2>
<p>Вам задано масив <code>arr</code> гонщиків.</p>
<p>Кожен гонщик – це об'єкт, відформатований таким чином: <code>{name:"Racer", speed:"1 метр(с) за секунду", distanceToRun:"1000 метрів"</code></p>
<p>Зверніть увагу, що значення <code>speed</code> та <code>distanceToRun</code> будуть рядками, тому вам потрібно буде проаналізувати числа, щоб отримати корисні значення.</p>
<p>Усі гонщики будуть дійсними, і не буде жодних копії імен, але масив може бути порожнім, і в такому разі слід повернути рядок <code>"No one raced!"</code></p>
<h2 id="output">Вивід:</h2>
<p>Якщо гонщиків немає (arr порожній), повернути рядок <code>"No one raced!"</code></p>
<p>Якщо гонщик стартує на фінішній лінії або за нею (<code>distanceToRun &lt;= 0</code>), або не біжить вперед (<code>speed &lt;= 0</code>), він дискваліфікується.</p>
<p>Якщо всі гонщики дискваліфіковані, повернути рядок <code>"Everyone was disqualified!"</code></p>
<p>Якщо хтось фінішував у забігу, повернути ім'я переможця та час фінішу, округлений до найближчої секунди: <code>"Racer won the race in 1000 second(s)!"</code></p>
<p>Якщо забіг закінчився внічию, повернути рядок <code>"N люди зрівнялися за S секунду(и)!"</code>, де <code>N</code> – кількість людей, які зрівнялися, а <code>S</code> – час, за який вони фінішували.</p>
<p>Удачі!</p>
</div>