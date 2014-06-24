var feedly = require('../utils/feedly');

/* GET home page. ("/") */
exports.index = function(req, res){
    feedly.getMixes([], function(e, r, b){
        if (!e){
            console.log(JSON.parse(b).items);
            res.render('index', {title: "TaongGrasa - Reads Home", feeds: JSON.parse(b).items});
        }
    });
};

/* GET browse page. ("/search") */
exports.search = function(req, res){
    res.render('search', {title: "TaongGrasa - Reads Search"});
    // feedly.getMixes([], function(e, r, b){
    //     if (!e){
    //         // console.log(gumbo(JSON.parse(b).items[0].summary.content).document.childNodes[0]);
    //         console.log(JSON.parse(b).items);
    //         // console.log(JSON.parse(b).items[0].summary.content);
    //         // res.render('feed', { goods: b.items[0].summary.content })
    //         res.render('index', {feeds: JSON.parse(b).items});
    //         // res.render('index', {goods: JSON.parse(b).items[0].summary.content});
    //     }
    //     //console.log(r);
    // });
};

/* GET search-result page. ("/search-result") */
exports.searchResult = function(req, res){
    //res.render('search-result', {title: "TaongGrasa - Reads Search Result", topic: req.body.query});
    feedly.getMixes(req.body.query, function(e, r, b){
        if (!e){
            res.render('search-result', {title: "TaongGrasa - Reads Search Result", topic: req.body.query, feeds: JSON.parse(b).items});
        }
        //console.log(r);
    });
};

/* GET browse page. ("/reads/:topic") */
exports.reads = function(req, res){
    //res.render('search-result', {title: "TaongGrasa - Reads Search Result", topic: req.body.query});
    feedly.getMixes(req.params.topic, function(e, r, b){
        if (!e){
            res.render('search-result', {title: "TaongGrasa - Reads Search Result", topic: req.params.topic, feeds: JSON.parse(b).items});
        }
        //console.log(r);
    });
};


