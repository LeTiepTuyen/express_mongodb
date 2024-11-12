const Rectangle = require('../models/rectangle');
const db = require('../database');

exports.getRectangle = (req, res, next) => {
    res.render('rectangle', { perimeter: null });
};

exports.calculatePerimeter = (req, res, next) => {
    const length = parseFloat(req.body.length);
    const width = parseFloat(req.body.width);
    const rectangle = new Rectangle(length, width);
    const perimeter = rectangle.calculatePerimeter();

    // Lưu dữ liệu vào cơ sở dữ liệu
    db.execute('INSERT INTO rectangles (length, width, perimeter) VALUES (?, ?, ?)', 
        [length, width, perimeter])
        .then(() => {
            res.render('rectangle', { perimeter: perimeter });
        })
        .catch(err => console.log(err));
};