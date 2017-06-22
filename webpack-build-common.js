{
  include: styles,
  test: /\.css$/,
  loaders: ['style-loader', 'css-loader?sourceMap', 'postcss-loader']
}