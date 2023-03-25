var appcontroller = require('../controllers/album.controller');

module.exports = function(app) {

    app.get('/', appcontroller.getIndexPage);
    app.get('/album/list', appcontroller.getalbum);
    app.get('/album/search/:id', appcontroller.search_album);
    app.post('/album/create', appcontroller.create_album);
    app.post('/album/update/:id', appcontroller.update_album);
    app.delete('/album/delete/:id', appcontroller.delete_album);

}