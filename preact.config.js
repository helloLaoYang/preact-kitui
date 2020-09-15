import path from 'path'

const resolve = (file) => path.resolve(__dirname, file)

const eslintLoader = {
  test: /\.(t|j)s(x)*$/,
  enforce: 'pre',
  include: path.resolve(__dirname, 'src'),
  loader: 'eslint-loader',
}

export default {
  /**
     * Function that mutates the original webpack config.
     * Supports asynchronous changes when a promise is returned (or it's an async function).
     *
     * @param {object} config - original webpack config.
     * @param {object} env - options passed to the CLI.
     * @param {WebpackConfigHelpers} helpers - object with useful helpers for working with the webpack config.
     * @param {object} options - this is mainly relevant for plugins (will always be empty in the config), default to an empty object
     * */
  webpack(config) {
    // Use any `index` file, not just index.js
    config.resolve.alias['preact-cli-entrypoint'] = resolve(
      'src',
      'index',
    )

    // add alias
    config.resolve.alias = {
      ...config.resolve.alias,
      ...{
        '@': resolve('src'),
        '@@': resolve('.'),
        '@packages': resolve('packages'),
      },
    }

    // add eslint
    config.module.rules.push(eslintLoader)
  },
}
