const path = require('path');
module.exports={
    mode:'development',
    entry:'./src/index.ts',
    devtool:'inline-source-map',
    output:{
        filename:'bundle.js',
        path:path.resolve(__dirname,'dist')
    },
    module:{
        rules:[
            {
                test:/\.tsx?$/,
                use:'ts-loader',
                exclude:/node_modules/
            },
            {
                test:/\.css$/i,
                use:['style-loader','css-loader']
            }
        ]
    },
    resolve:{
        extensions:['.tsx','.ts','.js']
    }
};