const CracoLessPlugin = require('craco-less');
const {webpack} = require("./craco.config");
const path = require("path");
const resovle = dir => path.resolve(__dirname, dir)

/* craco.config.js */
module.exports = {
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: { '@primary-color': '#1DA57A' },
                        javascriptEnabled: true,
                    },
                },
            },
        },
    ],
    webpack: {
        alias: {
            "@": resovle('src'),
            'components': resovle('src/components')
        }
    }
};