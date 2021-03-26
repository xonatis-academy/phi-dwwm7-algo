// Afficher en JS
console.log('It works');

// nombre
let age = 32;
console.log(age);

// chaine de caractères
let prenom = 'Michael';
console.log(prenom);

// boolean
let estMarie = true;
console.log(estMarie);

// tableau
let tab = [1, 2, 3, 4];
console.log(tab);
console.log(tab[2]);

// dictionnaire
let obj = {
    prenom: 'Michael',
    age: 41
};
console.log(obj);
console.log(obj.age);

// mixte
let listeDesClients = [
    {
        prenom: 'Michael',
        age: 43,
        ageDesEnfants: [2, 1]
    },
    {
        prenom: 'Pierre',
        age: 98,
        ageDesEnfants: [21, 32, 'Tomate', {
            nom: 'Thomas'
        }]
    }
];
// Afficher Thomas
console.log(listeDesClients[1].ageDesEnfants[3].nom);
