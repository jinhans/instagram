document.addEventListener("DOMContentLoaded",
    function (e) {
        let input = document.querySelector("input")
        input.addEventListener("click",
            function (e) {
                console.log('click')
                e.target.setAttribute("type", "text")
            }
        )
    }
)