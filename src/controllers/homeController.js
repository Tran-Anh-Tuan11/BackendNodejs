const getHomepage = (req, res) => {
    res.send('Hello World vs Tuan Tran')
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