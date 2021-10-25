const incomeInp = document.querySelector('input[name=income]');
const taxYearInp = document.querySelector('input[name=tax-year]');
const ageInp = document.querySelector('input[name=age]');
const studentLoanInp = document.querySelector('input[name=student-loan]');
const pensionInp = document.querySelector('input[name=pension]');
const housingInp = document.querySelector('input[name=housing]');
const transportInp = document.querySelector('input[name=transport]');
const essentialsInp = document.querySelector('input[name=essentials]');
const funInp = document.querySelector('input[name=fun]');
const otherInp = document.querySelector('input[name=other]');

const calculateBtn = document.querySelector('button');

calculateBtn.addEventListener('click', taxesCalc); //need to change to savings calc eventually

//Fn to find Income Tax paid
function incTaxFn(a){
    if (a > 150000){
        return 47431.4 + ((a -150000)*0.45);
    }
    else if(a > 50270){
        return 7539.8 + ((a - 50270)*0.4);
    }
    else if(a > 12570){
        return (a - 12570)*0.2;
    }
    else {
        return 0;
    }
};
//Fn to find National Insurance paid
function incNiFn(a){
    let b = a/52;
    if (b > 967){
        return 52*(93.96 + ((b - 967)*0.02));
    }
    else if(b > 184){
        return 52*((b - 184)*0.12);
    }
    else{
        return 0;
    }
};

function taxesCalc(){
    let income = incomeInp.value;
    let age = ageInp.value;
    
    let incTax = incTaxFn(income);
    let incNi = 0;

    //NI not paid over 65
    if (age>65){
        incNi = 0;
    }
    else{
        incNi = incNiFn(income);
    }
    let afterTax = income - incNi - incTax;
    console.log(afterTax);
};

function savingsCalc(){
    
};