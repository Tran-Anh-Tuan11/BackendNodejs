const connection = require('../config/database')

const getHomepage = (req, res) => {

    return res.render('./home.ejs')
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