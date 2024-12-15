class monster {
    constructor(name, health, accuracy, strenght){   //on crée une class pour les monstres avec leurs statistiques et leur nom
        this.name = name;
        this.health = health;
        this.accuracy = accuracy;
        this.strenght = strenght;

    }
    rollAttack(){
        let accuracyRoll = (Math.random()*100) + this.accuracy;   //génération du jet aléatoire de précision pour savoir si l'attaque touche
        if (accuracyRoll > 100) {
            this.attackLand = true;
        }
        else {
            this.attackLand = false;
        }
    }
    //diminue les pv du monstre
    takeDamage(enemiDamage){    
        this.health -= enemiDamage;
    }
    rollDamage(){
        return Math.ceil(this.strenght * (0.5 + Math.random()/2))
    }
    Turn(opponant){
        this.rollAttack();
        if (this.attackLand == true) {
            let dmg = this.rollDamage();
            opponant.takeDamage(dmg);
            console.log(this.name + "'s attack landed");
            console.log(opponant.name, "took", dmg, "damage and has now", opponant.health, "life health");
        }
        else {
            console.log(this.name + "'s attack missed");
            console.log(opponant.name, "took no damage and still has", opponant.health, "life health");
        }
    }
}
//creation de la fonction de combat qui contient les tours
function combat(monster1, monster2) {
    console.log("==========New Combat==========");
    console.log("The fighters are", monster1.name, "and", monster2.name);
    console.log("==========First Turn==========");
    combatEnd = false;  //permet de savoir quand terminer la boucle while
    while(combatEnd == false) {

        monster1.Turn(monster2); 
        monster2.Turn(monster1);

        if(monster1.health > 0){
            monster1.alive = true;
        }
        else {
            monster1.alive = false;
        }
        if(monster2.health > 0){
            monster2.alive = true;
        }
        else {
            monster2.alive = false;
        }

        if(monster1.alive == false){
            if(monster2.alive == false){    //cas d'égalité
                combatEnd = true;
                console.log("==========Combat End==========");
                console.log("Both monster fainted it is a draw");
            }
            else{
                combatEnd = true;   //victoire monstre 1
                console.log("==========Combat End==========");
                console.log(monster1.name, "fainted so", monster2.name, "is the winner");
            }
        } 
        else{
            if(monster2.alive == false){    //victoire monstre 2
                combatEnd = true;
            console.log("==========Combat End==========");
                console.log(monster2.name, "fainted so", monster1.name, "is the winner");                
            }
            else{
                console.log("===========New Turn===========");
            }
        }
    }
}

//choix des noms et stats des monstres ("nom", points de vie, précision, force)
goblin = new monster("jeff the goblin", 100, 50, 15);
troll = new monster("boris the troll", 100, 25, 30);

//début du combat
combat(goblin, troll);