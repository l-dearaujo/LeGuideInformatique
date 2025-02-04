
const chatBox = document.getElementById('chat-box');
const messageInput = document.getElementById('message-input');

messageInput.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    const message = messageInput.value.trim();
    if (message !== '') {
      addMessage('Toi', message);
      messageInput.value = '';
    }
  }
});

function addMessage(sender, message) {
  const messageElement = document.createElement('div');
  messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
  chatBox.appendChild(messageElement);
  chatBox.scrollTop = chatBox.scrollHeight;
}
