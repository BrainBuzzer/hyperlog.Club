---
title: CSS font shorthand
slug: htmlcss/css-font-shorthand
author: Aditya Giri, Marksheet.io
resource: htmlcss
---

In CSS, some properties can be **grouped** together under another property, to save time and space. The `font` property regroups (in this particular order):

* `font-style`
* `font-variant`
* `font-weight`
* `font-size`
* `line-height`
* `font-family`

You can thus define 6 properties through a single one:

```css
body{ font: italic small-caps bold 16px/1.5 Arial, sans-serif;}
```

They have to be written in this particular order and there must be a slash `/` between the `font-size` and the `line-height`.

Although I've defined all 6 properties, only the `font-size` and `font-family` are mandatory. You can thus omit to define the other properties if you intend to keep their **default** values:

```css
body{ font: bold 16px/1.5 Arial, sans-serif;}
```

<div class="info">
Because <code>font-style</code> and <code>font-variant</code> have not been defined, they'll use their default value <code>normal</code>.
</div>

Beware! If you've previously define one of the font properties and use the `font` shorthand afterwards, it will **override** the previously defined values.

```css
body{ font-size: 16px; line-height: 1.5;}
ul{ font: 14px Georgia, serif;}
```

<div class="info">
In the <code>font</code> shorthand, the <code>line-height</code> has not been defined, and will lose its ancestor's value of <code>1.5</code> and will revert to its default value <code>medium</code> (which is usually <code>1.2</code>).
</div>

Other shorthand properties exist, like `background`, `border` and `margin`.