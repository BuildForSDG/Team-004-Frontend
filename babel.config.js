module.exports = {
  presets: [
    [
      '@babel/preset-env',
      'env',
      'react',
      {
        targets: {
          node: 'current'
        }
      }
    ]
  ]
};
