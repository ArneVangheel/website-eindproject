function Logout() {
    localStorage.removeItem("token");
}

window.onload = function() {checkToken()};
async function checkToken() {
    this.responsedata = await (await fetch('http://127.0.0.1:8000/users/me',
        {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token'),
                'accept': 'application/json',
            },
        })).json();
    console.log(this.responsedata);
    if (this.responsedata["email"] == null) {
        window.location.href = "https://delightful-kashata-80ca8b.netlify.app/index.html";
        console.log("User not authenticated")
    }

}
