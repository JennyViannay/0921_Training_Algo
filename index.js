import chalk from 'chalk';
import { test } from './test.js';

// Ex 1
// Écrire une fonction qui prend en parametre une string 
// et qui convertit les premières lettres de chaque mots en majuscule.
// Les methodes natives dont vous aurez besoin : 
// split(), push(), charAt(), toUpperCase(), slice(), join()
// push() - pusher des choses dans autre choses
// split() - j:p:p.split('') => ['j','p','p']  
function uppercase(str) {
    let words = str.split(' ');
    let sentence = [];
    words.map(word => {
        word = word.charAt(0).toUpperCase() + word.slice(1);
        sentence.push(word);
    });
    return sentence.join(' ');
}

console.log('\n');
console.log(chalk.yellow("TESTS POUR LA METHODE UPPERCASE"));
console.log(`Résultat attendu : ${chalk.blue("The Quick Brown Fox")} || OUTPUT ${test("The Quick Brown Fox", uppercase("the quick brown fox"))}`)
console.log(`Résultat attendu : ${chalk.blue("J'adore La Programmation")} || OUTPUT ${test("J'adore La Programmation", uppercase("j'adore la programmation"))}`)
console.log(`Résultat attendu : ${chalk.blue("Vive Le Js")} || OUTPUT ${test("Vive Le Js", uppercase("vive le js"))}`)
console.log(`Résultat attendu : ${chalk.blue("Je Suis Dev")} || OUTPUT ${test("Je Suis Dev", uppercase("je suis dev"))}`)
console.log('\n');

// Ex 2 
// Écrire une fonction qui prend en parametre un tableau de score et qui retourne
// le nombre de point d'une équipe. 
// Ex de tableau de scores = ['1:0', '2:0', '3:0', '4:4', '2:2', '3:3', '1:4', '2:3', '2:4', '3:3'] || 13 points; 
// Régles pour compter les points = 
// si x > y : + 3 points
// si x < y : 0 point
// si x = y : + 1 point
// Les methodes natives dont vous aurez besoin : split(), parseInt()
function getPoints(array) {
    let score = 0;
    for (let i = 0; i < array.length; i++) {
        const split = array[i].split(":");
        if(split[0] > split[1]) score += 3;
        else if(split[0] === split[1]) score++;
    }
    return score;
}

console.log('\n');
console.log(chalk.yellow("TESTS POUR LA METHODE GET POINTS"));
console.log(`Résultat attendu : ${chalk.blue(13)} || OUTPUT ${test(13, getPoints(['1:0', '2:0', '3:0', '4:4', '2:2', '3:3', '1:4', '2:3', '2:4', '3:3']))}`)
console.log(`Résultat attendu : ${chalk.blue(10)} || OUTPUT ${test(10, getPoints(['1:1', '2:2', '3:3', '4:4', '2:2', '3:3', '4:4', '3:3', '4:4', '4:4']))}`)
console.log(`Résultat attendu : ${chalk.blue(0)} || OUTPUT ${test(0, getPoints(['0:1', '0:2', '0:3', '0:4', '1:2', '1:3', '1:4', '2:3', '2:4', '3:4']))}`)
console.log(`Résultat attendu : ${chalk.blue(15)} || OUTPUT ${test(15, getPoints(['1:0', '2:0', '3:0', '4:0', '2:1', '1:3', '1:4', '2:3', '2:4', '3:4']))}`)
console.log('\n');

// Ex 3 
// Écrire une fonction qui prend en parametre un tableau et qui retourne
// un nouveau tableau avec seulement les valeurs numériques du premier tableau.
// Les methodes natives dont vous aurez besoin : map() || for() || forEach(), push(), typeof()
function getNumericValue(arr) {
    const numerics = [];
    arr.map(value => {
        if (typeof(value) === "number") numerics.push(value);
    })
    return numerics;
}

console.log('\n');
console.log(chalk.yellow("TESTS POUR LA METHODE GET NUMERIC VALUE"));
console.log(`Résultat attendu : ${chalk.blue([2, 3, 5])} || OUTPUT ${test([2, 3, 5], getNumericValue(["plop", 2, 3, 5, "plopinette"]))}`)
console.log(`Résultat attendu : ${chalk.blue([10])} || OUTPUT ${test([10], getNumericValue(["plop", 10, "3", "5", "plopinette"]))}`)
console.log(`Résultat attendu : ${chalk.blue([4, 5, 6, 6, 89])} || OUTPUT ${test([4, 5, 6, 6, 89], getNumericValue([4, 5, 6, 6, 89, "plopinette"]))}`)
console.log(`Résultat attendu : ${chalk.blue([6, 12])} || OUTPUT ${test([6, 12], getNumericValue(["plop", "2", "3", "5", "plopinette", 6, 12]))}`)
console.log('\n');

