const { join } = require('path');

const clntError = (req, res) => {
    res.status(404);
    res.sendFile(join(__dirname, '..', '..', 'public', '404.html'));
};
const srvError = (err, req, res, next) => {
    res.status(500);
    res.sendFile(join(__dirname, '..', '..', 'public', '500.html'));
    next();
};

module.exports = {clntError,srvError};