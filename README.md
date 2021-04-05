# How to turn any GitHub repo into a CDN

> Today I discovered jsDeliver, a service that let's you turn any GitHub repository into a CDN.
Here's how it works.
 The base URL is <https://cdn.jsdelivr.net/gh/{username}/{repo}/>, where you replace {username} with the GitHub username and {repo} with the repository name for the project. Append that URL with the path to the file you want to access in the project.


Here's how it works.

1.  The base URL is `https://cdn.jsdelivr.net/gh/{username}/{repo}/`, where you replace `{username}` with the GitHub username and `{repo}` with the repository name for the project.
2.  Append that URL with the path to the file you want to access in the project. For example, for this repo: the style file is located in the root directory. You'd use this. `html ```<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/bgoonz/GIT-CDN-FILES/mdn-article.css">```

But where this really shines is for use with other peoples' OSS projects when a CDN isn't provided but you need a quick and easy way to load the code into your site.

jsDelivr also supports NPM and WordPress.

list:

```
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/bgoonz/GIT-CDN-FILES/mdn-article.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/bgoonz/GIT-CDN-FILES/code-highlight.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/bgoonz/GIT-CDN-FILES/gradient.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/bgoonz/GIT-CDN-FILES/table-of-contents.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/bgoonz/GIT-CDN-FILES/markdown-to-html-style.css">



<script async defer src="https://cdn.jsdelivr.net/gh/bgoonz/GIT-CDN-FILES/table-of-contents.js"></script>
<script async defer src="https://cdn.jsdelivr.net/gh/bgoonz/GIT-CDN-FILES/highlight.js"></script>
<script async defer src="https://cdn.jsdelivr.net/gh/bgoonz/GIT-CDN-FILES/table-of-contents.js"></script>
<script async defer src="https://cdn.jsdelivr.net/gh/bgoonz/GIT-CDN-FILES/copy-2-clip.js"></script>




```



## Other Popular CDN Endpoints:


> [Underscore.js](http://underscorejs.org/) is a library of JavaScript functions that are useful for common programming tasks. This library doesn't require you to extend any existing built-in objects as it takes advantage of functional programming design. Underscore.js provides **over 100 functions** that support both common functional helpers and more specialized tasks.

```

<script src="https://cdnjs.cloudflare.com/ajax/libs/underscore.js/x.y.z/underscore-min.js"></script>


```


[Moment.js](http://momentjs.com/) is an open source library that allows you to parse, validate, manipulate and display dates in JavaScript. This library can be run from within a browser or in a Node.js application.

For users running the library from within a browser, a [Moment.js CDN](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/support/moment-js-cdn) combination can be used when referencing the file within your HTML. For users referencing from a third party CDN, the following link can be used (ensure that you first check for the latest version **x.y.z**).

```

    <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/x.y.z/moment.min.js"></script>
    
    
    ```
    
    
    
    ---
    
[React](https://facebook.github.io/react/) is an open source JavaScript library widely used for building UIs. The project is currently maintained by Facebook, Instagram and a large community of developers. React also has a sister library called [React Native](https://facebook.github.io/react-native/) which allows iOS and Android applications to take advantage of the React architecture.
