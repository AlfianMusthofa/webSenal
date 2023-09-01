const buttons = document.querySelectorAll('.menu-button');
buttons.forEach(button => {
    button.addEventListener('click', function() {
        buttons.forEach(btn => {
            btn.classList.remove('active');
            btn.style.backgroundColor = '';
            btn.style.border = '';
        });

        button.classList.add('active');
        button.style.backgroundColor = '#cce6ff'; 
        button.style.border = '1px solid blue';

    });
});

const summaryButtons = document.querySelectorAll('.summary-button');

summaryButtons.forEach(button => {
    button.addEventListener('click', function() {
        summaryButtons.forEach(btn => {
            btn.classList.remove('active');
            btn.style.backgroundColor = '';
            btn.style.color = 'black';
        });

        button.style.backgroundColor = '#3399ff';
        button.style.color = 'white';
    });
});


const nav = document.querySelector('#nav');
const menu = document.querySelector('#menu');
menu.addEventListener('click', function(){
    nav.classList.toggle('active');
});

document.addEventListener('click', function(e){
    if (!menu.contains(e.target) && !nav.contains(e.target)) {
        nav.classList.remove('active');
    }
})

// $('.menu-button-hotel1').on('click', function() {
//     $('.menu-button-hotel1').removeClass('active')
//     $(this).addClass('active');

//     $('.menu-button-hotel1').css({
//         'backgroundColor':'',
//         'border':''
//     });
//     $('.menu-button-hotel1.active').css({
//         'backgroundColor':'#cce6ff',
//         'border':'1px solid blue'
//     });

//     let cityName = $(this).html();

//     $.getJSON('JSON/data-tempat1.json', function(data) {
//         let content = '';
//         $.each(data, function(i, data) {
//             if(data.city == cityName){
//                 content += '<div class="card"><a href="#"><div class="card-images"><img src="image/tempat1/'+ data.image +'"></div><div class="caption"><h3 class="hotel-name">'+data.name+'</h3><div class="starate">'+data.rating+'<p class="address">'+data.address+'</p></div><div class="review-caps">'+data.review+'</div><div class="price"><h3 class="price">'+data.price+'</h3></div></div></a></div>'
//             }
//         });
        
//         $('#daftar-tempat1').html(content);
//     });
// });

$(document).ready(function() {
    for (let i = 1; i <= 3; i++) { 
        $('.menu-button-hotel' + i).on('click', function() {
            $('.menu-button-hotel' + i).removeClass('active');
            $(this).addClass('active');

            let cityName = $(this).html();

            $.getJSON('JSON/data-tempat' + i + '.json', function(data) {
                let content = '';
                $.each(data, function(j, data) {
                    if (data.city == cityName) {
                        content += '<div class="card"><a href="#"><div class="card-images"><img src="image/tempat' + i + '/' + data.image + '"></div><div class="caption"><h3 class="hotel-name">' + data.name + '</h3><div class="starate">' + data.rating + '<p class="address">' + data.address + '</p></div><div class="review-caps">' + data.review + '</div><div class="price"><h3 class="price">' + data.price + '</h3></div></div></a></div>'
                    }
                });
                
                $('#daftar-tempat' + i).html(content);
            });
        });
    }
});


// MENDAPATKAN DATA DARI JSON

// $.getJSON('JSON/data-tempat.json', function(data) {
//     $.each(data, function(i, data) {
//         $('#daftar-tempat1').append('<div class="card"><a href="#"><div class="card-images"><img src="image/hotel/'+ data.image +'"></div><div class="caption"><h3 class="hotel-name">'+data.name+'</h3><div class="starate">'+data.rating+'<p class="address">'+data.address+'</p></div><div class="review-caps">'+data.review+'</div><div class="price"><h3 class="price">'+data.price+'</h3></div></div></a></div>');
//     })
// });

const fileNumbers = [1, 2, 3];

$(document).ready(function() {
    fileNumbers.forEach(function(number) {
        $.getJSON('JSON/data-tempat' + number + '.json', function(data) {
            $.each(data, function(i, data) {
                $('#daftar-tempat'+ number).append('<div class="card"><a href="#"><div class="card-images"><img src="image/tempat' + number + '/' + data.image + '"></div><div class="caption"><h3 class="hotel-name">'+data.name+'</h3><div class="starate">'+data.rating+'<p class="address">'+data.address+'</p></div><div class="review-caps">'+data.review+'</div><div class="price"><h3 class="price">'+data.price+'</h3></div></div></a></div>');
            });
        });
    });
});
