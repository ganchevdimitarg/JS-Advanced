function roadRadar(speed, area) {
    let areaSpeed;
    function output(sp, rs, as) {
        if (rs >= 0) {
            return 'Driving ' + sp + ' km/h in a ' + areaSpeed + ' zone';
        }
        if (rs < 0 && rs >= -20) {
            return 'The speed is ' + Math.abs(rs) + ' km/h faster than the allowed speed of ' + as + ' - speeding';
        }
        if (rs < -20 && rs >= -40) {
            return 'The speed is ' + Math.abs(rs) + ' km/h faster than the allowed speed of ' + as + ' - excessive speeding';
        }
        if (rs < -40) {
            return 'The speed is ' + Math.abs(rs) + ' km/h faster than the allowed speed of ' + as + ' - reckless driving';
        }
    }
    if (area === 'residential') {
        areaSpeed = 20;
        let realSpeed = areaSpeed - speed;
        console.log(output(speed, realSpeed, areaSpeed));
    }
    if (area === 'city') {
        areaSpeed = 50;
        let realSpeed = 50 - speed;
        console.log(output(speed, realSpeed, areaSpeed));
    }
    if (area === 'interstate') {
        areaSpeed = 90;
        let realSpeed = 90 - speed;
        console.log(output(speed, realSpeed, areaSpeed));
    }
    if (area === 'motorway') {
        areaSpeed = 130;
        let realSpeed = 130 - speed;
        console.log(output(speed, realSpeed, areaSpeed));
    }
}