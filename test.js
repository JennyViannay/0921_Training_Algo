import chalk from 'chalk';

export function test(exepted, result) {
    let isArray = false;
    if (typeof(result) === "object") {
        isArray = true;
        if (arrayEquals(exepted, result) === true) return chalk.green(result) + " ✅ ";
    }
    if (exepted === result && isArray === false) return chalk.green(result) + " ✅ ";
    else return chalk.red(result) + " ❌ ";
}

function arrayEquals(a, b) {
    return Array.isArray(a) && Array.isArray(b) && a.length === b.length && a.every((val, index) => val === b[index]);
}
