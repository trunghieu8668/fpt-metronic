import React from "react";
import { AuthenticationContext } from '@axa-fr/react-oidc-context';
import { injectIntl } from "react-intl";
import { connect, useDispatch } from "react-redux";
import * as auth from "../_redux/authRedux";


function Login(props) {
  const dispatch = useDispatch();
  const mapToProps = (data) => {
    props.login(data.access_token);
    dispatch({
      type: "[Load User] Auth API",
      payload: { user: data.profile},
    });
  }

  return (
    <AuthenticationContext.Consumer>
      {props => props.oidcUser || !props.isEnabled ? mapToProps(props.oidcUser) : <button onClick={props.login}>login</button>}
    </AuthenticationContext.Consumer>
    
  );
}

export default injectIntl(connect(null, auth.actions)(Login));
