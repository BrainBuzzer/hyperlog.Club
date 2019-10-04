---
title: CSS Inheritance
slug: htmlcss/css-inheritance
author: Aditya Giri, Marksheet.io
resource: htmlcss
---

Let's say we want to change the **text color** of a webpage. It would be tedious to specify a color for _every_ HTML element:

```css
p,
ul,
ol,
li,
h1,
h2,
h3,
h4,
h5,
h6{ color: grey;}
```

### Value propagation

The `color` value can be inherited from an **ancestor**. Considering we want to alter the _whole_ webpage, we will choose the ancestor of all HTML elements, the `body` tag:

```css
body{ color: grey;}
```

All child and descendant elements will **inherit** the value `grey` from their common ancestor `body`, which naturally encompasses _all_ elements.

<div class="info">
We could also use the <code>html</code> tag.
</div>

### Inherited properties

Only a few CSS properties can be inherited from ancestors. They are mainly **text** properties:

* text color
* font (family, size, style, weight)
* line-height

<div class="info">
Some HTML elements don't inherit from their ancestors. Links for example don't inherit the <code>color</code> property.
</div>