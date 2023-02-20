var tooltipTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});

document
  .querySelector(".fa-circle-xmark")
  .addEventListener("click", function () {
    document.getElementById("modal-box").classList.add("modal-hide");
  });
