let noUseKeys = ['Shift', 'Control', 'Alt', 'CapsLock', 'Tab', 'Esc', 'Meta', 'ArrowLeft', 'ArrowRight', 'ArrowDown', "ArrowUp", 'Enter']
let writer = document.querySelector('#writer')
let writerValue = writer.innerText;
let process = false;

// Audio for actions
let audioKey = new Audio('./Sounds/typewriter-key-1.mp3');
let audioBackspace = new Audio('./Sounds/typewriter-backspace-1.mp3');

window.addEventListener('keydown', async (e) => {
  debugger;
  if (!process) {

    //other keys
    if (noUseKeys.indexOf(e.key) !== -1) {
      return;
    }

    // delete symbol
    else if (e.key === 'Backspace') {
      let innerText = writerValue.split('')
      innerText.pop();
      process = true;
      await setTimeout(() => {
        audioBackspace.play();
        writerValue = writer.innerText = innerText.join('');
      }, 400)
      audioBackspace.pause()
      process = false;
      audioBackspace.currentTime = 0;
      return;
    }

    // add symbol
    process = true;
      await setTimeout(() => {
        audioKey.play();
        writerValue = writer.innerText = writerValue + e.key;
    }, 400)
    audioKey.pause();
    process = false;
    audioKey.currentTime = 0;
  }
})
