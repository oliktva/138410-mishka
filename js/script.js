    var nojsList = document.querySelectorAll(".no-js");
    var openMenu = document.querySelector(".top-nav__logo-hamburger");
    var navItemList = document.querySelectorAll(".top-nav__item:not(:nth-child(1))");
    var iconMenu = openMenu.querySelector(".top-nav__icon-hamburger");

    for (var i = 0; i < nojsList.length; i++) {
      nojsList[i].classList.remove("no-js");
    }

   openMenu.addEventListener("click", function(event) {
      event.preventDefault();
      for (var i = 0; i < navItemList.length; i++) {
        navItemList[i].classList.toggle("top-nav__item--hidden");
      }
      iconMenu.classList.toggle("active");
    });

  /*       plusAdults.addEventListener("click", function(event) {
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
