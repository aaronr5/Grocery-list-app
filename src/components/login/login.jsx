import React from 'react';
import cssModules from 'react-css-modules';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';

import { fetchLogin, hideModal, clearError } from 'actions/index.actions';
import styles from './login.css';

class Login extends React.Component {
    componentWillMount() {
        this.props.clearError();
    }

    componentWillUnmount() {
        this.props.clearError();
    }

    formSubmitHandler(values) {
        const username = values.username;
        const password = values.password;
        this.props.fetchLogin(username, password);
    }

    render() {
        return (
            <div styleName="modal-wrapper">
                <button styleName="close-modal-button" onClick={this.props.hideModal.bind(this)}>&times;</button>
                <form styleName="login-form" onSubmit={this.props.handleSubmit(this.formSubmitHandler.bind(this))}>
                    <h1 styleName="form-header">Login</h1>
                    <div styleName="form-group">
                        <label htmlFor="username" styleName="form-input-label">Username</label>
                        <br />
                        <Field name="username" component="input" type="text" placeholder="username" styleName="form-input" required />
                    </div>
                    <div styleName="form-group">
                        <label htmlFor="password" styleName="form-input-label">Password</label>
                        <br />
                        <Field name="password" component="input" type="password" placeholder="password" styleName="form-input" required />
                    </div>
                    <button type="submit" styleName="form-submit-button">Login</button>
                    {this.props.loginError && <p styleName="form-error">{this.props.loginError}</p>}
                    <p styleName="demo-account-section">Demo Username: DemoUser <br /> Demo Password: Password</p>
                </form>
            </div>
        );
    }
}

Login.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    fetchLogin: PropTypes.func.isRequired,
    hideModal: PropTypes.func.isRequired,
    isVisible: PropTypes.bool.isRequired,
    loginError: PropTypes.string,
    clearError: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    isVisible: state.modal.isVisible,
    loginError: state.user.error,
});

export default connect(mapStateToProps, { fetchLogin, hideModal, clearError })(reduxForm({
    form: 'UserLogin',
})(cssModules(Login, styles, { allowMultiple: true })));
