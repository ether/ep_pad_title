const path = require('path');
const eejs = require('ep_etherpad-lite/node/eejs');
const settings = require('ep_etherpad-lite/node/utils/Settings');

exports.clientVars = function (hook, context, callback) {
  let pad_title;
  try {
    if (settings.ep_pad_title) {
      pad_title = settings.ep_pad_title;
    }
  } catch (e) {
    console.warn('ep_pad_title: a default title can be set in settings.json');
    pad_title = '';
  }
  return callback({pad_title});
};

exports.eejsBlock_scripts = function (hook_name, args, cb) {
  args.content = `<script src="../static/plugins/ep_pad_title/static/js/pad_title.js"></script>${args.content}`;
  return cb();
};
