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


function saveChanges() {
    var name = document.getElementById("aboutmeModal").value;
    document.getElementById("aboutmeSaved").innerHTML = name;

    var name = document.getElementById("nameModal").value;
    document.getElementById("nameSaved").innerHTML = name;
    document.getElementById("nameShown").innerHTML = name;

    var dayNew = document.getElementById("bDayModal").value;
    var monthNew = document.getElementById("bMonthModal").value;
    var yearNew = document.getElementById("bYearModal").value;

    addDate(dayNew, monthNew, yearNew);
    ageCalculcator(dayNew, monthNew, yearNew);

    var name = document.getElementById("pobModal").value;
    document.getElementById("pobSaved").innerHTML = name;

    var name = document.getElementById("nationModal").value;
    document.getElementById("nationSaved").innerHTML = name;

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




var i = 0;


function addBullet() {
    i += 1;
    var inputBullet = '<input type="text" id="newInput' + i + '">'
    var headlineBullet = '<input type="text" id="newHeadline' + i + '" class="bold">';
    var deleteBullet = '<button id="delete' + i + '"type="button" onclick="deleteInput(' + i + ')"> Delete </button>';


    $("#newInputType").append(inputBullet);
    $("#newHeadlineType").append(headlineBullet);
    $("#newDeleteType").append(deleteBullet);

    console.log("addB: " +i)
}



//DELETING INPUT BOX
function deleteInput(param) {

    var deleteLastButtonID = "delete" + param;
    var deleteLastInputID = "newInput" + param;
    var deleteLastHeadlineID = "newHeadline" + param;

    var LastButtonL = document.getElementById(deleteLastButtonID);
    var LastInputL = document.getElementById(deleteLastInputID);
    var LastHeadlineL = document.getElementById(deleteLastHeadlineID);

    
    console.log("delete: " +i) 

    wipeData(LastButtonL, LastInputL, LastHeadlineL);
    console.log("wipe: " +i) 


}


function wipeData(button, input, head) {

    button.remove();
    input.remove();
    head.remove();
    i--;
}



function changeOtherIDs(parameter) {
    if(parameter = i){
        //Do Nothing
    } else{
    var index = i - parameter + 1;
    var notIndex;


    while (index != 0) {
        var changeLastButtonID = "delete" + (parameter);
        var changeLastInputID = "newInput" + (parameter);
        var changeHeadlineID = "newHeadline" + (parameter);

        var paramPlusOne = parameter + 1;

        var whichButtonID = "delete" + (paramPlusOne);
        var whichInputID = "newInput" + (paramPlusOne);
        var whichHeadlineID = "newHeadline" + (paramPlusOne);

        var deleteInputType = "deleteInput(" + parameter + ")"

        document.getElementById(whichButtonID).setAttribute('onclick', deleteInputType);

        document.getElementById(whichButtonID).id = changeLastButtonID;

        document.getElementById(whichInputID).id = changeLastInputID;

        document.getElementById(whichHeadlineID).id = changeHeadlineID;


        index--;
        parameter++;
    }
    i--;
}

}



function submitOnChange() {
    $(function () {
        $('#toBeChanged1').addClass('bold');
        $("#formId input[type=text]")
            .each(function () {
                var idCHange = this.id;

                var valueChange = document.getElementById(idCHange).value;

                if (valueChange == null) {
                    alert("whhha");
                }; 

            });




    });



}




function populateArea() {
    checkHeadlineValuesAddInResume();
    checkInputValuesAddInResume();
}


function checkHeadlineValuesAddInResume(){
    const listedHeadlineValues = [];

    $("#newHeadlineType").children().each(function(child){
        listedHeadlineValues.push(this.value);
    });

    if(listedHeadlineValues.includes("")){
        alert("ayoL");
    } else{
        $("#newHeadlineType").children().each(function(child){

            addHeadlineInResume(this);
        
        })

    }

}



function addHeadlineInResume(headline){
    console.log(headline)
    let headlineValue = headline.value;
        let divHeadline = ' <div class="bold pb-2">'+ headlineValue+'</div>'
        $("#populateHeadlines").append(divHeadline);


}


function checkInputValuesAddInResume(){
    const listedInputValues = [];

    $("#newInputType").children().each(function(child){
        listedInputValues.push(this.value);
    });

    if(listedInputValues.includes("")){
        alert("ayoL");
    } else{
        $("#newInputType").children().each(function(child){

            addInputInResume(this);
        
        })

    }

}

function addInputInResume(inp){

    console.log(inp)
    let inpValue = inp.value;
        let divInput = ' <div class="pb-2">'+ inpValue+'</div>'
        $("#populateInput").append(divInput);


}


var j = 1;



function addFormArea(){

    let formDiv = '<div id="form'+ j+'" style="background-color: yellow;"></div'
    $("#formArea").append(formDiv);

    let currentFormID = "#form" +j;

    let titleInput = '<div class="d-flex justify-content-center"><input type="text" class="ta-c bold col-6"></div>'

    $(currentFormID).append(titleInput);

    $(currentFormID).append('<div class="row pb-1"><div class="col-5"><div id="newHeadlineType'+j+ '"></div></div><div class="col-5"><div id="newInputType'+j +'"></div></div><div class="col-1"><div id="newDeleteType'+j +'"></div></div></div>');

    // ADDING 4 ELEMENTS IN THE BEGINNING
    for (let index = 0; index < 4; index++) {
        addFormBullet(j);
        
    }

    let addButton = '<button type="button" onclick="addFormBullet('+j+')">ADD Forckjsdn,m</button>'
    $(currentFormID).append(addButton);

j++;
}

var l = 1;



function addFormBullet(param){
    var inputBullet = '<input type="text" id="newInput' + l + '">'
    var headlineBullet = '<input type="text" id="newHeadline' + l + '" class="bold">';
    var deleteBullet = '<button id="delete' + l + '"type="button" onclick="deleteInput(' + l + ')"> Delete </button>';
    l++;

    var newInputTypeForm = '#newInputType' + param;
    var newHeadlineTypeForm = '#newHeadlineType'+ param;
    var newDeleteTypeForm = '#newDeleteType' + param;

    $(newInputTypeForm).append(inputBullet);
    $(newHeadlineTypeForm).append(headlineBullet);
    $(newDeleteTypeForm).append(deleteBullet);
}


