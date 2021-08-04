module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        
        targets: {
          node: 'current'
        }
      }
    ],
    '@babel/preset-typescript'
  ],
  sourceType: 'unambiguous',
  plugins: [
    ['babel-plugin-transform-typescript-metadata'],
    ["@babel/plugin-proposal-decorators", { "legacy": true}],
    ["@babel/plugin-proposal-class-properties", { "loose": true}],
    ['@babel/plugin-transform-modules-commonjs', {strictMode: false}],
    ['module-resolver', {
      alias: {
        '@config': './src/config',
        '@controllers': './src/controllers',
        '@decorators': './src/decorators',
        '@jobs': './src/jobs',
        '@libs': './src/libs',
        '@middlewares': './src/middlewares',
        '@models': './src/models',
        '@repositories': './src/repositories',
        '@resources': './src/resources',
        '@services': './src/services',
        '@utils': './src/utils'
      }
    }]
  ],
  ignore: [
    '**/*.spec.ts'
  ]
}