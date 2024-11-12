const Rectangle = require('../models/rectangle'); // Import model Rectangle

exports.getRectangle = (req, res, next) => {
    res.render('rectangle', { perimeter: null, area: null }); // Render trang rectangle với giá trị perimeter và area là null
};

exports.calculatePerimeter = (req, res, next) => {
    const length = parseFloat(req.body.length); // Lấy giá trị chiều dài từ request body và chuyển thành số thực
    const width = parseFloat(req.body.width); // Lấy giá trị chiều rộng từ request body và chuyển thành số thực
    const rectangle = new Rectangle({ length, width }); // Tạo một đối tượng Rectangle mới
    const perimeter = rectangle.calculatePerimeter(); // Tính chu vi của hình chữ nhật
    const area = rectangle.calculateArea(); // Tính diện tích của hình chữ nhật

    rectangle.perimeter = perimeter; // Gán giá trị chu vi cho đối tượng Rectangle
    rectangle.area = area; // Gán giá trị diện tích cho đối tượng Rectangle

    rectangle.save() // Lưu đối tượng Rectangle vào cơ sở dữ liệu
        .then(() => {
            res.render('rectangle', { perimeter: perimeter, area: area }); // Render trang rectangle với giá trị perimeter và area đã tính toán
        })
        .catch(err => console.log(err)); // Xử lý lỗi nếu có lỗi xảy ra
};