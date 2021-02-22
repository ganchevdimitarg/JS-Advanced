function timeWalk(steps, footprint, speedKmH) {
    const speed = speedKmH * 1000 / 3600;
    const distance = steps * footprint;
    const rest = Math.floor(distance / 500) * 60;
    const time = distance / speed + rest;

    const hour = Math.floor(time / 60 / 60).toFixed(0).padStart(2, "0");
    const minute = Math.floor((time - hour * 3600) / 60).toFixed(0).padStart(2, "0");
    const second = (time - hour * 60 * 60 - minute * 60).toFixed(0).padStart(2, "0");

    return `${hour}:${minute}:${second}`;

}