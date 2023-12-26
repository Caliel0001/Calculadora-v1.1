navigator.getBattery().then(function(battery) {
  updateBatteryStatus(battery);

  battery.addEventListener('levelchange', function() {
    updateBatteryStatus(battery);
  });
});

function updateBatteryStatus(battery) {
  const batteryLevel = document.getElementById('battery');
  const level = battery.level * 100;
  batteryLevel.textContent = level.toFixed(0) + '%';
}

document.addEventListener('DOMContentLoaded', function() {
  updateTime();
  updateStatusIndicator(); // Chamada inicial
  setInterval(updateTime, 1000); // Atualiza o relÃ³gio a cada segundo
  setInterval(updateStatusIndicator, 3000); // Atualiza o status a cada 3 segundos
});

function updateStatusIndicator() {
  const statusIndicator = document.getElementById('statusIndicator');

  if (navigator.onLine) {
    statusIndicator.textContent = 'On Line';
    statusIndicator.style.backgroundColor = 'green';
  } else {
    statusIndicator.textContent = 'Off Line';
    statusIndicator.style.backgroundColor = 'red';
  }
}

function updateTime() {
  const now = new Date();
  const timeElement = document.getElementById('time');
  const dateElement = document.getElementById('date');
  const time = now.toLocaleTimeString('pt-BR');
  const date = now.toLocaleDateString('pt-BR');
  timeElement.textContent = `${time}`;
  dateElement.textContent = `_Mobile_${date}`;
}

document.addEventListener('contextmenu', function(event) {
  event.preventDefault(); // Cancela o evento de menu de contexto
});

// Exemplo de criaÃ§Ã£o de cookie seguro e com flag HTTPOnly em JavaScript
document.cookie = "cookieName=cookieValue; Secure; HttpOnly";

// Exemplo de sanitizaÃ§Ã£o de entrada em JavaScript
function escapeHTML(text) {
  var map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return text.replace(/[&<>"']/g, function(m) { return map[m]; });
}