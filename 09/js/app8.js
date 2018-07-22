function isNumberInRange(r) {
    if (r > 0 && r < 10) {
        document.write('True');
        return true;
    }
    else {
        document.write('False');
        return false;
    }
}

isNumberInRange(11);