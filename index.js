let selected = 0; //seat selected
let totalSeat = 32; //total seats
let totalprice = 0;
const seats = document.querySelectorAll('.seat');
const seatCount = document.querySelector('#seatCount');
const booked = document.querySelector('#booked');
const table = document.querySelector('.tabletwo')
const price = document.querySelector('#price')
const discountprice = document.querySelector('#discount-price');
const input_coupon = document.querySelector('.coupon-inp-btn');


// seat color change
function seatselected(seat) {
    seat.style.backgroundColor = "#1DD100";
    seat.style.color = "#ffffff";
    seat.disabled = 'true';
}

// show left seat
function left_selectedseat(selected, totalSeat) {
    booked.textContent = `${selected}`
    seatCount.textContent = `${totalSeat} Seats left` //show seat left

}


// disable phon number field
function disablePhonenumber() {
    if (selected === 0) {
        phone.setAttribute('disabled', 'true');
    } else {
        phone.removeAttribute('disabled');
    }
}

// taken seat view
function takenseatadded(seat) {
    //   list of taken seat
    const newTr = document.createElement('tr');

    newTr.innerHTML = `<td>${seat.id}</td>
                      <td>Economy</td>
                      <td>550</td>`;
    table.appendChild(newTr);

}

// total prices and discount price update
function calPrice() {
    // count money

    totalprice = selected * 550;
    price.textContent = `BDT ${totalprice}`;
    discountprice.textContent = `BDT ${totalprice}`;

}

//disable copon
function disabledcoupon() {
    if (selected === 0) {
        input_coupon.setAttribute('disabled', 'true');
    } else {
        input_coupon.removeAttribute('disabled');
    }
};



// clicking on seat button
seats.forEach(seat => {

    seat.addEventListener('click', () => {

        selected++;
        totalSeat--;

        seatselected(seat);
        left_selectedseat(selected, totalSeat);
        disablePhonenumber(selected);
        takenseatadded(seat);
        calPrice(selected);
        disabledcoupon(selected);

        //select atmost 4
        if (selected == 4) {
            seats.forEach(seat => {
                seat.disabled = 'true';
            })
        }
    })

})


// enable coupn button
const coupn = document.querySelector('.coupon-inp');
const button = document.querySelector('.coupon-inp-btn');
const msg = document.querySelector('#thanku');
const msgalert = document.querySelector('#wrong');


// coupn section hidden 
const section = document.querySelector('.input-secttioncpn');
let discount = 0;

function applybutton(){
    if (coupn.value == 'NEW15' || coupn.value == 'Couple 20') {

        section.setAttribute('hidden', 'true');
        msg.removeAttribute('hidden');

        if (coupn.value == 'NEW15') {
            discount = totalprice - totalprice * 0.15;
            discountprice.textContent = `BDT ${discount}`
        }
        else {
            discount = totalprice - totalprice * 0.20;
            discountprice.textContent = `BDT ${discount}`
        }
    } 
 else {
        msgalert.removeAttribute('hidden');
    }
}

button.addEventListener('click', () => {
    applybutton();
});



// form-fiiled or next button disable
const nameinp = document.querySelector('.name');
const phone = document.querySelector('.phone');
const email = document.querySelector('.email');
const next = document.querySelector('.next');

function checkInputs() {
    if (nameinp.value && phone.value && email.value) {
            next.removeAttribute('disabled');
    };
}

nameinp.addEventListener('input', checkInputs);
phone.addEventListener('input', checkInputs);
email.addEventListener('input', checkInputs);

// reload window 
next.addEventListener('click', function () {
    setTimeout(function () {
        location.reload();
    }, 4000);
});



