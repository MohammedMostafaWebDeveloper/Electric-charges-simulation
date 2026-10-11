var canvas = document.querySelector("canvas")
canvas.width = innerWidth
canvas.height = innerHeight
var c = canvas.getContext("2d")

class Charge{
    constructor(x, y, charge, q) {
        this.pos = {x: 0, y: 0}
        this.charge = charge
        this.q = q
    }
    draw() {

    }
}

window.addEventListener("click", (e) => {
    
})

function animate() {
    requestAnimationFrame(animate)
    c.clearRect(0, 0, canvas.width, canvas.height)
    c.beginPath()
    c.arc(canvas.width / 2, canvas.height / 2, 2, 0, Math.PI * 2, false)
    c.fillStyle = "white"
    c.fill()
}
animate()