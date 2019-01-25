function handleAudio(keyCode) {
  const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
  const key = document.querySelector(`li[data-key="${keyCode}"]`);
  if (!audio) {
    return null;
  }
  audio.currentTime = 0;
  audio.play();
  key.classList.add('playing');
}

function endtransition(e) {
  if (e.propertyName === 'transform') {
    this.classList.remove('playing');
  }
}

window.addEventListener('keydown', e => {handleAudio(e.keyCode);});

const keys = document.querySelectorAll('li.key');
keys.forEach(key => {
  key.addEventListener('transitionend', endtransition);

  // bonus: handle click events
  key.addEventListener('click', () => {
    handleAudio(key.getAttribute('data-key'));
  });
});