var ProductBox = document.getElementById("ProductBox");
        var frontImg = document.getElementById("frontImg");
        var backImg = document.getElementById("backImg");

        function flipRight() {
            ProductBox.style.transform = "rotateY(180deg)"
            frontImg.style.left = "650px"
            backImg.style.left = "20px"
            frontImg.style.transform = "rotate(-30deg)"
            backImg.style.transform = "rotate(0deg)"
        }
        function flipLeft() {
            ProductBox.style.transform = "rotateY(0deg)"
            frontImg.style.left = "20px"
            backImg.style.left = "-650px"
            frontImg.style.transform = "rotate(0deg)"
            backImg.style.transform = "rotate(-30deg)"
        }