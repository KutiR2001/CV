//////// START TO BE USED EVERWHERE
function paintWrongInputsRed(inputID) {
    let getID = "#" + inputID;
    $(getID).css({ "border": "2px solid red", "border-radius": "2px" });
} ////// END TO BE USED EVERWHERE


//////////////////////////////////// START log in screen HTML manipulation
function addCreationForm() {
    removeSignIn();
}
function removeSignIn() {
    document.getElementById("basicForm").innerHTML = "";
    $("#basicForm").append(registerHTML);
    $("#hereComesFooter").append(footerCreateHTML);
}
function bringBackSignIn() {
    document.getElementById("basicForm").innerHTML = "";
    $("#basicForm").append(signInHTML);
    document.getElementById("hereComesFooter").innerHTML = "";
}  ///////////////////////////////// END log in screen HTML manipulation 

//////////////////////////////////// START log in screen JavaScript

// When Sign In Button is pressed
function signIn() {
    let userID = document.getElementById("userID").value;
    checkUserAndOpenResume(userID);
}

// Checks if the user exists, if it does, navigates to resume webpage 
function checkUserAndOpenResume(signInUser) {
    $.ajax({
        url: "http://localhost:8080/Try/checkUser",
        type: 'GET',
        dataType: 'application/json',
        data: {
            JsonUser: signInUser
        },
        success: function (res) {
            //Do Success 
        }, error: function (data) {
            if (data.responseText == "true") {
                openUserProfile(signInUser)
            } else {
                paintWrongInputsRed("userID");
                document.getElementById("nonExistException").innerHTML = "Sorry, this user doesn't exist";
            }
        }
    });
}

// Navigate to resume webpage of User
function openUserProfile(user) {
    window.location.href = "index.html?user=" + user;
}

// Json with all data, Is a global variable
var basicUserData = {}


// First Checks if resume has anything empty then creates the resume
function checkEmptyInputs() {
    $("#creationForm2 input").each(function (child) {
        if (document.getElementById(this.id).value == "") {
            paintWrongInputsRed(this.id)
            document.getElementById("emptyException").innerHTML = "Please fill in empty fields!"
        }
    })
    if (document.getElementById("userID").value == "") {
        paintWrongInputsRed("userID")
    }
    if (document.getElementById("userID").value != "" && document.getElementById("nameOfUser").value != "" && document.getElementById("email").value != "" && document.getElementById("phoneNumber").value != "" && document.getElementById("address").value != "") {
        createResume();
    }
}

// Creates a resume with basic Data
function createResume() {
    addBasicDataAsJSON();
    checkNewUserNameAndCreateResume(basicUserData.userID);
}

// TODO basicUserData, global Variables NO!!!!
// Adds all user input data as JSON into basicUserData
function addBasicDataAsJSON() {
    basicUserData["userID"] = document.getElementById("userID").value;
    basicUserData["nameOfUser"] = document.getElementById("nameOfUser").value;
    basicUserData["email"] = document.getElementById("email").value;
    basicUserData["phoneNumber"] = document.getElementById("phoneNumber").value;
    basicUserData["address"] = document.getElementById("address").value;
}

// Checks with Database if the username has been taken
function checkNewUserNameAndCreateResume(userID) {
    $.ajax({
        url: "http://localhost:8080/Try/checkUser",
        type: 'GET',
        dataType: 'application/json', // added data type
        data: {
            JsonUser: userID
        },
        success: function (res) {
            // Do Success
        }, error: function (data) {
            // IF user exists, tell the user that the name has been taken
            if (data.responseText == "true") {
                paintWrongInputsRed("userID");
                document.getElementById("existException").innerHTML = "Sorry this username is taken!";
            }
            // IF user doesn't exist, createUser
            else {
                addUserToDatabase();
            }
        }
    });
}

function addUserToDatabase() {
    var json = JSON.stringify(basicUserData);
    $.ajax({
        url: "http://localhost:8080/Try/createUser",
        type: 'POST',
        dataType: 'application/json', // added data type
        data: {
            JsonUser: json
        },
        success: function (res) {
            console.log(res);
            alert(res);
        }, error: function (data) {
            openUserProfile(basicUserData.userID)
        }
    });

}





