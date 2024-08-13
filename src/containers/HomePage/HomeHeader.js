import React, { Component } from 'react';
import { connect } from 'react-redux';
import './HomeHeader.scss';
import logo from '../../assets/logo.svg';
import {FormattedMessage} from 'react-intl';
import {LANGUAGES} from '.././../utils';

import { changeLanguageApp } from '../../store/actions';

class HomeHeader extends Component {

    changeLanguage = (language) => {
        this.props.changeLanguageAppRedux(language)
        // fire redux event: actions
    };

    render() {
        console.log ('Check props: ',this.props);
        let language = this.props.language;
        return (
            <React.Fragment>
                <div className='home-header-container'>
                    <div className='home-header-content'>
                        <div className='left-content'>
                            <i className="fas fa-bars"></i>
                            <img src={logo}  className='header-logo' />
                        </div>
                        <div className='center-content'>
                            <div className='child-content'>
                                <div><b><FormattedMessage id={"home-header.speciality"} /></b></div>
                                <div className='subs-title'><FormattedMessage id={"home-header.search-doctor"} /></div>
                            </div>
                            <div className='child-content'>
                                <div><b><FormattedMessage id={"home-header.health-facilities"} /></b></div>
                                <div className='subs-title'><FormattedMessage id={"home-header.choose-hospital-clinic"} /></div>
                            </div>
                            <div className='child-content'>
                                <div><b><FormattedMessage id={"home-header.doctors"} /></b></div>
                                <div className='subs-title'><FormattedMessage id={"home-header.choose-doctor"} /></div>
                            </div>
                            <div className='child-content'>
                                <div><b><FormattedMessage id={"home-header.medical-package"} /></b></div>
                                <div className='subs-title'><FormattedMessage id={"home-header.general-health-checkup"} /></div>
                            </div>
                        </div>
                        <div className='right-content'>
                            <div className='support'>                           
                                <i className="fas fa-question-circle"></i>
                                <FormattedMessage id={"home-header.support"} />
                            </div>
                            <div className={language===LANGUAGES.VI?'language-vi active':'language-vi'}><span onClick={()=>this.changeLanguage(LANGUAGES.VI)}>VN</span></div>
                            <div className={language===LANGUAGES.EN?'language-en active':'language-en'}><span onClick={()=>this.changeLanguage(LANGUAGES.EN)}>EN</span></div>
                        </div>  
                    </div>
                </div>
                <div className='home-header-banner'>
                    <div className='content-top'>
                        <div className='title1'><FormattedMessage id={"home-header.banner-top.title1"} /></div>
                        <div className='title2'><FormattedMessage id={"home-header.banner-top.title2"} /></div>
                        <div className='search'>
                            <i className="fas fa-search"></i>
                            <input type='text' placeholder='Tìm chuyên khoa khám bệnh' />
                        </div>
                    </div>
                    <div className='content-bottom'>
                        <div className='options'>
                            <div className='option-child'>
                                <div className='icon-child'>
                                    <i className="far fa-hospital"></i>'
                                </div>
                                <div className='text-child'>
                                <FormattedMessage id={"home-header.banner-bottom.specialist-examination"} />
                                </div>
                            </div>
                            <div className='option-child'>
                                <div className='icon-child'>
                                    <i className="fas fa-mobile-alt"></i>'
                                </div>
                                <div className='text-child'>
                                <FormattedMessage id={"home-header.banner-bottom.remote-examination"} />
                                </div>
                            </div>
                            <div className='option-child'>
                                <div className='icon-child'>
                                    <i className="fas fa-procedures"></i>'
                                </div>
                                <div className='text-child'>
                                <FormattedMessage id={"home-header.banner-bottom.general-examination"} />
                                </div>
                            </div>
                            <div className='option-child'>
                                <div className='icon-child'> 
                                    <i className="fas fa-flask"></i>'
                                </div>
                                <div className='text-child'>
                                <FormattedMessage id={"home-header.banner-bottom.medical-test"} />
                                </div>
                            </div>
                            <div className='option-child'>
                                <div className='icon-child'>
                                    <i className="fas fa-user-md"></i>'
                                </div>
                                <div className='text-child'>
                                <FormattedMessage id={"home-header.banner-bottom.mental-health"} />
                                </div>
                            </div>
                            <div className='option-child'>
                                <div className='icon-child'>
                                    <i className="far fa-hospital"></i>'
                                </div>
                                <div className='text-child'>
                                <FormattedMessage id={"home-header.banner-bottom.dental-checkup"} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
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
        changeLanguageAppRedux: (language) => dispatch(changeLanguageApp(language))
    };
};
/* End Redux */

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
