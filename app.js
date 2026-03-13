/**
 * MUKARATA PRO v2.5 - app.js
 * Entry Point & Orchestrator
 * Developer: Manx Logic Engine
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Inisialisasi State Awal
    let currentLang = 'id';
    
    // 2. Cek Sesi Keamanan
    const checkSession = () => {
        const session = localStorage.getItem('mukarata_session');
        if (session === 'active') {
            if (typeof showApp === 'function') {
                showApp();
            }
        }
    };

    // 3. Inisialisasi Komponen UI
    const bootstrapApp = () => {
        console.log("MUKARATA PRO v2.5: Initializing Engine...");
        
        try {
            // Sinkronisasi data non-human ke database utama
            if (typeof DB !== 'undefined') {
                DB.nonHuman["Headwear"] = DB.heads;
                DB.nonHuman["Jenggot"] = DB.beards;
                DB.nonHuman["Atasan Pria"] = DB.menUpper;
                DB.nonHuman["Atasan Wanita"] = DB.womenUpper;
                DB.nonHuman["Bawahan Pria"] = DB.menLower;
                DB.nonHuman["Bawahan Wanita"] = DB.womenLower;
                DB.nonHuman["Tekstur"] = DB.textures;
                DB.nonHuman["Peralatan"] = DB.gears;
                DB.nonHuman["Sepatu"] = DB.shoes;
                DB.nonHuman["Aksesoris"] = DB.accessories;

                // Isi Dropdown Global
                fillSelect('vStyle', DB.styles);
                fillSelect('vCamera', DB.cameras);
                fillSelect('vAtmos', DB.atmos);
                fillSelect('vEnv', DB.envs);
                fillSelect('typFont', DB.fonts);
                
                // Render form pertama kali
                if (typeof refreshUI === 'function') {
                    refreshUI();
                }
            } else {
                console.error("Database (database.js) tidak ditemukan!");
            }
        } catch (err) {
            console.error("Bootstrap Error:", err);
        }
    };

    // 4. Register Service Worker untuk PWA
    const registerPWA = () => {
        if ("serviceWorker" in navigator) {
            navigator.serviceWorker.register("sw.js")
                .then(() => console.log("PWA: Service Worker Active"))
                .catch(err => console.log("PWA: Service Worker Failed", err));
        }
    };

    // 5. Jalankan Urutan Pemuatan
    checkSession();
    bootstrapApp();
    registerPWA();
});

/**
 * Global Helper untuk mengisi select options
 * Memastikan data dari database.js terpasang dengan benar
 */
function fillSelect(id, arr) {
    const el = document.getElementById(id);
    if (!el || !arr) return;
    el.innerHTML = arr.map(item => `<option value="${item}">${item}</option>`).join('');
}

/**
 * Handler Global untuk aksi penekanan tombol 'Enter' pada Login
 */
const passInput = document.getElementById('passInput');
if (passInput) {
    passInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            loginKeApp();
        }
    });
}

console.log("MUKARATA PRO v2.5: app.js loaded successfully.");
