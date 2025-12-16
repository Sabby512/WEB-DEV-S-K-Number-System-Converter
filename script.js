function allbase(dec) {
    document.getElementById("binary").value = dec.toString(2);
    document.getElementById("octal").value = dec.toString(8);
    document.getElementById("decimal").value = dec;
    document.getElementById("hexadecimal").value = dec.toString(16).toUpperCase();
}
 function clearResults() {
    document.getElementById("value").value = "";
    document.getElementById("binary").value = "";
    document.getElementById("octal").value = "";
    document.getElementById("decimal").value = "";
    document.getElementById("hexadecimal").value = "";
}
function converter() {
    const value = document.getElementById("value").value.trim();
    const base = parseInt(document.getElementById("base").value);

    if (value === "") {
        clearResults();
        return;
    } if (base === 16 && !/^[0-9, A-F, a-f]+$/.test(value)){alert("Invalid! Must input 0-9 and A-F only"); return; }
    const dec = parseInt(value, base);
    if (isNaN(dec)) {
        alert("Invalid number for selected base");
        return;
    }
    allbase(dec);

}
