export const oidcConfiguration = {
  client_id: 'crm_web',
  redirect_uri: 'http://localhost:3000/authentication/callback',
  response_type: 'id_token token',
  post_logout_redirect_uri: 'http://localhost:3000/',
  scope: 'openid profile role som',
  authority: 'https://identity-beta.fptshop.com.vn',
  silent_redirect_uri: 'http://localhost:3000/authentication/silent_callback',
  automaticSilentRenew: true,
  loadUserInfo: true,
  requireHttps: false,
  disableAtHashCheck: true
};