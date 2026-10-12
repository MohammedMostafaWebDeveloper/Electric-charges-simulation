var canvas = document.querySelector("canvas")
canvas.width = innerWidth
canvas.height = innerHeight
var c = canvas.getContext("2d")

class Charge{
    constructor(x, y, charge, q) {
        this.pos = {x: x, y: y}
        this.charge = charge
        this.q = q
        this.radius = Math.cbrt(this.q) * 10
    }
    draw() {
        c.beginPath()
        c.arc(this.pos.x, this.pos.y, this.radius, 0, Math.PI * 2, false)
        c.fillStyle = (this.charge == 1 ? "red" : "blue")
        c.fill()
        c.fillStyle = "white"
        c.textBaseline = "middle"
        c.textAlign = "center"
        c.font = `bold ${this.radius * 1.4}px Arial`
        c.fillText((this.charge == 1 ? "+" : "-"), this.pos.x, this.pos.y)
    }
    update() {

        this.draw()
    }
}

var charges = []

window.addEventListener("click", (e) => {
    charges.push(new Charge(e.clientX, e.clientY, -1, 10))
})

function animate() {
    requestAnimationFrame(animate)
    c.clearRect(0, 0, canvas.width, canvas.height)
    charges.forEach(charge => {
        charge.update()
    })
}
animate()