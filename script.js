const teamName = document.getElementById("team");
const typeOfSport = document.getElementById("sport");
const worldCupYear = document.getElementById("year");
const headCoach = document.getElementById("head-coach");
const playerCards = document.getElementById("player-cards");
const playersDropdownList = document.getElementById("players");

const myFavoriteFootballTeam = {
    team: "Argentina",
    sport: "Football",
    year: 1986,
    isWorldCupWinner: true,
    headCoach: {
        coachName: "Carlos Bilardo",
        matches: 7,
    },
    players: [
        { name: "Sergio Almirón", position: "forward", number: 1, isCaptain: false, nickname: null, },
        { name: "Sergio Batista", position: "midfielder", number: 2, isCaptain: false, nickname: null, },
        { name: "Ricardo Bochini", position: "midfielder", number: 3, isCaptain: false, nickname: "El Bocha", },
        { name: "Claudio Borghi", position: "midfielder", number: 4, isCaptain: false, nickname: "Bichi", },
        { name: "José Luis Brown", position: "defender", number: 5, isCaptain: false, nickname: "Tata", },
        { name: "Daniel Passarella", position: "defender", number: 6, isCaptain: false, nickname: "El Gran Capitán", },
        { name: "Jorge Burruchaga", position: "forward", number: 7, isCaptain: false, nickname: "Burru", },
        { name: "Néstor Clausen", position: "defender", number: 8, isCaptain: false, nickname: null, },
        { name: "José Luis Cuciuffo", position: "defender", number: 9, isCaptain: false, nickname: "El Cuchu", },
        { name: "Diego Maradona", position: "midfielder", number: 10, isCaptain: true, nickname: "El Pibe de Oro", },
        { name: "Jorge Valdano", position: "forward", number: 11, isCaptain: false, nickname: "The Philosopher of Football", },
        { name: "Héctor Enrique", position: "midfielder", number: 12, isCaptain: false, nickname: null, },
        { name: "Oscar Garré", position: "defender", number: 13, isCaptain: false, nickname: null, },
        { name: "Ricardo Giusti", position: "midfielder", number: 14, isCaptain: false, nickname: null, },
        { name: "Luis Islas", position: "goalkeeper", number: 15, isCaptain: false, nickname: "El loco", },
        { name: "Julio Olarticoechea", position: "defender", number: 16, isCaptain: false, nickname: null, },
        { name: "Pedro Pasculli", position: "forward", number: 17, isCaptain: false, nickname: null, },
        { name: "Nery Pumpido", position: "goalkeeper", number: 18, isCaptain: false, nickname: null, },
        { name: "Oscar Ruggeri", position: "defender", number: 19, isCaptain: false, nickname: "El Cabezón", },
        { name: "Carlos Tapia", position: "midfielder", number: 20, isCaptain: false, nickname: null, },
        { name: "Marcelo Trobbiani", position: "midfielder", number: 21, isCaptain: false, nickname: "Calesita", },
        { name: "Héctor Zelada", position: "goalkeeper", number: 22, isCaptain: false, nickname: null, },
    ],
};

//Ensure that you can't modify this object by adding or removing any properties. We are going to use a method called Object.freeze(obj) which will freeze this object and prevent any changes being made to it.Use the Object.freeze() method to freeze the myFavoriteFootballTeam object.
Object.freeze(myFavoriteFootballTeam);
/*
//Access the key called sport from the myFavoriteFootballTeam object and assign it to a new const variable called sport.
const sport = myFavoriteFootballTeam.sport;
//Below the sport variable, access the key called team from the myFavoriteFootballTeam object and assign it to a new const variable called team.
const team = myFavoriteFootballTeam.team;
*/

//In the last two steps, you have been accessing properties from the myFavoriteFootballTeam object using dot notation and assigning them to new const variables. But in JavaScript, there is an easier way to accomplish the same goal.The object destructuring syntax allows you to unpack values from arrays and objects.Rewrite the two lines of code below using the new destructuring syntax.
//const { sport, team } = myFavoriteFootballTeam;
const { sport, team, year, players } = myFavoriteFootballTeam;

