let main = document.querySelector('main#main').remove();
let newHeader = document.createElement('h1');
document.body.appendChild(newHeader)
newHeader.setAttribute('id', 'victory')
newHeader.innerHTML = 'Damian is the champion';