const income = document.querySelector('input[name=income]');
const taxYear = document.querySelector('input[name=tax-year]');
const age = document.querySelector('input[name=age]');
const studentLoan = document.querySelector('input[name=student-loan]');
const pension = document.querySelector('input[name=pension]');
const housing = document.querySelector('input[name=housing]');
const transport = document.querySelector('input[name=transport]');
const essentials = document.querySelector('input[name=essentials]');
const fun = document.querySelector('input[name=fun]');
const other = document.querySelector('input[name=other]');

const calculateBtn = document.querySelector('button');

calculateBtn.addEventListener('click', taxesCalc); //need to change to savings calc eventually

//This section is calculating purely gov tax from income
//Functions specify which tax bracket someone is in
function topPer(a){
    const extraTop = (a - 150000)-((a - 150000)*0.45);
    return extraTop + 102567.4;
}

function midPer(a){
    const extraTop = (a - 50271)-((a - 50271)*0.4);
    return extraTop + 42731;
}

function lowPer(a){
    const extraTop = (a - 12751)-((a - 12751)*0.2);
    return extraTop + 12750;
}

function niFunc(a){
    weekInc = a/52;
    if (weekInc<184.01){
        return a;
    }
    else if (weekInc<967){
        newA = 52*(weekInc - ((weekInc-184)*0.12));
        return newA;
    }
    else{
        newA = 52*((weekInc-967)-((weekInc-967)*0.02)+873.04);
        return newA;
    }
}


function taxesCalc(){
    var afterTax = 0;
    var afterTaxNi = 0;
    incomeInp = income.value;
    ageInp = age.value;
    
    //Statements for determining tax bracket
    if (incomeInp>150000){
        afterTax = topPer(incomeInp);
    }
    else if (incomeInp>50271){
        afterTax = midPer(incomeInp);
    }
    else if (incomeInp>12751){
        afterTax = lowPer(incomeInp);
    }
    else{
        afterTax = incomeInp;
    }
    
    //Statements for determing NI bracket
    if (ageInp>65){
        afterTaxNi = afterTax;
    }
    else{
        afterTaxNi = niFunc(afterTax);
    }

    
    console.log(afterTaxNi);
};

function savingsCalc(){
    
};