//////////////////////////////////// START resume JavaScript
// TODO RENAME CODE BETTER: getUserAndPopulate;
// TODO Change from error to success
function getUserAndPopulate(userName) {
    $.ajax({
        url: "http://localhost:8080/Try/getUser",
        type: 'GET',
        dataType: 'application/json', // added data type
        data: {
            JsonUser: userName
        },
        success: function (data) {
            //DO success
        },
        error: function (data) {
            let objHere = data.responseText;
            let jsonObj = JSON.parse(objHere);
            var userID = jsonObj.userID;
            var nameOfUser = jsonObj.nameOfUser;
            var email = jsonObj.email;
            var phoneNumber = jsonObj.phoneNumber;
            var address = jsonObj.address;
            initBasicData(userID, nameOfUser, email, phoneNumber, address);
        }
    });
}

// Populates Main Card with BasicUserData
function initBasicData(userID, nameOfUser, email, phoneNumber, address) {
    // Main Card
    document.getElementById("nameShown").innerHTML = nameOfUser;
    document.getElementById("emailShown").innerHTML = email;
    document.getElementById("phoneNumberShown").innerHTML = phoneNumber;
    document.getElementById("addressShown").innerHTML = address;

    // In Modal 
    document.getElementById("userID").innerHTML = userID;
    document.getElementById("nameOfUser").value = nameOfUser;
    document.getElementById("email").value = email;
    document.getElementById("phoneNumber").value = phoneNumber;
    document.getElementById("address").value = address;

    // In Modal Placeholder
    $("#nameOfUser").attr("placeholder", nameOfUser);
    $("#email").attr("placeholder", email);
    $("#phoneNumber").attr("placeholder", phoneNumber);
    $("#address").attr("placeholder", address)

}

/////////////// START Modal JavaScript

//START adding areas for form

var j = 1;

function addFormArea() {
    addFormDiv();
    addThreeInputs();
    insertAddButton();
    j++;
}

// Adds html of form with div with title
function addFormDiv() {
    let formDiv = '<div id="form' + j + '" class="form"><button type="button" class="btn-close" onclick="deleteFormArea(' + j + ')"></button></div'
    $("#formArea").append(formDiv);
    let titleInput = '<div class="d-flex justify-content-center"><input type="text" placeholder="Title..." id="titleInput' + j + '" class="ta-c bold col-6 mb-2"></div>'
    $('#form' + j).append(titleInput);
    let allDivs = '<div class="row pb-1" id="allInputs' + j + '"></div>';
    $('#form' + j).append(allDivs);
}

function addThreeInputs() {
    for (let index = 0; index < 3; index++) {
        addFormBullet(j);
    }
}
function insertAddButton() {
    let addButton = '<div class="ta-c py-1"><button class="addInputs btn btn-primary" type="button" onclick="addFormBullet(' + j + ')"><i class="fas fa-plus"></i></button></div>'
    $('#form' + j).append(addButton);
}
// ADDS FORM INPUTS
var l = 1;

function addFormBullet(param) {
    var inputBullets = '<div id="inputBullets' + l + '" class="mx-auto my-1"><input type="text" placeholder="Headline" id="newHeadline' + l + '"class="bold ms-4"><input type="text" class="" placeholder="Text..." id="newInput'+l+'"><button type="button" class="btn-close" onclick="deleteInput(' + l + ')"></div>'
    $("#allInputs" + param).append(inputBullets);
    l++;
}

function automaticFormBullet(param, headline, input){
    var inputBullets = '<div id="inputBullets' + l + '" class="mx-auto my-1"><input type="text" value="'+headline+'" placeholder="Headline" id="newHeadline' + l + '"class="bold ms-4"><input type="text" class=""  value="'+input+'"  placeholder="Text..." id="newInput"><button type="button" class="btn-close" onclick="deleteInput(' + l + ')"></div>'
    $("#allInputs" + param).append(inputBullets);
    l++;
}

function deleteInput(param) {
    $('#inputBullets' + param).remove();
}
function deleteFormArea(param) {
    //delete from frontend
    let formAreaID = "#form" + param;
    $(formAreaID).remove();
}
////END adding areas for form

