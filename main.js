function myFunction()
 {
    var x = document.getElementById("myNumber").value;
    const r=x%2;
    if(x<0)
    document.getElementById("demo").innerHTML = "Negative integer is neighter Odd nor Even";
    else if(r==0)
    document.getElementById("demo").innerHTML = "This is an Even number";
    else
    document.getElementById("demo").innerHTML = "This is an Odd number";
  }