var appModel = require('../models/music.model');
exports.getIndexPage = (req, res) => {
    res.render('pages/index', {
        title: 'music'
    });
}

exports.getmusic = (req, res) => {
    appModel.getmusic((err, results) => {
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
    })
}

exports.create_music = (req, res) => {
    var body = req.body;
    var dataSet = [
        body.music_name,
        body.music_image,
        body.album_id,
        body.music_files,


    ]
    appModel.create_music(dataSet, (err, results) => {
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
    })
}

exports.search_music = (req, res) => {
    var p_id = req.params.id;

    appModel.get_music(p_name, (err, results) => {
        if (err) {
            res.status(404).json({
                "code": 404,
                "message": err
            });
        } else {
            res.status(200).json({
                "code": 200,
                "message": "searching",
                "data": results
            });
        }
    })
}
exports.update_music = (req, res) => {
    var p_id = req.params.id;
    var body = req.body;
    console.log(body);
    appModel.update_music(body, p_id).then((results) => {
        console.log("Result", results);
        res.status(200).json({
            "code": 200,
            "message": `Updated Successfully!`
        });
    }).catch((err) => {
        res.status(404).json({
            "code": 404,
            "message": err
        });
    })
}
exports.delete_music = (req, res) => {
    var p_id = req.params.id;
    appModel.delete_music(p_id).then((results) => {
        res.status(200).json({
            "code": 200,
            "message": `Deleted Successfully!`
        });
    }).catch((err) => {
        console.log(err);
        res.status(404).json({

            "code": 404,
            "message": err
        });
    });
}