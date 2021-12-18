let object = getData();


// initOnLoad();

// TODO

function initOnLoad() {
    document.getElementById("aboutmeSaved").innerHTML = object.JaboutMe;
    document.getElementById("nameSaved").innerHTML = object.Jname;
    document.getElementById("nameShown").innerHTML = object.Jname;
    document.getElementById("birthdaySaved").innerHTML = object.JbDay + "." + object.JbMonth + "." + object.JbYear;
    ageCalculcator(object.JbDay, object.JbMonth, object.JbYear);
    document.getElementById("pobSaved").innerHTML = object.JplaceOfBirth;
    document.getElementById("nationSaved").innerHTML = object.Jnationality;
}



let user = getUser();

// function initialiseResume(){
//     console.log(user.getUserData())
//     let userData = Object.keys(user);
//     userData.forEach(filterData);
//     console.log(userData);
//     userData.forEach(element => filterEverything(element))
// }
// initialiseResume();

// function filterData(item, index){
//     // console.log(item);
//     let dataType = item;
//     // console.log(item)
//     // console.log(user.dataType);
// }

// function filterEverything(data){
//     // console.log(data);
//     setDataType(data);
//     // console.log(user.data);
//     // console.log(data);
// }

// function setDataType(data){
//     var dataType = data;
//     console.log(dataType);
//     let ttt = user.dataType;
//     console.log(ttt);
// }

// console.log(getUserData(user1));







// initModal();

function initModal() {
    var inputName = document.getElementById("aboutmeModal");
    inputName.value = document.getElementById("aboutmeSaved").innerHTML;

    var inputName = document.getElementById("nameModal");
    inputName.value = document.getElementById("nameSaved").innerHTML;

    var day = document.getElementById("bDayModal");
    day.value = object.JbDay;

    var month = document.getElementById("bMonthModal");
    month.value = object.JbMonth;

    var year = document.getElementById("bYearModal");
    year.value = object.JbYear;

    var inputName = document.getElementById("pobModal");
    inputName.value = document.getElementById("pobSaved").innerHTML;

    var inputName = document.getElementById("nationModal");
    inputName.value = document.getElementById("nationSaved").innerHTML;
}


function addDate(dayParam, monthParam, yearParam) {
    if ((monthParam == 2 || monthParam == 4 || monthParam == 6 || monthParam == 9 || monthParam == 11) && dayParam == 31) {
        invalid();
        revertToLastSaved();

    } else if ((monthParam == 2 && yearParam % 4 != 0 && dayParam > 28)) {
        invalid();
        revertToLastSaved();
    }

    else if ((monthParam == 2 && dayNew == 30)) {
        invalid();
        revertToLastSaved();
    } else {
        document.getElementById("birthdaySaved").innerHTML = dayParam + "." + monthParam + "." + yearParam;
    }
}

    var today = new Date();
    var yy = today.getFullYear();
    var mm = today.getMonth() + 1;
    var dd = today.getDay() + 5;

function ageCalculcator(day, month, year) {

    var dyy = yy + " " + mm + " " + dd;
    console.log(dyy);

    var yearDifference = yy - year;
    if (mm - month > 0) {
        document.getElementById("age").innerHTML = yearDifference;
        // console.log(yearDifference);
    } else if (mm - month == 0 && dd - day == 0) {
        document.getElementById("age").innerHTML = yearDifference;
    } else {
        document.getElementById("age").innerHTML = yearDifference - 1;
    }
}


function revertToLastSaved() {
    var day = document.getElementById("bDayModal");
    day.value = object.JbDay;

    var month = document.getElementById("bMonthModal");
    month.value = object.JbMonth;

    var year = document.getElementById("bYearModal");
    year.value = object.JbYear;
}

function invalid() {
    alert("Invalid Day!!!");
}




function populateArea() {
    checkHeadlineValuesAddInResume();
    checkInputValuesAddInResume();
}


function checkHeadlineValuesAddInResume() {
    const listedHeadlineValues = [];

    $("#newHeadlineType").children().each(function (child) {
        listedHeadlineValues.push(this.value);
    });

    if (listedHeadlineValues.includes("")) {
        alert("ayoL");
    } else {
        $("#newHeadlineType").children().each(function (child) {

            addHeadlineInResume(this);

        })

    }

}


