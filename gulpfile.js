require('dotenv').config();
const { src, dest, series } = require('gulp');
const debug = require('debug')('app');

async function build() {
  debug('building...');
}

exports.default = series(build);