import React, { useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';
import ReactToPrint from 'react-to-print';


const ModalInDonHang = (props) => {
    const { show, setShow, data2 } = props;
    const printRef = useRef();

    const handleClose = () => {
        setShow(false);
    }

    return (
        <Modal show={show} size="lg" onHide={handleClose} backdrop="static">
            <Modal.Header closeButton>
            <br />
            
                <Modal.Title>THÔNG TIN CHI TIẾT</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div ref={printRef}>
                    <div>
                    <br />
                    <br />
                    <br />
                        <p>---------------------------------------------CỬA HÀNG MARAZZO---------------------------------------------</p>
                        <p>Địa chỉ: Nghĩa Xá - Đại Sơn - Tứ Kỳ - Hải Dương</p>
                        <p>Điện thoại: 0387291878</p>
                        {data2.map((item, index) => (
                            <div key={index}>
                                <p>MÃ ĐƠN HÀNG: {item.ID}</p>
                                <p>Tên khách hàng: cảnh{item.Ten}</p>
                                <p>Số điện thoại: 0387291878{item.SoDienThoai}</p>
                                <p>Ngày đặt: 30/5/2024{item.Date}</p>
                            </div>
                        ))}
                    </div>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Tên Sản Phẩm</th>
                                <th>Số Lượng</th>
                                <th>Đơn Giá</th>
                                <th>Tổng Tiền</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data2.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.TenSanPham}</td>
                                    <td>{item.SoLuong}</td>
                                    <td>{item.Gia.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</td>
                                    <td>{(item.Gia * item.SoLuong).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                    <tbody>
                    {data2.map((item, index) => (
                        <tr key={index}> 
                        Tổng Hóa Đơn Thanh Toán: {(item.Gia * item.SoLuong).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
                        </tr>
                    ))}
                    </tbody>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <ReactToPrint
                    trigger={() => <Button variant="primary">In hóa đơn</Button>}
                    content={() => printRef.current}
                />
                <Button variant="secondary" onClick={handleClose}>
                    Đóng
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ModalInDonHang;
