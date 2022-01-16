import { Route , Redirect  } from "react-router-dom";
import { connect } from "react-redux";

const AuthRoute = ({ children, ...rest }) => {
    return (
      <Route
        {...rest}
        render={({ location }) =>
          rest.loggedIn ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/profile",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
}

const mapStateToProps = state => {
    return {
      loggedIn: state.auth.loggedIn
    };
};
  
export default connect(mapStateToProps)(AuthRoute);