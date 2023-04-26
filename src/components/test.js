
function component() {
    const elem = document.createElement('div');
    const content = document.getElementById('content');
  
    elem.textContent = "test";
    content.appendChild(elem);
  }

  export default component;