import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Specialty.scss';
import {FormattedMessage} from 'react-intl';
import Slider from 'react-slick';

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class Specialty extends Component {
         
    render() {
        let settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1
          };

        return (
            <div className='section-specialty'>
                <div className='specialty-container'>
                    <div className='specialty-header'>
                        <span className='title-section'>Chuyên khoa phổ biến</span>
                        <butt className='btn-section'>Xem thêm</butt>
                    </div>
                    <div className='specialty-body'>
                        <Slider {...settings}>
                            <div className='specialty-customize'>
                                <div className='bg-image' />
                                <div>Cơ xương khớp</div>
                            </div>
                            <div className='specialty-customize'>
                                <div className='bg-image'  />
                                <div>Cơ xương khớp</div>
                            </div>
                            <div className='specialty-customize'>
                                <div className='bg-image'  />
                                <div>Cơ xương khớp</div>
                            </div>
                            <div className='specialty-customize'>
                                <div className='bg-image'  />
                                <div>Cơ xương khớp</div>
                            </div>
                            <div className='specialty-customize'>
                                <div className='bg-image'  />
                                <div>Cơ xương khớp</div>
                            </div>
                            <div className='specialty-customize'>
                                <div className='bg-image' />
                                <div>Cơ xương khớp</div>
                            </div>

                        </Slider>
                    </div>
                </div>
                <div style={{height:'300px'}}></div>
            </div>
        );
    }
}

/* Begin Redux */
const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};
/* End Redux */

export default connect(mapStateToProps, mapDispatchToProps)(Specialty);
