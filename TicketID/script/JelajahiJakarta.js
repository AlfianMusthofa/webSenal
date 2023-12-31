const fileNumbers = [1];

$(document).ready(function () {
    fileNumbers.forEach(function (number) {
        $.getJSON('JSON/data-jakarta' + number + '.json', function (data) {
            $.each(data, function (i, data) {
                $('#JelajahiJakarta' + number).append(`<a href="#">
                <div class="card">
                    <img src="image/Jelajahi Jakarta/${data.image}">
                    <div class="caption">
                        <p class="title">${data.destination}</p>
                        <div class="details">
                            <p class="tanggal">${data.date}</p>
                            <div class="maskapai">
                                <img src="image/Jelajahi Jakarta/${data['maskapai-image']}">
                                <p class="maskapai-name">${data['maskapai-name']}</p>
                            </div>
                            <p class="kelas">${data.class}</p>
                        </div>
                        <div class="harga">
                            <p>Mulai dari</p>
                            <h3>${data.price}</h3>
                        </div>
                    </div>
                    <div class="pp">
                        <p>SEKALI JALAN</p>
                    </div>
                    <div class="disc">
                        <p>Domestic Deals</p>
                    </div>
                </div>
            </a>`);
            });
        });
    });
});


$.getJSON('JSON/data-jakarta2.json', function (data) {
    $.each(data, function (i, data) {
        $('#JelajahiJakarta2').append(`<a href="#">
        <div class="card">
            <img src="image/Jelajahi Jakarta/${data.image}">
            <div class="caption">
                <div class="name">
                    <h3>${data.name}</h3>
                </div>
                <div class="rating">
                    <div class="star-img">
                        ${data.rating}
                    </div>
                    <p class="address">${data.address}</p>
                </div>
                <div class="review">
                    <i class="fa-solid fa-award"></i>
                    <p>${data.review}</p>
                </div>
                <div class="price">
                    <p>${data["last-price"]}</p>
                    <h3>${data["new-price"]}</h3>
                </div>
            </div>
        </div>
    </a>`);
    })
});

$.getJSON('JSON/data-jakarta3.json', function (data) {
    $.each(data, function (i, data) {
        $('#jakarta3').append(`<a href="#">
        <div class="card">
            <img src="image/Jelajahi Jakarta/${data.image}">
            <div class="caption">
                <h3 class="sub-title">${data.name}</h3>
                <div class="address">
                    <p>${data.address}</p>
                </div>
                <div class="review">
                    <i class="fa-solid fa-award"></i>
                    <p>${data.review}</p>
                </div>
                <div class="price">
                    <h3>${data.price}</h3>
                </div>
            </div>
        </div>
    </a>`)
    })
})

$(document).ready(function() {
    for (let i = 1; i <= 3; i++) { 
        $('.button' + i).on('click', function() {
            $('.button' + i).removeClass('active');
            $('.button' + i).css('backgroundColor', 'transparent');
            $('.button' + i).css('border', '1px solid #bfbfbf');
            $(this).addClass('active');
            $(this).css('backgroundColor', '#cce6ff');
            $(this).css('border', '1px solid #007bff');

            let tempatName = $(this).html();
            console.log(tempatName);

            $.getJSON('JSON/data-jakarta3.json', function(data) {
                let content = '';
                $.each(data, function(j, data) {
                    if (data.category == tempatName) {
                        content += `<a href="#">
                        <div class="card">
                            <img src="image/Jelajahi Jakarta/${data.image}">
                            <div class="caption">
                                <h3 class="sub-title">${data.name}</h3>
                                <div class="address">
                                    <p>${data.address}</p>
                                </div>
                                <div class="review">
                                    <i class="fa-solid fa-award"></i>
                                    <p>${data.review}</p>
                                </div>
                                <div class="price">
                                    <h3>${data.price}</h3>
                                </div>
                            </div>
                        </div>
                    </a>`
                    }
                });
                
                $('#jakarta3').html(content);
            });
        });
    }
});