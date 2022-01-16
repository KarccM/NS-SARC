import { Route , Redirect  } from "react-router-dom";
import { connect } from "react-redux";

const GuestRoute = ({ children, ...rest }) => {
    return (
      <Route
        {...rest}
        render={({ location }) =>
          rest.loggedIn ? (
              <Redirect
                  to={{
                      pathname: "/home",
                      state: { from: location }
                  }}
              />
          ) : (
            children
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
  
export default connect(mapStateToProps)(GuestRoute);