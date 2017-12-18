let shouldPause = true;

chrome.extension.onMessage.addListener((req, sender, sendRes) => {
  console.log('got req: ', req);

  const [currentMin, currentSecond] = document.querySelectorAll('[data-qa="elapsed_time"]')[0].innerHTML.split(':');
  const currentTime = currentMin * 60 + +currentSecond;

  const [totalMin, totalSecond] = document.querySelectorAll('[data-qa="remaining_time"]')[0].innerHTML.split(':');
  const totalTime = totalMin * 60 + +totalSecond;

  console.log(currentTime, totalTime);
  const remainingTime = (totalTime - currentTime - 2) * 1000;
  console.log(remainingTime);

  if (shouldPause) {
    shouldPause = false;
    setTimeout(() => {
      console.log('about to pause');
      document.getElementsByClassName('PlayButton')[0].click();
      shouldPause = true;
      sendRes('bro');
    }, remainingTime);
  } else {
    sendRes('already queued pause');
  }

  return true;
});
