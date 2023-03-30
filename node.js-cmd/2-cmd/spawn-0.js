const { spawn } = require('child_process')

const ls = spawn('ls', ['-lh', '/usr'])

ls.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`)
})

ls.stderr.on('data', (data) => {
  console.log(`stderr: ${data}`)
})

ls.on('close', (code) => {
  console.log(`子进程退出码：${code}`)
})

/**
    spawn('ls', ['-lh', '/usr'])

    stdout: total 0
    lrwxr-xr-x     1 root  wheel    25B Aug 24  2022 X11 -> ../private/var/select/X11
    lrwxr-xr-x     1 root  wheel    25B Aug 24  2022 X11R6 -> ../private/var/select/X11
    drwxr-xr-x  1012 root  wheel    32K Aug 24  2022 bin
    drwxr-xr-x    31 root  wheel   992B Aug 24  2022 lib
    drwxr-xr-x   311 root  wheel   9.7K Aug 24  2022 libexec
    drwxr-xr-x    14 root  wheel   448B Sep 25 22:57 local
    drwxr-xr-x   233 root  wheel   7.3K Aug 24  2022 sbin
    drwxr-xr-x    45 root  wheel   1.4K Aug 24  2022 share
    drwxr-xr-x     6 root  wheel   192B Aug 24  2022 standalone

    子进程退出码：0
 */

/**
    spawn('which', ['node'])

    stdout: /usr/local/bin/node

    子进程退出码：0
 */
