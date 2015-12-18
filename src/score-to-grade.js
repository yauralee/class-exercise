function score_to_grade(input) {
  if(input < 60 && input >= 0)
    return "D";
  else if(input < 70 )
    return "C";
  else if(input < 80)
    return "B"
  else if( input < 90)
    return "A"
  else if(input < 100)
    return "S"
  else {
    throw new Error("invalid input");
  }
 }
