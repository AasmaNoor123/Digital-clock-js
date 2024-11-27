setInterval(() => {
//ye automatically refresh krwa hai khud se without refresh kary 
    document.getElementById("time").textContent = new Date().toLocaleTimeString()
}, 1000);