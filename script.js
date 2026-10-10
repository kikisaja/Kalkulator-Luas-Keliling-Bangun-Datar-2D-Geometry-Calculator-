// --- 1. CONFIG & METADATA BANGUN DATAR ---
const SHAPE_CONFIG = {
    square: {
        title: "Persegi 🟩",
        inputs: [
            { id: "side", label: "Panjang Sisi (s)", placeholder: "Contoh: 8" }
        ],
        calculate: (data) => {
            const s = data.side;
            return {
                area: s * s,
                perimeter: 4 * s,
                areaFormula: "s × s",
                perimeterFormula: "4 × s"
            };
        }
    },
    triangle: {
        title: "Segitiga 🔺",
        inputs: [
            { id: "base", label: "Alas (a)", placeholder: "Contoh: 6" },
            { id: "height", label: "Tinggi (t)", placeholder: "Contoh: 8" },
            { id: "sideA", label: "Sisi A (Keliling)", placeholder: "Contoh: 6" },
            { id: "sideB", label: "Sisi B (Keliling)", placeholder: "Contoh: 8" },
            { id: "sideC", label: "Sisi C (Keliling)", placeholder: "Contoh: 10" }
        ],
        calculate: (data) => {
            return {
                area: 0.5 * data.base * data.height,
                perimeter: data.sideA + data.sideB + data.sideC,
                areaFormula: "½ × alas × tinggi",
                perimeterFormula: "Sisi A + Sisi B + Sisi C"
            };
        }
    },
    circle: {
        title: "Lingkaran 🟡",
        inputs: [
            { id: "radius", label: "Jari-Jari (r)", placeholder: "Contoh: 7" }
        ],
        calculate: (data) => {
            const r = data.radius;
            const area = Math.PI * r * r;
            const perimeter = 2 * Math.PI * r;
            return {
                area: parseFloat(area.toFixed(2)),
                perimeter: parseFloat(perimeter.toFixed(2)),
                areaFormula: "π × r²",
                perimeterFormula: "2 × π × r"
            };
        }
    },
    parallelogram: {
        title: "Jajaran Genjang 🔷",
        inputs: [
            { id: "base", label: "Alas (a)", placeholder: "Contoh: 10" },
            { id: "height", label: "Tinggi (t)", placeholder: "Contoh: 6" },
            { id: "side", label: "Sisi Miring (b)", placeholder: "Contoh: 7" }
        ],
        calculate: (data) => {
            return {
                area: data.base * data.height,
                perimeter: 2 * (data.base + data.side),
                areaFormula: "alas × tinggi",
                perimeterFormula: "2 × (alas + sisi miring)"
            };
        }
    }
};

// --- 2. AMBIL ELEMEN DOM ---
let activeShape = "square";
const tabBtns = document.querySelectorAll(".tab-btn");
const dynamicInputs = document.getElementById("dynamic-inputs");
const geometryForm = document.getElementById("geometry-form");

const resultCard = document.getElementById("result-card");
const resultTitle = document.getElementById("result-title");
const areaVal = document.getElementById("area-val");
const perimeterVal = document.getElementById("perimeter-val");
const areaFormula = document.getElementById("area-formula");
const perimeterFormula = document.getElementById("perimeter-formula");

// --- 3. FUNGSI RENDER INPUT DINAMIS ---
function renderInputs(shapeKey) {
    const shape = SHAPE_CONFIG[shapeKey];
    dynamicInputs.innerHTML = "";

    shape.inputs.forEach((field) => {
        const group = document.createElement("div");
        group.className = "input-group";

        const label = document.createElement("label");
        label.setAttribute("for", field.id);
        label.textContent = field.label;

        const input = document.createElement("input");
        input.type = "number";
        input.id = field.id;
        input.placeholder = field.placeholder;
        input.min = "0.1";
        input.step = "any";
        input.required = true;

        group.appendChild(label);
        group.appendChild(input);
        dynamicInputs.appendChild(group);
    });

    resultCard.classList.add("hidden");
}

// --- 4. EVENT TAB SWITCHING ---
tabBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        tabBtns.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");

        activeShape = btn.getAttribute("data-shape");
        renderInputs(activeShape);
    });
});

// --- 5. SUBMIT FORM & KALKULASI ---
geometryForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const shape = SHAPE_CONFIG[activeShape];
    const formData = {};

    // Kumpulkan nilai input
    shape.inputs.forEach((field) => {
        const inputEl = document.getElementById(field.id);
        formData[field.id] = parseFloat(inputEl.value) || 0;
    });

    // Jalankan kalkulasi
    const result = shape.calculate(formData);

    // Render Hasil ke UI
    resultTitle.textContent = `Hasil Perhitungan (${shape.title})`;
    areaVal.textContent = result.area;
    perimeterVal.textContent = result.perimeter;
    areaFormula.textContent = `Formula: ${result.areaFormula}`;
    perimeterFormula.textContent = `Formula: ${result.perimeterFormula}`;

    resultCard.classList.remove("hidden");
});

// Inisialisasi awal
renderInputs("square");
