function processJSON() {
    let jsonString = document.getElementById("jsonInput").value;
    try {
        let jsonObject = JSON.parse(jsonString);
        let jsonStrWithIndentation = JSON.stringify(jsonObject, null, 6);
        document.getElementById("jsonOutput").value = jsonStrWithIndentation;
        document.getElementById("errorDisplay").innerText = "";
    } catch (error) {
        document.getElementById("errorDisplay").innerText = "format error ";
    }
}

