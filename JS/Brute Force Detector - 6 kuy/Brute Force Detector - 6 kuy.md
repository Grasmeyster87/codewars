<div class="markdown prose max-w-none mb-8" id="description"><p>You're analyzing authentication logs. Each log entry is a string like:</p>
<pre><code>192.168.1.1 LOGIN_FAIL user=admin
192.168.1.1 LOGIN_SUCCESS user=admin
10.0.0.5 LOGIN_FAIL user=root
</code></pre>
<p>An IP is suspicious if it has 3 or more consecutive failures without a success in between. Return a list of suspicious IPs, sorted alphabetically.</p>
<pre><code class="language-python"><span class="cm-variable">logs</span> <span class="cm-operator">=</span> [
    <span class="cm-string">"192.168.1.1 LOGIN_FAIL user=admin"</span>,
    <span class="cm-string">"192.168.1.1 LOGIN_FAIL user=admin"</span>,
    <span class="cm-string">"192.168.1.1 LOGIN_FAIL user=root"</span>,
    <span class="cm-string">"10.0.0.5 LOGIN_FAIL user=test"</span>,
    <span class="cm-string">"10.0.0.5 LOGIN_SUCCESS user=test"</span>
]
<span class="cm-variable">detect_brute_force</span>(<span class="cm-variable">logs</span>)  <span class="cm-comment"># ["192.168.1.1"]</span>
</code></pre>
<p>The <code>10.0.0.5</code> IP had a failure then a success, so its streak reset. The <code>192.168.1.1</code> IP hit 3 failures in a row - busted. Only respond with a list of the suspicious IPs. </p>
<p>A success resets that IP's failure count to zero. Empty list returns empty list.</p>
<p>PS. You do not need to validate the IP addresses. </p>
</div>

<br> <hr>  <br>

<div class="markdown prose max-w-none mb-8" id="description"><p>Вы анализируете журналы аутентификации. Каждая запись в журнале представляет собой строку следующего вида:</p>
<pre><code>192.168.1.1 LOGIN_FAIL user=admin
192.168.1.1 LOGIN_SUCCESS user=admin
10.0.0.5 LOGIN_FAIL user=root
</code></pre>
<p>IP-адрес считается подозрительным, если у него 3 или более последовательных неудачных попыток без единого успешного результата между ними. Возвращает список подозрительных IP-адресов, отсортированных по алфавиту.</p>
<pre><code class="language-python"><span class="cm-variable">logs</span> <span class="cm-operator">=</span> [
<span class="cm-string">"192.168.1.1 LOGIN_FAIL user=admin"</span>,

<span class="cm-string">"192.168.1.1 LOGIN_FAIL user=admin"</span>,

<span class="cm-string">"192.168.1.1 LOGIN_FAIL user=root"</span>,

<span class="cm-string">"10.0.0.5 LOGIN_FAIL user=test"</span>,

<span class="cm-string">"10.0.0.5 LOGIN_SUCCESS user=test"</span>
]
<span class="cm-variable">detect_brute_force</span>(<span class="cm-variable">logs</span>) <span class="cm-comment"># ["192.168.1.1"]</span>
</code></pre>
<p>IP-адрес <code>10.0.0.5</code> сначала показал сбой, затем успех, поэтому его серия сбросилась. IP-адрес <code>192.168.1.1</code> показал 3 сбоя подряд - обнаружен. Отвечайте только списком подозрительных IP-адресов.</p>
<p>Успех сбрасывает счетчик сбоев этого IP-адреса до нуля. Пустой список возвращает пустой список.</p>
<p>P.S. Вам не нужно проверять IP-адреса.</p>
</div>