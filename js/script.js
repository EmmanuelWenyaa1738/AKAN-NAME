function onSubmit() {
    console.log("success!");

    let Day = parseInt(document.getElementById("Day").value);
    let Month = parseInt(document.getElementById("Month").value);
    let Year =parseInt(document.getElementById("Year").value)

    let akanname = calculateAkanname(Day)
}

let weekArray = ["Sunday", "Kwasi", "Kwadwo", "Kwabena","Kwaku", "Yaw", "Kofi" ,"Kwame"]

 Kwadwo



function calculatAkanname(Day) {
    let akanname = ;
    console.log("BMI: " + bmi)
    if (bmi >= 30) {
        document.getElementById("output").innerHTML = "You are obese, consider taking a workout routine";
    }
    else if (bmi >= 25) {
        document.getElementById("output").innerHTML = "You are overweight, consider taking a workout routine";
    }
    else if (bmi >= 18.5) {
        document.getElementById("output").innerHTML = "You have a healthy BMI";
    }
    else {
        document.getElementById("output").innerHTML = "You underweight. Get on a healthy eating programme";
    }

    return bmi;
}