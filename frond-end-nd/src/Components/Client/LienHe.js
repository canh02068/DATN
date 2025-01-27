import React from 'react';

const LienHe = () => {
    return (
        <>
            <div className="contact-page">
                <div className="row">

                    <div className="col-md-12 contact-map outer-bottom-vs">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7455.641067162451!2d106.3659810907388!3d20.879282722931453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31358569cb0a9c89%3A0x4c401bcb5631624a!2zTmdoxKlhIFjDoSwgSOG6o2kgRMawxqFuZywgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1716973636058!5m2!1svi!2s"
                            width="600" height="450" style={{ border: 0 }}></iframe>
                    </div>
                    <div className="col-md-8 contact-form">
                        <div className="col-md-12 contact-title">
                            <h4>Contact Form</h4>
                        </div>
                        <div className="col-md-4 ">
                            <form className="register-form" >
                                <div className="form-group">
                                    <label className="info-title" htmlFor="exampleInputName">Your Name <span>*</span></label>
                                    <input type="email" className="form-control unicase-form-control text-input" id="exampleInputName"
                                        placeholder="" />
                                </div>
                            </form>
                        </div>
                        <div className="col-md-4">
                            <form className="register-form" >
                                <div className="form-group">
                                    <label className="info-title" htmlFor="exampleInputEmail1">Email Address <span>*</span></label>
                                    <input type="email" className="form-control unicase-form-control text-input" id="exampleInputEmail1"
                                        placeholder="" />
                                </div>
                            </form>
                        </div>
                        <div className="col-md-4">
                            <form className="register-form" >
                                <div className="form-group">
                                    <label className="info-title" htmlFor="exampleInputTitle">Title <span>*</span></label>
                                    <input type="email" className="form-control unicase-form-control text-input" id="exampleInputTitle"
                                        placeholder="Title" />
                                </div>
                            </form>
                        </div>
                        <div className="col-md-12">
                            <form className="register-form" >
                                <div className="form-group">
                                    <label className="info-title" htmlFor="exampleInputComments">Your Comments <span>*</span></label>
                                    <textarea className="form-control unicase-form-control" id="exampleInputComments"></textarea>
                                </div>
                            </form>
                        </div>
                        <div className="col-md-12 outer-bottom-small m-t-20">
                            <button type="submit" className="btn-upper btn btn-primary checkout-page-button">Send Message</button>
                        </div>
                    </div>
                    <div className="col-md-4 contact-info">
                        <div className="contact-title">
                            <h4>Information</h4>
                        </div>
                        <div className="clearfix address">
                            <span className="contact-i"><i className="fa fa-map-marker"></i></span>
                            <span className="contact-span">ThemesGround, 789 Main rd, Anytown, CA 12345 USA</span>
                        </div>
                        <div className="clearfix phone-no">
                            <span className="contact-i"><i className="fa fa-mobile"></i></span>
                            <span className="contact-span">+(888) 123-4567<br />+(888) 456-7890</span>
                        </div>
                        <div className="clearfix email">
                            <span className="contact-i"><i className="fa fa-envelope"></i></span>
                            <span className="contact-span"><a href="mailto:marazoo@themesground.com">marazoo@themesground.com</a></span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LienHe;
