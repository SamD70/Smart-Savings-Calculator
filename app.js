const incomeInp = document.querySelector('input[name=income]');
const ageInp = document.querySelector('input[name=age]');
const studentLoanInp = document.querySelector('input[name=student-loan]');
const pensionInp = document.querySelector('input[name=pension]');
const housingInp = document.querySelector('input[name=housing]');
const transportInp = document.querySelector('input[name=transport]');
const essentialsInp = document.querySelector('input[name=essentials]');
const funInp = document.querySelector('input[name=fun]');
const otherInp = document.querySelector('input[name=other]');

const calculateBtn = document.querySelector('button');


//EVENT LISTENERS   
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

//Fns to find Student Loan Contribution

//sets loan type initially to none
var loanType = document.getElementById("student-loan-list").value;

//this function changes loan type after 'onchange' event 
function whichLoan(){
    loanType = document.getElementById("student-loan-list").value;
}
//this calculates the contribution paid
function loanCalc(a){
    if (loanType == 'plan1'){
        return 12*(((a/12)-1657)*0.09);
    }
    if (loanType == 'plan2'){
        return 12*(((a/12)-2274)*0.09);
    }
    else{
        return 0;
    }
}

//Fn to find pension contribution
function pensionCalc(a){
    let pensionPct = pensionInp.value;
    return ((pensionPct/100)*a);
}


function taxesCalc(){
    
    let age = ageInp.value;
    let income = incomeInp.value;

    let incTax = incTaxFn(income);
    let incNi = 0;

    let incPens = pensionCalc(income);

    let incLoan = loanCalc(income);
    //NI not paid over 65
    if (age>65){
        incNi = 0;
    }
    else{
        incNi = incNiFn(income);
    }
    let afterTax = income - incNi - incTax - incLoan - incPens;
    console.log(afterTax);

};

