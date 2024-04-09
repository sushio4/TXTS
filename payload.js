const downloadFile = (file) => {
  const element = document.createElement('a');
  element.setAttribute('href', 'Download Btn');
  element.setAttribute('download', file);

  element.style.display = 'none';

  document.body.appendChild(element);

  element.click();
  document.body.removeChild(element);
}
downloadFile('https://sushio4.github.io/txts/get_pwned.txt');
