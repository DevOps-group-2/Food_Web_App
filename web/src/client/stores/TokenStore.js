import {useState} from "react";

const [isLoggedIn, setIsLoggedIn] = useState(false);
class TokenStore {
    constructor() {
        this.state = isLoggedIn;
        this.token = null
    }

    changeLoginBool(bool) {
        setIsLoggedIn(bool);
        this.state = isLoggedIn
    }
}

export const tokenStore = new TokenStore();