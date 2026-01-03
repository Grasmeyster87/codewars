<div class="markdown prose max-w-none mb-8" id="description"><p>The cuckoo bird pops out of the cuckoo clock and chimes once on the quarter hour, half hour, and three-quarter hour. At the beginning of each hour (1-12), it chimes out the hour. Given the current time and a positive integer <code>n,</code> determine the time when the cuckoo bird has chimed <code>n</code> times. </p>
<p>Inputs: <br>
<code>initial_time</code> - a string in the format <code>"HH:MM",</code> where <code>1 ≤ HH ≤ 12</code> and <code>0 ≤ MM ≤ 59,</code> with leading 0’s if necessary. <br>
<code>n</code> - an integer representing the target number of chimes, with <code>1 ≤ n ≤ 200.</code><br>
Output: The time when the cuckoo bird has chimed <code>n</code> times - a string in the same format as <code>initial_time</code>.</p>
<p>If the cuckoo bird chimes at <code>initial_time,</code> include those chimes in the count. If the <code>n'th</code>chime is reached on the hour, report the time at the start of that hour (i.e. assume the cuckoo finishes chiming before the minute is up).</p>
<p>Example: <code>"03:38", 19</code> should return <code>"06:00".</code> <br>
Explanation: It chimes once at <code>"03:45",</code>4 times at <code>"04:00",</code> once each at <code>"04:15", "04:30", "04:45",</code> 5 times at <code>"05:00",</code> and once each at <code>"05:15", "05:30", "05:45".</code> At this point it has chimed 16 times, so the 19th chime occurs when it chimes 6 times at <code>"06:00".</code></p>
<p>Source: International Collegiate Programming Contest, North Central North American Regional, 2023.</p>
<p>Related Kata: <a href="https://www.codewars.com/kata/58485a43d750d23bad0000e6" data-turbolinks="false" target="_blank">Fizz Buzz Cuckoo Clock</a></p>
</div>

<br><hr><br>

<div class="markdown prose max-w-none mb-8" id="description"><p>Кукушка выпрыгивает из часов с кукушкой и отбивает время один раз в четверть часа, полчаса и три четверти часа. В начале каждого часа (1-12) она отбивает час. Зная текущее время и положительное целое число <code>n</code>, определите время, когда кукушка отбила время <code>n</code> раз.</p>
<p>Входные данные: <br>
<code>initial_time</code> - строка в формате <code>"HH:MM",</code> где <code>1 ≤ HH ≤ 12</code> и <code>0 ≤ MM ≤ 59,</code> с ведущими нулями при необходимости. <br>
<code>n</code> - целое число, представляющее целевое количество звонков, где <code>1 ≤ n ≤ 200.</code><br>
Выходные данные: Время, когда кукушка прозвонила <code>n</code> раз - строка в том же формате, что и <code>initial_time</code>.</p>
<p>Если кукушка прозвонила в <code>initial_time</code>, включите эти звонки в подсчет.</p> Если n-й удар колокола происходит в начале часа, сообщите время на начало этого часа (т.е. предположите, что кукушка заканчивает бить колокол до истечения минуты).
Пример: <code>03:38", 19</code> должно вернуть <code>06:00".</code>
Пояснение: Он бьет один раз в <code>03:45",</code> 4 раза в <code>04:00",</code> по одному разу в <code>04:15", "04:30", "04:45",</code> 5 раз в <code>05:00",</code> и по одному разу в <code>05:15", "05:30", "05:45".</code> К этому моменту он пробил 16 раз, поэтому 19-й удар происходит, когда он пробивает 6 раз. в 06:00.</code></p>
<p>Источник: Международный студенческий конкурс по программированию, Северо-Центральный регион Северной Америки, 2023.</p>
<p>Связанная задача: <a href="https://www.codewars.com/kata/58485a43d750d23bad0000e6" data-turbolinks="false" target="_blank">Часы с кукушкой Fizz Buzz</a></p>
</div>