///START adding textboxes
function addTypingArea() {
    addFormDiv();
    addInputArea();
    j++;
}
function addInputArea() {
    let currentFormID = "#form" + j;
    $(currentFormID).append('<div class="d-flex justify-content-center"><textarea class="col-11 mx-auto mb-3" style="resize: none;" rows="4" type="text" id="textArea' + j + '"></textarea></div>');
}

function automaticInputArea(textarea){
        let currentFormID = "#form" + j;
        $(currentFormID).append('<div class="d-flex justify-content-center"><textarea class="col-11 mx-auto mb-3" style="resize: none;" rows="4" type="text" id="textArea' + j + '">'+textarea+'</textarea></div>');
    

}
///END adding textboxes


////START submitting changes
function saveResume() {
    //Frontend 
    
    $("#formArea input").each(function (child) {
        $("#"+this.id).css({ "border": "1px solid grey", "border-radius": "2px" });
    })
    $("#formArea textarea").each(function (child) {
        $("#"+this.id).css({ "border": "1px solid grey", "border-radius": "2px" });
    })



    var listOfInputs = [];
    $("#formArea input").each(function (child) {
        if (document.getElementById(this.id).value == "") {
            listOfInputs.push(document.getElementById(this.id).value)
            paintWrongInputsRed(this.id)
            document.getElementById("emptyException").innerHTML = "Please fill in empty fields!"
        }
    })
    $("#formArea textarea").each(function (child) {
        if (document.getElementById(this.id).value == "") {
            listOfInputs.push(document.getElementById(this.id).value)
            paintWrongInputsRed(this.id)
            document.getElementById("emptyException").innerHTML = "Please fill in empty fields!"
        }
    })

    if(listOfInputs.length == 0){
    
        document.getElementById("emptyException").innerHTML = "";
        deleteFromDB();
        $('#loadingGif').show();

        setTimeout(function(){ location.reload(); }, 2500);
    }

    // Backend
    // First deletes any saved Information, if there's any
    
    // Then reads the data and saves it



}

//GLOBAL VARIABLE
var mainUserData = {}
mainUserData["username"] = "";
mainUserData["title"] = "";
mainUserData["headline"] = "";
mainUserData["input"] = "";
mainUserData["textarea"] = "";
mainUserData["priority"] = "";
mainUserData["headlinePriority"] = "";

function readData() {
    // get all children of formarea should all be with the id form[Integer]
    var idOfThisUser = document.getElementById("userID").innerHTML;
    mainUserData["username"] = idOfThisUser;

    // get all available forms
    var headlinePriority = 1;
    $("#formArea").children().each(function (child) {

        var numberOfForm = this.id.slice(4)
        // get what's inside the form

        mainUserData["headlinePriority"] = headlinePriority;
        addFormData(numberOfForm);
        headlinePriority++;

        console.log(numberOfForm);
    });

    // get title and add to JSON

    // if allInputs[Integer].innerHTML ="" --> add text to JSON and send it Backend
    // get all children of "allInputs"[Integer] 

    //    // add headline to JSON 

    //    // add input to JSON

    //    // send JSON to Backend

    // repeat

}

function addFormData(numberOfForm) {
    mainUserData["title"] = document.getElementById("titleInput" + numberOfForm).value
    var priority = 1;
    if (document.getElementById("textArea" + numberOfForm)) {
        mainUserData["headline"] = "";
        mainUserData["input"] = "";
        mainUserData["textarea"] = document.getElementById("textArea" + numberOfForm).value;

        postInServlet(mainUserData)

    } else {
        $("#allInputs" + numberOfForm).children().each(function (child) {
            mainUserData["textarea"] = "";
            $("#" + this.id + " input").each(function (child) {
                if (this.id.slice(0, 11) == "newHeadline") {
                    mainUserData["headline"] = this.value;
                } else if (this.id.slice(0, 8) == "newInput") {
                    mainUserData["input"] = this.value;
                }
            });
            mainUserData["priority"] = priority;
            console.log(priority);
            priority++;
            postInServlet(mainUserData)
        });
    }
}

