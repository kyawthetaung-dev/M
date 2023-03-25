var appModel = require('../models/artist.model');
exports.getIndexPage = (req, res) => {
    res.render('pages/index', {
        title: 'artist'
    });
}

exports.getartist = (req, res) => {
    appModel.getartist((err, results) => {
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
    })
}

exports.create_artist = (req, res) => {
    var body = req.body;
    var dataSet = [
        body.artist_name,
        body.artist_image,
        body.artist_gender
    ]
    appModel.create_artist(dataSet, (err, results) => {
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
    })
}

// exports.get_artist = (req, res) => {
//     var p_name = req.params.id;

//     appModel.get_artist(p_name, (err, results) => {
//         if (err) {
//             res.status(404).json({
//                 "code": 404,
//                 "message": err
//             });
//         } else {
//             res.status(200).json({
//                 "code": 200,
//                 "message": "details",
//                 "data": results
//             });
//         }
//     })
// }
exports.update_artist = (req, res) => {
    var p_id = req.params.id;
    var body = req.body;
    console.log(body);
    appModel.update_artist(body, p_id).then((results) => {
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
exports.delete_artist = (req, res) => {
    var p_id = req.params.id;
    appModel.delete_artist(p_id).then((results) => {
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