function addHeadlineInResume(headline) {
    let headlineValue = headline.value;
    let divHeadline = ' <div class="bold pb-2">' + headlineValue + '</div>'
    $("#populateHeadlines").append(divHeadline);


}


function checkInputValuesAddInResume() {
    const listedInputValues = [];

    $("#newInputType").children().each(function (child) {
        listedInputValues.push(this.value);
    });

    if (listedInputValues.includes("")) {
        alert("ayoL");
    } else {
        $("#newInputType").children().each(function (child) {

            addInputInResume(this);

        })

    }

}

function addInputInResume(inp) {


    let inpValue = inp.value;
    let divInput = ' <div class="pb-2">' + inpValue + '</div>'
    $("#populateInput").append(divInput);


}




//ADDS AREA FOR FORM 

var j = 1;

function addFormArea() {

    // HTML OF FORM DIV 
    addFormDiv();

    // HTML OF ALL INPUT AND '+' BUTTON
    addAllInput();

    // ADDING 4 ELEMENTS IN THE BEGINNING
    addFourInputs();

    // appendResume();

    j++;
}



function addTypingArea() {
    addFormDiv();

    addInputArea();
    j++;
}

function addFormDiv() {
    let formDiv = '<div id="form' + j + '" class="form"><button type="button" class="btn-close" onclick="deleteFormArea(' + j + ')"></button></div'
    $("#formArea").append(formDiv);
}

function addInputArea() {
    let currentFormID = "#form" + j;
    let titleInput = '<div class="d-flex justify-content-center"><input type="text" placeholder="Title..." id="titleInput' + j + '" class="ta-c bold col-6 mb-2"></div>'
    $(currentFormID).append(titleInput);
    $(currentFormID).append('<div class="d-flex justify-content-center"><textarea class="col-11 mx-auto mb-3" style="resize: none;" rows="4" type="text" id="textArea' + j + '"></textarea></div>');
}



function addAllInput() {
    let currentFormID = "#form" + j;
    let titleInput = '<div class="d-flex justify-content-center"><input type="text" placeholder="Title..." id="titleInput' + j + '" class="ta-c bold col-6 mb-2"></div>'
    $(currentFormID).append(titleInput);
    $(currentFormID).append('<div class="row pb-1"><div class="col-4 mx-auto"><div id="newHeadlineType' + j + '"></div></div><div class="col-4 mx-auto"><div id="newInputType' + j + '"></div></div><div class="col-1 mx-auto"><div id="newDeleteType' + j + '"></div></div></div>');
    let addButton = '<button class="addInputs btn btn-primary" type="button" onclick="addFormBullet(' + j + ')"><i class="fas fa-plus"></i></button>'
    $(currentFormID).append(addButton);
}

function addFourInputs() {
    for (let index = 0; index < 4; index++) {
        addFormBullet(j);
    }
}




// ADDS FORM INPUTS

var l = 1;

function addFormBullet(param) {
    var inputBullet = '<input type="text" class="my-1" placeholder="Text..." id="newInput' + l + '">'
    var headlineBullet = '<input type="text" placeholder="Headline:" id="newHeadline' + l + '" class="bold my-1">';
    var deleteBullet = '<button id="delete' + l + '"type="button" class="btn-close mb-3" onclick="deleteInput(' + l + ')"></button>';
    l++;

    var newInputTypeForm = '#newInputType' + param;
    var newHeadlineTypeForm = '#newHeadlineType' + param;
    var newDeleteTypeForm = '#newDeleteType' + param;

    $(newInputTypeForm).append(inputBullet);
    $(newHeadlineTypeForm).append(headlineBullet);
    $(newDeleteTypeForm).append(deleteBullet);
}



//DELETING INPUT BOX
function deleteInput(param) {

    var deleteLastButtonID = "delete" + param;
    var deleteLastInputID = "newInput" + param;
    var deleteLastHeadlineID = "newHeadline" + param;

    var LastButtonL = document.getElementById(deleteLastButtonID);
    var LastInputL = document.getElementById(deleteLastInputID);
    var LastHeadlineL = document.getElementById(deleteLastHeadlineID);

    wipeData(LastButtonL, LastInputL, LastHeadlineL);
}


