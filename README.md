#Homework L21

A simple application with users list

## Usage

`grunt default` - has default settings for build projects:
1. concat - concat all js files from `dev/scripts/` to file `dist/scripts/app.js`. If you need do just this you can use `grunt concat`
2. uglify - minified app.js. You can use just `grunt uglify`
3. sass - made dist/styles/styles.css from dev/styles/styles.scss. You can use just `grunt sass`
4. cssmin - minified styles.css. You can use just `grunt cssmin`
5. watch - watch changes in js and scss files. You can use just `grunt watch`

### Server
`grunt serve` - command for start server on http://localhost:8080/
You can change host and port in `Gruntfile.js`
```js
  'http-server': {

    'dev': {
      root: "./dist/", // default path
      host: "localhost",
      port: function() {
        return 8080;
      },
      https: false
    }

  }
```
