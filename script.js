//------------------ Header menu handler ------------------

let moveTo;
let curPos;

const links=Array.from(document.querySelectorAll('.link'));
let coordsY = links.map(item=>{
    return document.querySelector(item.getAttribute('href')).getBoundingClientRect().top + window.pageYOffset - 90;
})
coordsY.push(document.body.offsetHeight);

window.addEventListener('scroll', scroll);

document.getElementById('menu').addEventListener('click', event => {
    links.map((item) => {
        document.getElementById(item.id).classList.remove('active');
    })
    document.getElementById(event.target.id).classList.add('active');

    event.preventDefault();
    curPos = self.pageYOffset;
    window.removeEventListener('scroll', scroll);
    moveTo=coordsY[Number(event.target.id[4]) - 1 ];
    window.scrollBy({ top: moveTo - curPos, behavior: 'smooth' });
    setTimeout(() => {
        window.addEventListener('scroll', scroll);
    }, 1000); 
})

function scroll() {
    curPos = self.pageYOffset;
    
    for (let i=1; i<=links.length;i++) {
        if (curPos>=coordsY[i-1] && curPos<coordsY[i]) {
            links.map((item) => {
                document.getElementById(item.id).classList.remove('active');
            })
            document.getElementById(`link${i}`).classList.add('active');
        }
    }
}

//------------------ Portfolio menu handler ------------------
let shift = 1;
document.getElementById('nav-menu').addEventListener('click', event => {
    if (event.target.id.match('item')) {
        const arr=document.querySelectorAll('.nav-menu__item');
        Array.from(arr).map((item) => {
            document.getElementById(item.id).classList.remove('active_item');
        })
        document.getElementById(event.target.id).classList.add('active_item');


        const example=Array.from(document.querySelectorAll('.example-field__item'));
        let last=example[0].cloneNode(true);
        example[0].remove();
        example[11].after(last);
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
let x = 0;

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



