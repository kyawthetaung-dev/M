var appModel = require('../models/album.model');
exports.getIndexPage = (req, res) => {
    res.render('pages/index', {
        title: 'music'
    });
}

exports.getalbum = (req, res) => {
    appModel.getalbum((err, results) => {
        if (err) {
            res.status(404).json({
                "code": 404,
                "message": err
            });
        } else {
            res.status(200).json({
                "code": 200,
                "message": "album",
                "data": results
            });
        }
    })
}

exports.create_album = (req, res) => {
    var body = req.body;
    var dataSet = [
        body.alb_name,
        body.alb_image
    ]
    appModel.create_album(dataSet, (err, results) => {
        if (err) {
            res.status(404).json({
                "code": 404,
                "message": err
            });
        } else {
            res.status(200).json({
                "code": 200,
                "message": "album",
                "data": results
            });
        }
    })
}

exports.search_album = (req, res) => {
    var p_id = req.params.id;

    appModel.get_album(p_name, (err, results) => {
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
exports.update_album = (req, res) => {
    var p_id = req.params.id;
    var body = req.body;
    console.log(body);
    appModel.update_album(body, p_id).then((results) => {
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
exports.delete_album = (req, res) => {
    var p_id = req.params.id;
    appModel.delete_album(p_id).then((results) => {
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