const reservationBtn = document.querySelector(".reservationBtn");
const reservationFormWrapper = document.querySelector(
  ".reservationFormWrapper"
);

reservationBtn.addEventListener("click", () => {
  reservationFormWrapper.classList.toggle("openReservation");
});
