describe('score_to_grade_spec', function() {

  var data1 = 49;
  var data2 = 60;
  var data3 = 77;
  var data4 = 89;
  var data5 = 99;
  var data6 = "32sada";
  var data7 = 101;

  it('input < 60  and input >= 0 return  D', function() {
    var result = score_to_grade(data1);
    expect(result).toEqual("D");
  });

  it('input < 70 return C', function() {
    var result = score_to_grade(data2);
    expect(result).toEqual("C");
  });

  it('input < 80 return B', function() {
    var result = score_to_grade(data3);
    expect(result).toEqual("B");
  });

  it('input < 90 return A', function() {
    var result = score_to_grade(data4);
    expect(result).toEqual("A");
  });

  it('input < 100 return S', function() {
    var result = score_to_grade(data5);
    expect(result).toEqual("S");
  });

  it('input String return invalid input', function() {
    expect(function(){ score_to_grade(data6); }).toThrow(new Error("invalid input"));
  });

  it('input incorrect number return invalid input', function() {
    expect(function(){ score_to_grade(data7); }).toThrow(new Error("invalid input"));
  });

});
