let button = document.querySelectorAll('.button');
let collectionOne = document.querySelector('.colour__set-primary');
let collectionTwo = document.querySelector('.colour__set-secondary');

for ( let i = 0; i < button.length; i++) {
  button[i].addEventListener('click', function () {
    collectionOne.setAttribute (
      'data-colour', this.getAttribute('data-colour')
    )
    collectionTwo.setAttribute (
      'data-colour', this.getAttribute('data-colour')
    )

    let active = document.querySelector('.active');

    if (active) {
      active.classList.remove('active');
    }
    button[i].classList.add('active');
  });
}
