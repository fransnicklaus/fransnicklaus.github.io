function validate() {

    var nama = document.getElementById("nama");
    var phone = document.getElementById("phone-num");
    var message = document.getElementById("message");

    if (nama.value == "" || phone.value == "" || message.value == "") {
        alert("Semua Harus diisi");
        return false;
    }
    if (isNaN(phone.value)) {
        alert("Nomor telpon harus angka");
        return false;
    }
    if(phone.value.length() < 12 || phone.value.length() > 15) {
        alert("Bukan nomor telpon");
        return false;
    }
    return true;
}