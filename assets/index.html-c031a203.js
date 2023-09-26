import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as e,o as p,c as l,a as n,b as a,d as o,e as i}from"./app-eac1b9ce.js";const c={},u=n("p",null,"This is a collaborative project for backing up, collecting, and displaying New Ithkuil example phrases and sentences.",-1),d=n("p",null,"If you want to update and add content, please note the following conventions.",-1),r={href:"https://theme-hope.vuejs.press/guide/markdown/",target:"_blank",rel:"noopener noreferrer"},k=n("li",null,[n("p",null,[a("It is best to use SVG format for images. Please name the script image its relevant grammatical category "),n("strong",null,"abbreviation + hyphen-minus + number"),a(".")])],-1),g=i(`<p>The md files are located at /guide/, and image files at /.vuepress/public/image/.</p><ul><li>Please write two lines of code for each image, separated by one line. This is to adapt to light/dark mode switching.</li></ul><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>![](/assets/image/abbr-num.svg#light)

![](/assets/image/abbr-num.svg#dark) {.inverted}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>&lt;abbr&gt;...&lt;/abbr&gt;</code> tags mark grammatical category abbreviations (except in glossing texts)</li></ul><p>Note that every commit triggers Github Action.</p><h2 id="john-quijada-s-guidelines" tabindex="-1"><a class="header-anchor" href="#john-quijada-s-guidelines" aria-hidden="true">#</a> John Quijada&#39;s Guidelines</h2><blockquote><p>The examples would be structured the same as on the Ithkuil 2011 website -- the word/phrase/sentence shown in New Ithkuil script (in red), underneath which is the intralinear analysis, underneath which is the English translation in single-quoted italics.</p><p>As for the subject matter of the examples, the more wild and surreal the better, as long as there is nothing political, controversial, woke, or pornographic. And I would also appreciate it if there were no pop-culture references or any references to favorite comic characters etc. that would &quot;date&quot; the material in the future.</p><p>[...]</p><p>At this point I doubt I will have any desire or mental energy to review for accuracy any of the examples provided [to] me — so please ensure that any examples submitted have been thoroughly reviewed and vetted by a person or persons known in the community for their thoroughness/accuracy in making translations into the language. Again, I will let the community decide how to deal with that.</p></blockquote><hr><h2 id="example-format" tabindex="-1"><a class="header-anchor" href="#example-format" aria-hidden="true">#</a> Example Format</h2><p>Each example has four parts: the script version, the romanized example, the intralinear analysis and the English translation. I’d also like another person to check each proposed example.</p><p>If you are working on an example, mark it here so we don’t accidentally duplicate work!</p><p>Format should be something like this:</p><div class="indent"><dl class="gloss"><dt>Igrawileiţrar</dt><dd>DYN-‘eat food’-FAC-<mark>HOR</mark>-NRM/DEL/M/CSL/UNI-EXT<sub>2</sub>/6-NA1<sub>1</sub>/5-IFL</dd></dl><dl class="gloss"><dt>oi</dt><dd>PCL</dd></dl><dl class="gloss"><dt>eglulôn.</dt><dd>STA-‘illness’-IND-NRM/DEL/M/CSL/UNI-AGC<sub>2</sub>/7-IFL</dd></dl><div class="glend"><q>If only the physician wouldn’t eat his food in one gulp like that.</q></div></div><div class="hint-container warning"><p class="hint-container-title">(EEDNB)</p><p><abbr>FRA</abbr> is an unofficial abbreviation for Framed relation, as is <abbr>EPR</abbr> for Experiential aspect (<abbr>EXP</abbr> is taken by the bias of the same name)</p></div><div class="hint-container note"><p class="hint-container-title">(EEDNB)</p><p>I have marked in red all unfinished categories, please change them to black once done</p></div><div class="hint-container danger"><p class="hint-container-title">(kiepier)</p><p>Be sure to use non-default register, extension, essence, aspect, mood, case-scope, and illocution in the examples occasionally</p></div><p>Code example</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>indent<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dl</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>gloss<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dt</span><span class="token punctuation">&gt;</span></span>Igrawileiţrar<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dt</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dd</span><span class="token punctuation">&gt;</span></span>DYN-‘eat food’-FAC-<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mark</span><span class="token punctuation">&gt;</span></span>HOR<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>mark</span><span class="token punctuation">&gt;</span></span>-NRM/DEL/M/CSL/UNI-EXT<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sub</span><span class="token punctuation">&gt;</span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sub</span><span class="token punctuation">&gt;</span></span>/6-NA1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sub</span><span class="token punctuation">&gt;</span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sub</span><span class="token punctuation">&gt;</span></span>/5-IFL<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dd</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dl</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dl</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>gloss<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dt</span><span class="token punctuation">&gt;</span></span>oi<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dt</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dd</span><span class="token punctuation">&gt;</span></span>PCL<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dd</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dl</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dl</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>gloss<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dt</span><span class="token punctuation">&gt;</span></span>eglulôn.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dt</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dd</span><span class="token punctuation">&gt;</span></span>STA-‘illness’-IND-NRM/DEL/M/CSL/UNI-AGC<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sub</span><span class="token punctuation">&gt;</span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sub</span><span class="token punctuation">&gt;</span></span>/7-IFL<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dd</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dl</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>glend<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q</span><span class="token punctuation">&gt;</span></span>If only the physician wouldn’t eat his food in one gulp like that.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>q</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

::: warning (EEDNB)

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>abbr</span><span class="token punctuation">&gt;</span></span>FRA<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>abbr</span><span class="token punctuation">&gt;</span></span> is an unofficial abbreviation for Framed relation, as is <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>abbr</span><span class="token punctuation">&gt;</span></span>EPR<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>abbr</span><span class="token punctuation">&gt;</span></span> for Experiential aspect (<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>abbr</span><span class="token punctuation">&gt;</span></span>EXP<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>abbr</span><span class="token punctuation">&gt;</span></span> is taken by the bias of the same name)

:::

::: note (EEDNB)

I have marked in red all unfinished categories, please change them to black once done

:::

::: danger (kiepier)

Be sure to use non-default register, extension, essence, aspect, mood, case-scope, and illocution in the examples occasionally

:::

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,18);function m(h,v){const s=e("ExternalLinkIcon");return p(),l("div",null,[u,d,n("ul",null,[n("li",null,[n("p",null,[a("Use Markdown format (Click "),n("a",r,[a("here"),o(s)]),a(" to learn about extended syntax) and refer to the following example format.")])]),k]),g])}const w=t(c,[["render",m],["__file","index.html.vue"]]);export{w as default};