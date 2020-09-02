var feedbackButton = document.querySelector(".feedback-button");
var popupFeedback = document.querySelector(".modal-feedback");
var popupOverlay = document.querySelector(".overlay");
var popupFeedbackClose = popupFeedback.querySelector(".modal-close");

//открыть модальное окно формы обратной связи
feedbackButton.addEventListener("click", function(evt) {
    evt.preventDefault();
    popupFeedback.classList.add("modal-show");
    popupFeedback.classList.add("modal-show-animate")
    popupOverlay.classList.add("modal-show");
})

//закрыть модальное окно формы обратной связи
popupFeedbackClose.addEventListener("click", function(evt) {
    evt.preventDefault();
    popupFeedback.classList.remove("modal-show");
    popupOverlay.classList.remove("modal-show");
})