function isEven(d) {
    if (d % 2 === 0) {
        document.write('<p>' + 'True' + '</p>');
        return true;
    }
    else {
        document.write('<p>' + 'False' + '</p>');
        return false;
    }
}

document.write(isEven(57));