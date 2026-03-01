const toggleButton = document.querySelector('#toggleButton')
const hiddenContent = document.querySelector('.contentDiv')

toggleButton.addEventListener('click', function(){
    hiddenContent.classList.toggle('contentDiv')
})