// Ex 4 
// Écrire une fonction qui prend en parametre un tableau et qui retourne la plus 
// petite valeur de celui-ci 
// Les methodes natives dont vous aurez besoin : Math.min()
function findSmallest(arr) {
    return Math.min(...arr);
}

console.log('\n');
console.log(chalk.yellow("TESTS POUR LA METHODE FIND SMALLEST"));
console.log(`Résultat attendu : ${chalk.blue(-1)} || OUTPUT ${test(-1, findSmallest([0, 3, 5, -1]))}`)
console.log(`Résultat attendu : ${chalk.blue(2)} || OUTPUT ${test(2, findSmallest([2, 23, 15, 11]))}`)
console.log(`Résultat attendu : ${chalk.blue(100)} || OUTPUT ${test(100, findSmallest([250, 100, 4525, 411]))}`)
console.log(`Résultat attendu : ${chalk.blue(1000)} || OUTPUT ${test(1000, findSmallest([5585, 45542, 4542, 1000]))}`)
console.log('\n');

// Ex 5 
// Écrire une fonction qui prend en parametre un nombre et qui identifie et retourne
// si le nombre est pair ou impaire. 
// Ex d'output pour 2 : Even
// Pair => Even
// Impaire => Odd
function oddOrEven(int) {
    if (int % 2 === 0) return "Even";
    else return "Odd";
}

console.log('\n');
console.log(chalk.yellow("TESTS POUR LA METHODE ODD OR EVEN"));
console.log(`Résultat attendu : ${chalk.blue('Even')} || OUTPUT ${test("Even", oddOrEven(4))}`)
console.log(`Résultat attendu : ${chalk.blue('Odd')} || OUTPUT ${test("Odd", oddOrEven(3))}`)
console.log(`Résultat attendu : ${chalk.blue('Even')} || OUTPUT ${test("Even", oddOrEven(100))}`)
console.log(`Résultat attendu : ${chalk.blue('Odd')} || OUTPUT ${test("Odd", oddOrEven(151))}`)
console.log('\n');

// Ex 6 
// Écrire une fonction qui prend en paramètre une string et qui retourne cette string 
// en doublant chaque caractère.
// Ex pour plop l'OUTPUT serait : pplloopp
// Les methodes natives dont vous aurez besoin : map(), split(), repeat(), join()
function doubleChar(str) {
    const doubleChar = [];
    for (let i = 0; i < str.length; i++) {
        doubleChar.push(str[i].repeat(2));
    }
    return doubleChar.join('');
    // const letters = str.split("");
    // return letters.map(letter => 
    //     letter.repeat(2)
    // ).join("")
}

console.log('\n');
console.log(chalk.yellow("TESTS POUR LA METHODE DOUBLE CHAR"));
console.log(`Résultat attendu : ${chalk.blue('pplloopp')} || OUTPUT ${test("pplloopp", doubleChar("plop"))}`);
console.log(`Résultat attendu : ${chalk.blue('jjeennnnyy')} || OUTPUT ${test("jjeennnnyy", doubleChar("jenny"))}`);
console.log(`Résultat attendu : ${chalk.blue('ppllooppiinneettttee')} || OUTPUT ${test("ppllooppiinneettttee", doubleChar("plopinette"))}`);
console.log('\n');

// Ex 7
// Jenny est en route pour le château afin d'accomplir une mission. 
// Cependant, on lui a dit que le château est entouré d'un groupe de puissants dragons ! 
// Chaque dragon nécessite 2 balles pour être vaincu, Jenny n'a aucune idée du nombre de balles qu'iel doit emporter... 
// En supposant que Jenny prenne un certain nombre de balles et qu'iel aille combattre un certain nombre de dragons... 
// Ecrire une fonction qui permette de determiner si Jenny survivra. (output true ou false)
function jennyIsSurvive(dragon, ball) {
    if(ball >= dragon * 2) return true;
    else return false;
}
// Ecrire plusieurs tests afin de tester jennyIsSurvive : 
console.log(jennyIsSurvive(6, 4))
console.log(jennyIsSurvive(12, 4))
console.log(jennyIsSurvive(6, 14))
console.log(jennyIsSurvive(61, 44))
console.log(jennyIsSurvive(5, 16))
