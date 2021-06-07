function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
      document.getElementById("start").innerText = count;
    } while (currentDate - date < milliseconds);
    
  }`document.getElementById("start").innerText = count;`