class Personnage {
    constructor(age, nom, ville) {
        this.age = age, //declaration de la propriete
        this.nom = nom,
        this.ville = ville,
        this.sePresenter = () => { // declaration de la methode
            return console.log(`Bonjour, je m'appelle ${this.nom} !`);
        }
    }
}

let Adrien = new Personnage(30, "Adrien", "Bruxelles");
let Claire = new Personnage(56, "Claire", "Bali");

Adrien.sePresenter();
Claire.sePresenter();