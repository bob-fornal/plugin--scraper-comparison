// Listen for messages
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  if (message.text = 'get_pattern') {
    sendResponse(document.querySelectorAll(message.pattern));
  }
});