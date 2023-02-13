
const players =require('../utils/data.json').player;
describe("assignment 1",async() => {

// international player
it("4 international player",async () =>{ 
    // await getData();
    let countPlayers = 0;
    for (let i = 0; i < players.length; i++) {
        if (players[i].country != "India") {
            if (countPlayers > 4) {
                console.log("Team has more than 4 international players");
                return false;
            }
        }
    }
    
    console.log("team has only 4 foreign players")
    return true;
});


// wicket keeper
it("atleast 1 wicketKeeper", async () =>{
    // await getData();
    for (let i = 0; i < players.length; i++) {
        if (players[i].role === "Wicket-keeper") {
            console.log("atleast 1 wicket keeper")
            return true
        }
    }
    return false;
});

});