const HtmlWebPackPlugin=require('html-webpack-plugin');
const MiniCSSExtractPlugin=require('mini-css-extract-plugin');

module.exports = {
    entry: './src/index.js', //Archivo inicial que va a leer
    module: {
        rules: [
            //Se definden los Loaders
            // Sintaxis
            /**
             * {
             * test: REGEX -> Para una busqueda de archivos o extensiones
             * use: [] -> Instrucciones de que va a hacer con los archivos
             * }
             */
            {
                test: /\.html/, //Busca todos los .html
                use: [
                    {
                        loader: "html-loader", //Carga de Loader, pueden tener opciones
                        options: { minimize: true }
                    }
                ]
            },
            //El orden de los loaders es importante
            {
                test: /.(css|scss)$/,
                use: [
                    "style-loader", //Procesa estilos en linea
                    "css-loader", //Procesa estilos en .css
                    "sass-loader" //Proce estilos en .scss
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                          ['@babel/preset-env', { targets: "defaults" }]
                        ]
                    }
                }
            },
            {
                test: /\.(png|jpg|svg|gif|jpeg)$/,
                use:[
                    'file-loader'
                ]
            }
        ]
    },
    //Plugins:Agregan funcionalidad extra, todo plugin depende de un loader
    //Loaders: reglas o instrucciones que nos ayudan a procesar archivos para generar nuestra salida
    plugins: [ 
        new HtmlWebPackPlugin({ template:"./src/index.html" }),
        new MiniCSSExtractPlugin()
    ]
};