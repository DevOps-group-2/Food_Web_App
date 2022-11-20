import {decorate, observable} from "mobx";
const baseUrl = process.env.NODE_ENV === 'development' ?  "http://localhost:8080/":""; //Check if dev

const Loginstates = ["loading", "logged out", "loggedIn"]
class TokenStore {
    state = Loginstates.indexOf(1);
    token = null;
    logindata = {username:"",password:""};

}

export const tokenStore = new TokenStore();