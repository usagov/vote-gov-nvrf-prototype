var gulp = require('gulp');
var log = require('fancy-log');
var colors = require('ansi-colors');
var fs = require('fs');
var pkg = require('../package.json');
var spawn = require('cross-spawn');

 async function cleanAll() {
  fs.rmSync('./static/assets/**/*', {
    force: true,
    recursive: true
  });
}

function printPackageInfo (done){
  log(
    colors.yellow('v' + pkg.version),
    colors.green(pkg.name)
  );
  log();
  log(colors.red(' ______  ______  _____       __   ________  ______  ______'));
  log(colors.red('/\\  ___\\/\\  ___\\/\\  __-.    /\\ \\ / /\\  __ \\/\\__  _\\/\\  ___\\'));
  log(colors.blue('\\ \\  __\\\\ \\  __\\\\ \\ \\/\\ \\   \\ \\ \\\'/\\ \\ \\/\\ \\/_/\\ \\/\\ \\  __\\'));
  log(colors.blue(' \\ \\_\\   \\ \\_\\   \\ \\____-    \\ \\__| \\ \\_____\\ \\ \\_\\ \\ \\_____\\'));
  log(colors.white('  \\/_/    \\/_/    \\/____/     \\/_/   \\/_____/  \\/_/  \\/_____/'));
  log();
  done();

}

function watch () {
   log(colors.cyan('watch'), 'Watching assets for changes');
   gulp.watch('./assets/styles/**/*.scss', gulp.task( 'styles' ));
   gulp.watch('./assets/scripts/**/*.js', gulp.task( 'scripts' ));
   gulp.watch('./assets/images/**/*', gulp.task( 'images' ));
}

exports.cleanAll = cleanAll;
exports.printPackageInfo = printPackageInfo;
exports.watch = watch;

var build = gulp.series(cleanAll, printPackageInfo, gulp.parallel('styles', 'scripts', 'images', 'fonts'));

gulp.task('build', build);
gulp.task ('watch' , watch);
gulp.task ('cleanAll' , cleanAll);
gulp.task('dev', gulp.parallel('watch'));
