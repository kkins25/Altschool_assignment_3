// Mtn yellow color for background- #f7eb07
// Airtel - rgba (237, 45, 45, 1)
// glo. 41, 156, 23
// etisalat. 121, 156, 23

//----------- stop form from submitting------



// variables to collect data from DOM
        
 
const check1 = document.getElementById('check1');
const check2 = document.getElementById('check2');




//  function to hide second form
    
        function hideForm(){
            let form =document.getElementById('form2');
            form.style.display= 'none';  
        }
 // function to hide first form   
 function hideForm2(){
    let form = document.getElementById('form1');
    form.style.display= 'none';  
}

 //funtion to display 'hidden' form1
 function displayForm(){
    form1.style.display= "block"
 }
check2.addEventListener("click", displayForm);


 // funtion to display hidden form 2 
 function displayForm2(){
    form2.style.display= "block"
 }
check1.addEventListener("click", displayForm2);



// First effect - change color of shadow

// mtnBackground= document.getElementById('form1');
        // formBg.style.boxShadow="5px 5px 10px 10px yellow";

        // teamBg= document.querySelectorAll('.team').forEach((teamBg) =>{
        //     teamBg.style.backgroundColor= "yellow";
        // });

// airtelBackground= document.getElementById('form1');
        // formBg.style.boxShadow="5px 5px 10px 10px yellow";

        // teamBg= document.querySelectorAll('.team').forEach((teamBg) =>{
        //     teamBg.style.backgroundColor= "yellow";
        // });

// gloBackground= document.getElementById('form1');
        // formBg.style.boxShadow="5px 5px 10px 10px yellow";

        // teamBg= document.querySelectorAll('.team').forEach((teamBg) =>{
        //     teamBg.style.backgroundColor= "yellow";
        // });

// etiBackground= document.getElementById('form1');
        // formBg.style.boxShadow="5px 5px 10px 10px yellow";

        // teamBg= document.querySelectorAll('.team').forEach((teamBg) =>{
        //     teamBg.style.backgroundColor= "yellow";
        // });
        
//compilation of numbers 
const form1 = document.getElementById('form1');
const form2 = document.getElementById('form2');
const mtnNum = ['0803', '0806', '0703', '0903',
            '0813','0813','0816','0706',
            '0810','0814','0903','0906'];

const gloNum= ['0805','0807','0705',
                '0815','0811', '0905'];

const airteNum = ['0802','0808', '0708',
                        '0812','0701','0902'];

const etisalatNum= ['0809', '0818', '0817','0909']; 
   
   
     //  -------Program Algorith---- To check Number-------
// First Check if number contains prefix.
// If number includes prefix then alert error. 

const firstName = document.querySelector('#fname').value;

  console.log(firstName);
 let lastName = document.getElementById('lname');
 let  lname = lastName.value;
 const universal = document.getElementById('universal');
 const uniNum = universal.value;
 const prefix = document.getElementsByTagName('select');
    const numPrefix = prefix.value;
const mtn1 = document.getElementById('mtn');
   const mtn= mtn1.value;
const airtel1 = document.getElementById('airtel');
 const airtel = airtel1.value;
const glo1 = document.getElementById('glo');
    const glo = glo1.value;
const etisalat1 = document.getElementById('etisalat');
  const   etisalat = etisalat1.value;



//>> check for prefix
function checkForPrefix(){
    
    let uniLength = uniNum.length;
    if (String.uniLength > 11) {
    window.alert("remove prefix or cross check number again");
        return false;
    }
    check1.addEventListener("click", checkForPrefix);
}  
   

    console.log(uniNum);
window.alert("remove prefix or cross check number again");


    
// event listener on button 
        


