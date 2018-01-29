
var cmd = require('node-cmd');
// if (!process.argv[2]) {
//     console.log("Escribe el texto asociado al commit");
//     return;
// }

var copy = require('directory-copy')
copy(
    {
        src: 'dist'
        , dest: 'adangnzlz.github.io'
        , excludes: [/^\./] // Exclude hidden files 
    }
    , function () {
        console.log('done!')
      
        // cmd.get('git add *', commit());



    })
    .on('log', function (msg, level) {
        // Level is debug, info, warn or error 
        console.log(level + ': ' + msg)
    })

function commit() {
    cmd.get(
        'git commit -m ' + process.argv[2], push()
    );
}

function push() {

    cmd.get('git push', function (err, data, stderr) {
        console.log('pushed all', data)
    });
}