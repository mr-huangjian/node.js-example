const { spawn } = require('child_process')

// 执行命令 'ps ax | grep ssh'

const ps = spawn('ps', ['ax'])
const grep = spawn('grep', ['ssh'])

ps.stdout.on('data', (data) => {
  grep.stdin.write(data)
})

ps.stderr.on('data', (data) => {
  console.log(`ps stderr: ${data}`)
})

ps.on('close', (code) => {
  if (code !== 0) {
    console.log(`ps 进程退出码：${code}`)
  }
  grep.stdin.end() // '|' 管道操作符
})

grep.stdout.on('data', (data) => {
  console.log(data.toString())
})

grep.stderr.on('data', (data) => {
  console.log(`grep stderr: ${data}`)
})

grep.on('close', (code) => {
  if (code !== 0) {
    console.log(`grep 进程退出码：${code}`)
  }
})
