function carFactory(car) {
    let newCar = {};
    newCar.model = car.model;


    const power = {
        small() { return { power: 90, volume: 1800 } },
        normal() { return { power: 120, volume: 2400 } },
        monster() { return { power: 200, volume: 3500 } }
    }

    const carriage = {
        hatchback(colors) {
            const color = { type: 'hatchback' };
            color.color = colors;
            return color;
        },
        coupe(colors) {
            const color = { type: 'coupe' };
            color.color = colors;
            return color;
        }
    }

    if (car.power <= 90) {
        newCar.engine = power['small']();
    } else if (car.power > 90 && car.power < 200) {
        newCar.engine = power['normal']();
    } else {
        newCar.engine = power['monster']();
    }

    if (car.carriage == 'hatchback') {
        newCar.carriage = carriage['hatchback'](car.color);
    } else {
        newCar.carriage = carriage['coupe'](car.color);
    }

    newCar.wheels = [];
    let wheels = 4;
    if (car.wheelsize % 2 == 0) {
        while (wheels--) {
            newCar.wheels.push(car.wheelsize - 1);
        }
    } else {
        while (wheels--) {
            newCar.wheels.push(car.wheelsize);
        }
    }

    return newCar;
}