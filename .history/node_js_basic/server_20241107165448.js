// Tạo file server.js
const http = require('http'); // Import module http

// Tạo web server
const server = http.createServer((req, res) => {
  // Cấu hình HTTP header
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  // Gửi phản hồi đến client
  res.end('Hello, World!');
});

// Lắng nghe tại cổng 3000
server.listen(3000, () => {
  console.log('Server đang chạy tại http://localhost:3000');
});
