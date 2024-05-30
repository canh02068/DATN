var express = require('express');
var route = express();
var db = require('./dbconnect');

const ensureToken = require('./auth');

//Lấy về danh sách đơn hàng sắp xếp theo ngày đặt---------------------------
route.get('/get-desc', ensureToken, function(req, res){
    var sql = "CALL sp_donhang_getall_desc()";

    db.query(sql, (err, rows) => {
        if (err) return res.status(500).json({ error: "Có lỗi xảy ra" });
        res.json({ success: true, message: "Lấy danh sách thành công", data: rows[0] });
    });
});

//Lấy về danh sách đơn hàng theo người dùng-----------------------------
route.get('/get-by-nguoi-dung/:id', ensureToken, function(req, res){
    var id = req.params.id;
    
    var sql = "CALL sp_donhang_getbynguoidung(?)";

    db.query(sql, [id], (err, rows) => {
        if (err) return res.status(500).json({ error: "Có lỗi xảy ra" });
        res.json({ success: true, message: "Lấy theo ID thành công", data: rows[0] });
    });
});

//Lấy về danh sách chi tiết đơn hàng theo đơn hàng----------------------
route.get('/get-by-don-hang/:id', ensureToken, function(req, res){
    var id = req.params.id;
    
    var sql = "CALL sp_ctdonhang_getbydonhang(?)";

    db.query(sql, [id], (err, rows) => {
        if (err) return res.status(500).json({ error: "Có lỗi xảy ra" });
        res.json({ success: true, message: "Lấy theo ID thành công", data: rows[0] });
    });
});

//Lấy về 1------------------------------------------------------------
route.get('/get-by-id/:id', function(req, res){
    var id = req.params.id;
    
    var sql = "CALL sp_donhang_getbyid(?)";

    db.query(sql, [id], (err, rows) => {
        if (err) return res.status(500).json({ error: "Có lỗi xảy ra" });
        res.json({ success: true, message: "Lấy theo ID thành công", data: rows[0] });
    });
});

//Thêm---------------------------------------------------------------
route.post('/create', function(req, res) {
    var ten = req.body.Ten;
    var diachi = req.body.DiaChi;
    var sodienthoai = req.body.SoDienThoai; 
    var trangthai = req.body.TrangThai;
    var idnguoidung = req.body.NguoiDung_ID;
    var listchitiet = req.body.ListChiTiet; // Không cần chuyển đổi thành chuỗi JSON

    var jsonData = JSON.stringify(listchitiet);

    var sql = "CALL sp_donhang_create(?, ?, ?, ?, ?, ?)";

    db.query(sql, [ten, diachi, sodienthoai, trangthai, idnguoidung, jsonData], (err, rows) => {
        if (err) return res.status(500).json({ error: "Có lỗi xảy ra"});
        res.json({ success: true, message: "Thêm thành công", data: rows[0] });
    });
});



//Sửa thay đổi trạng thái--------------------------------------------
route.put('/update', ensureToken, function(req, res){
    var id = req.body.ID;
    var trangthai = req.body.TrangThai;

    var sql = "CALL sp_donhang_update(?, ?)";

    db.query(sql, [id, trangthai], (err, rows) => {
        if (err) return res.status(500).json({ error: "Có lỗi xảy ra" });
        res.json({ success: true, message: "Xử lý thành công", data: rows[0] });
    });
});

// Tạo hóa đơn cho một đơn đặt hàng--------------------------------------
route.get('/generate-invoice/:id', function(req, res){
    var id = req.params.id;
    
    var sqlOrderDetails = "CALL sp_donhang_getbyid(?)";
    var sqlOrderItems = "CALL sp_ctdonhang_getbydonhang(?)";

    try {
        // Chi tiết đơn đặt hàng truy vấn
        db.query(sqlOrderDetails, [id], (err, orderRows) => {
            if (err) {
                console.error("Error querying order details:", err);
                return res.status(500).json({ error: "Có lỗi xảy ra khi lấy thông tin đơn hàng" });
            }
            
            if (orderRows[0].length === 0) {
                return res.status(404).json({ error: "Đơn hàng không tồn tại" });
            }

            var orderDetails = orderRows[0][0];

            // Mục truy vấn đặt hàng
            db.query(sqlOrderItems, [id], (err, itemRows) => {
                if (err) {
                    console.error("Error querying order items:", err);
                    return res.status(500).json({ error: "Có lỗi xảy ra khi lấy chi tiết đơn hàng" });
                }

                var orderItems = itemRows[0];

                // Định dạng dữ liệu hóa đơn
                var invoice = {
                    orderId: orderDetails.ID,
                    customerName: orderDetails.Ten,
                    customerAddress: orderDetails.DiaChi,
                    customerPhone: orderDetails.SoDienThoai,
                    orderStatus: orderDetails.TrangThai,
                    orderDate: orderDetails.NgayDatHang,
                    items: orderItems.map(item => ({
                        productId: item.SanPham_ID,
                        productName: item.TenSanPham,
                        quantity: item.SoLuong,
                        price: item.Gia
                    })),
                    totalAmount: orderItems.reduce((total, item) => total + (item.SoLuong * item.Gia), 0)
                };

                res.json({ success: true, message: "Hóa đơn đã được tạo", data: invoice });
            });
        });
    } catch (err) {
        console.error("Unexpected error:", err);
        res.status(500).json({ error: "Có lỗi xảy ra" });
    }
});


module.exports = route;