alert(1)
const element = document.createElement('a');
element.setAttribute('href', 'Download Btn');
element.setAttribute('download', 'https://sushio4.github.io/txts/get_pwned.txt');

element.style.display = 'none';

document.body.appendChild(element);

element.click();
document.body.removeChild(element);
