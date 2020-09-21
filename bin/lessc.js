/**
 * 批量转less脚本
 */
const fs = require('fs')
const path = require('path')
const { exec } = require('child_process')

const resolve = (file) => path.resolve(__dirname, '..', file)

const __packages_dir = resolve('packages')
const __components_dir = resolve('components')

const components = fs.readdirSync(__packages_dir)

components.forEach((componentName) => {
  exec(
    `lessc -x --source-map ${__packages_dir}/${componentName}/index.less ${__components_dir}/${componentName}/index.css`
  )
})
