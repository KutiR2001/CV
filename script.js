

        let object = {
            JaboutMe: "Lorem Ipsum",
            Jname: "7amada",
            JbirthDay: "2001-10-15",
            JbDay: "26",
            JbMonth: "01",
            JbYear: "2001",
            JplaceOfBirth: "Caidfro",
            Jnationality: "dc",

        }


        initOnLoad();

        // TODO
        function initOnLoad() {


            // let name = object.name;
            document.getElementById("aboutmeSaved").innerHTML = object.JaboutMe;
            document.getElementById("nameSaved").innerHTML = object.Jname;

            document.getElementById("birthdaySaved").innerHTML = object.JbDay + "." + object.JbMonth + "." + object.JbYear;

            // document.getElementById("birthdaySaved").innerHTML = object.JbirthDay;
            document.getElementById("pobSaved").innerHTML = object.JplaceOfBirth;
            document.getElementById("nationSaved").innerHTML = object.Jnationality;
        }
        initModal();


        function initModal() {

            var inputName = document.getElementById("aboutmeModal");
            inputName.value = document.getElementById("aboutmeSaved").innerHTML;

            var inputName = document.getElementById("nameModal");
            inputName.value = document.getElementById("nameSaved").innerHTML;
            
//             bDayModal
// bMonthModal
// bYearModal

            var day = document.getElementById("bDayModal");
            day.value = object.JbDay;

            var month = document.getElementById("bMonthModal");
            month.value = object.JbMonth;

            var year = document.getElementById("bYearModal");
            year.value = object.JbYear;



            // var inputName = document.getElementById("birthdayModal");
            // inputName.value = document.getElementById("birthdaySaved").innerHTML;

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
            
            // var bDate = document.getElementById("birthdayModal").value;
            // document.getElementById("birthdaySaved").innerHTML = bDate;



            checkDate(bDate);

            var name = document.getElementById("pobModal").value;
            document.getElementById("pobSaved").innerHTML = name;

            var name = document.getElementById("nationModal").value;
            document.getElementById("nationSaved").innerHTML = name;

        }

        function checkDate(parameter){
            
            var today = new Date();
            console.log(today);
            console.log(parameter);
            var year = today.getFullYear();
            var birthYear = parameter.substring(0, 4);


            // if(bDate){
                console.log(year-birthYear);
            // }


        }




        $(function () {
            $("#change").on('click', function () {
                $('#editMode2').css({
                    'visibility': 'visible'
                }

                );


                $('#editMode4').css({
                    'visibility': 'visible'
                }

                );
            });
        });

