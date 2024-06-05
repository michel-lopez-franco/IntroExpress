const path = require('path');

module.exports = {
    entry: './src/main.js', // Archivo de entrada de tu aplicación
    output: {
        filename: 'main.js', // Nombre del archivo de salida
        path: path.resolve(__dirname, 'dist') // Carpeta de salida para los archivos empaquetados
    }
};