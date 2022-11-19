class TokenStore {
    token = null;
    constructor() {
        this.token = localStorage.getItem("girafToken")
        //Validate if token is still good and keep/discard token and set state
    }
}

export const tokenStore = new TokenStore();