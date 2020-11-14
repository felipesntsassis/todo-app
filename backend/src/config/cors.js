module.exports = function (req, res, next) {
    res.header('Allow-Access-Allow-Origin', '*');
    res.header('Allow-Access-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow-Access-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
};
