import fs from 'fs/promises';
import { compileFunction } from 'vm';
import Simulation from './simulation.js'
import { Console } from 'console';
import sortPlacment from './MatrixSort.js';
import sortHat from './MatrixSort.js';


//Globalna promenjiva za brojac kola
global.RoundNumb = 0;
let hat=[];
let HatD;
let HatE;
let HatF;
let HatG;

function addRow(newRow) {
    hat.push(newRow);
}


//Obradjuje podatke iz .JSON
export default async function LoadTeams() {
    try {
        const data = await fs.readFile('./groups.json', 'utf-8');
        const teams= JSON.parse(data);
        return teams;


    } catch (error){
         console.error("Error loading teams:", error);
    }
}

function processGroups(GroupA, GroupB, GroupC) {
    const combinationsA = getCombinations(GroupA);
    const combinationsB = getCombinations(GroupB);
    const combinationsC = getCombinations(GroupC);
    
    //Obrada plansmana za grupu A
    for (let i = 0; i < combinationsA.length; i++) {
        const Team1 =GroupA[0];
        const Team2 =GroupA[1];
        const Team3 =GroupA[2];
        const Team4 =GroupA[3];

        const placement = [
            [Team1.Team, Team2.points, Team1.wins, Team1.losses, Team1.basketScored, Team1.basketObtained, Team1.basketDifference],
            [Team2.Team, Team2.points, Team2.wins, Team2.losses, Team2.basketScored, Team2.basketObtained, Team2.basketDifference],
            [Team3.Team, Team3.points, Team3.wins, Team3.losses, Team3.basketScored, Team3.basketObtained, Team3.basketDifference],
            [Team4.Team, Team4.points, Team4.wins, Team4.losses, Team4.basketScored, Team4.basketObtained, Team4.basketDifference]
           ];

          const sortedPlacment = sortPlacment(placement);
          addRow(sortedPlacment[0]);
          addRow(sortedPlacment[1]);
          addRow(sortedPlacment[2]);
          console.log('Plasman po grupama- (Ime -bodovi/pobede/porazi/posrignuti kosevi/ primljeni kosevi/ kos razlike)')
          console.log('Grupa A: ', sortedPlacment);
       

        //Obrada plansmana za grupu B
        if (i < combinationsB.length) {
            const Team5 =GroupB[0];
            const Team6 =GroupB[1];
            const Team7 =GroupB[2];
            const Team8 =GroupB[3];

            const placement = [
                [Team5.Team, Team5.points, Team5.wins, Team5.losses, Team5.basketScored, Team5.basketObtained, Team5.basketDifference],
                [Team6.Team, Team6.points, Team6.wins, Team6.losses, Team6.basketScored, Team6.basketObtained, Team6.basketDifference],
                [Team7.Team, Team7.points, Team7.wins, Team7.losses, Team7.basketScored, Team7.basketObtained, Team7.basketDifference],
                [Team8.Team, Team8.points, Team8.wins, Team8.losses, Team8.basketScored, Team8.basketObtained, Team8.basketDifference] ];
                
                const sortedPlacment = sortPlacment(placement);
                addRow(sortedPlacment[0]);
                addRow(sortedPlacment[1]);
                addRow(sortedPlacment[2]);
                console.log('Grupa B: ', sortedPlacment);
        }
        //Obrada plansmana za grupu C
        if ( i < combinationsC.length ) {
            const Team9 =GroupC[0];
            const Team10 =GroupC[1];
            const Team11 =GroupC[2];
            const Team12 =GroupC[3];

            const placement = [
                [Team9.Team, Team9.points, Team9.wins, Team9.losses, Team9.basketScored, Team9.basketObtained, Team9.basketDifference],
                [Team10.Team, Team10.points, Team10.wins, Team10.losses, Team10.basketScored, Team10.basketObtained, Team10.basketDifference],
                [Team11.Team, Team11.points, Team11.wins, Team11.losses, Team11.basketScored, Team11.basketObtained, Team11.basketDifference],
                [Team12.Team, Team12.points, Team12.wins, Team12.losses, Team12.basketScored, Team12.basketObtained, Team12.basketDifference] ];
                
                const sortedPlacment = sortPlacment(placement);
                addRow(sortedPlacment[0]);
                addRow(sortedPlacment[1]);
                addRow(sortedPlacment[2]);
                console.log('Grupa C: ', sortedPlacment);
                console.log();
        }  
         console.log("Sesiri: ");  
        //Ispis sesira
        const sortedHat = sortPlacment(hat);
        //console.log(sortedHat);

          HatD = sortedHat[0] + " i " + sortedHat[1];
          HatE = sortedHat[2] + " i " + sortedHat[3];
          HatF = sortedHat[3] + " i " + sortedHat[4];
          HatG = sortedHat[5] + " i " + sortedHat[6];
           console.log(`Sesir D: 
            ${HatD}`);
           console.log(`Sesir E: 
            ${HatE}`);
           console.log(`Sesir F: 
            ${HatF}`);
           console.log(`Sesir G: 
            ${HatG}`);

           console.log("Eliminaciona faza:...");
           
  } 
}


// Funkcija koja pravi kombinacije timova unutar JEDNE grupe pa prelazi u drugu
function getCombinations(teams) {
    let combinations = [];
    for (let i = 0; i < teams.length; i++) {
        for (let j = i + 1; j < teams.length; j++) {
            combinations.push([teams[i], teams[j]]);
        }
    }
    while(combinations.length > 0) {
        const first = combinations.shift();
        const last = combinations.pop();

        Simulation(first);
        Simulation(last); //treba ispraviti da prelazi u drugu grupu u ovom momentu
        console.log('----');

    } if (combinations.length == 0) { //brojac kola 
        global.RoundNumb++;
        console.log(`Grupna faza- Kraj kola ${global.RoundNumb}`);
        console.log('----');
    }
    return (
        function Round (getCombinations) {
            console.log('fajront')
        }
    ); 
}

//Omogucava rad sa grupama
LoadTeams().then(teams => {

    const GroupA = teams.A;
    const GroupB = teams.B;
    const GroupC = teams.C;
 
    processGroups(GroupA, GroupB, GroupC);
});  

