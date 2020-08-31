/**
 * @param {Array} collection
 * @params {Function[]} – Функции для запроса
 * @returns {Array}
 */

alert("Hello world");

function query(collection) {
    var massLib = [].slice.call(arguments);
    console.log('drgsdtg');
    var finalArray = arguments[0];
    console.log(finalArray);
    for (i = 1; i < massLib.length; i++) {
        if (massLib[i].name == 'filterIn') {
            finalArray = massLib[i].action(finalArray);
        }
    }
 
    for (i = 1; i < massLib.length; i++) {
        if (massLib[i].name == 'select') {
            finalArray = massLib[i].action(finalArray);
        }
    }
    return finalArray;
}

 /**
 * @params {String[]}
 */


function select() {
    var massLib = [].slice.call(arguments);
    return {
        name: 'select',
        action: function (inputArr) {
            var outputArr = [];
            inputArr.forEach(function (objItem, i, arr) {
                var outputObject = {};
                massLib.forEach(function (argItem, i, arr) {
                    outputObject[argItem] = objItem[argItem];
                });
                outputArr.push(outputObject);
            });
            return outputArr;
        }
    }
}
 
/**
 * @param {String} property – Свойство для фильтрации
 * @param {Array} values – Массив разрешённых значений
 */


function filterIn(property, values) {
    var massLib = [].slice.call(arguments);
    return {
        name: 'filterIn',
        action: function (inputArr) {
            outputArr = []
            inputArr.forEach(function (objItem) {
                var searchCheck = false;
                for (i = 0; i < massLib.length; i = i + 2) {
                    var fieldName = massLib[i];
                    var searchValues = massLib[i + 1];
 
                    searchCheck = searchValues.some(
                        function (value) { return value == objItem[fieldName] }
                    );
                    if (!searchCheck) {
                        break;
                    }
                }
 
                if (searchCheck) {
                    outputArr.push(objItem)
                }
            });
            return outputArr;
        }
    } 
}



module.exports = {
    query: query,
    select: select,
    filterIn: filterIn
};

