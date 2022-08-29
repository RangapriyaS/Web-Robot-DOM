console.log('Hi I am from main.js');
//alert('Click Start to begin');
function initialise(){
    console.log('I am inside initialise');
    // Donot show the input and output fields of the html on load of the page.
    document.querySelector('.output').style.display='none';
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
console.log('outputElement:',outputElement);
if(outputElement == null){
  console.log('Element not found');
}
else{
    outputElement.style.display='block';
    console.log('Inside else loop');
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
    console.log('inputElement');
    //const userResponse = document.querySelector('.input');
    if(inputElement === "Yes"){
        alert('Ok we will begin now');
        const userNotify = document.createElement('p'); 
        userNotify.textContent='Please click Ready to go button';
        userQuestion.appendChild(userNotify);
       }
       else{
        alert('Ok i will wait'); 
       }
}
//alert('Hello! I am your directing Robot');

}
function selectRoom(){
const userResponse=prompt('Which room to go now? Kitchen?Pooja?Kidsroom?Bedroom?');
console.log('RoomSelected',userResponse);
if(userResponse === "Kitchen"){
 alert('Lets now go to the kitchen');
 alert('Please click Ready to go button to go to other rooms');
}
else if(userResponse === "Pooja"){
    alert('Lets now go to the Pooja room');
    alert('Please click Ready to go button to go to other rooms');
}
else if( userResponse === "Kidsroom"){
 alert('Lets go to the kids room');
 alert('Please click Ready to go button to go to other rooms');
}
else if(userResponse === "Bedroom"){
    alert('Lets go to the Bedroom');
    alert('Please click Ready to go button to go to other rooms');
}
else {
    alert('Please check the spelling of the rooms entered');
    alert('Please click Ready to go button to go to other rooms');
}
}