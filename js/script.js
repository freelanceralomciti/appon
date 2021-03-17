

var navBar = $('.mainMenu').offset().top;
$(window).scroll(function(){
    var scrolling= $(this).scrollTop();

    if(scrolling > navBar){
        $('.mainMenu').addClass('menu-fix');
    }
    else{
        $('.mainMenu').removeClass('menu-fix');
    }

});






var names= document.getElementById('name');
//var nameErrors=document.getElementById('nameError');


var emails = document.getElementById('email');
//var emailErrors =document.getElementById('emailError');
var emailRegx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

var websites = document.getElementById('website');
//var websiteErrors = document.getElementById('websiteError');

var textareas =document.getElementById('textarea');
//var textareaErrors = document.getElementById('textareaError');

function formValidation(){
    if(names.value == ''){
       // names.innerHTML = "Enter your name";
       // nameErrors.style="color:red;";
        names.focus();
        names.style="border-color:red;";
        return false;
    }

    else if(emails.value == ''){
        //emailErrors.innerHTML = "Enter an email address";
        //emailErrors.style="color:red;";
        emails.focus();
        emails.style="border-color:red;";
        return false;
    }
    else if(! emailRegx.test(emails.value)){
       // emailErrors.innerHTML = "Enter an email valid address";
        //emailErrors.style="color:red;";
        emails.focus();
        emails.style="border-color:red;";
        return false;
    }
    else if(websites.value == ''){
        //websiteErrors.innerHTML = "Please write website name .";
        //websiteErrors.style="color:red;";
        websites.focus();
        websites.style="border-color:red;";
        return false;
    }
    else if(textarea.value == ''){
        //textareasErrors.innerHTML = "Please write your messege.";
        //textareaErrors.style="color:red;";
        textareas.focus();
        textareas.style="border-color:red;";
        return false;
    }
}
function remove(){
    if(names.value != ''){
        names.innerHTML.placeholder='hiiii';
        names.style="border-color:inherit;";
    }

    if(emails.value != ''){
        //emailErrors.innerHTML='';
        emails.style="border-color:inherit;";
    }
    if(websites.value != ''){
        //websiteErrors.innerHTML='Write your messege';
        websites.style="border-color:inherit;";
    }
    if(textareas.value != ''){
        //textareaErrors.innerHTML='';
        textareas.style="border-color:inherit;";
    }
}
names.addEventListener('blur', remove);
textareas.addEventListener('blur', remove);
websites.addEventListener('blur', remove);
emails.addEventListener('blur', remove);


