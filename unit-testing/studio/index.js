let launchcode = {
    organization: "nonprofit",
    executiveDirector: "Jeff",
    percentageCoolEmployees: 100,
    programsOffered: ["Web Development", "Data Analysis", "Liftoff"],
    launchOutput: function launchOutput(num){
        let output = ''
        let divisibleNums = [2,3,5];
        let responses = ['Launch', 'Code ', 'Rocks'];
        for (let i = 0 ; i < divisibleNums.length ; i++){
            if  (num % divisibleNums[i] === 0){
                output += responses[i];
            }
        }
        output = (output.trim() + '!');           
        if (output === '!'){
            output = "Rutabagas! That doesn't work.";
        }
        if (output === 'LaunchRocks!'){
            output = "Launch Rocks! (CRASH!!!!)";
        }        
        return output
        
        // OLD CODE, BEFORE REFACTORING
        
        // if  (num % 2 === 0 && num % 3 === 0 && num % 5 === 0){
        //     return 'LaunchCode Rocks!';
        // }  
        // if  (num % 2 === 0 && num % 3 === 0){
        //     return 'LaunchCode!';
        // }  
        // if  (num % 3 === 0 && num % 5 === 0){
        //     return 'Code Rocks!';
        // } 
        // if  (num % 2 === 0 && num % 5 === 0){
        //     return 'Launch Rocks! (CRASH!!!!)';
        // }         
        // if  (num % 2 === 0){
        //     return 'Launch!';
        // }
        // if  (num % 3 === 0){
        //     return 'Code!';
        // }
        // if  (num % 5 === 0){
        //     return 'Rocks!';
        // }

        //else return "Rutabagas! That doesn't work."
    }
}

module.exports = launchcode;