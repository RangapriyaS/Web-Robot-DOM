console.log('Hi I am from main.js');
//alert('Click Start to begin');
function initialise(){
    console.log('I am inside initialise');
    // Donot show the input and output fields of the html on load of the page.
    const outputElement = document.querySelector('.output');
    if(outputElement == null){
        console.log('Element not found');
    }
    else{
     outputElement.style.display='none';
    }

    //document.querySelector('.output').style.display='none';
   // document.querySelector('.input').style.display='none';
    const inputElement = document.querySelector('.input');
    if(inputElement == null)
    {
        console.log('Element not found');

    }
    else{
        console.log(inputElement);
        inputElement.style.display='none';
    }
}

function onButtonClick(){
//console.log('Hello! I am your directing Robot');
const outputElement = document.querySelector('.output');
outputElement.style.display='block';
    //Creating element for asking questions, replacing a prompt element
    //const userResponse=prompt('Are you ready for instructions? Yes or No');
    const userQuestion = document.createElement('p');
    userQuestion.textContent = 'Are you ready for instructions? Yes or No'
    //console.log('UserInput:',userResponse);
    const parentElement=document.querySelector('.output');
    parentElement.appendChild(userQuestion);
    userQuestion.style.color='green';
    const inputElement = document.querySelector('.input');
    inputElement.style.display='block';
    inputElement.addEventListener('keydown',onKeyPress);
    
   // console.log('userResponse');
    //const userResponse = document.querySelector('.input');
    
}
//alert('Hello! I am your directing Robot');



function onKeyPress(event){
    console.log('Key pressed',event.key);
    if(event.key === 'Enter'){
        const inputElement = document.querySelector('.input input');
        const userResponse = inputElement.value;
        console.log('userResponse is ',userResponse);
        if(userResponse === 'Yes'){
            //alert('Ok we will begin now');
            const firstLine=document.querySelector('.output span');
            firstLine.style.display='none';
            const secondLine = document.querySelector('.output p');
            secondLine.style.display='none';
            const inputElement=document.querySelector('.input');
            inputElement.style.display='none';
            const userNotify = document.createElement('p');
            const parentElement=document.querySelector('.output');
            parentElement.appendChild(userNotify); 
            userNotify.textContent='Please click Ready to go button'; 
            userNotify.style.display='block';           
           }
           else if(userResponse === 'No'){
            alert('Ok i will wait'); 
           }
           else if(userResponse === "Kitchen"){
            gotoKitchen();
         
         
        }
        else if(userResponse === "Pooja"){
            gotoPooja();
            
            
        }
        else if( userResponse === "Kidsroom"){
        gotoKids();
         
        }
        else if(userResponse === "Bedroom"){
           gotoBedroom();
            
           
        }
        else {
            alert('Please check the spelling');
            alert('Please click Ready to go button to go to other rooms');
        }
    }

}
function selectRoom(event){
    const userQuestion = document.createElement('p');
    userQuestion.textContent = 'Which room to go now? Kitchen?Pooja?Kidsroom?Bedroom?';
    const parentElement=document.querySelector('.output');
    parentElement.appendChild(userQuestion);
    userQuestion.style.color='green';
    const inputElement = document.querySelector('.input');
    inputElement.style.display='block';
    inputElement.addEventListener('keydown',onKeyPress);
}

    





function gotoKitchen(){
alert('Lets now go to the kitchen');
//alert('Please click Ready to go button to go to other rooms');
}
function gotoPooja(){
alert('Lets now go to the Pooja room');
//alert('Please click Ready to go button to go to other rooms');
}
function gotoKids(){
alert('Lets go to the kids room');
 //alert('Please click Ready to go button to go to other rooms');
}
function gotoBedroom(){
alert('Lets go to the Bedroom');
 //alert('Please click Ready to go button to go to other rooms');
}