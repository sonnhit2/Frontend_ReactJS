import React, { Component } from 'react';
import { connect } from 'react-redux';
import HomeHeader from './HomeHeader';

class HomePage extends Component {

    render() {
        return (
            <div>
                <HomeHeader />
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
