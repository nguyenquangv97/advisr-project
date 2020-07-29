import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Welcome from '../components/Welcome/Welcome';

// this is the welcome container
// will access the authenticated state from redux to check whether the user is logged in

const mapStateToProps = (state) => {
    return {
        // redux state 
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        // redux action
        // maybe try auto login if there is a token
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Welcome));