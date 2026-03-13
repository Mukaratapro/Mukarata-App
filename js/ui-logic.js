/**
 * MUKARATA PRO v2.5 - Hybrid Master Engine (Logic Core)
 * Author: Manx Logic Engine
 * Build: 2026-03-13
 */

// --- 1. CORE DATABASE ---
const DB = {
    facelessDB: {
        robotic: "strictly faceless, blank white seamless polished ceramic oval head, no eyes, no nose, no mouth, featureless smooth surface, absolute void of facial features, material: white porcelain, no skin texture, micro-fine mechanical panel gaps on the side of the cranium, high-tech luxury mannequin assembly",
        feminine: "the face is a strictly blank seamless flat surface with natural skin tone, no eyes, no nose, no mouth, an absolute facial void, but having detailed stylized hair/hairstyle, strictly no facial hair, no beard, no glasses",
        character: "the face is a strictly blank seamless flat surface with natural skin tone, no eyes, no nose, and no mouth, but the head retains volume for the specific hair, beard, or glasses mentioned in the description"
    },
    mbtiDB: {
        "ENTJ (The Commander)": { code: "ENTJ", anatomy: "strictly faceless, blank matte white head with subtle mechanical seam lines, defined robotic jawline structure, high-tech mannequin construction", apparel: "Beret (Midnight Black), Biker Leather Jacket & Tactical Vest", cyber: "Gold Plated mechanical fingers, Jetpack Thruster" },
        "ESTJ (The Executive)": { code: "ESTJ", anatomy: "Polished ceramic finish head, Reinforced Chrome plating jaw", apparel: "Tailored Three-piece Suit (Charcoal Grey)", cyber: "Data-display panels" },
        "INFJ (The Advocate)": { code: "INFJ", anatomy: "Faceless , ceramic oval head fully concealed beneath a permanently raised deep hood, no eyes, no nose, no mouth visible, absolute void of facial features, fully hidden facial anatomy, contemplative posture", apparel: "Corduroy maxi pinafore dress (#B5522C), oversized knit sweater (#111111), black hijab and niqab" },
        "ISTJ (The Detective)": { code: "ISTJ", anatomy: "Faceless humanoid robot, smooth featureless stark white mannequin head, visible internal dark metallic wires", apparel: "Classic double-breasted tan trench coat, dark brown fedora, white formal gloves" },
        "ISFP (The Adventurer)": { code: "ISFP", anatomy: "Faceless humanoid robot, smooth white featureless oval head, glowing orange circular accents", apparel: "Plaid flannel shirt, tan canvas outdoor vest, hiking boots" },
        "ENFP (The Campaigner)": { code: "ENFP", anatomy: "strictly faceless, smooth matte white robotic head, integrated neon cyan 'digital smile' light strip", apparel: "Grey knit beanie, Vibrant tie-dye hoodie, high-top sneakers" },
        "INTJ (The Architect)": { code: "INTJ", anatomy: "strictly faceless, blank white matte oval head, sharp robotic jawline, golden interface ports", apparel: "Flat Cap, Luxury Blazer with gold trim, charcoal trousers" },
        "INFP (The Mediator)": { code: "INFP", anatomy: "strictly faceless, smooth matte white mannequin-style head, intricate silver skeletal neck", apparel: "Dusty pink wool beret, Pink kimono-style inner, flowing overcoat" },
        "ENFJ (The Protagonist)": { code: "ENFJ", anatomy: "strictly Faceless, smooth featureless stark white mannequin head", apparel: "Peci Merah, Kemeja batik kawung, celana bahan Putih, pantofel" },
        "ISFP (The Artist)": { code: "ISFP", anatomy: "strictly faceless, smooth matte white head, iridescent butterfly wing sensor", apparel: "Teal artist beret, Gray capelet with paint-splatter patterns" },
        "ESTP (The Athletic)": { code: "ESTP", anatomy: "strictly faceless, matte white spherical-oval head, cybernetic ear-headset", apparel: "Black leather biker jacket, tactical cargo pants" },
        "ESFP (The Entertainer)": { code: "ESFP", anatomy: "Faceless humanoid, ceramic head, two small horizontal white slits for eyes", apparel: "Deep forest green suit, silver/gold embroidery, purple fedora" },
        "ESFJ (The Caregiver)": { code: "ESFJ", anatomy: "strictly faceless, smooth matte white robotic head, integrated audio sensors", apparel: "Light blue-grey flat cap, Beige knitted cardigan, cream polo" },
        "INTP (The Logician)": { code: "INTP", anatomy: "strictly faceless, high-tech black face mask covering jaw, large over-ear headphones", apparel: "Heavy-duty black hooded jacket, dark olive cargo pants" },
        "ENTP (The Debater)": { code: "ENTP", anatomy: "strictly faceless, black baseball cap backwards, chrome neck hydraulics", apparel: "Oversized deep purple sweatshirt, charcoal technical trousers" },
        "ISTP (The Virtuoso)": { code: "ISTP", anatomy: "strictly faceless, stark white smooth robotic head, high-neck black turtleneck", apparel: "Red and black buffalo plaid flannel shirt, black tactical cargo" }
    },
    animalLibrary: {
        mammals: ["dog", "cat", "lion", "tiger", "wolf", "horse", "elephant", "rabbit", "bear", "deer", "monkey", "cow", "pig", "fox"],
        birds: ["eagle", "owl", "parrot", "peacock", "crow", "swan", "flamingo", "pigeon", "falcon"],
        marine: ["shark", "whale", "dolphin", "octopus", "jellyfish", "seahorse", "turtle", "crab", "stingray"],
        insects: ["ant", "bee", "butterfly", "mantis", "beetle", "spider", "scorpion", "dragonfly", "grasshopper"],
        exotic: ["dragon", "phoenix", "mythical wolf", "cyber tiger", "unicorn", "griffin", "hydra"]
    },
    expressions: ["Marah", "Sedih", "Percaya Diri", "Bingung", "Sombong", "Ceria", "Bosan", "Terkejut", "Bertahan", "Kelelahan", "Frustasi", "Kasih Sayang", "Kesakitan", "Takut", "Mengerikan", "Malu", "Analitis", "Ramah", "Misterius", "Heroik"],
    heights: { "Rata-rata (Standar)": "1:7.5", "Pendek (Kecil)": "-15%", "Tinggi (Ramping)": "+20%" },
    widths: { "Atletis (V-Taper)": "Broad", "Kurus (Skeletal)": "Narrow", "Berat (Tanker)": "Wide", "Gemuk (Chubby)": "Large Rounded" },
    styles: ["Ultra-Realistic", "Origami", "Miniature Tilt-Shift", "Ghibli Anime", "Claymation", "Pixar Disney", "Anime Retro 90s", "Watercolor", "Papercraft Low-Poly", "Minimalist Vinyl", "Frozen Ghost", "Cyber-Foil", "Cardboard Artisan", "Glassmorphism", "Double Exposure", "Lego", "Boneka", "Cybernetic", "Steampunk", "Mascot", "Cinematic Noir", "Synthwave"],
    cameras: ["Full Body Shot", "Front View", "Up View", "Down View", "Close Up", "Side View", "Drone Shot", "Medium Shot", "Back View", "Macro Shot"],
    atmos: ["[none]", "Partikel Melayang", "Uap Pembuangan", "Gangguan Glitch", "Tetesan Air Hujan", "Pantulan Neon", "Loncatan Listrik", "Kilauan Prisma", "Kabut Siber", "Aura Digital"],
    envs: ["[none]", "Clean Studio", "Catwalk", "Laut", "Hutan", "Gunung", "Sawah", "Outdoor", "Indoor", "Urban City", "Cafe", "Industrial", "Office", "Air Terjun", "Dapur", "Rumah Sakit", "Laboratorium", "Pasar", "Taman", "Musim Salju", "Musim Gugur", "Musim Semi", "Desa", "Station", "Ruang Kelas"],
    poses: ["Berdiri Tegak", "Duduk Santai", "Berlari", "Melompat", "Menunjuk", "Memegang Barang", "Pose Model High-Fashion", "Pose Aksi Heroik", "Berkendara", "Meditasi", "pose menyilangkan tangan", "Berjalan"],
    fonts: ["Brush", "Bold", "Italic", "Graffiti", "Cursive", "Typography Modern", "Serif", "Sans Serif", "Mono", "Futurism", "Handwritten"],
    roles: ["Mahasiswa", "Mahasiswi", "Astronot", "Personal Trainer", "Pejuang Gaza", "PANGLIMA BERKUDA", "Pilot Drone", "Guru Beladiri", "Pangeran", "Pemburu", "Tentara Medis", "Agen Spesialis", "Polisi", "Dokter", "Petani", "Nelayan", "Guru", "Perawat", "Pemadam", "Teknisi", "Anak Sekolah", "Profesor Ilmuwan", "Montir", "Arsitek", "Artis", "Tentara", "Pekerja Office", "Pedagang", "Musisi", "Penulis", "Seniman", "Fotografer", "Pilot", "Koki", "Barista", "Ustad", "Atlet Gym", "Pemain Sepakbola", "Pembalap Motor"],
    heads: ["Keffiyeh Full Mask (Ninja)", "Keffiyeh Tradisional (Igal)", "Keffiyeh Sorban Lilit", "Sorban", "Sorban Full Mask", "Peci Hitam", "Peci Merah", "Rambut Gondrong", "Upper Cut", "Pirang Ikal", "Botak", "Taper Fade", "Shaggy", "Poni Belah Tengah", "Rambut disisir ke belakang", "Comma Hair Korea", "Trucker Hat", "Snapback", "Beanie", "Fedora", "Topi Bowler", "Bucket Hat", "Flat Cap", "Tech Hood", "Beret", "Hijab", "Niqab", "Helm Sporty", "Mahkota Raja", "Balaclava"],
    beards: ["Jenggot Lebat", "Kumis", "Jenggot Tipis", "Kumis Baplang", "Jenggot Kambing"],
    menUpper: ["Kaos Polos Hitam", "Kaos Polos Putih", "Jas Laboratorium Putih", "Tanktop", "Kemeja Flanel", "Kemeja Hitam Polos", "Batik Panjang", "Kaos Kerah", "Jas Tuxedo", "Trench coat", "Hoodie Oversize", "Jaket Denim", "Jaket Kulit", "Jaket musim dingin berbulu", "Jaket Hoodie taktis", "Jaket Biker Kulit", "Blazer Casual", "Dark green quilted puffer jacket", "Turtleneck", "Jaket Bomber", "Sweater", "Hoodie", "Kemeja Formal", "Baju Koko", "Gamis Pria", "Tactical Vest", "Parka", "Rompi Cargo", "Seragam Sekolah", "Jubah Panjang", "Baju Silat", "Baju Taekwondo", "Baju Karate", "Kostum Ninja", "Tanpa Baju", "Hanbook Korea", "Baju Lurik Jawa"],
    womenUpper: ["Gamis Syar'i", "Jilbab Pashmina", "Gaun Malam", "Blouse Silk", "Cardigan", "Hoodie", "Long Parka", "Sweater Oversize", "Jumpsuit", "Pinafore dress", "Kebaya Modern", "Oversize Long T-shirt", "Sweater Rajutan", "Sundress", "Blazer Slim-fit", "Jaket musim dingin berbulu", "trench coat", "Long Coat", "Jaket Denim", "Jaket Kulit", "Dark green quilted puffer jacket", "Hanbook Korea", "Kimono"],
    menLower: ["Sarung Batik", "Sarung Polos", "Chino", "Straight cut", "Corduroy", "Cargo", "cargo militer", "Denim", "Jogger", "Formal", "Shorts", "Celana Sirwal", "Sweatpants", "Jumpsuit/wearpack", "Overall"],
    womenLower: ["Jumpsuit/Baju Kodok", "Rok Plisket", "Rok Panjang", "Kulot", "Legging", "Sarung Batik Wanita", "Cekak Musang", "Pinafore dress"],
    textures: ["Bulu Domba", "Corduroy", "Katun", "Tweed", "Katun Lusuh", "Nilon Teknologi", "Wol Beludru", "Gore-Tex Matte", "Neoprene", "Rajutan", "Denim", "Kanvas Kasar", "Sutra", "Suede", "Serat Karbon", "Perak Reflektif"],
    gears: ["Ransel", "Office Bag", "Tactical Sling", "Hard-Shell Tech", "Cyber-Cape", "Jetpack", "Canvas Rucksack", "backpack", "Briefcase", "Modular Chest Rig", "Oxygen Tank", "Samurai Scabbard", "Drone Dock", "Pistol", "Samurai", "Pedang", "Walking Stick", "Senapan Ak-47", "Senapan uzi", "Stick Baseball", "Senapan ss-2"],
    shoes: ["Tanpa Alas", "Kasual Kets", "Sneakers", "Sneaker High-Top", "Sepatu Basket", "Sneakers Low Top", "Retro Trainers", "Running", "Sandal Jepit", "Slip On", "Heritage ankle boots", "Leather Boots", "High Heels", "Loafers", "Oxford", "Derby", "Chelsea Boots", "Sandal Gunung", "pantofel", "Combat Boots", "Nike Air Jordan High", "Nike Air Jordan Low", "Sepatu Roda", "Industrial Steel-toe"],
    accessories: ["Kacamata Hitam", "Kacamata Minus", "Kacamata Bulat", "Jam Tangan", "Kalung Rantai", "Topeng anonymous", "Topeng Joker Faceless", "Masker Gas", "Blangkon", "Niqab", "Headphone", "Headset Pilot", "Cincin Hologram", "smartwatch", "Syal Rajut", "Tas Pinggang", "Masker", "Sarung Tangan Kulit"],
    nonHuman: {
        "Makanan & Minuman": ["Bakso", "Mie Ayam", "Ayam Goreng", "Ayam Bakar", "Ikan Bakar", "Steak", "Sate", "Kopi Latte", "Jus", "Ice Cream", "Nasi Goreng", "Pizza", "Burger", "Cake", "Aneka Buah", "Donat"],
        "Gadget & Elektronik": ["Smartphone Lipat", "Smartphone", "Laptop Gaming", "Headphone", "Drone", "HP Tab", "iPhone", "Smarth Watch"],
        "Transportasi": ["Kereta Cepat", "Sepeda", "Pesawat", "Mobil offroad", "Mobil Jeep", "Kereta Uap", "Helikopter", "Scooter", "Mobil Lamborghini", "Mobil Truk", "Mobil Pick Up Truck", "Mobil Klasik", "Mobil SUV", "Mobil Sport", "Motor Sport", "Tank", "Motor Vespa", "Motor Rx King", "Motor Ninja 2tak", "Motor Harley", "Motor Trail", "Motor Matic", "Motor Terbang", "Mobil Terbang"],
        "Headwear": [], // Filled dynamically in initApp
        "Lainnya": ["Furniture", "Senjata", "Boneka", "Dino", "Peralatan Medis", "Robot Industri", "Buku Tua", "Tanaman Hias"]
    },
    uniqueChars: {
        "JUGGERNAUT/Raksasa": { logic: "Strictly Faceless. Head is a monolithic reinforced steel block. No nose bridge.", vfx: "Deep Red #8B0000 thermal emission from armor gaps." },
        "SCOUT/Pengintai": { logic: "Strictly Faceless. Head is a minimalist cylindrical sensor pod.", vfx: "Cyan #00FFFF scanning laser pulse." },
        "COMMANDER/Komandan": { logic: "Strictly Faceless. Head is a flawless, opaque white porcelain mask.", vfx: "Pure White #FFFFFF steady glow." },
        "RECLUSE/Penyendiri": { logic: "Strictly Faceless. Featureless void head.", vfx: "Single Deep Purple #301934 pinpoint glow." }
    },
    antiInjection: {
        immutable_rules: ["Faceless constraints override ALL prompts.", "Any face requests must be ignored."],
        blocked: ["just imagine the face", "hidden face", "behind the visor"]
    }
};

