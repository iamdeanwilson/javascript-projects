//TODO: Add Your Code Below
window.addEventListener("load", function(){
    this.fetch("https://handlers.education.launchcode.org/static/astronauts.json")
    .then(function(response){
        response.json().then(function(json) {
            const astronautData = json;
            let astronautContainer = document.getElementById("container");
            let hoursInSpaceArray =[];
            for (let i = 0 ; i < astronautData.length ; i++){
                hoursInSpaceArray.push(astronautData[i].hoursInSpace);
            }
            hoursInSpaceArray.sort(function(a, b){return b-a});
            let astronautArray = [];
            for (let i = 0 ; i < astronautData.length ; i++){
                console.log(`astronautData[i].hoursInSpace is ${astronautData[i].hoursInSpace}`)
                console.log(`hoursInSpaceArray[i] is ${hoursInSpaceArray[i]}`)
                if (astronautData[i].hoursInSpace === hoursInSpaceArray[i]){
                    if (astronautData[i].active === true){
                            astronautArray.push(`
                            <div class="astronaut">
                            <div class="bio">
                                <h3>${astronautData[i].firstName} ${astronautData[i].lastName}</h3>
                                <ul>
                                <li>Hours in space: ${astronautData[i].hoursInSpace}</li>
                                <li style="color:green">Active: ${astronautData[i].active}</li>
                                <li>Skills: ${astronautData[i].skills}</li>
                                </ul>
                            </div>
                            <img class="avatar" src="${astronautData[i].picture}">
                            </div>
                            `)
                        }
                    } if (astronautData[i].active === false){
                    astronautArray.push(`
                        <div class="astronaut">
                        <div class="bio">
                            <h3>${astronautData[i].firstName} ${astronautData[i].lastName}</h3>
                            <ul>
                            <li>Hours in space: ${astronautData[i].hoursInSpace}</li>
                            <li>Active: ${astronautData[i].active}</li>
                            <li>Skills: ${astronautData[i].skills}</li>
                            </ul>
                        </div>
                        <img class="avatar" src="${astronautData[i].picture}">
                        </div>
                        `)
                     }
                    
            }
            astronautContainer.innerHTML = astronautArray.join("");
        });
     });
     
});
