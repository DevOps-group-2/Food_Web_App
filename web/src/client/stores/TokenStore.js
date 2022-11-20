
const Loginstates = ["loading", "logged out", "loggedIn"]
class TokenStore {
    state = Loginstates[1];
    token = null;
    logindata = {username:"",password:""};

}

export const tokenStore = Object.freeze(new TokenStore());