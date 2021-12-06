        let object = {
            JaboutMe: "drerit nisl, vitae consectetur quam. Nunc id metus in quam convallis fringilla. Duis cursus ex sed odio feugiat, sit amet sagittis leo tristique. Maecenas viverra eu est ut accumsan. Vivamus nec laoreet ex. In aliquet massa nulla, eu bibendum est sodales quis. Cras condimentum fermentum felis, pharetra rutrum enim luctus at. Praesent elementum bibendum sagittis. Integer accumsan odio magna, quis faucibus erat lobortis ac.",
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

        function addDate(dayParam, monthParam, yearParam){
            if((monthParam == 2 || monthParam == 4 || monthParam == 6 || monthParam == 9 || monthParam == 11) && dayParam == 31 ){
                invalid();
                revertToLastSaved();

             } else if((monthParam == 2 && yearParam%4 != 0 && dayParam > 28  )){
                 invalid();
                 revertToLastSaved();
             }

             else if((monthParam == 2 && dayNew == 30 )){
                invalid();
                revertToLastSaved();
            } else{
                document.getElementById("birthdaySaved").innerHTML =  dayParam + "." + monthParam + "." + yearParam;
            }
        }

        function ageCalculcator(day, month, year){
            var today = new Date();
            var yy = today.getFullYear();
            var mm = today.getMonth()+1;
            var dd = today.getDay() + 5;
            var dyy = yy + " " + mm + " " +dd;
            console.log(dyy);

            var yearDifference =  yy-year;
            if(mm-month > 0){
                document.getElementById("age").innerHTML = yearDifference;
                // console.log(yearDifference);
            } else if(mm-month == 0 && dd-day == 0){
                document.getElementById("age").innerHTML = yearDifference;
            } else{
                document.getElementById("age").innerHTML = yearDifference-1;
            }
        }


        function revertToLastSaved(){
            var day = document.getElementById("bDayModal");
            day.value = object.JbDay;

            var month = document.getElementById("bMonthModal");
            month.value = object.JbMonth;

            var year = document.getElementById("bYearModal");
            year.value = object.JbYear;
        }

        function invalid(){
            alert("Invalid Day!!!");
        }


        // $(function () {
        //     $("#change").on('click', function () {
        //         $('#editMode2').css({
        //             'visibility': 'visible'
        //         }
        //         );

                

        //         $('#editMode4').css({
        //             'visibility': 'visible'
        //         }

        //         );
        //     });
        // });

