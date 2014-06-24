var routes = require("./routes");

module.exports = function (app) {
    app.get('/', routes.index);
    app.get('/search', routes.search);
    app.get('/reads/:topic', routes.reads);
    app.post('/search-result', routes.searchResult);
};