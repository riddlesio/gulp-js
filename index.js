/**
 * Gulp task for JavaScript preprocessing using Babel and Webpack
 * @param  {Function} read      A factory function provided by the super task which
 *                              can be used to provide additional pipes up front
 *                              (eg. error catching).
 *                              This function should return a stream when passed a source.
 * @param  {Function} write     A function through which a stream can be piped in order
 *                              to write its contents to a predefined destination.
 * @param  {Object}   config    The plugin configuration as described in README.md.
 * @return {Function}           A function which executes the gulp task when called
 *                              and returns a gulp stream.
 */
const task = (read, write, config) => () => {

       const rename          = require('gulp-rename');
       const webpack         = require('webpack-stream');

        const environment    = config.environment;
        const debug          = environment.debug;
        
        const configPath     = process.cwd() + '/' + config.configPath;
        const webpackConfig  = require(configPath);
        const bundleName     = config.bundle.name || app.js;

    return read(config.src)
        .pipe(webpack(webpackConfig(config)))
        .pipe(rename(bundleName))
        .pipe(write(config.dest));
};

module.exports = task;
