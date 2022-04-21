export function valueFormatter(number) {
    if (number > 10000) {
        return parseInt(number).toLocaleString();
    } else if (number > 1000 && number.toFixed(1) % 1 > 0) {
        number = number.toFixed(1);
    } else if (number < 1) {
        number = number.toFixed(4);
    }

    let value = String(number).replace(".", ",");
    return value;
}

export function valueFormatterEasy(value) {
    if (value > 1000) {
        return value.toLocaleString();
    } else {
        return String(value).replace(".", ",");
    }
}

export function objectIsEmpty(obj) {
    return Object.keys(obj).length === 0;
}
