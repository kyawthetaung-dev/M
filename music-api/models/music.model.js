var mysql = require('../helpers/database');

exports.getmusic = (cb) => {
    var q = `select * from tbl_music`;

    mysql.query(q, (err, results) => {
        if (err) {
            console.log(err);
            cb(err, null);
        } else {
            cb(null, results);
        }
    });
}

exports.create_music = (data, cb) => {
    var query = `
    INSERT INTO 
    tbl_music
    (
        music_name,
        music_image,
        album_id,
        music_files
        )
    VALUES
        (?,?,?,?)
    `;
    // cb(null, data)
    mysql.query_filter(query, data, (err, results) => {
        if (err) {
            console.log(err);
            cb(err, null);
        } else {
            cb(null, 'Done');
        }
    })
}

// customer details
exports.search_music = (id, cb) => {
    var dataSet = [id];
    var query = `select * music_name from tbl_music where music_id=?`;
    mysql.query_filter(query, dataSet, (err, results) => {
        if (err) {
            cb(err, null);
        } else {
            console.log(results);
            cb(null, results);
        }
    })
}

//customer update
exports.update_music = (data, id) => {
    console.log("Data", data, id);
    return new Promise((resolve, reject) => {
        var query = `UPDATE tbl_music SET ? WHERE music_id = ?`;
        var dataSet = [data, id];
        mysql.query_filter(query, dataSet, (err, results) => {
            console.log("Result", results);
            if (err) {
                reject(err);
            } else {
                resolve('Successfully updated');
            }
        })
    })
}

exports.delete_music = (id) => {
    return new Promise((resolve, reject) => {
        var query = `DELETE FROM tbl_music WHERE music_id = ?`;
        mysql.query_filter(query, [id], (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve('Successfully deleted');
            }
        })
    })
}