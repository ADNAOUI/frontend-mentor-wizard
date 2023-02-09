let formStepsNum = 0;
const formSteps = document.querySelectorAll(".wizard-step")
const progressSteps = document.querySelectorAll(".wizard-navigation__list__item")

var wizard = {
    init: function () {
        console.log("😎")
    },
    buttons: function () {
        const button = [...document.getElementsByClassName("button-action")]

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
            progressStep.classList.remove("active")

            if (idx < formStepsNum + 1) {
                progressStep.classList.add("active")
            }
        });
    },
    validateForm: function () {
        const forms = document.querySelectorAll('.needs-validation');

        // Loop over them and prevent submission
        Array.prototype.slice.call(forms).forEach((form) => {
            form.addEventListener('submit', (event) => {
                if (!form.checkValidity()) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }
}