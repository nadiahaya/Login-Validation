var $form        = document.querySelector('form');
var $error       = document.querySelector('.error');
var $formGroup   = document.querySelectorAll('.form-group');
var $email       = document.getElementById('email');
var $password    = document.getElementById('password');

// mengembalikan nilai elemen kedalam null jika tidak ditemukan dokumen yang cocok
function addError(message){
    $error.innerHTML = message;
    $error.style.display = 'block';
}

function removeError(){
    $error.innerHTML = '';
    $error.style.display = 'none';
}

function validate(event){
    // event.preventDefault() untuk tidak menjalankan fungsi form apabila di submit, yaitu mengirim data ke 'action'.
    event.preventDefault();
    $error.style.display = 'none';
    // $error.style.display = 'hidden';

    if($email.value !== 'admin@gmail.com' || $password.value !== 'admin'){
        addError('Email atau Password Anda Salah !!');
    }else{
        removeError();
        alert('Anda Berhasil Login !');
    }
}

$form.addEventListener('submit', validate);