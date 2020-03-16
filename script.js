//------------------ Header menu handler ------------------

document.getElementById('menu').addEventListener('click', event => {
    const arr=document.querySelectorAll('.link');
    Array.from(arr).map((item) => {
        document.getElementById(item.id).classList.remove('active');
    })
    document.getElementById(event.target.id).classList.add('active');
})

//------------------ Portfolio menu handler ------------------
let shift = 1;
document.getElementById('nav-menu').addEventListener('click', event => {
    if (event.target.id.match('item')) {
        const arr=document.querySelectorAll('.nav-menu__item');
        Array.from(arr).map((item) => {
            document.getElementById(item.id).classList.remove('active_item');
        })
        document.getElementById(event.target.id).classList.add('active_item');


        const example=document.querySelectorAll('.example-field__item');
        
        Array.from(example).map((item,index) => {
            document.querySelector(`.example-field__item:nth-child(${index+1})`).style.backgroundImage = 
                `url(./assets/image/portfolio-images/${(index+shift+12)%12+1}.jpg)`;
        })
        shift += 1;
    }
})

document.querySelector('.example-field').addEventListener('click', event => {
    const arr=document.querySelectorAll('.example-field__item');
    Array.from(arr).map((item) => {
        document.getElementById(item.id).style.border='none';
    })
    document.getElementById(event.target.id).style.border='5px solid #F06C64 ';
})

//------------------ Slider ------------------
let x=0; 
document.getElementById('right').addEventListener('click', event => {
    x == -1020 ? x = 1020: null;
    x=x-1020;
    move(x);
})

document.getElementById('left').addEventListener('click', event => {
    x == 1020 ? x = -1020: null;
    x=x+1020;
    move(x);
})

function move (x) {
    document.getElementById('slide1').style.left=`${x}px`;
    document.getElementById('slide2').style.left=`${x+1020}px`;
    document.getElementById('slide3').style.left=`${x-1020}px`;
}

//------------------ Phone screen off handler ------------------
document.querySelector('.vertical_phone').addEventListener('click', event => {
    if (event.target.id == 'phone1' || event.target.id == 'screen1') {
        document.getElementById('screen1').classList.toggle('screen_off')
    }
})

document.querySelector('.horizontal_phone').addEventListener('click', event => {
    if (event.target.id == 'phone2' || event.target.id == 'screen2') {
        document.getElementById('screen2').classList.toggle('screen_off')
    }
})

//------------------ Quote form handler ------------------
let name=document.getElementById('name');
let email=document.getElementById('email');
let subj=document.getElementById('subj');
let desc=document.getElementById('desc');
let popupSubj=document.getElementById('popupSubj');
let popupDesc=document.getElementById('popupDesc');

document.getElementById('sendQuote').addEventListener('submit', event => {
    event.preventDefault();
    document.getElementById('popup').classList.remove('disabled');
    if (subj.value == '') popupSubj.innerText = 'Без темы'
        else popupSubj.innerText = 'Тема: '+ subj.value;
    if (desc.value == '') popupDesc.innerText = 'Без описания'
        else popupDesc.innerText = 'Оисание: '+ desc.value;
})

document.getElementById('close').addEventListener('click', event => {
    document.getElementById('popup').classList.add('disabled');
    document.getElementById('name').value='';
    document.getElementById('email').value='';
    document.getElementById('subj').value='';
    document.getElementById('desc').value='';

})

