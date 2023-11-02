// Write your JavaScript code here.
window.addEventListener("load", function() {

takeoff.addEventListener('click', event => {
    let answer = window.confirm('Confirm that the shuttle is ready for takeoff.');
    if (answer === true){
        flightStatus.innerHTML = 'Shuttle in flight.';
        spaceShuttleHeight.innerHTML = Number(Number(spaceShuttleHeight.innerHTML)+10000);
        shuttleBackground.style.backgroundColor = 'blue'
    }
 });

 landing.addEventListener('click', event => {
        window.alert('The shuttle is landing. Landing gear engaged.');
        flightStatus.innerHTML = 'The shuttle has landed.';
        spaceShuttleHeight.innerHTML = 0;
        shuttleBackground.style.backgroundColor = ''
 });

 missionAbort.addEventListener('click', event => {
    let answer = window.confirm('Confirm that you want to abort the mission.');
    if (answer === true){
        flightStatus.innerHTML = 'Mission aborted.';
        spaceShuttleHeight.innerHTML = 0;
        shuttleBackground.style.backgroundColor = ''
    }
 });
 
 up.addEventListener('click', event => {
    rocket.style.position.top =  (rocket.style.position.top + parseInt('10px'));
    spaceShuttleHeight.innerHTML = Number(Number(spaceShuttleHeight.innerHTML)+10000);
 });

 down.addEventListener('click', event => {
    rocket.style.position.top =  (rocket.style.position.top - parseInt('10px'));
    spaceShuttleHeight.innerHTML = Number(Number(spaceShuttleHeight.innerHTML)-10000);
 });

 right.addEventListener('click', event => {
    rocket.style.position =  (rocket.style.position.right + parseInt('10px'));
 });

 left.addEventListener('click', event => {
    rocket.style.position =  (rocket.style.position.left - parseInt('10px'));
 });

});









// Remember to pay attention to page loading!
