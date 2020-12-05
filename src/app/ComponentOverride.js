import * as React from 'react';
// import { connect } from 'react-redux';

// const mapStateToProps = (state, props) => {
//   const user = state.oidc.user;
//   const isAuthenticated = user !== null && !user.expired;
//   return {
//     isVisible: isAuthenticated,
//     name: user && user.profile ? user.profile.full_name : '',
//     email: user && user.profile ? user.profile.email : '',
//     picture: user && user.profile ? user.profile.picture : '',
//     user_info: user && user.profile ? user.profile.title : '',
//     role: user && user.profile ? user.profile.role : '',
//     token: user ? user.access_token : '',
//     token_type: user ? user.token_type : '',  
//   };
// };

// const enhance = connect(mapStateToProps);
const ComponentOverride = () => {
  return (
    <div>
      <h1>This is a Custom Callback component</h1>
    </div>
  );
};

export default ComponentOverride;


