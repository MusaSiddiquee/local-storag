function storedata() {

    let email = document.getElementById("email")
    let work2= localStorage.getItem("email")

    let password= document.getElementById("password")
    let work3= localStorage.getItem("password")

if(work2 === email.value && work3 === password.value){
    alert("Great work")
    }
    else{
        alert("Try again")
}

}