function wipeData(button, input, head) {
    button.remove();
    input.remove();
    head.remove();
}



function deleteFormArea(param) {
    let formAreaID = "#form" + param;
    $(formAreaID).remove();
}

///SUMBIT////// AKHIRANNNN////


// 1. Create New Resume 
function checkEmptiness() {

}


function saveResume() {
    makeResume();
    getEachChildInForm();
}



function makeResume(){
    if ($('#resume').is(':empty')) {
        var resumeHtml = '<div id="resumeInfo"></div>'
        $('#resume').append(resumeHtml);
        
    } else {
        $('#resumeInfo').remove();
        var resumeHtml = '<div id="resumeInfo"></div>'
        $('#resume').append(resumeHtml);
    }
}



// 2. GET EACH CHILD OF FORMAREA
var s = 1;
function getEachChildInForm() {
    let majorList = [];
    $("#formArea").children().each(function (child) {
        getIDofElements(this.id, s, majorList);
    })

}
let titleOfSection = "";

// // 3. GET ELEMENTTYPE INPUT FROM CHILDREN
function getIDofElements(formID, globalVar, majorList) {
    let listOfHeadlines = [];
    let listOfInputs = [];
    let formList = [];


    makeFilledForm(s);
    console.log(formID);


    $('#' + formID + " input").each(function (child) {
        checkWhichInputType(this.id, globalVar, listOfHeadlines, listOfInputs);
    })

    // Handle Lists

    console.log(listOfHeadlines);
    console.log(listOfInputs);
    var lengthOfBoth = listOfInputs.length;
    console.log(lengthOfBoth)


    let titleOfThisSection = getTitleOfSection();
    formList.push(titleOfThisSection);

    for (let index = 0; index < lengthOfBoth; index++) {

        var headlineInObject = listOfHeadlines.shift();
        formList.push(headlineInObject);

        var inputInObject = listOfInputs.shift();
        formList.push(inputInObject);
    }

    addEverythingIntomajorList(formList, majorList);

    $('#' + formID + " textarea").each(function (child) {
        var textAreaId = this.id;
        var textAreaValue = document.getElementById(textAreaId).value;
        majorList.push("tx%" + textAreaValue);
        console.log(majorList);
        makeTextArea(textAreaValue, s);
    });

    s++;
}

function makeTextArea(param, s){
    $("#everythingInForm"+s).append(param);

}



function addEverythingIntomajorList(formList, majorList) {

    var lengthOfFormList = formList.length;

    for (let index = 0; index < lengthOfFormList; index++) {
        var dataInMajorList = formList.shift();
        majorList.push(dataInMajorList);
    }
    console.log(majorList)

}


function makeFilledForm(variableS){
    $('#resumeInfo').append('<div id="filledForm' + variableS + '" class="col-7 mx-auto"><div id="populateTitle' + variableS + '"></div> <div class="row pb-5" id="everythingInForm'+ variableS+'"><div class="col-6" id="populateHeadlines' + variableS + '"></div><div class="col-6"  id="populateInput' + variableS + '"></div></div></div>');
}




// // 4. CHECK WHICH INPUT TYPE

function checkWhichInputType(idOfInputs, globalVar, listOfHeadlines, listOfInputs) {
    var slicedID = idOfInputs.slice(0, 7);
    let value = document.getElementById(idOfInputs).value;


    if (slicedID == "newHead") {
        addHeadline(value, globalVar, listOfHeadlines);


    } else if (slicedID == "newInpu") {
        addInput(value, globalVar, listOfInputs);
    } else if (slicedID == "titleIn") {
        addTitle(value, globalVar);
    }
    //  else if(){

    // }
}


// // 5. ADD IN RESUME BSP: HEADLINE
function addHeadline(param, globalVar, listOfHeadlines) {

    let headlineValue = param;
    let divHeadline = ' <div class="bold pb-2">' + headlineValue + ":" + '</div>'
    let headLineFinal = "#populateHeadlines" + globalVar;

    let dataInHeadlineList = "hl%" + headlineValue;
    listOfHeadlines.push(dataInHeadlineList);

    $(headLineFinal).append(divHeadline);

}

