const debian = ['ubuntu', 'mint', 'kali']
const redhat = ['rhel', 'centos']
const arch = ['manjaro', 'chakra']
const linuxDistro = debian.concat(redhat, arch)
console.log(linuxDistro)
// output : ['ubuntu', 'mint', 'kali', 'rhel', 'centos', 'manjaro', 'chakra' ]

// Method concat digunakan untuk menggabungkan 2 atau lebih array.