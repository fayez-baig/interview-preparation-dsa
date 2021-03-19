// Formulla
// c = 5/9 * (F-32)

const farehnitToCelsius = (temperature) => (5 / 9) * (temperature - 32);

console.log(`Temperature in celsius= ${Math.round(farehnitToCelsius(84))}`);
