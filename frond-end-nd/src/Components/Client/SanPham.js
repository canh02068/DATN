import React, { useEffect, useState } from 'react';
import { Row, Col, Image, Button } from 'react-bootstrap';
import { GetSlide_Asc } from '../../services/slideServices';
import { GetSanPham_desc, GetSanPhamNgauNhien } from '../../services/sanphamService';
import { GetLoaiSanPhamALL } from '../../services/loaisanphamService';
import { GetByID } from '../../services/sanphamService';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/slices/cartSlice';
import { Link } from 'react-router-dom';

const SanPham = () => {
    const [data1, setData1] = useState([]);
    const dispatch = useDispatch();
    const Themvaogio = (MaSanPham, soluong) => {
        GetByID(MaSanPham).then(res => {
            console.log(res)
            const sanpham = {
                MaSanPham: res.data[0]?.ID,
                TenSP: res.data[0]?.Ten,
                AnhDaiDien: res.data[0]?.Anh,
                SoLuong: soluong,
                DonGia: res.data[0]?.Gia,
            };
            dispatch(addToCart(sanpham));
            alert("Sản phẩm đã được thêm vào giỏ hàng");
        });
    };
    useEffect(() => {

        getSanPham_desc();

    }, [])



    const getSanPham_desc = async () => {
        try {
            const res = await GetSanPham_desc();
            const data = res && res.data ? res.data : res
            //console.log(data)
            setData1(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    return (
        <>
            <Row className="scroll-tabs outer-top-vs">
                <div className="more-info-tab clearfix">
                    <h3 className="new-product-title">Sản phẩm</h3>
                </div>
                <div className="tab-content outer-top-xs">
                    <div className="tab-pane in active" id="all">
                        <div className="product-slider">
                            <Row className="product-row">
                                {data1.map((product, index) => (
                                    <Col xs={12} sm={6} md={4} lg={3} xl={2} key={index} className="product-col">
                                        <div className="product">
                                            <div className="product-image">
                                            <Link to={`/XemChiTiet/${product.ID}`}>
                                                <Image
                                                    src={`data:image/jpg;base64,${product.Anh}`}
                                                    alt={product.name}
                                                    fluid
                                                    style={{ height: '300px' }}
                                                />
                                            </Link>
                                                {product.isNew && <div className="tag new"><span>New</span></div>}
                                            </div>
                                            <div className="product-info text-center">
                                                <h3 className="name">
                                                    <Link to={`/XemChiTiet/${product.ID}`}>
                                                        {product.Ten.length > 20 ? product.Ten.substring(0, 20) + "..." : product.Ten}
                                                    </Link>
                                                </h3>
                                                <div className="product-price">
                                                    <h4><span>{product.Gia.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</span></h4>
                                                </div>
                                            </div>
                                            <div className="cart clearfix text-center animate-effect">
                                                <div className="action">
                                                    <ul className="list-unstyled">
                                                        <li className="add-cart-button btn-group">
                                                            <Button onClick={() => { Themvaogio(product.ID, 1) }} data-toggle="tooltip" className="btn btn-primary icon" type="button" title="Add Cart">
                                                                <i className="fa fa-shopping-cart"></i>
                                                            </Button>
                                                            <Button onClick={() => { Themvaogio(product.ID, 1) }} className="btn btn-primary cart-btn" type="button">Add to cart</Button>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                ))}
                            </Row>
                        </div>
                    </div>
                </div>
            </Row>

        </>
    )
}

export default SanPham;