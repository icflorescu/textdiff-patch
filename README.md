# textdiff-patch

This is a simple module for applying **lean text diff delta patches** created by [textdiff-create](https://github.com/icflorescu/textdiff-create).

## Usage

Assuming you've correctly installed the `npm` module with `npm i textdiff-patch [--save|--save-dev]`:

    var applyPatch = require('textdiff-patch');

    var v1 = 'The sleepy brown fox';
    var delta = [
          [0, 4],
          [-1, 6],
          [1, 'quick'],
          [0,10],
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
