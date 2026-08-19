var remark=document.querySelector('.remark');
var btn=document.querySelector('.btn');

remark.classList.add('hide');
//let us add an event listener
btn.addEventListener('click', startguessgame) 
function startguessgame(e){
    //let us prevent the default behaviour of the button
    e.preventDefault();
    

    var remark=document.querySelector('.remark');
    var guessfruit=document.querySelector('#guessfruit').value;
    var fruitname=document.querySelector('.fruitname');
    var remarkstatement=document.querySelector('.remarkstatement');
    var FruitImg=document.querySelector('.FruitImg');

    var fruits=['banana','apple','coconut','pawpaw','pear','watermelon']

    //form validation
    if(guessfruit==""){
        setTimeout(() => {
            remark.classList.remove('hide');
            remarkstatement.innerHTML="Please enter a fruit name";
            remarkstatement.style.color="red";

            setTimeout(() => {
                remark.classList.add('hide');
            }, 5000);
        }, 500);
    }
    else{
        remark.classList.remove('hide');
        var indexnumber=Math.round(Math.random()*(fruits.length-1));
        fruitname.innerHTML=fruits[indexnumber];
        guessfruit=guessfruit.toUpperCase();

        if(guessfruit==(fruitname.innerHTML.toUpperCase())){
            remarkstatement.innerHTML="Yes you guessed right";
            remark.style.backgroundColor="green";
        }
        else{
            remarkstatement.innerHTML="Sorry, that's not the right fruit!";
            remark.style.backgroundColor="red";
        }
        FruitImg.src=fruits[indexnumber]+".png";
    }
}