var appcontroller = require('../controllers/music.controller');

module.exports = function(app) {

    app.get('/', appcontroller.getIndexPage);
    app.get('/music/list', appcontroller.getmusic);
    app.get('/music/search/:id', appcontroller.search_music);
    app.post('/music/create', appcontroller.create_music);
    app.post('/music/update/:id', appcontroller.update_music);
    app.delete('/music/delete/:id', appcontroller.delete_music);

}