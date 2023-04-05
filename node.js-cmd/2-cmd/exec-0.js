const { exec } = require('child_process')

const cmd = `ls`
exec(cmd, (error, stdout, stderr) => {
    if (error) {
        console.log('----------error----------')
        console.log(error)
        console.log('----------stderr----------')
        console.log(stderr)
    } else {
        console.log('----------stdout----------')
        console.log(stdout)
    }
})

/**
    cmd = `ls`
    ----------stdout----------
    exec-0.js
    exec-1.js
    shelljs-0.js
    shelljs-1.js
    spawn-0.js
    spawn-1.js
 */

/**
    cmd = `lss`
    ----------error----------
    Error: Command failed: lss
    /bin/sh: lss: command not found

        at ChildProcess.exithandler (node:child_process:398:12)
        at ChildProcess.emit (node:events:527:28)
        at maybeClose (node:internal/child_process:1090:16)
        at Socket.<anonymous> (node:internal/child_process:449:11)
        at Socket.emit (node:events:527:28)
        at Pipe.<anonymous> (node:net:709:12) {
      code: 127,
      killed: false,
      signal: null,

      cmd: 'lss'
    }
    ----------stderr----------
    /bin/sh: lss: command not found
 */
