canvas = document.getElementById("myCanvas")
ctx = canvas.getContext("2d")
colour = "red"
width = 5
lx=""
ly=""
canvas.addEventListener("touchstart", mytouchstart)
function mytouchstart(e) {
    cmx = e.touches[0].clientX - canvas.offsetLeft
    cmy = e.touches[0].clientY - canvas.offsetTop
}
canvas.addEventListener("touchmove", mytouchmove)
function mytouchmove(e) {
    cmx = e.touches[0].clientX - canvas.offsetLeft
    cmy = e.touches[0].clientY - canvas.offsetTop
    ctx.beginPath()
    ctx.strokeStyle = colour
    ctx.lineWidth = width
    ctx.moveTo(lx, ly)
    ctx.lineTo(cmx, cmy)
    ctx.stroke()

    lx = cmx
    ly = cmy
}