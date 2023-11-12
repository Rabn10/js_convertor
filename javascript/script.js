function unitConvertor() {
    let fromUnit = document.getElementById('fromUnit').value;
    let toUnit = document.getElementById('toUnit').value;
    let value = document.getElementById('value').value;

    let result = 0;

    //kilometer to otherunits
    if(fromUnit == 'kilometer' && toUnit == 'meter'){
        result = value * 1000;
    } 
    else if(fromUnit == 'kilometer' && toUnit == 'cm') {
        result = value * 100000;
    }
    else if(fromUnit == 'kilometer' && toUnit == 'inches') {
        result = value * 39370;
    } 
    else if(fromUnit == 'meter' && toUnit == 'kilometer') {
        result = value / 1000;
    }
    else if(fromUnit == 'meter' && toUnit == 'cm') {
        result = value * 100;
    }
    else if(fromUnit == 'meter' && toUnit == 'inches') {
        result = value * 39.37;
    }
    else if(fromUnit == 'cm' && toUnit == 'kilometer'){
        result = value / 100000;
    }
    else if(fromUnit == 'cm' && toUnit == 'meter'){
        result = value / 100
    }
    else if(fromUnit == 'cm' && toUnit == 'inches'){
        result = value / 2.54
    }
    else if(fromUnit == 'inches' && toUnit == 'kilometer') {
        result = value / 39370;
    }
    else if(fromUnit == 'inches' && toUnit == 'meter') {
        result = value / 39.37;
    }
    else if(fromUnit == 'inches' && toUnit == 'cm') {
        result = value * 2.54;
    }
    else {
        result = value;
    }

    document.getElementById('result').innerHTML = result;

}