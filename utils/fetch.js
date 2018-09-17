const request = require('request-promise');
const dom = require('xmldom').DOMParser;
const select = require('xpath.js');
const _ = require('lodash');
const cheerio = require('cheerio');
const moment = require('moment');
moment.locale('ru');

const htmlUpdate = () => {
  return request(settings.htmlUrl + '/publications')
    .then(result => {
      const $ = cheerio.load(result);
      const rawPosts = $('article[class="publications-category-item groupLeading"]');
      return _.map(rawPosts, i => {
        const link = settings.htmlUrl + $('header[class="publications-category-item-header"] a', i).attr('href');
        const id = parseInt(_.last(link.split('/')));
        return {
          id,
          link,
          href: $('header[class="publications-category-item-header"] a', i).attr('href'),
          title: $('header[class="publications-category-item-header"] h3', i).text().trim(),
          topic: $('div[class="publications-category-item-text_inner"]', i).text().trim(),
          author: $('div[class="publications-category-item-credits_author divider"]', i).text().trim()
        }
      })
    })
    .catch(error => {
      console.error(error);
    });
}

module.exports = {
  // rssUpdate,
  htmlUpdate
};