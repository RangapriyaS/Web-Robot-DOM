console.log('Hi I am from main.js');
alert('Click Start to begin');
function onButtonClick(){
//console.log('Hello! I am your directing Robot');
alert('Hello! I am your directing Robot');
const userResponse=prompt('Are you ready for instructions? Yes or No');
console.log('UserInput:',userResponse);
if(userResponse === "Yes"){
 alert('Ok we will begin now');
}
else{
 alert('Ok i will wait'); 
}
alert('Please click Ready to go button');
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