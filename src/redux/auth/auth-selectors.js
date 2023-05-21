export const isUserLogin = ({ auth }) => auth.isLogin;
export const getUser = ({ auth }) => auth.user;
export const getAuth = ({ auth }) => {
  const { isLogin, token, user } = auth;
  return { isLogin, token, user };
};

export const selectUser = ({ auth }) => auth.user;
export const selectAuth = ({ auth }) => {
  const { isLogin, token } = auth;
  return { isLogin, token };
};
export const selectLoading = ({ auth }) => auth.loading;
