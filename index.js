const form = document.querySelector("form")

form.addEventListener("submit", function(e){
    e.preventDefault();    //this is to stop from submiting the values to database or to url


    const height = parseInt(document.querySelector("#height").value)
    const weight = parseInt(document.querySelector("#weight").value)
    const result = document.querySelector("#result")
    const guide = document.querySelector("#guide")

    if(height===""||height<0|| isNaN(height)){
        result.innerHTML=`enter a valid height ${height}`;
    }
    else if (weight===""||weight<0|| isNaN(weight)) {
        result.innerHTML=`enter a valid weight ${weight}`;
    }
    else { 
       const bmi = (weight/((height*height)/10000)).toFixed(2) //tofixed(2) for 2 decimel val //
       //to show result
       result.innerHTML = `<span>${bmi}</span>`
       if(bmi<18.6){
        guide.innerHTML = "Underweight"
       }
       else if(bmi>=18.6 && bmi<=24.9){
        guide.innerHTML = "normal weight"
       }
       else if(bmi>24.9){
        guide.innerHTML = "Overweight"
       }
    }
})