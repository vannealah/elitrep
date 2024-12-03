function checkLoginStatusByUsername(user: string): LoginStatus {
  // Query database to get user's login status
  const userLoginStatus = queryDatabase(`SELECT * FROM users WHERE username = ?`, user);

  if (userLoginStatus && userLoginStatus.isLogin) {
    return {
      isLogin: true,
      username: userLoginStatus.username,
      loginTime: userLoginStatus.loginTime,
      expireTime: userLoginStatus.expireTime
    };
  } else {
    return {
      isLogin: false
    };
  }
}
