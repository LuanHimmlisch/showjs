let mix = require('laravel-mix');
let prefix = "";

if (mix.inProduction()) {
    prefix = ".min";
}
mix.setPublicPath('dist')
    .js('src/js/show.js', `show${prefix}.js`)
    .sass('src/sass/show.scss', `show${prefix}.css`)
    .version();
