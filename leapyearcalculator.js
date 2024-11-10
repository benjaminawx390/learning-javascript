function isLeap(year) {

    // A empty result container to store strings for result.
    var result = " ";

    if (year % 4 ===0){
        if (year % 100 ===0){
            if (year % 400 ===0){
                result = "is leap";
            } else {
                result = "not leap";
            }
        } else {
            result = "is leap";
        }
    }
        else { 
            result = "not leap";
        }

        return result;
}

console.log(isLeap(2000));

//Use a flow chart for the IF statements to map out if unsure to get to the IF conditional ground.