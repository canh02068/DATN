import React from 'react';
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <footer id="footer" className="footer color-bg">
            <div className="footer-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-6 col-md-3">
                            <div className="address-block">
                                <div className="module-body">
                                    <ul className="toggle-footer" style={{}}>
                                        <li className="media">
                                            <div className="pull-left">
                                                <span className="icon fa-stack fa-lg">
                                                    <i className="fa fa-map-marker fa-stack-1x fa-inverse"></i>
                                                </span>
                                            </div>
                                            <div className="media-body">
                                                <p>Nghĩa Xá - Đại SƠn - Tứ Kỳ - Hải Dương</p>
                                            </div>
                                        </li>
                                        <li className="media">
                                            <div className="pull-left">
                                                <span className="icon fa-stack fa-lg">
                                                    <i className="fa fa-mobile fa-stack-1x fa-inverse"></i>
                                                </span>
                                            </div>
                                            <div className="media-body">
                                                <p> 0387291878 / 0976029856</p>
                                            </div>
                                        </li>
                                        <li className="media">
                                            <div className="pull-left">
                                                <span className="icon fa-stack fa-lg">
                                                    <i className="fa fa-envelope fa-stack-1x fa-inverse"></i>
                                                </span>
                                            </div>
                                            <div className="media-body">
                                                <span><Link>Canh02068@gmail.com</Link></span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-xs-12 col-sm-6 col-md-3">
                            <div className="module-heading">
                                <h4 className="module-title">Dịch vụ khách hàng</h4>
                            </div>
                            <div className="module-body">
                                <ul className='list-unstyled'>
                                    <li className="first"><Link title="Contact us">Tài khoản của tôi</Link></li>
                                    <li><Link title="About us">lịch sử đơn hàng</Link></li>
                                    <li><Link title="faq">FAQ</Link></li>
                                    <li><Link title="Popular Searches">Đặc biệt</Link></li>
                                    <li className="last"><Link title="Where is my order?">Trung tâm trợ giúp</Link></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-xs-12 col-sm-6 col-md-3">
                            <div className="module-heading">
                                <h4 className="module-title">Tập đoàn</h4>
                            </div>
                            <div className="module-body">
                                <ul className='list-unstyled'>
                                    <li className="first"><Link title="Your Account">Về chúng tôi</Link></li>
                                    <li><Link title="Information">Dịch vụ khách hàng</Link></li>
                                    <li><Link title="Addresses">Công ty</Link></li>
                                    <li><Link title="Addresses">Quan hệ đầu tư</Link></li>
                                    <li className="last"><Link title="Orders History">tìm kiếm nâng cao</Link></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-xs-12 col-sm-6 col-md-3">
                            <div className="module-heading">
                                <h4 className="module-title">tại sao chọn chúng tôi</h4>
                            </div>
                            <div className="module-body">
                                <ul className='list-unstyled'>
                                    <li className="first"><Link title="About us">Hướng dẫn mua sắm</Link></li>
                                    <li><Link title="Blog">Blog</Link></li>
                                    <li><Link title="Company">Công ty</Link></li>
                                    <li><Link title="Investor Relations">Quan hệ đầu tư</Link></li>
                                    <li className=" last"><Link title="Suppliers">Liên hệ chúng tôi</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright-bar">
                <div className="container">
                    <div className="col-xs-12 col-sm-4 no-padding social">
                        <ul className="link">
                            <li className="fb pull-left"><Link target="_blank" rel="nofollow" title="Facebook"></Link></li>
                            <li className="tw pull-left"><Link target="_blank" rel="nofollow" title="Twitter"></Link></li>
                            <li className="googleplus pull-left"><Link target="_blank" rel="nofollow" title="GooglePlus"></Link></li>
                            <li className="rss pull-left"><Link target="_blank" rel="nofollow" title="RSS"></Link></li>
                            <li className="pintrest pull-left"><Link target="_blank" rel="nofollow" title="PInterest"></Link></li>
                            <li className="linkedin pull-left"><Link target="_blank" rel="nofollow" title="Linkedin"></Link></li>
                            <li className="youtube pull-left"><Link target="_blank" rel="nofollow" title="Youtube"></Link></li>
                        </ul>
                    </div>
                    <div className="col-xs-12 col-sm-4 no-padding copyright"><Link target="_blank"
                        href="https://www.templateshub.net">Bản quyền thuộc Thanh Củm</Link> </div>

                </div>
            </div>
        </footer>
    );
}

export default Footer;
