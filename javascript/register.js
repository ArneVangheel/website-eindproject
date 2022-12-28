
//Create a new customer account based on the inputs
async function Register(){
    const emailInput = document.getElementById('email-input').value;
    let nameInput = document.getElementById('username-input').value;
    let passwordInput = document.getElementById('password-input').value;
    console.log(emailInput)
    this.responsedata = await (await fetch('http://127.0.0.1:8000/register',
        {
            method: 'POST',
            body: JSON.stringify({
                    email: emailInput,
                    name: nameInput,
                    password: passwordInput,
                }
            ),
            headers: {
                'Content-type': 'application/json',
                'accept': 'application/json' ,
            },
        })).json();
    // SLAAG DE TOKEN OP IN DE WEBBROWSER
    if (!this.responsedata["detail"]){
        console.log("Login Succesfull")
        window.location.href = "http://127.0.0.1:8080/index.html";
        alert("Account has been created, please login.")
    }
    else {
        console.log("Login Failed")
        alert(this.responsedata["detail"])
    };
}
