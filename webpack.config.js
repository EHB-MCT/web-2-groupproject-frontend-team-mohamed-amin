const path = require('path')

module.exports = {

    entry: './src/script.js',
    output:{
        path: path.resolve(__dirname,'docs'),
        filename: 'main.js'
    },
    mode:'production'
}