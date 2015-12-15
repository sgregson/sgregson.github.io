### A readme for the site sgregson.github.io

Due to the user CNAME redirect to an apex domain (sgregson.com), all github projects with github pages documentation will be served at sgregson.com/{projectname}. Therefore, take care to *not* create any folder structures which might also occupy that namespace.

Reserved /url/ patterns:

* /[about|pdf|archives|categories|tags]/
* additionally, any year 2005-current

* * *

As it stands, the generation process requires:

```json
// Package.json
{
  "hexo": { "version": "3.1.1" },
  "dependencies": {
    "hexo": "^3.1.0",
    "hexo-autoprefixer": "^1.0.0",
    "hexo-browsersync": "^0.2.0",
    "hexo-deployer-git": "0.0.4",
    "hexo-generator-archive": "^0.1.2",
    "hexo-generator-category": "^0.1.2",
    "hexo-generator-index": "^0.1.2",
    "hexo-generator-tag": "^0.1.1",
    "hexo-html-minifier": "0.0.1",
    "hexo-imagemin": "^0.1.0",
    "hexo-renderer-ejs": "^0.1.0",
    "hexo-renderer-jade": "^0.1.0",
    "hexo-renderer-marked": "^0.2.4",
    "hexo-renderer-sass": "^0.2.0",
    "hexo-server": "^0.1.2"
  },
  "scripts": {
    "clean": "hexo clean",
    "generate": "hexo generate",
    "server": "hexo server"
  }
}
```