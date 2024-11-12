const Rectangle = require('../models/rectangle');
const db = require('../database');

exports.getRectangle = (req, res, next) => {
    res.render('rectangle', { perimeter: null, area: null });
};

exports.calculatePerimeter = (req, res, next) => {
    const length = parseFloat(req.body.length);
    const width = parseFloat(req.body.width);
    const rectangle = new Rectangle(length, width);
    const perimeter = rectangle.calculatePerimeter();
    const area = rectangle.calculateArea();

    // Lưu dữ liệu vào cơ sở dữ liệu
    db.execute('INSERT INTO rectangles (length, width, perimeter, area) VALUES (?, ?, ?, ?)', 
        [length, width, perimeter, area])
        .then(() => {
            res.render('rectangle', { perimeter: perimeter, area: area });
        })
        .catch(err => console.log(err));
};