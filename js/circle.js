function buttonAnimation () {
    const button = document.querySelector('.btn');
    const cont = document.querySelector('.click');

    function deleteCircleIcon (circle) {
        circle.remove()

    }

    function createCircleIcon (posX, posY) {
        const circle = document.createElement('div');

        circle.classList.add('circle');
        circle.style.left = `${posX}px`;
        circle.style.top = `${posY}px`; 

        cont.appendChild(circle);

        setTimeout(() => {
            deleteCircleIcon(circle)
        }, 1000)
    }

    function handleButtonClick (event) {
        const offset = event.target.getBoundingClientRect()
        
        const posX = event.pageX - offset.left
        const posY = event.pageY - offset.top

        createCircleIcon(posX, posY)
    }
    button.addEventListener('mousedown', handleButtonClick)

}
buttonAnimation()