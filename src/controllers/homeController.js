const connection = require('../config/database')

const getHomepage = (req, res) => {

    let user = []
    connection.query(
        'SELECT * FROM Users u ',
        function (err, results, fields) {
            user = results
            console.log("results =", results); // results contains rows returned by server
            res.send(JSON.stringify(user))
        }

    );

}

const getTuan = (req, res) => {
    res.render('sample.ejs')
}

const getaaa = (req, res) => {
    res.send('aaa')
}
module.exports = {
    getHomepage,
    getTuan,
    getaaa
}