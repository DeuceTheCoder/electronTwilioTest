document.getElementById("button-submit-server").onclick = function() {
    var serverAddress = document.getElementById('server-address').value;
    var idServer = serverAddress.length === 0 ? 'http://localhost:3000' : serverAddress;
    window.location.href = 'conversation.html?idServer=' + idServer;
};