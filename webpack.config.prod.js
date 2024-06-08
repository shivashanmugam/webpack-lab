const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    mode: 'production', // Development mode for hot reloading
    entry: './src/index.js', // Entry point for your application
    output: {
        filename: 'bundle.js', // Output filename
        path: path.resolve(__dirname, 'public'), // Output directory
    },
    plugins: [
        new BundleAnalyzerPlugin({
            analyzerMode: 'server', // or 'disabled'
            generateStatsFile: true, // To generate a stats.json file
            statsOptions: { source: false } // Prevent inlining source maps
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/, // Rule for JavaScript and JSX files
                exclude: /node_modules/, // Exclude node_modules folder
                use: {
                    loader: 'babel-loader', // Use Babel loader
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'], // Babel presets
                    },
                },
            },
        ],
    },
};