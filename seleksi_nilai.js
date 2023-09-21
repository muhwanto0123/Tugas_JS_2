function filterAndSortData(nilaiAwal, nilaiAkhir, dataArray, callback) {
    // Validasi nilaiAwal < nilaiAkhir dan jumlah data dalam dataArray > 5
    if (nilaiAwal >= nilaiAkhir || dataArray.length <= 5) {
      console.log("Validasi gagal. Pastikan nilaiAwal < nilaiAkhir dan jumlah data dalam dataArray > 5.");
      return;
    }
  
    // Filter data yang sesuai dengan kriteria
    const filteredData = dataArray.filter(data => data >= nilaiAwal && data <= nilaiAkhir);
  
    // Urutkan hasil pencarian dengan callback function
    const sortedData = callback(filteredData);
  
    // Tampilkan hasil ke layar/console
    console.log("Data yang memenuhi kriteria:");
    console.log(sortedData);
  }
  
  // Callback function untuk mengurutkan data secara ascending
  function ascendingSort(data) {
    return data.sort((a, b) => a - b);
  }
  
  // Callback function untuk mengurutkan data secara descending
  function descendingSort(data) {
    return data.sort((a, b) => b - a);
  }
  
  // Contoh pemanggilan fungsi dengan callback function
  const dataArray = [3, 8, 2, 10, 5, 7, 1, 9, 6, 4];
  const nilaiAwal = 3;
  const nilaiAkhir = 7;
  
  console.log("Hasil sorting ascending:");
  filterAndSortData(nilaiAwal, nilaiAkhir, dataArray, ascendingSort);
  
  console.log("Hasil sorting descending:");
  filterAndSortData(nilaiAwal, nilaiAkhir, dataArray, descendingSort);
  