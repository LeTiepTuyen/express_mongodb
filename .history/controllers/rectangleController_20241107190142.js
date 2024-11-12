const Rectangle = require('../models/rectangle');

exports.getRectangle = (req, res, next) => {
    res.render('rectangle', { perimeter: null });
};

exports.calculatePerimeter = (req, res, next) => {
    const length = parseFloat(req.body.length);
    const width = parseFloat(req.body.width);
    const rectangle = new Rectangle(length, width);
    const perimeter = rectangle.calculatePerimeter();
    res.render('rectangle', { perimeter: perimeter });
};