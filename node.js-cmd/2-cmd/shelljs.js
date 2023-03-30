/**
    https://github.com/shelljs/shelljs
 */
const shell = require('shelljs')

const which = shell.which('node')
console.log(which)

shell.echo('-------------------')
shell.exec('cd ../; ls')
