

if (!process.argv[2]){
    console.log("Escribe el texto asociado al commit");
    return;
}

var copy = require('directory-copy')
copy(
    {
        src: 'dist'
        , dest:  './../adangnzlz.github.io'
        , excludes: [/^\./] // Exclude hidden files 
    }
    , function () {
        console.log('done!')
        var cmd = require('node-cmd');
        cmd.get(
            'git add *',
            function (err, data, stderr) {
                cmd.get(
                    'git commit -m  "deploy"',
                    function (err, data, stderr) {
                        cmd.get(
                            'git push',
                            function (err, data, stderr) {
                                console.log('pushed all', data)
                            }
                        );
                    }
                );
            }
        );


        
    })
    .on('log', function (msg, level) {
        // Level is debug, info, warn or error 
        console.log(level + ': ' + msg)
    })

