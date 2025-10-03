const fs = require("fs");
const path = require("path");

const DATA_DIR = path.join(__dirname, "api");
const OUT_DIR = path.join(__dirname, "merged");

// pastikan folder output ada
if (!fs.existsSync(OUT_DIR)) {
  fs.mkdirSync(OUT_DIR);
}

// helper baca file JSON
function readJSON(filePath) {
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

// 1. Provinces
const provinces = readJSON(path.join(DATA_DIR, "provinces.json"));
fs.writeFileSync(path.join(OUT_DIR, "provinces.json"), JSON.stringify(provinces, null, 2));
console.log(`✅ Provinces merged: ${provinces.length} entries`);

// 2. Regencies
const regenciesDir = path.join(DATA_DIR, "regencies");
let allRegencies = [];

fs.readdirSync(regenciesDir).forEach(file => {
  const regencies = readJSON(path.join(regenciesDir, file));
  allRegencies = allRegencies.concat(regencies);
});

fs.writeFileSync(path.join(OUT_DIR, "regencies.json"), JSON.stringify(allRegencies, null, 2));
console.log(`✅ Regencies merged: ${allRegencies.length} entries`);

// 3. Districts
const districtsDir = path.join(DATA_DIR, "districts");
let allDistricts = [];

fs.readdirSync(districtsDir).forEach(file => {
  const districts = readJSON(path.join(districtsDir, file));
  allDistricts = allDistricts.concat(districts);
});

fs.writeFileSync(path.join(OUT_DIR, "districts.json"), JSON.stringify(allDistricts, null, 2));
console.log(`✅ Districts merged: ${allDistricts.length} entries`);

// 4. Villages
const villagesDir = path.join(DATA_DIR, "villages");
let allVillages = [];

fs.readdirSync(villagesDir).forEach(file => {
  const villages = readJSON(path.join(villagesDir, file));
  allVillages = allVillages.concat(villages);
});

fs.writeFileSync(path.join(OUT_DIR, "villages.json"), JSON.stringify(allVillages, null, 2));
console.log(`✅ Villages merged: ${allVillages.length} entries`);

console.log("🎉 Merge selesai! Cek folder 'merged/'");
