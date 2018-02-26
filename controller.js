const owners = require('./models/owners');
function welcome(req, res) {
    res.status(200).send('Welcome to our API');
}
function getAllOwners(req, res) {
    owners.fetchAll((err, data) => {
        res.status(200).send(data);
});
}

module.exports = {welcome, getAllOwners};