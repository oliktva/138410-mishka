    //  var title = document.querySelector(".search-hotel .title-block");;
    var nojsList = document.querySelectorAll(".no-js");

    for (var i = 0; i < nojsList.length; i++) {
      nojsList[i].classList.remove("no-js");
    }

  /*    title.addEventListener("click", function(event) {
        event.preventDefault();
        popup.classList.toggle("search-hotel-invisible");
        inputArrivalDate.focus();
      });

      plusAdults.addEventListener("click", function(event) {
        event.preventDefault();
        var value = parseInt(inputAdults.value) + 1;
        inputAdults.value = value;
      });

      minusAdults.addEventListener("click", function(event) {
        event.preventDefault();
        var value = parseInt(inputAdults.value);
        if (value > 0){
          value = value - 1;
        }
        inputAdults.value = value;
      });

      plusKids.addEventListener("click", function(event) {
        event.preventDefault();
        var value = parseInt(inputKids.value) + 1;
        inputKids.value = value;
      });

      minusKids.addEventListener("click", function(event) {
        event.preventDefault();
        var value = parseInt(inputKids.value);
        if (value > 0){
          value = value - 1;
        }
        inputKids.value = value;
      });

      search.addEventListener("click", function(event) {
        if (!inputArrivalDate.value || !inputDepartureDate.value) {
          event.preventDefault();
          console.log("Нужно ввести даты заезда и выезда.");
          if (!inputArrivalDate.value){
            inputArrivalDate.classList.add("input-block-date-empty");
          }
          if (!inputDepartureDate.value){
            inputDepartureDate.classList.add("input-block-date-empty");
          }
         }
      });

      inputArrivalDate.addEventListener("click", function(event) {
        inputArrivalDate.classList.remove("input-block-date-empty");
      });

      inputDepartureDate.addEventListener("click", function(event) {
        inputDepartureDate.classList.remove("input-block-date-empty");
      });*/
