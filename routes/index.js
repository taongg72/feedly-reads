var feedly = require('../utils/feedly');

/* GET home page. ("/") */
exports.index = function(req, res){
    feedly.getMixes([], function(e, r, b){
        if (!e){
            res.render('index', {title: "TaongGrasa - Reads Home", feeds: JSON.parse(b).items});
        }
    });
};

/* GET search page. ("/search") */
exports.search = function(req, res){
    res.render('search', {title: "TaongGrasa - Reads Search"});
};

/* GET search-result page. ("/search-result") */
exports.searchResult = function(req, res){
    feedly.getMixes(req.body.query, function(e, r, b){
        if (!e){
            res.render('search-result', {title: "TaongGrasa - Reads Search Result", topic: req.body.query, feeds: JSON.parse(b).items});
        }
    });
};

/* GET browse page. ("/reads/:topic") */
exports.reads = function(req, res){
    feedly.getMixes(req.params.topic, function(e, r, b){
        if (!e){
            res.render('search-result', {title: "TaongGrasa - Reads about "+req.params.topic, topic: req.params.topic, feeds: JSON.parse(b).items});
        }
    });
};


