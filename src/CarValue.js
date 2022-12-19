function CarValue(car) {
    let value = 0;
    let model = car.model.replace(/[^A-Za-z]/g, '')
    for (let i = 0; i < model.length; i++) {
        value += (model[i].toLowerCase().charCodeAt(0) - 97 + 1);
    }
    value = value * 100 + Math.floor(Math.pow(Math.sqrt(car.year), 2));
    if (isNaN(value) || (model === '') || car.year % 1 != 0) {
        return { error: "there is an error" }
    } else {
        return { car_value: value };
    }
}
module.exports = CarValue;

