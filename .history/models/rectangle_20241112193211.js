const mongoose = require('mongoose'); // Import Mongoose từ thư viện mongoose

const rectangleSchema = new mongoose.Schema({ // Định nghĩa schema cho model Rectangle
    length: { type: Number, required: true }, // Trường length kiểu Number và b��t buộc
    width: { type: Number, required: true }, // Trường width kiểu Number và bắt buộc
    perimeter: { type: Number, required: true }, // Trường perimeter kiểu Number và bắt buộc
    area: { type: Number, required: true } // Trường area kiểu Number và bắt buộc
});

rectangleSchema.methods.calculatePerimeter = function() { // Định nghĩa phương thức tính chu vi
    return 2 * (this.length + this.width);
};

rectangleSchema.methods.calculateArea = function() { // Định nghĩa phương thức tính diện tích
    return this.length * this.width;
};

module.exports = mongoose.model('Rectangle', rectangleSchema); // Xuất model Rectangle để sử dụng ở các file khác