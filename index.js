"use strict";

(function () {
   // DOM variables
   const shareBtn = document.querySelector(".share-button");
   const socialMobile = document.querySelector(".social__mobile");
   const socialDesktop = document.querySelector(".social__desktop");

   // Listen to click event on the share button
   shareBtn.addEventListener("click", (e) => {
      // Var to checks and if button is pressed.
      const ariaState = shareBtn.matches("[aria-pressed='false']");

      // Alter the state of the button: pressed / not pressed.
      shareBtn.setAttribute("aria-pressed", !ariaState ? "false" : "true");

      // If pressed, add appropiate CSS classes to display social links. If not, remove them.
      if (ariaState) {
         socialDesktop.classList.add("slide-desktop");
         socialMobile.classList.add("slide-mobile");
      } else {
         socialDesktop.classList.remove("slide-desktop");
         socialMobile.classList.remove("slide-mobile");
      }
   });
})();
