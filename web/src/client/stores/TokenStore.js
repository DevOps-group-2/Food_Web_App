
const Loginstates = ["loading", "logged out", "loggedIn"]
class TokenStore {
    state = Loginstates[1];
    token = null;
    logindata = {username:"",password:""};

    setToken(token) {
        this.token = token
        localStorage.setItem("adminToken", token)
    }
    getToken(){
        return localStorage.getItem("adminToken")
    }
}

export const tokenStore = new TokenStore();