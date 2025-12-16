<div class="markdown prose max-w-none mb-8" id="description"><p>When landing an airplane manually, the pilot knows which runway he is using and usually has up to date wind information (speed and direction). This information alone does not help the pilot make a safe landing; what the pilot really needs to know is the speed of headwind, how much crosswind there is and from which side the crosswind is blowing relative to the plane.</p>
<p>Let's imagine there is a system in the ATC tower with speech recognition that works so that when a pilot says "wind info" over the comms, the system will respond with a helpful message about the wind.</p>
<p>Your task is to write a function that produces the response before it is fed into the text-to-speech engine.</p>
<p>Input: </p>
<ul>
<li>runway (string: "NN[L/C/R]"). NN is the runway's heading in tens of degrees. A suffix of L, C or R may be present and should be ignored. NN is between 01 and 36.</li>
<li>wind_direction (int). Direction wind is blowing from in degrees. Between 0 and 359.</li>
<li>wind_speed (int). Wind speed in knots</li>
</ul>
<p>Output:</p>
<ul>
<li>a string in the following format: <code>"(Head|Tail)wind N knots. Crosswind N knots from your (left|right)."</code></li>
</ul>
<p>The wind speeds must be correctly rounded integers. If the rounded headwind component is 0, "Head" should be used. Similarly, "right" in case crosswind component is 0.</p>
<p>Calculating crosswind and headwind:</p>
<pre><code>A = Angle of the wind from the direction of travel (radians)
WS = Wind speed
CW = Crosswind
HW = Headwind

CW = sin(A) * WS
HW = cos(A) * WS
</code></pre>
<p>More information about wind component calculation:
<a href="http://en.wikipedia.org/wiki/Tailwind" data-turbolinks="false" target="_blank">http://en.wikipedia.org/wiki/Tailwind</a></p>
</div>

<hr>

<div class="markdown prose max-w-none mb-8" id="description"><p>При ручной посадке самолета пилот знает, какую взлетно-посадочную полосу он использует, и обычно располагает актуальной информацией о ветре (скорость и направление). Однако одной этой информации недостаточно для безопасной посадки; пилоту действительно необходимо знать скорость встречного ветра, силу бокового ветра и направление его ветра относительно самолета.</p>
<p>Представим, что в диспетчерской вышке есть система распознавания речи, которая работает таким образом, что когда пилот произносит «информация о ветре» по связи, система отвечает полезным сообщением о ветре.</p>
<p>Ваша задача — написать функцию, которая генерирует ответ до того, как он будет передан в систему преобразования текста в речь.</p>
<p>Входные данные:</p>
<ul>
<li>взлетно-посадочная полоса (строка: "NN[L/C/R]"). NN — это направление взлетно-посадочной полосы в десятках градусов. Может присутствовать суффикс L, C или R, который следует игнорировать. NN находится в диапазоне от 01 до 36.</li>
<li>wind_direction (int). Направление ветра в градусах. От 0 до 359.</li>
<li>wind_speed (int). Скорость ветра в узлах.</li>
</ul>
<p>Выход:</p>
<ul>
<li>строка в следующем формате: <code>"(Head|Tail)wind N knots. Crosswind N knots from your (left|right)."</code></li>
</ul>
<p>Скорости ветра должны быть правильно округленными целыми числами. Если округленная составляющая встречного ветра равна 0, следует использовать "Head". Аналогично, «справа» в случае, если составляющая бокового ветра равна 0.</p>
<p>Расчет бокового и встречного ветра:</p>
<pre><code>A = Угол ветра относительно направления движения (радианы)
WS = Скорость ветра
CW = Боковой ветер
HW = Встречный ветер

CW = sin(A) * WS
HW = cos(A) * WS
</code></pre>
<p>Дополнительная информация о расчете составляющей ветра:
<a href="http://en.wikipedia.org/wiki/Tailwind" data-turbolinks="false" target="_blank">http://en.wikipedia.org/wiki/Tailwind</a></p>
</div>