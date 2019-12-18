const fs = require('fs')

const child_process = require('child_process')

// support.js 后面没有空格
for(let i = 0; i < 3; i++) {
  const worker_process = child_process.fork('support.js', [i])

  worker_process.on('close', code => {
    console.log('子进程已退出，退出码 ' + code)
  })
}