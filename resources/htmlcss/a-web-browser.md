---
title: A Web Browser
slug: htmlcss/a-web-browser
author: Aditya Giri, Marksheet.io
resource: htmlcss
---

You're currently using a _Web browser_ to read this _Webpage_ written in _HTML_.

### HTML documents

**Webpages** are **HTML documents**, like other files on your computer. They are just text files with a `.html` extension.

On your computer, you probably have different **types** of files:

* `.jpg` for images
* `.mp3` for music
* `.avi` for videos
* `.doc` for Word documents
* `.xls` for Excel spreadsheets

Each of these _types_ of files can be opened by a specific **program**. Some of these programs can only _open_ these files, while others can both _open_ and _create_ files.

By default, **file extensions** are hidden. In this tutorial, we'll need to be able to edit these extensions. So follow these instructions to display file extensions:
**Windows**: [Show or hide file name extensions](https://windows.microsoft.com/en-us/windows/show-hide-file-name-extensions)
**Mac**: [Show and hide filename extensions](https://support.apple.com/kb/PH10845?locale=en_US)

For example:

* iTunes can **open** `.mp3` files but can not create them.
* Microsoft Word can however both **open** and **create** `.doc` files.

<div class="table">
  <table>
    <tr>
      <th>Program</th>
      <th>Type</th>
      <th>
        Can <em>open</em> these files
      </th>
      <th>
        Can also <em>create</em> these files?
      </th>
    </tr>
    <tr>
      <td>Microsoft Word</td>
      <td>Word editor</td>
      <td>
        <code>.doc</code>
        <code>.docx</code>
      </td>
      <td class="yes"><span>Yes</span></td>
    </tr>
    <tr>
      <td>Paint</td>
      <td>Graphics</td>
      <td>
        <code>.jpg</code>
        <code>.gif</code>
        <code>.bmp</code>
      </td>
      <td class="yes"><span>Yes</span></td>
    </tr>
    <tr>
      <td>VLC</td>
      <td>Video player</td>
      <td>
        <code>.avi</code>
        <code>.mpg</code>
      </td>
      <td class="no">No</td>
    </tr>
    <tr>
      <td>iTunes</td>
      <td>Music player</td>
      <td>
        <code>.mp3</code>
        <code>.wav</code>
        <code>.aiff</code>
      </td>
      <td class="no">No</td>
    </tr>
    <tr>
      <td>Firefox</td>
      <td>Web browser</td>
      <td>
        <code>.html</code>
      </td>
      <td class="no">No</td>
    </tr>
    <tr>
      <td>Notepad++</td>
      <td>Text editor</td>
      <td>
        <code>.text</code>
        <code>.html</code>
      </td>
      <td class="yes"><span>Yes</span></td>
    </tr>
  </table>
</div>

The program used to **open** HTML documents is a **browser**, like Firefox or Google Chrome.
The program used to **create** HTML documents is a **text editor**, like Notepad++ or Sublime Text.

### HTML source code

HTML code looks like this:

```html
<p>Hello World</p>
```

This code is written with a **text editor**. You can see the tags `<p>` and `</p>` that stand for **paragraph**.

When opened by a **browser**, these tags are **not displayed** but rather **interpreted** by the browser:

<div class="result">
  <p>Hello World</p>
</div>

The browser sees the `<p>` and `</p>` tags and understands that `Hello World` is a **paragraph**.

Remember that an HTML document can be opened in **2 ways**:

* by a **text editor** who _sees_ the source code
* by a **browser** who _interprets_ the source code

### List of Web browsers

As the Web has become the primary use of the internet, every computer and smartphone comes with a default browser installed.

The most popular ones are:

* [**Chrome**](https://www.google.com/chrome/) 
* [**Firefox**](https://www.mozilla.org/firefox/)
* [**Microsoft Edge**)](https://www.microsoft.com/windows/microsoft-edge)
* [**Opera**](https://www.opera.com/) 
* [**Safari**](https://www.apple.com/safari/) 

### List of text editors

The most popular ones are:

* [**Sublime Text**](https://www.sublimetext.com/)
* [**Notepad++**](https://notepad-plus-plus.org/)
* [**Sublime Text**](https://www.sublimetext.com/)

You will need to install one to **write** HTML and CSS.

While the rest of this tutorial doesn't require to write any code, it's **recommended** to try out the examples yourself.
