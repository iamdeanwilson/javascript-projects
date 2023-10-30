function init () {
    const missionAbort = document.getElementById("abortMission");
    const button = document.getElementById("liftoffButton");
    const paragraph = document.getElementById("statusReport");

    // Put your code for the exercises here.
    liftoffButton.addEventListener('click', event => {
        statusReport.innerHTML = 'Houston! We have liftoff!';
     });

    abortMission.addEventListener('mouseover', event => {
        event.target.style.background = "red";
    });
    abortMission.addEventListener('mouseout', event => {
        event.target.style.background = "";
    });            

    abortMission.addEventListener('click', function {
        let answer = window.confirm("Are you sure you want to abort the mission?");
        if (answer === true){
            statusReport.innerHTML = 'Mission aborted! Space shuttle returning home';
        }
    });

    
}

window.addEventListener("load", init);
