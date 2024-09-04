export default function Simulation(team) {

    const Team1 = team[0];
    const Team2 = team[1];

    const rankDifference = Team1.FIBARanking - Team2.FIBARanking;
    // Ako je rang difference pozitivan, team1 je bolje rangiran
    const probability = Math.round((1 / (1 + Math.exp(rankDifference / 10))) * 201);
    const randomValue = Math.round(Math.random()*201) ; // Generišemo slučajan broj
    
    if  (probability < randomValue) { //Vrednost probability je dodeljena Timu1, a randomValue Timu2
        Team1.points+=1;
        Team1.losses+=1;
        Team1.basketScored+=probability;
        Team1.basketObtained+=randomValue;
        Team1.basketDifference+= probability - randomValue;
        Team2.points+=2;
        Team2.wins+=1;
        Team2.basketScored+=randomValue;
        Team2.basketObtained+=probability;
        Team2.basketDifference+= randomValue - probability;
        console.log(`${probability} ${Team1.Team} : ${randomValue} ${Team2.Team}  wins! `);
       
        
    } else {
        Team2.points+=1;
        Team2.losses+=1;
        Team2.basketScored+=randomValue;
        Team2.basketObtained+=probability;
        Team2.basketDifference+= randomValue - probability;
        Team1.points+=2;
        Team1.wins+=1;
        Team1.basketScored+=probability;
        Team1.basketObtained+=randomValue;
        Team1.basketDifference+= probability - randomValue;
        console.log(`${randomValue} ${Team2.Team} : ${probability} ${Team1.Team}  wins!`);
        
    }
    
}