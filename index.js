const data = require('./data/qs-block.json');
const { getDomain } = require('tldjs');

const result = {};

data.log.entries.forEach(function (entry) {

    const domain = getDomain(entry.request.url);

    if (domain === null) {
        console.log(entry.request.url);
    }

    if (! result[domain]) {
        result[domain] = 0;
    }

    result[domain]++;
} );

console.log(result);
