
var cmd = require('node-cmd');
if (!process.argv[2]) {
    console.log("Escribe el texto asociado al commit");
    return;
}

var copy = require('directory-copy')

copiar();

function copiar() {
    var comando = 'copy';
    console.log(comando);
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
            console.log(level + ': ' + msg)
        })
}

function add() {
    var comando = 'git add *';
    console.log(comando);
    cmd.get(comando, function (err, data, stderr) {
        console.log(data)
        commit();
    });
}
function commit() {
    console.log('added');
    var comando = "git commit -m " + process.argv[2];
    console.log(comando);
    cmd.get(comando, function (err, data, stderr) {
        console.log(data)
        push();
    }
    );
}
function push() {
    console.log('commited');
    var comando = 'git push';
    console.log(comando);
    cmd.get(comando, function (err, data, stderr) {
        console.log(data)
        console.log('pushed');
    });
}


