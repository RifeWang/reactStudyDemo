var path = require('path');
module.exports = {
    entry: {
        index: './index.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.js[x]?$/,
                exclude: /(node_modules)/,
                use: [{
                    loader: "babel-loader",
                    options: {
                        presets: ["react", "es2015", "stage-0"],
                        plugins: []
                    }
                }]
            },
        ]
    },
    devServer: {
        // contentBase: path.join(__dirname, 'dist'), //告诉服务器从哪里提供内容，默认为当前工作目录
        compress: true, //是否启用 gzip 压缩
        port: 9000,
        historyApiFallback: true, //使用 HTML5 History API 时，任意的404响应都会被替代为 index.html
    }
};
