import React, { Component } from 'react';
import { connect } from 'react-redux';
import HomeHeader from './HomeHeader';
import Specialty from './Section/Specialty';

class HomePage extends Component {

    render() {
        return (
            <div>
                <HomeHeader />
                <Specialty />
            </div>
        );
    }
}

/* Begin Redux */
const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};
/* End Redux */

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
