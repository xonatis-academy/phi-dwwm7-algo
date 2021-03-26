let users = [
	{
    	prenom: 'Jean',
        nom: 'Aimarre',
        age: 23
    },
    {
    	prenom: 'Johnatan',
        nom: 'Pasdetoit',
        age: 16
    },
    {
    	prenom: 'Jean',
        nom: 'Veuencore',
        age: 43
    }
];

/* 
autre <- []
@PourChaque user @Dans users
    @DebutBloc
    @Si user.age >= 18
        @DebutBloc
        Ajouter user dans autre
        @FinBloc
    @FinBloc   
*/
let autre = [];
for (const user of users)
{
    if (user.age >= 18)
    {
        autre.push(user);
    }
}

console.log(autre);