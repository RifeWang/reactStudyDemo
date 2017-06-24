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
    }
};
