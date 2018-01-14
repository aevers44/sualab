module.exports = {
    entry: './src/index.js',

    output: {
        path: __dirname + '/public/',
        filename: 'bundle.js'
    },

    resolve: {
        extensions: ['.js', 'jsx']
    },

    devServer: {
        inline: true,
        port: 7777,
        contentBase: __dirname + '/public/'
    },

    module: {
        rules: [
            {
                test: [/\.scss$/],
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                  ]
            },
            {
                test: [/\.js$/, /\.jsx$/],
                exclude: /node_modules/,
                loader: 'babel-loader',
            }
        ],
    }
}