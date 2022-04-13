export function valueFormatter(number) {
    if (number > 1000 && number.toFixed(1) % 1 > 0) {
        number = number.toFixed(1);
    } else if (number < 1) {
        number = number.toFixed(4);
    }

    let value = String(number).replace(".", ",");
    return value;
}

console.log(valueFormatter(4000));
