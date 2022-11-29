
const Loginstates = ["loading", "logged out", "loggedIn"]
class TokenStore {
    state = Loginstates[1];
    token = null;
    logindata = {username: "", password: ""};

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
        if (response.ok) {
            let isValid = await response
            if (isValid) {
                return true;
            } else {
                return false;
            }
        }
    }
}

export const tokenStore = new TokenStore();