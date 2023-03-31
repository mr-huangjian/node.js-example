
// Require the necessary modules
const request = require('request');
const cheerio = require('cheerio');

let url = 'https://www.baidu.com'
// Make a request to the website to be scraped
request(url, (error, response, html) => {
  if (!error && response.statusCode == 200) {
    // Load the HTML into Cheerio
    const $ = cheerio.load(html);

    // Use Cheerio to extract data from the HTML
    const title = $('title').text();
    const description = $('meta[name="description"]').attr('content');

    // Log the extracted data
    console.log(`Title: ${title}`);
    console.log(`Description: ${description}`);
  }
});
