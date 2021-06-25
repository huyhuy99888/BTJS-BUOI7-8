var getEle = function (id) {
    return document.getElementById(id);
}
var getEleClass = function (cl) {
    return document.getElementsByClassName(cl);
}

//Kiểm tra đầu vào
var isValue = false;
getEle('inData').addEventListener('focus', function () {
    isValue = true;
    getEle('inData').addEventListener('change', function () {
        if (getEle('inData').value == "") {
            getEleClass('isVal')[0].innerHTML = 'Hãy nhập số vào ô nhập';
        }
        else if (isNaN(getEle('inData').value)) {
            getEleClass('isVal')[0].innerHTML = 'Hãy nhập ký tự số';
        }
        else {
            getEleClass('isVal')[0].innerHTML = '';
            isValue = false;
        }
    });
    if (isValue == true) {
        if (getEle('inData').value == "") {
            getEleClass('isVal')[0].innerHTML = 'Hãy nhập số vào ô nhập';
        }
    };
});
// Tạo mảng
var mainArray = [];
var subArr = [];
var subCount = 0;
getEle('addArr').addEventListener('click', function () {

    if (isValue || getEle('inData').value == "" || isNaN(getEle('inData').value)) {
        return;
    }
    subArr.push(getEle('inData').value);
    getEleClass('inputData__content')[0].children[arrMount].children[1].innerHTML = subArr;
});

function addArray() {
    mainArray.push(subArr);
}

function delsubArray() {
    subArr = [];
}

// kiểm tra mảng
var arrPossition = 0;
var arrLength = 0;
function checkArrayQty() {
    if (mainArray.length === 1) {
        return;
    }
    else if (mainArray.length === 0) {
        getEle('addItem').click();
    }
    else if (mainArray.length === 2) {
        arrPossition = prompt("Xin hãy chọn mảng để thực hiện phép tính") - 1;
    }
}

