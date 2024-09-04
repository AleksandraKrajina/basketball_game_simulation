
// Pomocna funkcija za rendom vrednost
function getRandomNumber() {
    return Math.floor(Math.random() * 100);
}

// Asynchrona funkcija koja procesutira prvi i poslednji red
export default async function processRows(matrix) {
    while (matrix.length > 1) {
        const firstRow = matrix.shift();  
        const lastRow = matrix.pop();     
        
        const randomForFirst = getRandomNumber()*3;
        const randomForLast = getRandomNumber()*3;
        
        // Dodaje rendom broj svakom timu
        firstRow + randomForFirst;
        lastRow + randomForLast;
        
        console.log(`${firstRow} - ${randomForFirst}, ${lastRow} - ${randomForLast}`);
        
        // Odredjuje koji Tim je postigao vise koseva
        await formNewMatrix(firstRow, lastRow);
    }

}
const newMatrix=[];
// Funkcija koja formira novu matricu (polufinale) izmedju pobednickih timova
function formNewMatrix(firstRow, lastRow) {
    return new Promise((resolve) => {
     
        if (firstRow[firstRow.length - 1] > lastRow[lastRow.length - 1]) {
            newMatrix.push(firstRow);
        } else {
            newMatrix.push(lastRow);
        } 
        resolve(newMatrix);
    });   
}
 
const matrix = [
    [ 'Srbija', 6, 3, 0, 543, 272, 271 ],
    [ 'Australija', 6, 3, 0, 358, 160, 198 ],
    [ 'Francuska', 6, 3, 0, 429, 309, 120 ],
    [ 'Kanada', 6, 2, 1, 300, 244, 56 ],
    [ 'Nemačka', 5, 2, 1, 456, 211, 245 ],
    [ 'Sjedinjene Države', 5, 2, 1, 473, 394, 79 ],
    [ 'Puerto Riko', 4, 1, 2, 338, 347, -9 ],
    [ 'Španija', 4, 1, 2, 156, 209, -53 ]
]
        // Pokrece funkciju 
        processRows(matrix).then(() => {
    
            console.log("Finale: I mesto i II mesto");
      
           while(newMatrix.length > 1){
               const firstRow = newMatrix.shift();  
               const lastRow = newMatrix.shift();     
       
               const randomForFirst = getRandomNumber();
               const randomForLast = getRandomNumber();
      
               if (randomForFirst < randomForLast){
                   lastRow + randomForLast;
                   console.log(randomForLast, lastRow);
           
               }else {
                   firstRow + randomForFirst;
                   console.log(randomForFirst, firstRow);
               }; 
          } 
      });


