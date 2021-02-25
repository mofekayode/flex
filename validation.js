const inputs = document.querySelectorAll('input');
const FullName = document.querySelector('input[name="FullName"]');
const Email = document.querySelector('input[name="Email"]');
const City = document.querySelector('input[name="City"]');
const State = document.querySelector('input[name="State"]');
const Zip = document.querySelector('input[name="Zip"]');
const Street = document.querySelector('input[name="Street"]');
const DOB = document.querySelector('input[name="DOB"]');

const warning = document.querySelector('.warning');
const warning2 = document.querySelector('.warning2');

const Continue = document.querySelector('#continue');
const Play = document.querySelector('#play');
const preident = document.querySelector('#preident');
const postident = document.querySelector('#postident');

const patterns = {
    Email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/ 
};
let emailvalid = false
let agevalid = false
function validate(field, regex){

    if(regex.test(field.value)){
        field.style.outlineColor = '#5cb85c'
        field.style.border = '2px solid #5cb85c '
        emailvalid = true
    } else {
        field.style.outlineColor = '#f0ad4e'
        field.style.border = '2px solid #f0ad4e '
    }

}
function isinfo(field){

    if(field.value){
        field.style.outlineColor = '#5cb85c'
        field.style.border = '2px solid #5cb85c '
       
    } else {
        field.style.outlineColor = '#f0ad4e'
        field.style.border = '2px solid #f0ad4e '
    }

}
function oldenough(date){

   var date = new Date(date);
   var milliseconds = date.getTime(); 
   let diff =Date.now()-milliseconds 
   if(diff>5.676e+11){
  agevalid = true
  warning2.innerHTML=''

   }
   else{
  agevalid = false
   }

    }

inputs.forEach(input=>{
    input.addEventListener('focus',()=>{
        input.style.outlineColor = '#f0ad4e'
   
        // input.style.border = '2px solid #f0ad4e '
    })
})
inputs.forEach(input=>{
    input.addEventListener('keyup',()=>{
        isinfo(input)
    })
})

Email.addEventListener('keyup', (e) => {

    validate(Email, patterns['Email']);
});

DOB.addEventListener('change',()=>{
    DOB.style.outlineColor = '#5cb85c'
    DOB.style.border = '2px solid #5cb85c'
    oldenough(DOB.value)
})

Continue.addEventListener('click',()=>{
    if (emailvalid&&FullName.value){
        preident.style.display='none'
        postident.style.display='block'
    }
    else if (!emailvalid&&!FullName.value){
        warning.innerHTML='Please fill in all forms'
    }
    else if (!emailvalid){
        warning.innerHTML='Please enter a valid email address'
    }
    else if (!FullName.value){
        warning.innerHTML='Please enter Full Name'
    }
   
   
})
Play.addEventListener('click',()=>{

    if (City.value&&State.value&&DOB.value&&Zip.value&&Street.value&&agevalid){
        window.location.href="thankYou.html";
    }
    else if(!City.value||!State.value||!DOB.value||!Zip.value||!Street.value) {
        warning2.innerHTML='Please fill in all forms'
    }
    else if (!agevalid){
        warning2.innerHTML='Sorry you have to be 18+ to continue :('
    }
    
})