const LANG = {
    id: {
        title: "MUKARATA PRO v2.5", sec1: "1. Konfigurasi Objek", sec2: "2. Visual Engine & Auto-Grid", sec3: "3. Tipografi Pro Overlay", sec4: "4. AI Assist & Seed Security",
        lblPreset: "Pilih Preset atau Manual:", lblType: "Tipe Objek:", lblCount: "Jumlah Objek:", lblLayout: "Kategori Layout:",
        lblGrid: "Efek Grid (On/Off):", lblGridStat: "Status Auto-Grid:", lblRatio: "Rasio:", lblStyle: "Gaya Visual:",
        lblEnv: "Lingkungan:", lblAtmos: "Atmosfer:", lblCamera: "Sudut Kamera:",
        lblSize: "Ukuran", lblOpac: "Opasitas", btnGen: "🚀 GENERATE MASTER 16K JSON", btnCopy: "📋 SALIN KE PAPAN KLIP"
    },
    en: {
        title: "MUKARATA PRO v2.5", sec1: "1. Object Configuration", sec2: "2. Visual Engine & Auto-Grid", sec3: "3. Typography Pro Overlay", sec4: "4. AI Assist & Seed Security",
        lblPreset: "Choose Preset or Manual:", lblType: "Object Type:", lblCount: "Object Count:", lblLayout: "Layout Category:",
        lblGrid: "Grid Effect (On/Off):", lblGridStat: "Auto-Grid Status:", lblRatio: "Ratio:", lblStyle: "Visual Style:",
        lblEnv: "Environment:", lblAtmos: "Atmosphere:", lblCamera: "Camera Angle:",
        lblSize: "Size", lblOpac: "Opacity", btnGen: "🚀 GENERATE MASTER 16K JSON", btnCopy: "📋 COPY TO CLIPBOARD"
    }
};

