function Timer() {
    this.startTime = new Date().getTime()
    this.lastTime = this.startTime
}

Timer.prototype.tick = function tick(log) {
    let t = new Date().getTime()
    let diff = t - this.lastTime

    console.log(log, "Tick:", diff, "Total Elapsed:", t - this.startTime)

    this.lastTime = t
}


module.exports = Timer