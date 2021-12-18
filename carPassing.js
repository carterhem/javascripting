const carPassing = function (cars, speed) {
  let object = {
    time: Date.now(),
    speed: speed
  };
  cars.push(object);
  return cars
}