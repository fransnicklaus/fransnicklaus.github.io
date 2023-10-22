function validate() {

    var nama = document.getElementById("nama");
    var NRP = document.getElementById("phone-num");
    var NRP = document.getElementById("message");

    if (nama.value == ""|| phone-num.value == "" || message.value == "") {
        alert("Semua Harus diisi");
        return false;
    }
    if (isNaN(phone-num.value)) {
        alert("Nomor telpon harus angka");
        return false;
    }
    if(phone-num.value <= 12 || phone-num.value >= 15) {
        alert("Bukan nomor telpon");
        return false;
    }
    return true;
}