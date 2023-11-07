// webpack.config.js
const path = require('path');

module.exports = {
    entry: '/js/index.js',
    output: {
        filename: 'bundle.js', // Имя выходного файла
        path: path.resolve(__dirname, 'bundle') // Путь к директории, где будет сохранен бандл
    },
    mode: 'development'
};