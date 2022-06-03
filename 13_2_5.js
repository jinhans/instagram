document.addEventListener("DOMContentLoaded",
    function (e) {
        let button = document.querySelector("input")

        let img = document.querySelector("img")
        let img1 = "image/hl 1.jpg"
        let img2 = "image/hl 2.jpg"
        let img3 = "image/profile.jpg"

        button.addEventListener("click",
            function (e) {
                let src = img.getAttribute("src")
                if (src === img1) {
                    img.setAttribute("src", img2)
                } else if (src === img2) {
                    img.setAttribute("src", img3)
                } else {
                    img.setAttribute("src", img1)
                }
            }
        )
    }
)