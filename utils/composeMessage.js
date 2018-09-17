const moment = require('moment');
const _ = require('lodash');

const composeMessage = post => {
  let message;
  post.title = _.escape(post.title);
  const tme = `https://t.me/iv?url=${_.escape(post.link)}&rhash=db44e730036517`;
  message = `<b>${post.author}</b>\n<a href="${tme}">***</a>\n<a href="${post.link}">${post.title}</a>`;
  return message;
}

module.exports = composeMessage;