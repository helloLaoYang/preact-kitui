/**
 * 批量转less脚本
 */
const fs = require('fs')
const path = require('path')
const { exec } = require('child_process')

const resolve = (file) => path.resolve(__dirname, '..', file)

const packagesPath = resolve('packages')
const distPath = resolve('dist')

const components = fs.readdirSync(packagesPath)

components.forEach((lessfile) => {
  const shell = `lessc -x --source-map ${
    packagesPath
  }/${
    lessfile
  }/${
    lessfile
  }.less ${
    distPath
  }/${
    lessfile
  }/${
    lessfile
  }.css`
  exec(shell)
})
