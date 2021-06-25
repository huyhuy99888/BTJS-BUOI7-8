var getEle = function(id) {
    return document.getElementById(id);
}
var getEleClass = function(cl) {
    return document.getElementsByClassName(cl);
}

var arrMount = 0;
var checkButton = false;
getEle('addItem').addEventListener('click',function(){
    var arrShowItem = getEleClass('inputData__content')[0];
    arrMount = arrShowItem.children.length;
    if(arrMount<=1){
        getEle('popID').classList.add('popAddArr-showed');
        setTimeout(() => {
            getEle('popID').classList.add('popAddArr-popup');
        }, 200);
        var eleCopy = getEleClass('inputData__button')[0].children[1];       
        arrShowItem.appendChild(eleCopy.cloneNode(true));
        arrShowItem.children[arrMount].children[0].innerHTML = arrMount+1;  
    }
    else{
        return;
    }
});

getEle('close').addEventListener('click',function(){
    getEle('popID').classList.remove('popAddArr-popup');
    setTimeout(() => {
        getEle('popID').classList.remove('popAddArr-showed');
    }, 550);
    addArray();
    delsubArray();
    if(mainArray.length == 2 && checkButton == true){
        getEle('addArray').click();
    }
});

var strArr;
function showPopPos(arrLength,arrPossition){
    strArr = getEleClass('inputData__content')[0].children[arrPossition].children[1].innerHTML;
    arrPossition ++;
    getEle('popPos').classList.add('popAddArr-showed');
    getEleClass('positionArr')[0].children[0].innerHTML = "Mảng " + arrPossition + " có " + arrLength + " phần tử."
    setTimeout(() => {
        getEle('popPos').classList.add('popAddArr-popup');
    }, 200);
}

getEle('closepopPos').addEventListener('click',function(){
    getEleClass('inputData__content')[0].children[arrPossition].children[1].innerHTML = mainArray[arrPossition];
    getEle('popPos').classList.remove('popAddArr-popup');
    setTimeout(() => {
        getEle('popPos').classList.remove('popAddArr-showed');
    }, 550);
});

