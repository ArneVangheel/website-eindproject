

// make the request to the login endpoint
async function getToken() {
    localStorage.removeItem("token");
    let email = document.getElementById('email-input').value;
    let password = document.getElementById('password-input').value;
    const paramsObj = {grant_type: "", username: email, password: password, scope: "", client_secret:""};
    const searchParams = new URLSearchParams(paramsObj);
    this.responsedata = await (await fetch('http://127.0.0.1:8000/token',
        {
            method: 'POST',
            body: searchParams,
            headers: {
                'Content-type': 'application/x-www-form-urlencoded',
                'accept': 'application/json' ,
            },
        })).json();
    // SLAAG DE TOKEN OP IN DE WEBBROWSER
    if (this.responsedata["access_token"]){
        console.log("Login Succesfull")
        localStorage.setItem('token', this.responsedata["access_token"]);
        location.href = 'http://127.0.0.1:8080/dashboard.html';
    }
    else {
        console.log("Login Failed")
        alert(this.responsedata["detail"])
    };
};
