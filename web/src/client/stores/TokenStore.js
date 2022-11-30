

class TokenStore {
    Loginstates = ["loading", "logged out", "loggedIn"]
    state = Loginstates[1];
    token = null;
    setToken(token) {
        this.token = token
        localStorage.setItem("adminToken", token)
    }

    getToken() {
        return localStorage.getItem("adminToken")
    }

    async validate() {
        let response = await fetch("https://food-webapp.grp2.diplomportal.dk/api/validate/tokenTest", {
            "headers": {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            "method": "POST",
            "body": JSON.stringify({
                token: this.getToken()
            })
        })
        return response.ok;
    }
}

export const tokenStore = new TokenStore();