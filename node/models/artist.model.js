var mysql = require('../helpers/database');

exports.getartist = (cb) => {
    var q = `select * from tbl_artist`;

    mysql.query(q, (err, results) => {
        if (err) {
            console.log(err);
            cb(err, null);
        } else {
            cb(null, results);
        }
    });
}

exports.create_artist = (data, cb) => {
    var query = `
    INSERT INTO 
    tbl_artist
    (
        artist_name,
        artist_image,
        artist_gender
        )
    VALUES
        (?,?,?)
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
// exports.search_artist = (id, cb) => {
//     var dataSet = [id];
//     var query = `select * music_name from tbl_artist where artist_id=?`;
//     mysql.query_filter(query, dataSet, (err, results) => {
//         if (err) {
//             cb(err, null);
//         } else {
//             console.log(results);
//             cb(null, results);
//         }
//     })
// }

//customer update
exports.update_artist = (data, id) => {
    console.log("Data", data, id);
    return new Promise((resolve, reject) => {
        var query = `UPDATE tbl_artist SET ? WHERE artist_id = ?`;
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

exports.delete_artist = (id) => {
    return new Promise((resolve, reject) => {
        var query = `DELETE FROM tbl_artist WHERE artist_id = ?`;
        mysql.query_filter(query, [id], (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve('Successfully deleted');
            }
        })
    })
}