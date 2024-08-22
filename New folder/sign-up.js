function storedata() {
    

    let musa = document.getElementById("name")
    let work1= localStorage.setItem("name",musa.value)

    let email = document.getElementById("email")
    let work2= localStorage.setItem("email",email.value)

    let password= document.getElementById("password")
    let work3= localStorage.setItem("password",password.value)
}