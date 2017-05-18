var fs = require('fs.extra');
var ora = require('ora');


var spinner = ora('Copy editor ...');
spinner.color = 'blue';
spinner.start();



setTimeout(() => {
    fs.copy('./dist/vue-html5-editor.js', '../../static/vue-html5-editor.js', { replace: true }, function(err) {
        if (err) {
            spinner.fail([err]);
        } else {
            setTimeout(() => { spinner.succeed(['Đã copy editor !']); }, 1234);
        }
    });
}, 1000);