//Now you need to access the coachName value from the myFavoriteFootballTeam.headCoach object using the destructuring syntax.
const { coachName } = myFavoriteFootballTeam.headCoach;
//Below your destructuring assignments, assign the sport variable to typeOfSport.textContent.
typeOfSport.textContent = sport;
//Next, assign the team variable to teamName.textContent.
teamName.textContent = team;
//Assign the year variable to worldCupYear.textContent.Below that, assign the coachName variable to headCoach.textContent.
worldCupYear.textContent = year;
headCoach.textContent = coachName;

/*//Now you will start building out the function that will show player cards based on the selections made by the user in the Filter Teammates dropdown menu.
const setPlayerCards = () => {

}*/
//Function parameters can be initialized with default values. If a function is called without an argument, then the default value will be used.Add a new parameter to your setPlayerCards function called arr and assign it a default value of players.
const setPlayerCards = (arr = players) => {
    /*//The next step is to create a new array that will be responsible for adding the player card information to the page.Inside the setPlayerCards function, start by adding the map method to arr that will take in an empty callback function. Then, use the addition assignment += operator to assign the new array to playerCards.innerHTML.
    playerCards.innerHTML+=arr.map(()=>{});*/

    //arr contains a series of objects that each contains a name, position, number, isCaptain and nickname property. In order to access each of those properties inside the callback function, you will need to use object destructuring to unpack them into variables.Inside the parameter list in the callback function for the map method, unpack all 5 object properties from objects in arr using object destructuring.
    playerCards.innerHTML += arr.map(({ name, position, number, isCaptain, nickname }) => {
        //Add template literals `` which will contain the HTML content for the player cards.Inside the template literals, add an empty div with a class of "player-card".
        `
            <div class="player-card">
                <h2>${name} ${isCaptain ? "(Captain)": ""}</h2>
                <p>Position: ${position}</p>
                <p>Number: ${number}</p>
                <p>Nickname: ${nickname !== null ? nickname : "N/A"}</p>
            </div>
        `;
    }).join("")//The .map() method will return a new array of player-card items separated by commas.To remove the commas between each player-card so it does not show up on screen, chain the .join() method to the .map() method. Pass an empty string as the argument for the .join() method.
};

//The next step is to create a function that will detect when a user makes a selection from the playersDropdownList.Use the .addEventListener() method on playersDropdownList. Inside the event listener, pass in a "change" event type and an callback function.For the callback function, pass in e as a parameter.e represents an object which contains the information for that event.
playersDropdownList.addEventListener("change",(e)=>{
    //console.log(e.target.value);
    playerCards.innerHTML = "";
    //The next step would be to add a switch statement which will check for the user's selection from the player dropdown menu and filter out cards based on the player's positions.Add a switch statement and use e.target.value for the expression.
    switch(e.target.value){
        //Start by adding a case clause for "nickname" inside your switch statement.Call the setPlayerCards function with an argument of players.filter().Inside the filter method, add a callback function with a parameter called player and implicitly return player.nickname is not null.
        case "nickname":
            setPlayerCards(players.filter((player)=>player.nickname !== null));
            break;
        //Next, add a case clause for "forward".Inside that case, call the setPlayerCards function with an argument of players.filter().Inside the filter() method, add a callback function with a parameter of player that will check if player.position equals "forward".
        case "forward":
            setPlayerCards(players.filter((player)=>player.position === "forward"));
            break;
        //Add a new case for "midfielder" that checks if player.position equals "midfielder" following the same pattern from the previous step.
        case "midfielder":
            setPlayerCards(players.filter((player) => player.position === "midfielder"));
            break;
        //Add a new case for "defender" that checks if player.position equals "defender".
        case "defender":
            setPlayerCards(players.filter((player) => player.position === "defender"));
            break;
        //Add a new case for "goalkeeper" that checks if player.position equals "goalkeeper".
        case "goalkeeper":
            setPlayerCards(players.filter((player) => player.position === "goalkeeper"));
            break;
        //The final step is to add a default clause if none of the other case clauses match the user selection.For the default clause, call the setPlayerCards function without any arguments passed in.
        default:
            setPlayerCards();
    }
});