const clock = document.querySelector('.clock')
let time = () => {
    let date = new Date()
    let hrs = date.getHours()
    let mts = date.getMinutes()
    let sec = date.getSeconds()
    let preiod = 'AM'
    if(hrs == 0) {
        hrs = 12
    }else if(hrs >= 12) {
        hrs = hrs - 12
        preiod = 'PM'
    }
    hrs = hrs < 10 ? "0" + hrs : hrs
    mts = mts < 10 ? "0" + mts : mts
    sec = sec < 10 ? "0" + sec : sec
    
    let finalTime = `${hrs}:${mts}:${sec}:${preiod}`
    clock.innerHTML = finalTime
    setTimeout(time, 1000);
}
time()