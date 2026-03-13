/**
 * MUKARATA PRO v2.5 - Core Engine Logic
 * Fokus: Konversi JSON Master ke Narasi Visual (Prompt)
 */

const Engine = {
    // Peta aksi untuk memperkaya deskripsi gerakan
    actionMap: {
        "menaiki": "expertly sitting astride and mounted on the saddle of",
        "menuntun": "walking beside and leading the handlebars of",
        "memperbaiki": "kneeling down and repairing the mechanical parts of",
        "bersandar": "leaning back casually against the side of",
        "siaga": "holding a tactical position with physical contact with",
        "memegang": "firmly grasping and holding",
        "berkendara": "dynamic motion shot, riding at speed on",
        "berlari": "sprinting dynamically across the open terrain of",
        "menunjuk": "extending an index finger towards"
    },

    /**
     * Fungsi Utama: Mengekstrak JSON menjadi Kalimat Narasi
     * @param {string} jsonString - String JSON dari Master Generator
     * @param {string} platform - Target platform (grok, mj, google, dll)
     */
    extractVisualPrompt(jsonString, platform) {
        try {
            const fullData = JSON.parse(jsonString);
            const data = fullData.MUKARATA_ENGINE_V2_5;
            const objects = data.objects;
            const globalVis = data.global_visuals;
            const typo = data.typography || null;
            
            // 1. Grid & Layout Logic
            const isGrid = document.getElementById('gridSwitch')?.checked || false;
            const gridType = document.getElementById('gridDisplay')?.value || "1x1"; 
            const ratio = data.render_specs.ratio || "9:16";
            
            // 2. Camera Angle Logic
            let camBase = this.getCameraBase(globalVis.camera);

            // 3. Faceless Logic Selection
            // Diambil dari elemen dropdown di UI
            const fMode = document.getElementById("facelessDropdown")?.value || "robotic";
            const activeFacelessLogic = DB.facelessDB[fMode] || DB.facelessDB.robotic;

            let objectDescriptions = [];

            // 4. Processing Objects (Human, Animal, Product)
            objects.forEach((obj, index) => {
                const label = isGrid ? `[PANEL ${index + 1}]` : `[SUBJECT ${index + 1}]`;
                
                if (obj.type === "HUMAN_ENTITY") {
                    objectDescriptions.push(this.renderHuman(obj, label, camBase, activeFacelessLogic));
                } else if (obj.type === "ANIMAL_ENTITY") {
                    objectDescriptions.push(this.renderAnimal(obj, label, camBase));
                } else {
                    objectDescriptions.push(this.renderProduct(obj, label));
                }
            });

            // 5. Final Assembly
            const materialNote = objects.some(o => o.type === "HUMAN_ENTITY") ? 
                "Note: Maintain high-fidelity material textures." : "Note: Strictly no humans.";
            
            const quality = "16k resolution, photorealistic, cinematic lighting, masterpiece, RAW photo quality";
            
            let masterNarrative = `${isGrid ? 'Collage layout:' : 'Unified scene:'} ${objectDescriptions.join(isGrid ? " " : " Interacting with, ")}. `;
            masterNarrative += `Style: ${globalVis.style}. Environment: ${globalVis.env}. ${quality}. ${materialNote}`;

            // 6. Typography Bridge
            if (typo && (typo.h1 || typo.h2)) {
                masterNarrative += this.renderTypography(typo);
            }

            return this.applyPlatformBridge(masterNarrative, platform, ratio);

        } catch (e) {
            console.error("Engine Error:", e);
            return "⚠️ Generation Error: Check Console";
        }
    },

    // Helper: Camera Logic
    getCameraBase(cam) {
        const c = cam.toLowerCase();
        if (c.includes("back")) return "captured from BEHIND, rear view, ";
        if (c.includes("side")) return "side profile perspective, ";
        if (c.includes("close up")) return "extreme close-up detail, ";
        if (c.includes("drone")) return "wide aerial drone view, ";
        return "wide cinematic shot, ";
    },

    // Helper: Render Human
    renderHuman(obj, label, camBase, facelessLogic) {
        const t = obj.traits;
        let desc = `${label}: ${camBase}`;
        
        // Cek profesi di database (asumsi DB global tersedia)
        const profDetail = (t.prof !== "[none]") ? `As a ${t.prof}, ` : "";
        
        desc += `${profDetail}${facelessLogic}. Wearing ${t.pakaian_atas} and ${t.pakaian_bawah}`;
        if (t.headwear !== "[none]") desc += `, ${t.headwear}`;
        if (t.action !== "[none]") desc += `. Action: ${this.actionMap[t.action] || t.action}`;
        
        return desc;
    },

    // Helper: Typography
    renderTypography(typo) {
        return `\n[TYPOGRAPHY]: Add text "${typo.h1}" and "${typo.h2}" using ${typo.font} font, positioned at ${typo.position}.`;
    },

    // Helper: Platform Routing
    applyPlatformBridge(prompt, platform, ratio) {
        const bridges = {
            mj: `${prompt} --ar ${ratio} --v 6.1 --stylize 750`,
            grok: `${prompt} --ar ${ratio}`,
            gpt: `Create a high-detail image with this description: ${prompt}`,
            google: prompt
        };
        return bridges[platform] || prompt;
    }
};
