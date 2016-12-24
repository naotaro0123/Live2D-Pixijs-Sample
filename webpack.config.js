module.exports = {
    entry :{
        lib: ['./lib/live2d.min.js',
              './node_modules/pixi.js/bin/pixi.min.js',
              './node_modules/pixi-live2d/dist/index.js',
             ]
    },
    output : {
        filename : './lib/bundle.js'
    }
};