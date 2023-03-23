var appModel = require('../models/app.model');

exports.getmusic = (req, res) => {
    appModel.getmusic((err, results) => {
        console.log(results);
        if (err) {
            res.status(404).json({
                "code": 404,
                "message": err
            });
        } else {
            res.status(200).json({
                "code": 200,
                "message": "music",
                "data": results
            });
        }
    });
}
exports.getartist = (req, res) => {
    appModel.getartist((err, results) => {
        console.log(results);
        if (err) {
            res.status(404).json({
                "code": 404,
                "message": err
            });
        } else {
            res.status(200).json({
                "code": 200,
                "message": "artist",
                "data": results
            });
        }
    });
}