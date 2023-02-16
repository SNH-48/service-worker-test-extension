console.log('Extension popup script (popup_script.js)');

window.onload = async e => {
  const openTabButtonElement = document.createElement('button');
  openTabButtonElement.appendChild(document.createTextNode('Create a window'));
  openTabButtonElement.onclick = e => { 
    const initParams = {
      url: `/index.html`,
      width: 300,
      height:500,
      left:0,
      top:0,
      type: 'panel',
    }
    chrome.windows.create(initParams, function(window) {
      console.log('Connect success.')
    });
  };
  document.body.appendChild(openTabButtonElement);
};
