// JavaScript source code

var flag = true;
function internalProjectText(id){
    if (flag) {
        if (id == 'wb') {
            document.getElementById(id).innerText = "Our online platform, the home to our National Effort.";
        }
        else if (id == "sm") {
            document.getElementById(id).innerText = "Content creation is an art of the modern spirit, and an incredibly effective tool when used correctly.";
        }
        else if (id == "cd") {
            document.getElementById(id).innerText = "The absolute best day of the year to inspire our peers to success. ";
        }
        else if (id == "re") {
            document.getElementById(id).innerText = "We need every single bit of help we can possibly get, this movement is infinitely larger than any one person. It requires a nation. ";
        }
        flag = false;
    }
    else {
        if (id == "wb") {
            document.getElementById(id).innerText = "Website Building";
        }
        else if (id == "sm") {
            document.getElementById(id).innerText = "Social Media";
        }
        else if (id == "cd") {
            document.getElementById(id).innerText = "Club Day";
        }
        else if (id == "re") {
            document.getElementById(id).innerText = "Recruitment";
        }
        flag = true;
    }
}
