
let selected=0; //seat selected
let totalSeat = 12; //total seats
let totalprice = 0;

const seats = document.querySelectorAll('.seat');
const seatCount= document.querySelector('#seatCount');
const booked= document.querySelector('#booked');
const table = document.querySelector('.tabletwo')

const price = document.querySelector('#price')


seats.forEach(seat =>{
    
    seat.addEventListener('click',()=>{
      selected++;
      totalSeat--; // button counts decrease
      booked.textContent =`${selected}`
      seatCount.textContent = `${totalSeat} Seats left` //show seat left


      seat.style.backgroundColor="#1DD100"; //color change
      seat.style.color = "#ffffff"
      seat.disabled = 'true' //preventing clicking twice
      if(selected == 4){  // seat clicked at most 4
         seats.forEach(seat =>{
            seat.disabled = 'true'
         });
      }
 
    //   list of taken seat
      const newTr = document.createElement('tr');

      newTr.innerHTML= `<td>${seat.id}</td>
                          <td>Economy</td>
                          <td>550</td>`;
      table.appendChild(newTr);



// count money

 totalprice = selected*550;
price.textContent = `BDT ${totalprice}`

    
    } 
    )



})


// form-fiiled or not

const nameinp = document.querySelector('.name');
const phone = document.querySelector('.phone');
const email = document.querySelector('.email');
const next = document.querySelector('.next');

function checkInputs() {
    if (nameinp.value && phone.value && email.value) {
        next.removeAttribute('disabled')
    };
}

nameinp.addEventListener('input', checkInputs);
phone.addEventListener('input', checkInputs);
email.addEventListener('input', checkInputs);



// enable coupn button
const coupn = document.querySelector('.coupon-inp');
const button = document.querySelector('.coupon-inp-btn');
const msg = document.querySelector('#thanku');

function checkCoupnsinpgiven() {
    if (coupn.value) {
        button.removeAttribute('disabled')
    }   
    else{
        button.setAttribute('disabled', 'true');
    }
}
coupn.addEventListener('input', checkCoupnsinpgiven);
checkCoupnsinpgiven();


// coupn section hidden 
const section = document.querySelector('.input-secttioncpn');
const discountprice =document.querySelector('#discount-price');
let discount = 0;

button.addEventListener('click', () => {
    console.log(coupn.value);
    if (coupn.value == 'NEW15' || coupn.value == 'Couple 20') {
        
        section.setAttribute('hidden', 'true');
        msg.removeAttribute('hidden');

        if(coupn.value == 'NEW15'){
            discount = totalprice - totalprice*0.15;
            discountprice.textContent = `BDT ${discount}`
        }
        else{
            discount = totalprice - totalprice*0.20;
            discountprice.textContent = `BDT ${discount}`
        }

    }else{
        alert("Wrong Coupon");    }
});