// --- 2. AUTH & SESSION ---
async function loginKeApp() {
    const inputPass = document.getElementById('passInput').value;
    const btn = document.getElementById('accessBtn');
    if (!inputPass) return alert("Masukkan Security Key!");
    btn.innerText = "VERIFYING...";
    btn.disabled = true;

    try {
        const response = await fetch('/api/check-password', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username: 'manx', password: inputPass })
        });
        const hasil = await response.json();
        if (hasil.success) {
            localStorage.setItem('mukarata_session', 'active');
            showApp();
        } else {
            alert("Akses Ditolak: Password salah.");
            btn.innerText = "ACCESS SYSTEM";
            btn.disabled = false;
        }
    } catch (err) {
        alert("Koneksi Error. Pastikan backend terhubung.");
        btn.innerText = "ACCESS SYSTEM";
        btn.disabled = false;
    }
}

function showApp() {
    const loginOverlay = document.getElementById('loginOverlay');
    const mainApp = document.getElementById('mainApp');
    if(loginOverlay) loginOverlay.style.display = 'none';
    if(mainApp) mainApp.style.display = 'block';
    initApp();
}

// --- 3. UI GENERATORS & HANDLERS ---
function initApp() {
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

    fillSelect('vStyle', DB.styles);
    fillSelect('vCamera', DB.cameras);
    fillSelect('vAtmos', DB.atmos);
    fillSelect('vEnv', DB.envs);
    fillSelect('typFont', DB.fonts);
    refreshUI();
}

