var count = 0;

document.getElementById("myButton").onclick = function() {
    count++;

    if (count % 2 == 0) {
        document.getElementById("demo").innerHTML = "";
    } else {
        var img = document.createElement("img");
        img.src = "https://veidadm.gosuslugi.ru/netcat_files/32/115/Nextnine.jpg";
        document.getElementById("demo").appendChild(img);
    }
};