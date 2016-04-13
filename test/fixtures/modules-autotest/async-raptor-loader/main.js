exports.filename = __filename;

require('./lasso-loader-patch');

exports.loadFoo = function(callback) {
    require('raptor-loader').async(function(err) {
        if (err) {
            return callback(err);
        }
        var foo = require('./foo');
        callback(null, foo);
    });
};


window.main = module.exports;