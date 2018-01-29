
var cmd = require('node-cmd');
// if (!process.argv[2]) {
//     console.log("Escribe el texto asociado al commit");
//     return;
// }

var copy = require('directory-copy')



cmd.get('ng build --prod', copiar());



function copiar() {
    console.log('builded');
    copy(
        {
            src: 'dist'
            , dest: 'adangnzlz.github.io'
            , excludes: [/^\./] // Exclude hidden files 
        }
        , function () {
            console.log('copied')
            add();




        })
        .on('log', function (msg, level) {
            // Level is debug, info, warn or error 
            console.log(level + ': ' + msg)
        })
}

function add() {
    
    cmd.get('git add *', commit());
}
function commit() {
    console.log('added');
    cmd.get(
        'git commit -m ' + process.argv[2], push()
    );
}

function push() {
    console.log('commited');
    cmd.get('git push', function (err, data, stderr) {
        console.log('pushed all', data)
    });
}