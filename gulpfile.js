const gulp = require('gulp');
const postcss = require('gulp-postcss');
const del = require('del');
const autoprefixer = require('autoprefixer');
const browsersync = require('browser-sync').create();
const plumber = require('gulp-plumber');
const cssvars = require('postcss-simple-vars');
const cssImport = require('postcss-import');
const livereload = require('gulp-livereload');
const pug = require('gulp-pug');

const paths = {
  css: {
    src: './assets/postcss/*.css',
    dest: './assets/css',
  },
  html: {
    src: './assets/pug/pages/**/*.pug',
    dest: './html/',
  },
};
/// Style Task ///
gulp.task('css', () => {
  const purgecss = require('gulp-purgecss');
  return gulp
    .src(paths.css.src, { allowEmpty: true })
    .pipe(
      postcss([
        cssImport,
        cssvars,
        require('tailwindcss/nesting'),
        require('tailwindcss'),
        autoprefixer(),
        // require('cssnano')({
        //   preset: 'default',
        // }),
      ]),
    )
    .pipe(plumber())
    .pipe(
      purgecss({
        content: ['./**/**/*.html', paths.css.src, './assets/**/*.js'],
        extractors: [
          {
            extractor: (content) => {
              return content.match(/[A-Za-z0-9-_:\/]+/g) || [];
            },
            extensions: ['pug', 'html', 'css', 'js'],
          },
        ],
        safelist: {
          standard: [
            /[A-Za-z0-9-_:\/]+/g,
            /^[^-]*mt-*/,
            /^[^-]*mb/,
            /^[^-]*w-*/,
            /^[^-]*p-*/,
            /^[^-]*h-*/,
            /^[^-]*mt-*/,
            /^[^-]*mb/,
            /^[^-]*mr-*/,
            /^[^-]*text-*/,
            /^[^-]*h-*/,
            /^[^-]*left-*/,
            /^[^-]*min-w-*/,
            /^[^-]*only:*/,
            /^[^-]*first:*/,
            /^[^-]*hidden*/,
            /^[^-]*max-w-*/,
            /^[^-]*rounded-*/,
            /^[^-]*z-*/,
            /^[^-]*!*/,
          ],
        },
      }),
    )
    .pipe(gulp.dest(paths.css.dest))
    .pipe(browsersync.stream())
    .pipe(livereload());
  done();
});

/// Html Task ///
gulp.task('html', () => {
  return gulp
    .src(paths.html.src)
    .pipe(
      pug({
        pretty: true,
      }),
    )
    .on('error', console.error.bind(console))
    .pipe(gulp.dest(paths.html.dest))
    .pipe(browsersync.stream())
    .pipe(livereload());
});

/// Clean Task ///
gulp.task('clean', async function () {
  return del(['dist', './postcss/**/dist'], { force: true });
});

/// Browser Sync Task ///
gulp.task('browser-sync', async function (done) {
  browsersync.init({
    base: './',
    server: './',
    startPath: 'html/friendly-layout/index.html',
    host: 'localhost',
    open: true,
    tunnel: false,
  });

  done();
});

/// Watch function ///
gulp.task(
  'default',
  gulp.series('css', 'html', 'clean', 'browser-sync', function () {
    gulp.watch(['./assets/pug/pages/**/**/*.pug', './assets/postcss/**/*.css'], gulp.series('html', 'css'));
    livereload.listen();
  }),
);
