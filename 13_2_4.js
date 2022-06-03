document.addEventListener("DOMContentLoaded",
    function (e) {
        let input = document.querySelector("input")
        input.addEventListener("click",
            function (e) {
                if (e.target.geAttribute("type") === "button") {
                    e.target.setAttribute("type", "text")
                }
            }
        )

        input.addEventListener("change",
            function (e) {
                e.target.setAttribute("type", "button")
            }
        )
    }
)