function addHeadlineInFilledForm(param, globalVar) {
    let headlineValue = param;
    let divHeadline = ' <div class="bold pb-2">' + headlineValue + ":" + '</div>'
    let headLineFinal = "#populateHeadlines" + globalVar;
    let dataInHeadlineList = "hl%" + headlineValue;
    $(headLineFinal).append(divHeadline);
    console.log("jv6uhaewizjf;iowjes")

}




function addInput(param, globalVar, listOfInputs) {
    let inputValue = param;
    let divInput = ' <div class="pb-2">' + inputValue + '</div>'
    let inputFinal = "#populateInput" + globalVar;

    let dataInInputList = "in%" + inputValue;
    listOfInputs.push(dataInInputList);


    $(inputFinal).append(divInput);

}

function addInputInFilledForm(param, globalVar) {
    let inputValue = param;
    let divInput = ' <div class="pb-2">' + inputValue + '</div>'
    let inputFinal = "#populateInput" + globalVar;

    let dataInInputList = "in%" + inputValue;


    $(inputFinal).append(divInput);

}



function addTitle(param, globalVar) {
    let titleValue = param;
    let divTitle = '<h1 class="ta-c mb-1">' + titleValue + '</h1>'
    console.log(divTitle);
    let titleFinal = "#populateTitle" + globalVar;
    $(titleFinal).append(divTitle);

    titleOfSection = "tl%" + titleValue;
}


function getTitleOfSection() {
    return titleOfSection;
}



// GET USER DATA

// var un = "un%"
// var tl = "tl%";
// var tx = "tx%";
// var hl = "hl%";
// var inp = "in%";
// var dt = "dt%";


let thisUser = initUser(user1);
makeResume();
var initVar = 0;
thisUser.forEach(element => filterEverything(element));




function filterEverything(element){
    var elementType = element.slice(0, 3);
    var slicedElement = element.slice(3);
    
    if(elementType == tl){
        initVar++;
        makeFilledForm(initVar);
        addTitle(slicedElement, initVar);

    } else if(elementType == tx){
        document.getElementById("everythingInForm"+ initVar).innerHTML ="";
        makeTextArea(slicedElement, initVar)

    } else if(elementType == hl){
        addHeadlineInFilledForm(slicedElement, initVar);
        console.log("Ayyy")
    } else if(elementType == inp){
        addInputInFilledForm(slicedElement, initVar);
    } else if(elementType == dt){
        // Set Date Area
    }

    console.log(elementType);
    console.log(slicedElement);
    // initVar++;
}



// addDates();


// function addDates(){
//     for (let index = 1; index < 32; index++) {
//         $("#bDayOptions").append('<option >'+index+'</option>');
        
//     }

//     for (let index = 1; index < 13; index++) {
//         $("#bMonthOptions").append('<option >'+index+'</option>');
        
//     }

//     for (let index = yy-14; index > 1940; index--) {
//         $("#bYearOptions").append('<option >'+index+'</option>');
        
//     }
    
// }



initForm()

function initForm(){

    $("#resumeInfo").children().each(function (child) {
        var filledFormID = this.id;
        $("#"+ filledFormID).children().each(function(child){
            var idOfVars = this.id;
            var sliceIDOfDivsInForm = idOfVars.slice(0,5);

            if(sliceIDOfDivsInForm == "every"){
                $("#"+ idOfVars).children().each(function(child){
                    // if headline create headline + input
                    // else create text area


                    var tuyu = document.getElementById(this.id).innerHTML;
                    console.log(tuyu);
                })
            } else{
                //populate titles
            }

            // console.log(sliceIDOfDivsInForm+ "HELLO" + idOfVars )
        })
    });

}




function checkBackend(){
    $.ajax({
        url: "http://localhost:8080/Try/getUser",
        type: 'GET',
        dataType: 'application/json', // added data type
        success: function(res) {
            console.log(res);
            alert(res);
        }
    });
}



var basicUserData = {}

