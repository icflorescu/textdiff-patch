# textdiff-patch

[![NPM version][npm-image]][npm-url]
[![Dependency Status][david-image]][david-url]
[![Build Status][travis-image]][travis-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

![textdiff-patch](https://cloud.githubusercontent.com/assets/581999/12406663/c3e3c7d4-be57-11e5-8aad-a92d86c79b05.png)

This is a simple module for applying **lean text diff delta patches** created by [textdiff-create](https://github.com/icflorescu/textdiff-create).

## Usage

Assuming you've correctly installed the `npm` module with `npm i textdiff-patch [--save|--save-dev]`:

    var applyPatch = require('textdiff-patch');

    var v1 = 'The sleepy brown fox';
    var delta = [
          [0, 4],
          [-1, 6],
          [1, 'quick'],
          [0, 10],
          [1, ' jumps over the lazy dog']
        ];

    var v2 = applyPatch(v1, delta);

    console.log(v2);

The script will produce the following output:

    The quick brown fox jumps over the lazy dog

## Additional info

Have a look at [textdiff-create](https://github.com/icflorescu/textdiff-create) for more info.

## Credits

If you find this piece of software useful, please star the repo, [spread the word](http://twitter.com/share?text=Apply%20lean%20text%20diff%20patches%20in%20JavaScript&url=https%3A%2F%2Fgithub.com%2Ficflorescu%2Ftextdiff-patch&hashtags=javascript%2Cnodejs%2Cnpm&via=icflorescu) and feel free to endorse me on LinkedIn:

[![Ionut-Cristian Florescu on LinkedIn](https://static.licdn.com/scds/common/u/img/webpromo/btn_viewmy_160x25.png)](https://www.linkedin.com/in/icflorescu)

## LICENSE

Released under [ISC](https://github.com/icflorescu/textdiff-patch/blob/master/LICENSE).

[npm-image]: https://img.shields.io/npm/v/textdiff-patch.svg?style=flat-square
[npm-url]: https://npmjs.org/package/textdiff-patch
[david-image]: https://img.shields.io/david/icflorescu/textdiff-patch.svg?style=flat-square
[david-url]: https://david-dm.org/icflorescu/textdiff-patch
[license-image]: http://img.shields.io/npm/l/textdiff-patch.svg?style=flat-square
[license-url]: LICENSE
[travis-image]: https://img.shields.io/travis/icflorescu/textdiff-patch.svg?style=flat-square
[travis-url]: https://travis-ci.org/icflorescu/textdiff-patch
[downloads-image]: http://img.shields.io/npm/dm/textdiff-patch.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/textdiff-patch
