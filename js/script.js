const arrayakanmale = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];

const arrayakanfemale = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

function getDate() {

    let dateOutput = document.getElementById("DOB").value;
    console.log(dateOutput);

    let male = document.getElementById("male");

    let female = document.getElementById("female");


    if (dateOutput == "") {
        alert("PLEASE ENTER A VALID DATE")

    } else if (male.checked == false && female.checked == false) {
        alert("PLEASE SELECT A GENDER")

    }

    date = new Date(dateOutput);
    console.log(date);



    CC = date.getFullYear();
    CC = CC.toString().substr(0, 2);
    console.log(CC);


    YY = date.getFullYear();
    YY = YY.toString().substr(2, 4);
    console.log(YY);


    MM = date.getMonth();
    console.log(MM);


    DD = date.getDate();
    console.log(DD);


    d = date.getDay();
    let dd = Math.round(
        (((CC / 4) - 2 * CC - 1) + ((5 * YY / 4)) + ((26 * (MM + 1) / 10)) + DD) % 7
    );
    console.log(d);

    return d;
}
function validateForm() {
    getDate();
    if (male.checked) {
        console.log(arrayakanmale[d]);
        document.getElementById("DISPLAY").innerHTML = `Your Akan Name is ` + `<span>` + arrayakanmale[d] + `</span>` + '<br>' + "IT MEANS YOU WERE  BORN ON " + date.toLocaleString('en-us', { weekday: 'long' });
    }
    else if (female.checked) {
        console.log(arrayakanfemale[d]);
        document.getElementById("DISPLAY").innerHTML = `Your Akan Name is ` + `<span>` + arrayakanfemale[d] + `</span>` + `<br>` + `IT MEANS YOU WERE BORN ON ` + date.toLocaleString('en-us', { weekday: 'long' });
    }
}


function onSubmit() {
    validateForm();

}
