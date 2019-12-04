const getExplore = {
    getP(req, res, next)  {
    res.render('explore', {title: 'Explore'});
},
    getF(req, res, next)    {
    res.render('explorer', {title: 'Explore'});
}
};
module.exports = getExplore;