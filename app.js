// Konfigurasi Admin
function aksesAdmin() {
    const pin = prompt("Masukkan PIN Admin:");
    if (pin === "ifonfix77") {
        window.location.href = "dashboard.html";
    } else {
        alert("Akses Ditolak.");
    }
}

// Logika Login Academy
const loginForm = document.getElementById('academyLoginForm');
if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('emailMurid').value;
        const pass = document.getElementById('passMurid').value;

        // Sementara: Alert koneksi
        console.log("Mencoba Login:", email);
        alert("Menghubungkan ke database Academy...");
        
        // Disini nanti kita masukkan script Firebase Auth
        // firebase.auth().signInWithEmailAndPassword(email, pass)...
    });
}