function postInServlet(mainUserData) {

    var dataAsJSON = JSON.stringify(mainUserData);
    console.log(dataAsJSON)
    $.ajax({
        url: "http://localhost:8080/Try/addUserData",
        type: 'POST',
        dataType: 'application/json', // added data type
        data: {
            jsonData: dataAsJSON
        },
        success: function (res) {
            console.log(res);
            alert(res);
        }, error: function (data) {
            console.log("Works")
        }
    });
}


function deleteFromDB() {
    var jsonTransfer = {}
    jsonTransfer["username"] = document.getElementById("userID").innerHTML;
    var stringifiedTransfer = JSON.stringify(jsonTransfer);

    $.ajax({
        url: "http://localhost:8080/Try/deleteUserData",
        type: 'POST',
        dataType: 'application/json',
        data: {
            transfer: stringifiedTransfer
        },
        success: function (res) {
            console.log(res);
            alert(res);
        }, error: function (data) {
            readData();
        }
    });




}





function getUserData(userName) {

    $.ajax({
        url: "http://localhost:8080/Try/getUserData",
        type: 'GET',
        // dataType: 'application/json', // added data type
        data: {
            JsonUser: userName
        },
        success: function (data) {
            //DO success
            console.log(data)
            var arrayOfData = eval(data)

            var jsonTitle = "";
            var insideResume = 1;
            var resumeAreaCount = 1;
            for (var i = 0; i < arrayOfData.length; i++) {
                var dataAsJSON = arrayOfData[i];

                if(jsonTitle != dataAsJSON.title){
                    $("#resume").append('<div id="resumeArea'+resumeAreaCount+'"><h1 class="ta-c" id="titleResume'+resumeAreaCount+'">'+dataAsJSON.title+'</h1><div class="container pb-2" id="resumeInfo'+resumeAreaCount+'"></div></div>')
                    var jsonTitle = dataAsJSON.title;
                    insideResume= 1;
                    $("#resumeInfo"+resumeAreaCount).append('<div id="savedInfo1" class="row">'+dataAsJSON.textarea+'<div class="bold col-6" id="headline">'+dataAsJSON.headline+'</div><div class="col-6" id="input">'+dataAsJSON.input+'</div></div>')
                    resumeAreaCount++
                    addFormDiv()
                    
                    document.getElementById("titleInput"+j).value = dataAsJSON.title;
                    if(dataAsJSON.textarea == ""){
                        automaticFormBullet(j, dataAsJSON.headline, dataAsJSON.input)
                        insertAddButton();
                    } else{
                        automaticInputArea(dataAsJSON.textarea);
                    }
                    
                    j++;
                } else{
                    insideResume++;
                    var currentCount = resumeAreaCount-1
                    $("#resumeInfo"+currentCount).append('<div id="savedInfo'+insideResume+'" class="row"><div class="bold col-6" id="headline">'+dataAsJSON.headline+'</div><div class="col-6" id="input">'+dataAsJSON.input+'</div></div>')
                    automaticFormBullet(j-1, dataAsJSON.headline, dataAsJSON.input)
                    insertAddButton();

                }
            }
        },
        error: function (data) {
        }
    });
}




// function editBasicDataAsJSON() {
//     basicUserData["userID"] = document.getElementById("userID").innerHTML;
//     basicUserData["nameOfUser"] = document.getElementById("nameOfUser").value;
//     basicUserData["email"] = document.getElementById("email").value;
//     basicUserData["phoneNumber"] = document.getElementById("phoneNumber").value;
//     basicUserData["address"] = document.getElementById("address").value;
// }

// // Checks with Database if the username has been taken
// function checkNewUserNameAndCreateResume(userID) {
//     $.ajax({
//         url: "http://localhost:8080/Try/checkUser",
//         type: 'GET',
//         dataType: 'application/json', // added data type
//         data: {
//             JsonUser: userID
//         },
//         success: function (res) {
//             // Do Success
//         }, error: function (data) {
//             // IF user exists, tell the user that the name has been taken
//             if (data.responseText == "true") {
//                 paintWrongInputsRed("userID");
//                 document.getElementById("existException").innerHTML = "Sorry this username is taken!";
//             }
//             // IF user doesn't exist, createUser
//             else {
//                 addUserToDatabase();
//             }
//         }
//     });
// }