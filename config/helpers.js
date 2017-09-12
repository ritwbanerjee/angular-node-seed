const path = require('path');
const _root = path.resolve(__dirname, '..');

function root(args) {
  let arg = args;
  arg = Array.prototype.slice.call(arguments, 0);
  return path.join.apply(path, [_root].concat(arg));
}

exports.root = root;
