const path = require('path')

module.exports = {
    entry: './src/main.js',
    output: {
        // path: path.resolve(__dirname,'dist'),
        path: path.join(__dirname,'dist'),
        filename: 'bundle.js',
        publicPath: 'dist/'
    },
    module: {
            rules: [
            {
              test: /\.css$/i,
              use: ["style-loader", "css-loader"],
            },

            {
              test: /\.less$/,
              use: [{
                  loader: "style-loader" // creates style nodes from JS strings
              }, {
                  loader: "css-loader" // translates CSS into CommonJS
              }, {
                  loader: "less-loader" // compiles Less to CSS
              }]
            },

            {
              test: /\.(png|jpg|gif)$/,
              use: [
                {
                  loader: 'url-loader',
                  options: {
                    limit: 9182,
                    name:'img/[name].[hash:8].[ext]'
                  }
                }
              ]
            },


            ],
    },
    resolve:{
      alias: {
        'vue$': 'vue/dist/vue.esm.js'
      }
    }
}