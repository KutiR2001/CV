let object = getData();


initOnLoad();

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

initModal();

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

function ageCalculcator(day, month, year) {
    var today = new Date();
    var yy = today.getFullYear();
    var mm = today.getMonth() + 1;
    var dd = today.getDay() + 5;
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


function addFormDiv(){
    let formDiv = '<div id="form' + j + '" class="form"><button type="button" class="btn-close" onclick="deleteFormArea('+j+')"></button></div'
    $("#formArea").append(formDiv);
}

function addAllInput(){
    let currentFormID = "#form" + j;
    let titleInput = '<div class="d-flex justify-content-center"><input type="text" placeholder="Title..." id="titleInput' + j + '" class="ta-c bold col-6 mb-2"></div>'
    $(currentFormID).append(titleInput);
    $(currentFormID).append('<div class="row pb-1"><div class="col-4 mx-auto"><div id="newHeadlineType' + j + '"></div></div><div class="col-4 mx-auto"><div id="newInputType' + j + '"></div></div><div class="col-1 mx-auto"><div id="newDeleteType' + j + '"></div></div></div>');
    let addButton = '<button type="button" onclick="addFormBullet(' + j + ')">ADD Input</button>'
    $(currentFormID).append(addButton);
}

function addFourInputs(){
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



function deleteFormArea(param){
    let formAreaID = "#form" + param;
    $(formAreaID).remove();
}

///SUMBIT////// AKHIRANNNN////


// 1. Create New Resume 
function checkEmptiness(){

}


function saveResume(){
        if( $('#resume').is(':empty') ){
            console.log('hhasd');
            var resumeHtml = '<div id="resumeInfo" class="col-10 col-sm-10 col-md-8 col-lg-8 mx-auto bg-primary mt-2 mt-sm-2 mt-md-0 b-rad-2 rela"></div>'
            $('#resume').append(resumeHtml);
            getEachChildInForm();
        }else{
            $('#resumeInfo').remove();
            console.log('hhasd');
            var resumeHtml = '<div id="resumeInfo" class="col-10 col-sm-10 col-md-8 col-lg-8 mx-auto bg-primary mt-2 mt-sm-2 mt-md-0 b-rad-2 rela">h</div>'
            $('#resume').append(resumeHtml);
            getEachChildInForm();
        }

}



// 2. GET EACH CHILD OF FORMAREA
var s = 1;
function getEachChildInForm(){
    $("#formArea").children().each(function (child) {
        
        getIDofElements(this.id, s);
    })

}


// // 3. GET ELEMENTTYPE INPUT FROM CHILDREN
function getIDofElements(formID, globalVar){

    // <div id="populateTitle' + f + '</div>
    


    
    $('#resumeInfo').append('<div id="filledForm' + s + '" class="col-7 mx-auto"><div id="populateTitle' + s + '"></div><div class="row pb-5"><div class="col-6"><div id="populateHeadlines' + s + '"></div></div><div class="col-6"><div id="populateInput' + s + '"></div></div></div></div>');
    console.log(formID);
    $('#' + formID + " input").each(function (child) {
        checkWhichInputType(this.id, globalVar);
    })
    s++;
}
// // 4. CHECK WHICH INPUT TYPE

function checkWhichInputType(idOfInputs, globalVar){
var slicedID = idOfInputs.slice(0, 7);


if (slicedID == "newHead") {
    addHeadline(idOfInputs, globalVar);

} else if (slicedID == "newInpu") {
    addInput(idOfInputs, globalVar);
} else {
    addTitle(idOfInputs, globalVar);
    
}
}


// // 5. ADD IN RESUME BSP: HEADLINE
function addHeadline(param, globalVar){

    let headlineValue = document.getElementById(param).value;
    let divHeadline = ' <div class="bold pb-2">' + headlineValue + ":"+ '</div>'
    let headLineFinal = "#populateHeadlines" + globalVar;
    
    $(headLineFinal).append(divHeadline);
    
}

function addInput(param, globalVar){
    let inputValue = document.getElementById(param).value;
    let divInput = ' <div class="pb-2">' + inputValue + '</div>'
    let inputFinal = "#populateInput" + globalVar;
    $(inputFinal).append(divInput);

}

function addTitle(param, globalVar){
    console.log('yessir');
    let titleValue = document.getElementById(param).value;
    let divTitle = '<h1 class="ta-c">' + titleValue + '</h1>'
    console.log(divTitle);
    let titleFinal = "#populateTitle" + globalVar;
    $(titleFinal).append(divTitle);
}
