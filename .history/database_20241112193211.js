const mongoose = require('mongoose'); // Import Mongoose từ thư viện mongoose
require('dotenv').config(); // Sử dụng dotenv để load các biến môi trường từ file .env

const uri = process.env.MONGODB_URI; // Lấy URI của MongoDB từ biến môi trường

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }) // Kết nối đến MongoDB bằng Mongoose
    .then(() => console.log('Connected to MongoDB')) // In ra thông báo kết nối thành công
    .catch(err => console.error(err)); // Xử lý lỗi nếu kết nối thất bại

module.exports = mongoose; // Xuất Mongoose để sử dụng ở các file khác
