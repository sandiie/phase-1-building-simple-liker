
// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.addEventListener('DOMContentLoaded', () => {
  const errorModal = document.querySelector('.error-modal');
  errorModal.classList.add('hidden');

  const emptyHearts = document.querySelectorAll('.empty-heart');
  emptyHearts.forEach((heart) => {
    heart.addEventListener('click', () => {
      mimicServerCall()
        .then(() => {
          heart.classList.add('activated-heart');
          heart.classList.remove('empty-heart');
        })
        .catch((error) => {
          errorModal.classList.remove('hidden');
          errorModal.querySelector('.error-message').textContent = error.message;
          setTimeout(() => {
            errorModal.classList.add('hidden');
          }, 3000);
        });
    });
  });

  const fullHearts = document.querySelectorAll('.activated-heart');
  fullHearts.forEach((heart) => {
    heart.addEventListener('click', () => {
      heart.classList.add('empty-heart');
      heart.classList.remove('activated-heart');
    });
  });
});



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}