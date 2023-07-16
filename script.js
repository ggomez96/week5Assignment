//making a Pet class to take their name and type of animal
class Pet {
    constructor(name, type) {
        this.name = name
        this.type = type
    }

    describe() {
        return `${this.name} is a ${this.type}.`
    }
}

//Daycare class that takes the name of a daycare and will tell us who is checked in
class Daycare {
    constructor(name) {
        this.name = name
        this.pets = [];
    }

    //method adds a pet to pets array if its a instance of Pet so nothing contrary is added
    addPet(pet) {
        if(pet instanceof Pet) {
            this.pets.push(pet);
        }else {
            throw new Error(`Only add a pet if instance of class Pet`);
        }  
    }
         describe(){
         return `${this.name} has ${this.pets.length} pets checked in.`;
    }
}



//this menu method takes in daycares/ does something based off of what the user selects
class Menu {
    constructor() {
        this.daycares = [];
        this.selectedDaycare = null;
    }

    showMainMenuOptions(){
        return prompt(`
        0)Exit
        1)Create a new Daycare
        2)View Daycare
        3)Delete Daycare`);
    }   
//whatever number user selects in main menu options, the start method will run corresponding number
start() {
    let selection = this.showMainMenuOptions();
    while(selection != 0) {
        switch(selection) {
        case'1':
            this.createDaycare();
            break;
        case'2':
            this.viewDaycare();
            break;
        case'3':
            this.deleteDaycare();
            break;
        default:
            selection = 0;
        }
        selection = this.showMainMenuOptions();
     } 
     alert(`Goodbye!`);
    }

    //menu options for when a user creates a new Daycare, if they want to check in or check out a pet
    showDaycareMenuOptions(daycareInfo) {
        return prompt(`
        0)back
        1)check in pet
        2)check out pet
        
        --> ${daycareInfo}`);
    };

    //creating a daycare
    createDaycare() {
    let name = prompt(`Enter name of the new Daycare`)
    this.daycares.push(new Daycare(name)); //pushing new daycare to array in Daycare class
    };


    
    //view a daycare
    viewDaycare() {
        let index = prompt(`Enter daycare index`)
        if(index > -1 && index < this.daycares.length) {
            this.selectedDaycare = this.daycares[index];
            let description = `Daycare name: ` + this.selectedDaycare.name + `\n`;
            for(let i = 0; i < this.selectedDaycare.pets.length;i++){
                description += i + `) ` + this.selectedDaycare.pets[i].name + ` - ` + this.selectedDaycare.pets[i].type + `\n`;
            }

            let selection = this.showDaycareMenuOptions(description)
            switch(selection) {
                case'1':
                this.createPet()
                break;
                case'2':
                this.deletePet()
            }
        
            }
        }

        
    createPet() {
        let name = prompt(`Enter pet you'd like to check in: `);
        let type = prompt(`Enter what type of pet is checking in: `);
        this.selectedDaycare.pets.push(new Pet(name, type));
    }

    deletePet() {
        let index = prompt(`Enter the index of pet you want to delete: `);
        if(index > -1 && index < this.selectedDaycare.pets.length) {
            this.selectedDaycare.pets.splice(index, 1);
        }
    }

        deleteDaycare(){
            let index = prompt(`Enter index of daycare you want to delete`)
            if(index > - 1 && index < this.daycares.length) {
                this.daycares.splice(index, 1);
            }
        }
        }


    
    

let menu = new Menu();
menu.start();







