let formStepsNum = 0;
const formSteps = document.querySelectorAll(".wizard-step")
const progressSteps = document.querySelectorAll(".wizard-navigation__list__item")

var wizard = {
    init: function () {
        console.log("😎")
    },
    buttons: function () {
        const button = [...document.getElementsByClassName("button-action")]

        console.log("item")
        button.map(item => {
            item.addEventListener("click", function () {

                if (this.classList.contains("next")) {
                    // if (formStepsNum > (progressSteps.length - 2)) return false

                    formStepsNum++
                } else {
                    formStepsNum--
                }

                wizard.updateFormSteps()
                wizard.updateProgressbar()
            })
        })
    },
    updateFormSteps: function () {
        formSteps.forEach((formStep) => {
            formStep.classList.contains("active") &&
                formStep.classList.remove("active")
        });

        formSteps[formStepsNum].classList.add("active")
    },
    updateProgressbar: function () {
        progressSteps.forEach((progressStep, idx) => {
            if (idx < formStepsNum + 1) {
                progressStep.classList.add("active")
            } else {
                progressStep.classList.remove("active")
            }
        });
    },
}