const printDigitValue = string => {
    let digitValue = "";
    for (let i = 0; i < string.length; i++) {
        if (!isNaN(string[i])) {
            digitValue += string[i];
        }
    }
    return digitValue;
}