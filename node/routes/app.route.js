var appcontroller = require('../controllers/app.controller');
var pagecontroller = require('../controllers/page.controller');
module.exports = function(app) {
    app.get('/music', appcontroller.getmusic);
    app.get('/artist', appcontroller.getartist);

    app.get('/', pagecontroller.getIndexPage);
    app.get('/list', pagecontroller.getmusic);
    app.get('/detail/:id', pagecontroller.get_music);
    app.post('/create', pagecontroller.create_music);
    app.post('/update/:id', pagecontroller.update_music);
    app.delete('/delete/:id', pagecontroller.delete_music);

}