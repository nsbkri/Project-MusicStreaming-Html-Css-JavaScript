//swapping login dan register
const loginsec=document.querySelector('.login-section')
const loginlink=document.querySelector('.login-link')
const registerlink=document.querySelector('.register-link')
registerlink.addEventListener('click',()=>{
    loginsec.classList.add('active')
})
loginlink.addEventListener('click',()=>{
    loginsec.classList.remove('active')
})

//validasi data register
function regValid(event) {
    event.preventDefault();

    var regName = document.getElementById("regName").value;
    var regMail = document.getElementById("regMail").value;
    var regPass1 = document.getElementById("regPass1").value;
    var regPass2 = document.getElementById("regPass2").value;
    var dataValid = document.getElementById("dataValid");

    var nameError = /[!@#$%^&*()_+\-=\[\]{};':"\\|,<>\/?]/;
    var mailError = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var spaceError =/\s/;

   
    if (regName.length < 6) {
        alert("Nama pengguna minimal 6 karakter");
        return false;
    } else if(nameError.test(regName)){
        alert("Nama pengguna tidak boleh mengandung karakter spesial");
        return false;
    } else if(spaceError.test(regName)) {
        alert("Nama pengguna tidak boleh mengandung karakter spesial");
        return false;
    } else if(!mailError.test(regMail)){
        alert("Email yang Anda masukkan tidak valid");
        return false;
    } else if(regPass1.length < 8) {
        alert("Kata sandi minimal 8 karakter");
        return false;
    } else if(regPass1 != regPass2) {
        alert("Kata sandi tidak sama");
        return false;
    } else if(!dataValid.checked) {
        alert("Berikan centang jika Anda yakin data tersebut sudah valid");
        return false;
    } else {
        if(confirm("Apakah Anda sudah yakin bahawa data Anda sudah benar?")){
           alert("Registrasi Berhasil!");
           setTimeout(function() {
            location.reload();
          }, 1000);
          return true;
        } else{
           alert("Registrasi Dibatalkanl!");
           return false;
        }
    }
}

//validasi data login
function loginValid(event) {
    
    event.preventDefault();
    var loginName = document.getElementById("loginName").value;
    var loginPass = document.getElementById("loginPass").value;

    //pengganti database sementara
    var nameCek = "example";
    var passCek = "example1234";

    if(loginName != nameCek){
        alert("Akun belum terdaftar");
        return false;
    } else if(loginPass != passCek){
        alert("Kata sandi salah");
        return false;
    } else {
        window.location.href = "../Beranda/Beranda.html";
        return false;
    }
}
