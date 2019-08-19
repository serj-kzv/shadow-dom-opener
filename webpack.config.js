const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const distDir = path.resolve(__dirname, 'dist');
const srcDir = path.resolve(__dirname, 'src');
const plugins = [
    new CopyWebpackPlugin(
        [
            {
                from: '**/!(*.js)',
                to: distDir,
                context: srcDir
            }
        ],
        {
            copyUnmodified: false
        }
    )
];
const cfg = {
    resolve: {
        modules: [path.resolve(__dirname, 'src'), 'node_modules']
    },
    node: {fs: 'empty'},
    target: 'web',
    watchOptions: {
        ignored: ['node_modules'],
        poll: 500
    },
    optimization: {
        // https://github.com/webpack-contrib/terser-webpack-plugin
        minimizer: [new TerserPlugin({
            sourceMap: false,
            parallel: true,
            cache: true,
            // https://github.com/terser-js/terser#minify-options
            terserOptions: {
                ecma: 8,
                compress: {
                    drop_console: true,
                    drop_debugger: true // TODO: find out why it does not work
                }
            }
        })]
    }
};

module.exports = (env, argv) => {

    return [
        {
            entry: './src/content.js',
            output: {
                path: distDir,
                filename: 'content.js'
            },
            plugins: [new CleanWebpackPlugin()].concat(plugins),
            ...cfg
        },
        {
            entry: './src/user.js',
            output: {
                path: distDir,
                filename: 'user.js'
            },
            plugins,
            ...cfg
        }
    ];
};