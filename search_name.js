const names = [
    "Abigail", "Alexandra", "Alison",
    "Amanda", "Angela", "Bella",
    "Carol", "Caroline", "Carolyn",
    "Deirdre", "Diana", "Elizabeth",
    "Ella", "Faith", "Olivia", "Penelope"
];

// Fungsi untuk mencari nama
const searchName = (keyword, limit, callback) => {
    // Menyaring nama-nama yang sesuai dengan keyword
    const filteredNames = names.filter(name => name.toLowerCase().includes(keyword));
    
    // Memotong hasil sesuai dengan batasan limit
    const results = filteredNames.slice(0, limit);

    // Memanggil fungsi callback dengan hasil pencarian
    callback(results);
}

// Fungsi untuk menampilkan hasil
const displayResults = results => {
    console.log(results);
}

// Contoh pemanggilan fungsi searchName
searchName("an", 3, displayResults);