function createResume(){
    addDataToUserJson();
    var json = JSON.stringify(basicUserData);


    //Should Check first if this User Exists


    $.ajax({
        url: "http://localhost:8080/Try/createUser",
        type: 'POST',
        dataType: 'application/json', // added data type
        data: {
            JsonUser: json 
        },
        success: function(res) {
            console.log(res);
            alert(res);
        }
    });



    window.location.href = 'index.html';


    var userID = basicUserData.userID;
    var nameOfUser = basicUserData.nameOfUser;
    var email = basicUserData.email;
    var phoneNumber = basicUserData.phoneNumber;
    var address = basicUserData.address;


    console.log(userID);
}


function loadIntoResume(userID, nameOfUser, email, phoneNumber, address){
    document.getElementById("nameShown").innerHTML = nameOfUser;
    document.getElementById("emailShown").innerHTML = email;
    document.getElementById("phoneNumberShown").innerHTML = phoneNumber
    document.getElementById("addressShown").innerHTML = address;
}


// TODO RENAME CODE BETTER: getUserAndPopulate;
// TODO Change from error to success

function getUserFromDataBase(userName){
    // userName = "Kuti01"


    $.ajax({
        url: "http://localhost:8080/Try/getUser",
        type: 'GET',
        dataType: 'application/json', // added data type
        data: {
            JsonUser: userName 
        },
        success: function(data) {
            // console.log(data);
            // alert();
        },
        error: function(data){
            // console.log(data.responseText);
            let objHere = data.responseText ;
            let jsonObj = JSON.parse(objHere);

            var userID = jsonObj.userID;
            var nameOfUser = jsonObj.nameOfUser;
            var email = jsonObj.email;
            var phoneNumber = jsonObj.phoneNumber;
            var address = jsonObj.address;

            console.log(jsonObj);
            console.log(userID + "!!!" + nameOfUser + "!!!" + email + "!!!" + phoneNumber + "!!!" + address)

            initBasicData(nameOfUser, email, phoneNumber, address);


            // console.log("ERROR");
        }
    });

}



// TODO basicUserData, global Variables NO!!!!
function addDataToUserJson(){
    basicUserData["userID"] = document.getElementById("userID").value;
    basicUserData["nameOfUser"] = document.getElementById("nameOfUser").value;
    basicUserData["email"] = document.getElementById("email").value;
    basicUserData["phoneNumber"] = document.getElementById("phoneNumber").value;
    basicUserData["address"] = document.getElementById("address").value;
    // basicUserData["pic"] = document.getElementById("phoneNumber").value;
    //ADD PICTURE
    // var TLL = document.getElementById("picture").value;
    // console.log(TLL);
    // var M = TLL.slice(12);
    // console.log(M);
    // var folderPath = "/Users/kuti/Desktop/Profile Photos/"
    // var picturePath = M 
}



function triggerInit(){
    getUserFromDataBase(basicUserData.userID);
}





function addCreationForm(){
    removeSignIn();
}



function removeSignIn(){
    document.getElementById("basicForm").innerHTML = "";
    $("#basicForm").append(registerHTML);
    $("#hereComesFooter").append(footerCreateHTML);

}

let registerHTML = '<button type="button" class="backButton" onclick="bringBackSignIn()"><i class="fas fa-arrow-left"></i></button><h3 class="ta-c">Pick a Username!</h3><div class="row pb-1">' +
'<div class="col-9 mx-auto"><label class="col-5 bold" for="userID">Username:</label>' +
'<input type="text" class="my-1" placeholder="JohnDoe1" id="userID"></div></div>'+
'<div class="row pb-1"><h4 class="ta-c">'+"Let's" + ' create your Profile</h4>'+
'<div class="col-9 mx-auto"><label class="col-5 bold" for="nameOfUser">Name:</label><input type="text" class="my-1" placeholder="John Doe" id="nameOfUser"><label class="col-5 bold" for="email">Email:</label><input type="text" class="my-1" placeholder="Johndoe@email.com" id="email"><label class="col-5 bold" for="phoneNumber">Phone Number:</label><input type="text"' +
'class="my-1" placeholder="+20123457875" id="phoneNumber"><label class="col-5 bold" for="address">Address:</label><input type="text" class="my-1" placeholder="879 W. Brook Road Glen Cove, NY 11542"id="address"><label class="col-5 bold " for="lll">Picture:</label><label id="lll" for="picture" class="buttonStyle my-1"accept="image/png, image/jpeg">Choose Picture</label><input type="file" style="display: none;" class="hidden" id="picture"></div></div>';


