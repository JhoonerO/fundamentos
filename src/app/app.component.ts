const g = 9.8; // gravedad en m/s^2

// Función para calcular la altura (h)
function calcularAltura(t: number): number {
    return (g * Math.pow(t, 2)) / 2;
}

// Función para calcular la velocidad final (vf)
function calcularVelocidadFinal(t: number): number {
    return g * t;
}

// Ejemplos de cálculo
const tiempo = 5; // Ejemplo de tiempo

const altura = calcularAltura(tiempo);
const velocidadFinal = calcularVelocidadFinal(tiempo);

console.log(`Altura (h) = ${altura.toFixed(2)} metros`);
console.log(`Velocidad Final (vf) = ${velocidadFinal.toFixed(2)} m/s`);
