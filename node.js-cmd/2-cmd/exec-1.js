
const exec = (cmd) => require('child_process').execSync(cmd).toString().trim()

console.log(exec('node -v')) // v19.8.1
