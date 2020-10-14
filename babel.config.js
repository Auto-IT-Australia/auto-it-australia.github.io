module.exports = {
  plugins: [
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-object-rest-spread',
    '@babel/plugin-transform-runtime',
    'react-hot-loader/babel',
    'macros'
  ],
  presets: [
    '@babel/preset-react',
    [
      '@babel/preset-env',
      {
        targets: ['last 2 versions', 'ie >= 11']
      }
    ]
  ],
  exclude: /node_modules\/(?!(ads-component-lib)\/).*/
}
