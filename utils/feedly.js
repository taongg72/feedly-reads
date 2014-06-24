var request = require('request');
var _baseURL = 'http://cloud.feedly.com';

// Get a mix of the most engaging content available in a stream
//   ( stream can be a feed, a category, or a topic )

// TODO: url encode urls
// /v3/mixes/contents?streamId=topic/arduino&hours=8
//var apiPathMixes = "/v3/mixes/contents?streamId=feed%2Fhttp%3A%2F%2Fwww.engadget.com%2Frss.xml&count=3";
var apiPathMixes = "/v3/mixes/contents?streamId=topic/tech&hours=8&count=20";

exports.getMixes = function (a, cb) {
    if (a) {
        apiPathMixes = "/v3/mixes/contents?streamId=topic/"+a+"&hours=24&count=20";
    }
    request(_baseURL.concat(apiPathMixes), function (error, response, body) {
        console.log(_baseURL.concat(apiPathMixes));
        if (!error && response.statusCode == 200) {
            //console.log(JSON.stringify(body));
            if (cb) {
                cb(error, response, body);
            }
        }
    });
};