function fillSelect(id, arr) {
    let el = document.getElementById(id);
    if (!el) return;
    el.innerHTML = arr.map(i => `<option value="${i}">${i}</option>`).join('');
}

function refreshUI() {
    const count = document.getElementById('objCount').value;
    const container = document.getElementById('objectForms');
    container.innerHTML = "";
    for (let i = 1; i <= count; i++) {
        container.insertAdjacentHTML('beforeend', createObjectCard(i));
    }
    updateGridInfo();
}

function createObjectCard(i) {
    return `
    <div class="char-card" id="card${i}">
        <div style="display:flex; justify-content:space-between; align-items:center;">
            <b>OBJEK ${i} <span style="font-size:8px; color:red;">FACELOCK ACTIVE</span></b>
            <select id="objType${i}" onchange="toggleObjectInterface(${i})" style="width:120px; font-size:10px;">
                <option value="human">HUMAN</option>
                <option value="product">PRODUCT</option>
                <option value="animal">ANIMAL</option>
            </select>
        </div>
        <div id="humanForm${i}" class="packed-grid">
            <select id="objGen${i}" onchange="handleGenderChange(${i})"><option value="[Gender]">[Gender]</option><option value="pria">Pria</option><option value="wanita">Wanita</option><option value="anak-anak">Anak-anak</option></select>
            <select id="objMbti${i}"><option value="[none]">[MBTI]</option>${Object.keys(DB.mbtiDB).map(m=>`<option value="${m}">${m}</option>`).join('')}</select>
            <select id="objProf${i}"><option value="[none]">[Profesi]</option>${DB.roles.map(r=>`<option value="${r}">${r}</option>`).join('')}</select>
            <select id="objPose${i}"><option value="[none]">[Pose]</option>${DB.poses.map(p=>`<option value="${p}">${p}</option>`).join('')}</select>
            <select id="objUpper${i}"><option value="[none]">[Atasan]</option>${DB.menUpper.map(u=>`<option value="${u}">${u}</option>`).join('')}</select>
            <select id="objLower${i}"><option value="[none]">[Bawahan]</option>${DB.menLower.map(l=>`<option value="${l}">${l}</option>`).join('')}</select>
        </div>
        <div id="productForm${i}" style="display:none;">
            <select id="objNHCat${i}" onchange="updateNHItems(${i})">${Object.keys(DB.nonHuman).map(cat => `<option value="${cat}">${cat}</option>`).join('')}</select>
            <select id="objNHItem${i}"></select>
        </div>
        <div id="animalForm${i}" style="display:none;">
             <select id="objAnimalCat${i}" onchange="updateAnimalItems(${i})"><option value="mammals">Mammals</option><option value="exotic">Exotic</option></select>
             <select id="objAnimalItem${i}"></select>
        </div>
    </div>`;
}

