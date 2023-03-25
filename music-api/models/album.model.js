var mysql = require('../helpers/database');

exports.getalbum = (cb) => {
    var q = `select * from tbl_album`;

    mysql.query(q, (err, results) => {
        if (err) {
            console.log(err);
            cb(err, null);
        } else {
            cb(null, results);
        }
    });
}

exports.create_album = (data, cb) => {
    var query = `
    INSERT INTO 
    tbl_album
    (
        alb_name,
        alb_image
        )
    VALUES
        (?,?)
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
exports.search_album = (id, cb) => {
    var dataSet = [id];
    var query = `select * album_name from tbl_ album where alb_id=?`;
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
exports.update_album = (data, id) => {
    console.log("Data", data, id);
    return new Promise((resolve, reject) => {
        var query = `UPDATE tbl_album SET ? WHERE alb_id = ?`;
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

exports.delete_album = (id) => {
    return new Promise((resolve, reject) => {
        var query = `DELETE FROM tbl_album WHERE alb_id = ?`;
        mysql.query_filter(query, [id], (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve('Successfully deleted');
            }
        })
    })
}