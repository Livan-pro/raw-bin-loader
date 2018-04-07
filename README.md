# raw binary loader for webpack

## Usage

``` javascript
require("raw-bin-loader!./file.bin");
// => returns file.bin content as string (latin1 encoding)
```

Don't forget to polyfill `require` if you want to use it in node.
See `webpack` documentation.

If you need to load text files see raw-loader (https://github.com/webpack-contrib/raw-loader)

## License

MIT (http://www.opensource.org/licenses/mit-license.php)
