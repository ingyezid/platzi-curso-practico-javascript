// const precioOriginal = 120;

// const descuento = 18;

function calcularPrecioConDescuento(precio, descuento){

    const porcentajePrecioConDescuento = 100 - descuento;

    const precioConDescuento = ( precio * porcentajePrecioConDescuento) / 100;
    
    return precioConDescuento;
}


const coupons = [
    {
        name: "JuanDC_es_Batman",
        discount: 15,
    },
    {
        name: "pero_no_le_digas_a_nadie",
        discount: 30,
    },
    {
        name: "es_un_secreto",
        discount: 25,
    }
];

// console.log({
//     precioOriginal,
//     descuento,
//     porcentajePrecioConDescuento,
//     precioConDescuento
// })




function onClickButtonPriceDiscount() {

    const inputPrice = document.getElementById("InputPrice");
    const priceValue = Number(inputPrice.value);
    
    const inputDiscount = document.getElementById("InputDiscount");
    const discountValue = Number(inputDiscount.value);

    const inputCoupon = document.getElementById("InputCoupon");
    const couponValue = inputCoupon.value;

    const isCouponValueValid = function (coupon) {
        return coupon.name === couponValue;
    };    
    const userCoupon = coupons.find(isCouponValueValid);
    
    let precioConDescuento;
    if (!userCoupon) {
        alert("El cupón '" + couponValue + "' no es válido");
        precioConDescuento = calcularPrecioConDescuento(priceValue,discountValue);
    } else {
        const descuento = userCoupon.discount;
        precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);
    }    

    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento son: $" + String(precioConDescuento);

}