import {decorate, observable} from "mobx";
const baseUrl = process.env.NODE_ENV === 'development' ?  "http://localhost:8080/":""; //Check if dev

const Loginstates = {LOGGING_IN:"Loading", LOGGEDOUT:"Logout", LOGGED_IN:"LoggedIn"};
class TokenStore {
    state = Loginstates.LOGGEDOUT;
    token = null;
    logindata = {username:"",password:""};

}

export const tokenStore = new TokenStore();