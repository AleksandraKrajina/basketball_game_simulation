export default function sortPlacment(matrix) {
    const sortedPlacment = [...matrix].sort((a, b) =>  {
            if (a[1] === b[1]) {
                return b[6] - a[6]; //sortira po kosu razlike
            } 
            return b[1] - a[1]; //sortira po prvoj vrednosti u opadajucem
            
            });

    return sortedPlacment;
}