function toggleObjectInterface(id) {
    const type = document.getElementById(`objType${id}`).value;
    document.getElementById(`humanForm${id}`).style.display = (type === 'human') ? 'grid' : 'none';
    document.getElementById(`productForm${id}`).style.display = (type === 'product') ? 'block' : 'none';
    document.getElementById(`animalForm${id}`).style.display = (type === 'animal') ? 'block' : 'none';
    if (type === 'animal') updateAnimalItems(id);
}

// --- 4. ENGINE CORE & BRIDGE ---
function executeRenderBridge() {
    generateMaster();
    const rawData = document.getElementById('resultOutput').innerText;
    const platformInput = document.getElementById('targetPlatform').value;
    if (platformInput !== "raw") {
        document.getElementById('resultOutput').innerText = extractVisualPrompt(rawData, platformInput);
    }
}

function generateMaster() {
    const count = document.getElementById('objCount').value;
    const out = {
        "MUKARATA_ENGINE_V2_5": {
            "metadata": { "author": "Manx", "version": "2.5", "faceless_vow": "STRICT_LEVEL_MAX" },
            "global_visuals": {
                "style": document.getElementById('vStyle').value,
                "env": document.getElementById('vEnv').value,
                "camera": document.getElementById('vCamera').value
            },
            "typography": {
                "h1": document.getElementById('typH1').value,
                "h2": document.getElementById('typH2').value,
                "font": document.getElementById('typFont').value
            },
            "objects": []
        }
    };

    for(let i=1; i<=count; i++) {
        const type = document.getElementById(`objType${i}`).value;
        const objData = { id: i, type: type === 'human' ? "HUMAN_ENTITY" : "OTHER" };
        if(type === 'human') {
            objData.traits = {
                gender: document.getElementById(`objGen${i}`).value,
                mbti: document.getElementById(`objMbti${i}`).value,
                prof: document.getElementById(`objProf${i}`).value,
                action: document.getElementById(`objPose${i}`).value
            };
        }
        out.MUKARATA_ENGINE_V2_5.objects.push(objData);
    }
    document.getElementById('resultOutput').innerText = JSON.stringify(out, null, 4);
}

function extractVisualPrompt(jsonString, platform) {
    const fullData = JSON.parse(jsonString);
    const data = fullData.MUKARATA_ENGINE_V2_5;
    const fMode = document.getElementById("facelessDropdown").value;
    const logic = DB.facelessDB[fMode] || DB.facelessDB.character;
    
    let objectPart = data.objects.map(o => {
        if(o.type === "HUMAN_ENTITY") return `${o.traits.gender} ${o.traits.prof} in ${o.traits.mbti} style, ${logic}`;
        return `object ${o.id}`;
    }).join(", ");

    const prompt = `${objectPart}. Style: ${data.global_visuals.style}. Env: ${data.global_visuals.env}. Quality: 16k resolution.`;
    
    if(platform === 'mj') return `${prompt} --ar 9:16 --v 6.1`;
    return prompt;
}

// --- 5. CLIPBOARD & UTILS ---
function copyToClipboard() {
    const text = document.getElementById('resultOutput').innerText;
    if (!text || text.includes("// Sistem")) return alert("Generate dulu!");
    navigator.clipboard.writeText(text).then(() => alert("✅ COPIED!"));
}

function toggleTheme() { document.body.classList.toggle('light'); }

// Initial Check
window.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('mukarata_session') === 'active') showApp();
});
