# How to turn any GitHub repo into a CDN

> Today I discovered jsDeliver, a service that let's you turn any GitHub repository into a CDN.
Here's how it works.
 The base URL is <https://cdn.jsdelivr.net/gh/{username}/{repo}/>, where you replace {username} with the GitHub username and {repo} with the repository name for the project. Append that URL with the path to the file you want to access in the project.


Here's how it works.

1.  The base URL is `https://cdn.jsdelivr.net/gh/{username}/{repo}/`, where you replace `{username}` with the GitHub username and `{repo}` with the repository name for the project.
2.  Append that URL with the path to the file you want to access in the project. For example, for this repo: the style file is located in the root directory. You'd use this. `html <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/bgoonz/GIT-CDN-FILES/mdn-article.css">

But where this really shines is for use with other peoples' OSS projects when a CDN isn't provided but you need a quick and easy way to load the code into your site.

jsDelivr also supports NPM and WordPress.



