var artistcontroller = require('../controllers/artist.controller');

module.exports = function(app) {

    app.get('/', artistcontroller.getIndexPage);
    app.get('/artist/list', artistcontroller.getartist);
    // app.get('/artist/search/:id', artistcontroller.get_artist);
    app.post('/artist/create', artistcontroller.create_artist);
    app.post('/artist/update/:id', artistcontroller.update_artist);
    app.delete('/artist/delete/:id', artistcontroller.delete_artist);
}