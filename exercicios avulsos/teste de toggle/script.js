    const toggleButton = document.querySelector('#toggleButton')
    const hidden = document.querySelector('.hiddenContent')

    toggleButton.addEventListener('click', () => {
        hidden.classList.toggle('hiddenContent')
    })