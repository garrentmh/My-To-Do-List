const input = document.getElementById('input');
const output = document.getElementById('output');
const confirmBtn = document.getElementById('confirm-btn');
const list = document.getElementById('list');
const clearBtn = document.getElementById('clear-btn');


confirmBtn.addEventListener('click', () => { 
  output.innerHTML += `
    <li>${input.value}</li>
  `
  input.value = ''
})

input.addEventListener('keyup', (e) => {
  if (e.key === 'Enter') {
    output.innerHTML += `
    <li>${input.value}</li>
  `
  input.value = ''
  }
})

clearBtn.addEventListener('click', () => {
  output.innerHTML = ""

})