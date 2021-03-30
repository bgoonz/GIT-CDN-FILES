# How to turn any GitHub repo into a CDN

> Last week I discovered jsDeliver, a service that let’s you turn any GitHub repository into a CDN.
(Hat tip to Sarah Dayan, aka Frontstuff, for this one.)
Here’s how it works.
 The base URL is https://cdn.jsdelivr.net/gh/{username}/{repo}/, where you replace {username} with the GitHub username and {repo} with the repository name for the project. Append that URL with the path to the file you want to access in the project. For example, for my Atomic XHR plugin, the JavaScript file is located in the /dist directory.

[Go Make Things](https://gomakethings.com/)

Last week I discovered [jsDeliver](https://www.jsdelivr.com/), a service that let’s you turn any GitHub repository into a CDN.

(_Hat tip to [Sarah Dayan, aka Frontstuff](https://frontstuff.io/), for this one._)

Here’s how it works.

1.  The base URL is `https://cdn.jsdelivr.net/gh/{username}/{repo}/`, where you replace `{username}` with the GitHub username and `{repo}` with the repository name for the project.
2.  Append that URL with the path to the file you want to access in the project. For example, for my [Atomic XHR plugin](https://github.com/cferdinandi/atomic), the JavaScript file is located in the `/dist` directory. You’d use this. `html <script src="https://cdn.jsdelivr.net/gh/cferdinandi/atomic/dist/atomic.js"></script>`

You can also take advantage of semantic versioning by adding `@{version-number}` to the repository name. You can target major, minor, and patch releases as desired.

    <!-- Always get the latest version -->
    <!-- Not recommended for production sites! -->
    <script src="https://cdn.jsdelivr.net/gh/cferdinandi/atomic/dist/atomic.js"></script>
    
    <!-- Get minor updates and patch fixes within a major version -->
    <script src="https://cdn.jsdelivr.net/gh/cferdinandi/atomic@4/dist/atomic.js"></script>
    
    <!-- Get patch fixes within a minor version -->
    <script src="https://cdn.jsdelivr.net/gh/cferdinandi/atomic@4.0/dist/atomic.js"></script>
    
    <!-- Get a specific version -->
    <script src="https://cdn.jsdelivr.net/gh/cferdinandi/atomic@4.0.0/dist/atomic.js"></script>

I’ve already added instructions on this to [Atomic](https://github.com/cferdinandi/atomic), [Validate](https://github.com/cferdinandi/validate), and [Smooth Scroll](https://github.com/cferdinandi/smooth-scroll), and will be updating the docs for [my other plugins](https://vanillajstoolkit.com/plugins) as well.

But where this really shines is for use with other peoples’ OSS projects when a CDN isn’t provided but you need a quick and easy way to load the code into your site.

jsDelivr also supports NPM and WordPress.