// Câu 1: Tổng số dương trong mảng
debugger
getEle('sumPositive').addEventListener('click', function () {
    checkArrayQty();
    var sum = 0;
    console.log(mainArray[arrPossition])
    for (var item of mainArray[arrPossition]) {
        if (item > 0) {
            sum += parseFloat(item);
        }
    }
    getEle('sumPosResult').innerHTML = sum;
});
// câu 2: Đếm có bao nhiêu số dương trong mảng
getEle('countPositive').addEventListener('click', function () {
    checkArrayQty();
    var countPosNum = mainArray[arrPossition].filter(function (item) {
        return item > 0;
    });
    getEle('countPosResult').innerHTML = countPosNum.length;
});
//Câu 3: Tìm số nhỏ nhất trong mảng
getEle('minNum').addEventListener('click', function () {
    checkArrayQty();
    var min=Number.POSITIVE_INFINITY ;
    for (var item of mainArray[arrPossition]) {
        if (parseFloat(item) < min) {
            min = item;
        }
    }
    getEle('minResult').innerHTML = min;
});
// Câu 4: Tìm số dương nhỏ nhất trong mảng
getEle('minNumber').addEventListener('click', function () {
    checkArrayQty();

    var countPosNum = mainArray[arrPossition].filter(function (item) {
        return item > 0;
    });
    var min = parseFloat(countPosNum[0]);
    for (var item in countPosNum) {
        if (parseFloat(countPosNum[item]) < min) {
            min = countPosNum[item];
        }
    }
    getEle('minNumResult').innerHTML = min;
});
// Câu 5: Tìm số chẵn cuối cùng trong mảng. Nếu mảng không có giá trị chẵn thì trả về -1.
getEle('lastEven').addEventListener('click', function () {
    checkArrayQty();
    var evenNum = mainArray[arrPossition].filter(function (item) {
        return item % 2 == 0;
    });
    if (evenNum.length == 0) {
        getEle('lastEvenResult').innerHTML = -1;
    }
    else {
        getEle('lastEvenResult').innerHTML = evenNum[evenNum.length - 1];
    }
})
// câu 6: Đổi chỗ 2 giá trị trong mảng theo vị trí (Cho nhập vào 2 vị trí muốn đổi chỗ giá trị).
getEle('changePos').addEventListener('click', function () {
    checkArrayQty();
    arrLength = mainArray[arrPossition].length;
    showPopPos(arrLength, arrPossition);
});
getEle('ChangeArr').addEventListener('click', function () {
    var secondPos = parseInt(getEle('secondPos').value);
    var firstPos = parseInt(getEle('firstPos').value);
    let refVar;
    refVar = mainArray[arrPossition][firstPos - 1];
    mainArray[arrPossition][firstPos - 1] = mainArray[arrPossition][secondPos - 1];
    mainArray[arrPossition][secondPos - 1] = refVar;
    getEleClass('inputData__content')[0].children[arrPossition].children[1].innerHTML = mainArray[arrPossition];
    strArr = getEleClass('inputData__content')[0].children[arrPossition].children[1].innerHTML;
    strRes = strColor(strArr, firstPos - 1);
    strRes = strColor(strRes, secondPos - 1);
    getEleClass('inputData__content')[0].children[arrPossition].children[1].innerHTML = strRes;
    getEle('changePosResult').innerHTML = 'Success'
});
// Câu 7: Sắp xếp mảng theo thứ tự tăng dần.
getEle('arangeArray').addEventListener('click', function () {
    checkArrayQty();
    var subArr = mainArray[arrPossition];
    var lengthArr = subArr.length;
    var refItem;
    for (var i = 0; i < lengthArr; i++) {
        for (var j = i + 1; j < lengthArr; j++) {
            if (parseFloat(subArr[j]) < parseFloat(subArr[i])) {
                refItem = subArr[j];
                subArr[j] = subArr[i];
                subArr[i] = refItem;
            }
        }
    }
    getEleClass('inputData__content')[0].children[arrPossition].children[1].innerHTML = subArr;
    getEle('arangeArrResult').innerHTML = "Mảng theo thứ tự tăng dần : " + subArr;
})
// Câu 8:Tìm số nguyên tố đầu tiên trong mảng. Nếu mảng không có số nguyên tố thì trả về – 1.
getEle('primeNumber').addEventListener('click', function () {
    checkArrayQty();
    var primeNum = mainArray[arrPossition].find(function (item) {
        if (item > 1) {
            for (var i = 2; i < item; i++) {
                if (item % i === 0) {
                    return false;
                }
            }
            if (i == item) {
                return true;
            }
        }
    });
    if (!!primeNum) {
        getEle('primeNumResult').innerHTML = primeNum;
    }
    else {
        getEle('primeNumResult').innerHTML = 'Không có';
    }
})
// Câu 9: Nhập thêm 1 mảng số thực, tìm xem trong mảng có bao nhiêu số nguyên?
getEle('addArray').addEventListener('click', function () {
    checkButton = true;
    if (mainArray.length == 2) {
        arrPossition = 1;
        var integerNum = mainArray[arrPossition].filter(function (item) {
            return Number.isInteger(parseFloat(item));
        });
        getEle('countIntResult').innerHTML = integerNum.length;
    }
    else if (mainArray.length == 1) {
        if (!alert('Hãy tạo mảng mới')) {
            getEle('addItem').click();
        }
    }
});
// Câu: So sánh số lượng số dương và số lượng số âm xem số nào nhiều hơn. 
getEle('compareNum').addEventListener('click', function () {
    checkArrayQty();
    var posNumber = mainArray[arrPossition].filter(function (item) {
        return item > 0;
    });
    var negNumber = mainArray[arrPossition].filter(function (item) {
        return item <= 0;
    });

    if (posNumber.length > negNumber.length) {
        getEle('compareNumResult').innerHTML = 'Số lượng số dương lớn hơn số âm'
    }
    else if (posNumber.length < negNumber.length) {
        getEle('compareNumResult').innerHTML = ' Số lượng số dương nhỏ hơn số âm'
    }
    else {
        getEle('compareNumResult').innerHTML = ' Số lượng số dương bằng hơn số âm'
    }

});