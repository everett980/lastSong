chrome.browserAction.onClicked.addListener(function(tab) {
  console.log('icon clicked');
  chrome.tabs.query({ url: 'https://www.pandora.com/*'}, ([{ id }]) => {
    console.log(id);
    chrome.tabs.sendMessage(id, { 'queueStop': true }, res => {
      console.log(res);
    });
  });
});
