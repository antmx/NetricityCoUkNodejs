function index(req, res) {
    res.render('index', {
        title: 'Home', year: new Date().getFullYear()
    });
}
exports.index = index;
;

function about(req, res) {
    res.render('about', { title: 'About', year: new Date().getFullYear(), message: 'Your application description page.' });
}
exports.about = about;
;

function contact(req, res) {
    res.render('contact', { title: 'Contact', year: new Date().getFullYear(), message: 'Your contact page.' });
}
exports.contact = contact;
;

function portfolio(req, res) {
    res.render('portfolio', { title: 'Portfolio', year: new Date().getFullYear(), message: 'Your portfolio page.' });
}
exports.portfolio = portfolio;
;
//# sourceMappingURL=index.js.map
