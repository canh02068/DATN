import React, { useRef, useEffect, useState } from 'react';
import TableDonHang from './TableDonHang';
import { getALL, getByDonHang, duyetDon, getInDonHang } from '../../services/donhangService';
import ModalChiTiet from './ModalChiTiet';
import ModalInDonHang from './ModalInDonHang';

const DonHangAd = (props) => {
    const [data, setData] = useState([]);
    const [data1, setData1] = useState([]);
    const [data2, setData2] = useState([]);
    const [selectedOrder, setSelectedOrder] = useState(null);
    const [showModalChiTiet, setShowModalChiTiet] = useState(false);
    const [showModalInDonHang, setShowModalInDonHang] = useState(false);

    useEffect(() => {
        getDonHang();
    }, []);

    const hanldeDuyetDon = async (item) => {
        try {
            const obj = {
                ID: item.ID,
                TrangThai: 1
            };

            const confirmed = window.confirm('Bạn có chắc chắn muốn duyệt đơn hàng này không?');

            if (confirmed) {
                const res = await duyetDon(obj);
                if (res) {
                    alert('Duyệt đơn thành công!');
                    await getDonHang();
                } else {
                    alert('Có lỗi xảy ra khi duyệt đơn hàng.');
                }
            } else {
                console.log('Duyệt đơn đã bị hủy bỏ.');
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleXemChiTiet = async (item) => {
        setShowModalChiTiet(true);
        const res = await getByDonHang(item.ID);
        setData1(res && res.data ? res.data : res);
    };

    const handleInDonHang = async (item) => {
        setShowModalInDonHang(true);
        setSelectedOrder(item); // Truyền thông tin đơn hàng vào state
        const res = await getByDonHang(item.ID);
        setData2(res && res.data ? res.data : res);
    };

    const getDonHang = async () => {
        try {
            const res = await getALL();
            const data = res && res.data ? res.data : res;
            setData(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <>
            <div className="card shadow mb-4">
                <div className="card-body">
                    <div className="table-responsive">
                        <TableDonHang
                            data={data}
                            hanldeDuyetDon={hanldeDuyetDon}
                            handleXemChiTiet={handleXemChiTiet}
                            handleInDonHang={handleInDonHang}
                        />
                        <ModalChiTiet
                            show={showModalChiTiet}
                            setShow={setShowModalChiTiet}
                            data1={data1}
                            setData1={setData1}
                        />
                        <ModalInDonHang
                            show={showModalInDonHang}
                            setShow={setShowModalInDonHang}
                            data2={data2}
                            selectedOrder={selectedOrder} // Truyền selectedOrder vào Modal
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default DonHangAd;
