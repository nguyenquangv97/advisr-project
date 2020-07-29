import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import classes from './Welcome.module.css';


class Welcome extends Component {

    signupinHandler = (event) => {
        event.preventDefault();
        this.props.history.push('/auth');
    }
    render() {
        return (
            <React.Fragment>
                <header className={classes.welcomeHeader}>
                    <nav>
                        <div className={classes.row}>
                            <img src="https://gosw.org/wp-content/uploads/2020/03/logo-Placeholder.png" className={classes.logo} alt=""/>
                            <ul className={classes.mainNav}>
                                <li><a href="#about">What is Pegasus?</a></li>
                                <li><a href="#">How it works?</a></li>
                                {this.props.isAuthenticated
                                    ? <li><a href='/auth'>signup / login</a></li>
                                    : null
                                }
                                
                            </ul>
                        </div>
                    </nav>

                    <div className={classes.heroTextBox}>
                        <h1>placeholder text<br/>placeholder text2</h1>
                        <a className={classes.btn + ' ' + classes.btnFull} href="/software">Get Started!</a>
                        <a class={classes.btn + ' ' + classes.btnGhost} href="#">Explore</a>

                    </div>
                </header>
            </React.Fragment>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.auth.token !== null
    }
}

export default withRouter(Welcome);