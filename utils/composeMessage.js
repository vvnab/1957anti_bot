const moment = require('moment');
const _ = require('lodash');

const composeMessage = post => {
  let message;
  post.title = _.escape(post.title);
  message = `<b>${post.title}</b>\n<i>${post.author}</i>\n${post.link}`;
  return message;
}

module.exports = composeMessage;