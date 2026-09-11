const envelope =
    document.querySelector("#envelope");

const openButton =
    document.querySelector("#openButton");

const letter =
    document.querySelector("#letter");


openButton.addEventListener(
    "click",
    function () {

        envelope.classList.add("open");


        setTimeout(
            function () {

                letter.classList.add("show");

            },
            700
        );

    }
);
