const qrText = document.getElementById('qr-text');
const sizes = document.getElementById('sizes');
const generateBtn = document.getElementById('generateBtn');
const downloadBtn = document.getElementById('downloadBtn');
const qrContainer = document.querySelector('.qr-body'); 
let size=sizes.value;

generateBtn.addEventListener('click',(e) =>{
    e.preventDefault();
    isEmptyInput();
});

sizes.addEventListener('change', (e) => {
    size=e.target.value;
    isEmptyInput();
});

function isEmptyInput(){
if(qrText.value.length>0) {
        qrContainer.innerHTML = ''; // Clear previous QR code
        generateQRCode();
    }
    else {
        alert('Please enter some text to generate QR code');
        return;
    }
}


function generateQRCode() {
    qrContainer.innerHTML = '';
    new QRCode (qrContainer,{
        text:qrText.value,
        width:size,
        height: size,
        colorLight: "#ffffff",
        colorDark: "#000000",
    });
}

// dowload QR code
downloadBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const canvas = qrContainer.querySelector('canvas');
    if (canvas) {
        const link = document.createElement('a');
        link.download = 'qr-code.png';
        link.href = canvas.toDataURL('image/png');
        link.click();
    } else {
        alert('Please generate a QR code first.');
    }
});