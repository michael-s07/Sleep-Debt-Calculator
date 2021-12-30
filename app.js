function getSleepHours(day){
    if (day === 'monday'){
      return 8;
    }else if(day ==='tuesday'){
      return 6 ;
    }else if(day ==='wednesday'){
      return 7;
    }else if(day ==='thursday'){
      return 8;
    }else if(day === 'friday'){
      return 5;
    }else if(day === 'saturday'){
      return 6;
    }else if (day === 'sunday'){
      return 9;
    }
  }
  
  console.log(getSleepHours('sunday'))
  console.log(getSleepHours('wednesday'))
  console.log(getSleepHours('thursday'))
  
  function getActualSleepHours(){
    return getSleepHours('monday')+getSleepHours('tuesday')+getSleepHours('wednesday')+getSleepHours('thursday')+getSleepHours('friday')+getSleepHours('saturday')+getSleepHours('sunday')
  }
  
  function getIdealSleepHours(){
    let idealHours = 8;
    return idealHours * 7
  }
  
  console.log(getActualSleepHours())
  
  function calculateSleepDebt(){
    let actualSleepHours = getActualSleepHours()
    let idealSleepHours = getIdealSleepHours()
    if (actualSleepHours === idealSleepHours){
      console.log("You had a perfect amount Sleep")
    }else if (actualSleepHours > idealSleepHours){
      console.log("You had more sleep than needed")
    }else{
      console.log("You should get some rest")
    }
  }
  
  console.log(calculateSleepDebt())