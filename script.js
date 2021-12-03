
let UserKmValue = prompt ("inserisci i km che vuoi percorrere");
let UserAgeValue = prompt ("Inserisci la tua età")
let KmCost = UserKmValue * 0.21;


if (UserKmValue != 0){
    if (UserAgeValue < 18){
       discount = 20;
    }
    else if (UserAgeValue => 65){
       discount = 40;
    }
    else{
       discount = 0;
    }
}
let DiscountValue = (KmCost/100) * discount;
let BigliettoValue = (KmCost - DiscountValue);


document.getElementById("costobiglietto").innerHTML = BigliettoValue.toFixed(2) + "€";