const moment = require('moment');
const _ = require('lodash');

const composeMessage = post => {
  let message;
  post.title = _.escape(post.title);
  message = `<a href='${post.href}'>${post.title}</a>\n ${post.author}\n${post.link}`;
  return message;
}

module.exports = composeMessage;