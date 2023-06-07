var box = document.querySelector('.container');
    var link = document.getElementById('link');
    var moveInterval;

    var emoji = document.getElementById('emoji');
    var emojiTimeout;

    var modal = document.getElementById('myModal');
    var modalImage = document.getElementById('modalImage');

    function updateEmoji(mood) {
      emoji.innerHTML = mood === 'smile' ? '😊' : '😢';
      emoji.classList.toggle('sad', mood === 'sad');

      clearTimeout(emojiTimeout);
      emojiTimeout = setTimeout(function() {
        emoji.innerHTML = '';
      }, 1000);
    }

    function moveBox(option) {
  if (option === 'Yes') {
    link.innerHTML = '';
    return;
  }
  box.style.transition = 'left 0.5s, top 0.5s'

  var boxPositionX = Math.random() * (window.innerWidth - box.offsetWidth);
  var boxPositionY = Math.random() * (window.innerHeight - box.offsetHeight);

  
  var maxMoveX = window.innerWidth - box.offsetWidth;
  var maxMoveY = window.innerHeight - box.offsetHeight;

 
  if (boxPositionX > maxMoveX) {
    boxPositionX = maxMoveX;
  }
  if (boxPositionY > maxMoveY) {
    boxPositionY = maxMoveY;
  }

  box.style.left = boxPositionX + 'px';
  box.style.top = boxPositionY + 'px';

 
  updateEmoji('');
}

function updateEmoji(mood) {
  emoji.innerHTML = mood === 'smile' ? '😊' : '😢';
  emoji.classList.toggle('sad', mood === 'sad');

  clearTimeout(emojiTimeout);
  emojiTimeout = setTimeout(function () {
    emoji.innerHTML = '';
    emoji.style.left = box.offsetWidth / 2 - emoji.offsetWidth / 2 + 'px'; // Adjust emoji position to remain centered
    emoji.style.top = box.offsetHeight / 2 - emoji.offsetHeight / 2 + 'px'; // Adjust emoji position to remain centered
  }, 1000);
}
function handleNoHover() {
      hoverInterval = setInterval(function () {
        moveBox('No');
      }, 100);
    }

    function handleNoHoverEnd() {
      clearInterval(hoverInterval);
    }

    function showModal(imageUrl) {
      modalImage.src = imageUrl;
      modal.style.display = 'block';
    }

    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = 'none';
      }
    };