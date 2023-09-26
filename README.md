---
icon: home
title: CNIED

copyright: false
footer: CC0 1.0 Universal
---

This is a collaborative project for backing up, collecting, and displaying New Ithkuil example phrases and sentences.

Please use Markdown format (Click [here](https://theme-hope.vuejs.press/guide/markdown/) to learn about extended syntax) and refer to the following example format.

It is best to use SVG format for images. Please name the script image its relevant grammatical category **abbreviation + hyphen-minus + number**.

The md files are located at /guide/, and image files at /.vuepress/public/image/.

Please write two lines of code for each image, separated by one line. This is to adapt to light/dark mode switching.

``` markdown
![](/assets/image/abbr-num.svg#light)

![](/assets/image/abbr-num.svg#dark) {.inverted}
```

Note that every commit triggers Github Action.

## John Quijada's Guidelines

> The examples would be structured the same as on the Ithkuil 2011 website -- the word/phrase/sentence shown in New Ithkuil script (in red), underneath which is the intralinear analysis, underneath which is the English translation in single-quoted italics.
>
> As for the subject matter of the examples, the more wild and surreal the better, as long as there is nothing political, controversial, woke, or pornographic. And I would also appreciate it if there were no pop-culture references or any references to favorite comic characters etc. that would "date" the material in the future.
>
> [...]
>
> At this point I doubt I will have any desire or mental energy to review for accuracy any of the examples provided [to] me — so please ensure that any examples submitted have been thoroughly reviewed and vetted by a person or persons known in the community for their thoroughness/accuracy in making translations into the language. Again, I will let the community decide how to deal with that.

-------

## Example Format

Each example has four parts: the script version, the romanized example, the intralinear analysis and the English translation. I’d also like another person to check each proposed example.

If you are working on an example, mark it here so we don’t accidentally duplicate work!

Format should be something like this:

<div class="indent">
    <dl class="gloss">
        <dt>Igrawileiţrar</dt>
        <dd>DYN-‘eat food’-FAC-<mark>HOR</mark>-NRM/DEL/M/CSL/UNI-EXT<sub>2</sub>/6-NA1<sub>1</sub>/5-IFL</dd>
    </dl>
    <dl class="gloss">
        <dt>oi</dt>
        <dd>PCL</dd>
    </dl>
    <dl class="gloss">
        <dt>eglulôn.</dt>
        <dd>STA-‘illness’-IND-NRM/DEL/M/CSL/UNI-AGC<sub>2</sub>/7-IFL</dd>
    </dl>
    <div class="glend"><q>If only the physician wouldn’t eat his food in one gulp like that.</q></div>
</div>

::: warning (EEDNB)

<abbr>FRA</abbr> is an unofficial abbreviation for Framed relation, as is <abbr>EPR</abbr> for Experiential aspect (<abbr>EXP</abbr> is taken by the bias of the same name)

:::

::: note (EEDNB)

I have marked in red all unfinished categories, please change them to black once done

:::

::: danger (kiepier)

Be sure to use non-default register, extension, essence, aspect, mood, case-scope, and illocution in the examples occasionally

:::

Code example

``` markdown

<div class="indent">
    <dl class="gloss">
        <dt>Igrawileiţrar</dt>
        <dd>DYN-‘eat food’-FAC-<mark>HOR</mark>-NRM/DEL/M/CSL/UNI-EXT<sub>2</sub>/6-NA1<sub>1</sub>/5-IFL</dd>
    </dl>
    <dl class="gloss">
        <dt>oi</dt>
        <dd>PCL</dd>
    </dl>
    <dl class="gloss">
        <dt>eglulôn.</dt>
        <dd>STA-‘illness’-IND-NRM/DEL/M/CSL/UNI-AGC<sub>2</sub>/7-IFL</dd>
    </dl>
    <div class="glend"><q>If only the physician wouldn’t eat his food in one gulp like that.</q></div>
</div>

::: warning (EEDNB)

<abbr>FRA</abbr> is an unofficial abbreviation for Framed relation, as is <abbr>EPR</abbr> for Experiential aspect (<abbr>EXP</abbr> is taken by the bias of the same name)

:::

::: note (EEDNB)

I have marked in red all unfinished categories, please change them to black once done

:::

::: danger (kiepier)

Be sure to use non-default register, extension, essence, aspect, mood, case-scope, and illocution in the examples occasionally

:::

```