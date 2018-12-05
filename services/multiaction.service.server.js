const multiActionDao = require('../dao/multiaction.dao.server')
module.exports = app =>
{
    populateAll = (req,res) =>

    {
        res.send('Data')
        multiActionDao.populateDatabase()
    }

    truncateAll = (req,res) =>
    {
        res.send('Deleting All Records')
        multiActionDao.truncateDatabase()
    }



    app.get('/api/populate', populateAll)
    app.get('/api/all', truncateAll)
}