let footerCreateHTML = '<div class="modal-footer"><button type="button" class="btn btn-primary" onclick="createResume()">Create Resume</button></div>'


function bringBackSignIn(){
    document.getElementById("basicForm").innerHTML = "";
    $("#basicForm").append(signInHTML);
    document.getElementById("hereComesFooter").innerHTML = "";
}


let signInHTML = '<h3 class="ta-c">Hey! Did you already register?</h3><h4 class="ta-c">If so, please log in!</h4><div class="row pb-1"><div class="col-9 mx-auto"><label class="col-5 bold" for="userID">Username:</label><input type="text" class="my-1" placeholder="JohnDoe1" id="userID"></div><div class="col-9 mx-auto"><label class="col-5 bold" for="userID">Password:'+
'</label><input></div><div class="col-9 mx-auto ta-c py-3"><button type="button" class="btn btn-primary" onclick="signIn()">Sign In</button></div></div><div class="row pb-1"><h3 class="ta-c">Or Maybe ' +"you're new to this</h3>"+'<h4 class="ta-c">'+"Let's create your"+'Profile!</h4><div class="col-9 mx-auto ta-c py-3"><button class="btn btn-primary btn-floating" onclick="addCreationForm()">'+
'<i class="fas fa-plus"></i></button></div></div>'


function signIn(){
    let userID = document.getElementById("userID").value;

    checkUser(userID);

    // getUserFromDataBase(userID);

    // checkUser();

    // $.ajax({
    //     url: "http://localhost:8080/Try/getUser",
    //     type: 'GET',
    //     dataType: 'application/json', // added data type
    //     data: {
    //         JsonUser: userName 
    //     },
    //     success: function(data) {
    //         // console.log(data);
    //         // alert();
    //     },
    //     error: function(data){
    //         // console.log(data.responseText);
    //         let objHere = data.responseText ;
    //         let jsonObj = JSON.parse(objHere);

    //         console.log(jsonObj.userID);



    //         // console.log("ERROR");
    //     }
    // });

}




function checkUser(signInUser){
    // signInUser = "John";

    // $.ajax({
    //     url: "http://localhost:8080/Try/checkUser",
    //     type: 'GET',
    //     dataType: 'application/json', // added data type
    //     data: {
    //         JsonUser: signInUser 
    //     },
    //     success: function(data) {
    //         // console.log(data);
    //         // alert();
    //     },
    //     error: function(data){
    //         // console.log(data.responseText);

    //         // let objHere = data.responseText ;
    //         // let jsonObj = JSON.parse(objHere);

    //         // console.log(jsonObj);



    //         // console.log("ERROR");
    //     }
    // });
    



    $.ajax({
        url: "http://localhost:8080/Try/checkUser",
        type: 'GET',
        dataType: 'application/json', // added data type
        data: {
            JsonUser: signInUser 
        },
        success: function(res) {
            // console.log(res);
            // alert(res);
        }, error: function(data){
            // let objHere = data.responseText ;
            // let jsonObj = JSON.parse(objHere);

            // console.log(jsonObj);
            
            if(data.responseText == "true"){
                // getUserFromDataBase(signInUser);
                window.location.href = "index.html?user=" + signInUser;


            } else{
                paintWrongInputsRed("userID")
                console.log(data)
                console.log(data.responseText)
            }
        
        
        }

    });



}

function initBasicData(nameOfUser, email, phoneNumber, address){
    document.getElementById("nameShown").innerHTML = nameOfUser;
    document.getElementById("emailShown").innerHTML = email;
    document.getElementById("phoneNumberShown").innerHTML = phoneNumber;
    document.getElementById("addressShown").innerHTML = address;


}


function paintWrongInputsRed(inputID){
    $("#" + inputID).css("border", "2px solid red;");


}