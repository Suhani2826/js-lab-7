function init(){
//add your javascrip between these two lines of code
  const input = document.getElementById('entryinput');
  const button = document.getElementById('entrybutton');
  const output = document.getElementById('textoutput');

  button.addEventListener('click', function () {
    const message = input.value;
    alert('Suhani Makkar: ' + message);
    output.textContent = message;
  });
}

window.addEventListener('load', init);
