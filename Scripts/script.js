function id(id) {
    return document.getElementById(id);
}

function convert(s, n) {
    if (parseInt(id(s).value, n)) {
        if ("bin" != s) {
            id("bin").value = parseInt(id(s).value, n).toString(2);
        }
        if ("oct" != s) {
            id("oct").value = parseInt(id(s).value, n).toString(8);
        }
        if ("dec" != s) {
            id("dec").value = parseInt(id(s).value, n).toString(10);
        }
        if ("hex" != s) {
            id("hex").value = parseInt(id(s).value, n).toString(16);
        }
    } else {
        if ("bin" != s) {
            id("bin").value = "";
        }
        if ("oct" != s) {
            id("oct").value = "";
        }
        if ("dec" != s) {
            id("dec").value = "";
        }
        if ("hex" != s) {
            id("hex").value = "";
        }
    }
}
