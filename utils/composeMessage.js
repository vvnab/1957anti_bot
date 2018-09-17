const moment = require('moment');
const _ = require('lodash');

const composeMessage = post => {
  let message;
  post.title = _.escape(post.title);
  message = `<b>${post.title}</b>\n${post.link}\nhttps://t.me/iv?url=${_.escape(post.link)}&rhash=db44e730036517`;
  return message;
}

module.exports = composeMessage;