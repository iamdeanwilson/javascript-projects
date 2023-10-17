//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.

class CrewCandidate {
    constructor(name, mass, scores){
      this.name = name;
      this.mass = mass;
      this.scores = scores
    }
   
    addScore(newScore) {
      this.scores.push(newScore);
    }
   
    average(){
      let averageScore = 0;
      //add up entries of this.scores and divide by number of entries
      for(let i=0 ; i < this.scores.length ; i++){
      averageScore += (this.scores[i] / this.scores.length);
      }
      averageScore = Math.ceil(averageScore*10)/10;
      return averageScore;
    }
   
    status(){
      let candidateStatus;
      if (this.average() >= 90){
        candidateStatus = 'Accepted';
      };
      if (this.average() < 90){
        candidateStatus = 'Reserve';
      };
      if (this.average() < 80){
        candidateStatus = 'Probationary';
      };    
      if (this.average() < 70){
      candidateStatus = 'Rejected';
      };
      return `${this.name} earned an average test score of ${this.average()}% and has a status of ${candidateStatus}.`
    }
  }
  
  let bubbaBear = new CrewCandidate('Bubba Bear', 135, [88, 85, 90]);
  
  bubbaBear.addScore(83);
  
  
  let merryMaltese = new CrewCandidate('Merry Maltese', 1.5, [93, 88, 97]);
  
  let gladGator = new CrewCandidate('Glad Gator', 225, [75, 78, 62]);
  
//   gladGator.addScore(100);
//   gladGator.addScore(100); // <achieves 'reserve' after second score of 100
//   gladGator.addScore(100);
//   gladGator.addScore(100);
//   gladGator.addScore(100);
//   gladGator.addScore(100); // achieves 'accepted' after sixth score of 100
  
//console.log(gladGator.status());


// while (gladGator.average() < 80) {
//     gladGator.addScore(100);
// }

while (gladGator.average() < 90) {
    gladGator.addScore(100);
}


  //console.log(bubbaBear);
  //console.log(merryMaltese);
  //console.log(gladGator);
  
  //console.log(merryMaltese.average());
  
  //console.log(bubbaBear.status());
  //console.log(merryMaltese.status());
  console.log(gladGator.status());

//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.



//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.