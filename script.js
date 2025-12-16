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
    } if (base === 2 && !/^[0-1]+$/.test(value)) {
        alert("Invalid! Binary must contain only 0 and 1");
    return; 
    } if (base === 8 && !/^[0-7]+$/.test(value)) {
        alert("Invalid! Octal must contain digits 0 to 7 only");
        return;
    } if (base === 16 && !/^[0-9, A-F, a-f]+$/.test(value)) {
        alert("Invalid! Hexadecimal must contain only 0-9 and A-F only"); 
        return; 
    } if (base === 10 && !/^[0-9]+$/.test(value)) {
        alert("Invalid! Decimal must contain digits 0 to 9 only");
        return;
        
        const dec = parseInt(value, base);
        allbase(dec);
}
