const evil = document.getElementById('evil')
const OFFSET = 100

evil.addEventListener('click', () => {
    alert('Nice Try :)')
    window.close()
})


document.addEventListener('mousemove', (e) => {
    const x = e.pageX
    const y = e.pageY
    const buttonBox = evil.getBoundingClientRect()
    const horizontalDistanceFrom = distanceFromCenter(buttonBox.x,x,buttonBox.width)
    const verticalDistanceFrom = distanceFromCenter(buttonBox.y,y,buttonBox.height)
    const horizontalOffset = buttonBox.width / 2 + OFFSET
    const verticalOffset = buttonBox.height / 2 + OFFSET

    if(Math.abs(horizontalDistanceFrom) <= horizontalOffset && Math.abs(verticalDistanceFrom) <= verticalOffset){
        setButtonPosition(
            buttonBox.x + horizontalOffset / horizontalDistanceFrom *10,
            buttonBox.y + verticalOffset / verticalDistanceFrom *10
        )
    }
})

function setButtonPosition(left,top){
    const windowBox = document.body.getBoundingClientRect()
    const buttonBox = evil.getBoundingClientRect()

    if(distanceFromCenter(left, windowBox.left, buttonBox.width)<0){
        left = windowBox.right - buttonBox.width - OFFSET
    }

    if(distanceFromCenter(left, windowBox.right, buttonBox.width)>0){
        left = windowBox.left + OFFSET
    }

    if(distanceFromCenter(top, windowBox.top, buttonBox.height)<0){
        top = windowBox.bottom - buttonBox.height - OFFSET
    }

    if(distanceFromCenter(top, windowBox.bottom, buttonBox.height)>0){
        top = windowBox.top + OFFSET
    }

    evil.style.left = `${left}px`
    evil.style.top = `${top}px`
}

function distanceFromCenter(boxPosition, mousePosition, boxSize){
    return boxPosition - mousePosition + boxSize/2
}