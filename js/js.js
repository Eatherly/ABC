$(".addrem").mousedown(function () {
    $(this).css("font-size", "15px")
})
$(".addrem").mouseup(function () {
    $(this).css("font-size", "16px")
})


class Request {

    ajax_search() {

        $.ajax({
            type: "POST",
            url: "dateRequest.php",
            data: "",
            success: function (data) {
                let apple = "apple";
                let beer = "beer";
                let water = "water";
                let cheese = "cheese";
                let arr = [apple, beer, water, cheese];
                console.log(JSON.parse(data));

                $.each(JSON.parse(data), function (key, val) {
                    console.log(val.name)
                    for (let i = 0; i <= arr.length - 1; i++) {

                        if (arr[i] == val.name) {
                            eval(val.name + "=" + val.price / 100);
                            $("." + val.name + "Price").html((eval(val.name).toFixed(2)) + "$");
                            $("." + val.name + "Rating").html(((val.voices_bal / val.voices_count).toFixed(1)));
                        }
                    }
                })


                $(".buscket").click(function () {
                    $(".shopingList").css("display", "block");
                    $(".startBalance").html(startTotal + "$");
                    $(".Pay").css("display", "block");
                })

                let total = 100;
                let startTotal = total;
                let appleCount = 0;
                let beerCount = 0;
                let waterCount = 0;
                let cheeseCount = 0;




                $(".buy").click(function Add() {
                    let temp = $(this).parent().attr("class").split(' ')[1].toLowerCase();
                    let count = $(this).parent().attr("class").split(' ')[1].toLowerCase() + "Count";
                    let temp2 = eval(count);
                    temp2++;
                    console.log(eval(count + "=" + temp2));
                    total = total - eval(temp);

                    $(".finalBalance").html(Math.round((total * 100)) / 100 + "$");
                    $(".totalPurch").html((Math.round((startTotal - (Math.round((total * 100)) / 100)) * 100) / 100) + "$");
                    console.log($(this).parent().attr("class").split(' ')[1]);
                    $("." + count).html(temp2);
                    let uPlog = ($(this).parent().attr("class").split(' ')[1]);
                    $("." + uPlog + "Total").html(Math.round((eval(temp) * temp2) * 100) / 100);

                })

                $(".undo").click(function Rem() {
                    let temp = $(this).parent().attr("class").split(' ')[1].toLowerCase();
                    let count = $(this).parent().attr("class").split(' ')[1].toLowerCase() + "Count";
                    let temp2 = eval(count);
                    temp2--;
                    if (temp2 >= 0) {
                        console.log(eval(count + "=" + temp2));
                        total = total + eval(temp);

                        $(".finalBalance").html(Math.round((total * 100)) / 100 + "$");
                        $(".totalPurch").html((Math.round((startTotal - (Math.round((total * 100)) / 100)) * 100) / 100) + "$");
                        console.log($(this).parent().attr("class").split(' ')[1]);
                        $("." + count).html(temp2);
                        let uPlog = ($(this).parent().attr("class").split(' ')[1]);
                        $("." + uPlog + "Total").html(Math.round((eval(temp) * temp2) * 100) / 100);
                    }
                })

                $(".buttonPlus").click(function () {

                    let temp = $(this).parent().attr("class").split(' ')[1].toLowerCase();
                    let count = $(this).parent().attr("class").split(' ')[1].toLowerCase() + "Count";
                    let temp2 = eval(count);
                    temp2++;
                    console.log(eval(count + "=" + temp2));
                    total = total - eval(temp);

                    $(".finalBalance").html(Math.round((total * 100)) / 100 + "$");
                    $(".totalPurch").html((Math.round((startTotal - (Math.round((total * 100)) / 100)) * 100) / 100) + "$");
                    console.log($(this).parent().attr("class").split(' ')[1]);
                    $("." + count).html(temp2);
                    let uPlog = ($(this).parent().attr("class").split(' ')[1]);
                    $("." + uPlog + "Total").html(Math.round((eval(temp) * temp2) * 100) / 100);
                })

                $(".buttonMinus").click(function Rem() {
                    let temp = $(this).parent().attr("class").split(' ')[1].toLowerCase();
                    let count = $(this).parent().attr("class").split(' ')[1].toLowerCase() + "Count";
                    let temp2 = eval(count);
                    temp2--;
                    if (temp2 >= 0) {
                        console.log(eval(count + "=" + temp2));
                        total = total + eval(temp);

                        $(".finalBalance").html(Math.round((total * 100)) / 100 + "$");
                        $(".totalPurch").html((Math.round((startTotal - (Math.round((total * 100)) / 100)) * 100) / 100) + "$");
                        console.log($(this).parent().attr("class").split(' ')[1]);
                        $("." + count).html(temp2);
                        let uPlog = ($(this).parent().attr("class").split(' ')[1]);
                        $("." + uPlog + "Total").html(Math.round((eval(temp) * temp2) * 100) / 100);

                    }
                })

                $(".Pay").click(function () {

                    if (($(".contactChoice1").prop('checked') == false) && ($(".contactChoice2").prop('checked') == false)) {
                        $(".shippingRem").css("display", "block")
                    }
                    if ($(".contactChoice2").prop('checked')) {
                        $(".shippingRem").css("display", "none");
                        $(".UPS").css("display", "block");
                        $(".Pay").css("display", "none");
                        $(".thanks").css("display", "block");
                        $(".finalBalance").html((Math.round((total * 100)) / 100) - 5 + "$");
                        $(".totalPurch").html((Math.round((startTotal + 5 - (Math.round((total * 100)) / 100)) * 100) / 100) + "$");
                        total = (Math.round((total * 100)) / 100) - 5;
                        startTotal = total;
                        appleCount = 0;
                        beerCount = 0;
                        waterCount = 0;
                        cheeseCount = 0;
                    }
                    if ($(".contactChoice1").prop('checked')) {

                        $(".shippingRem").css("display", "none");
                        $(".UPS").css("display", "none");
                        $(".Pay").css("display", "none");
                        $(".thanks").css("display", "block");
                        $(".finalBalance").html((Math.round((total * 100)) / 100) + "$");
                        $(".totalPurch").html((Math.round((startTotal - (Math.round((total * 100)) / 100)) * 100) / 100) + "$");
                        total = (Math.round((total * 100)) / 100);
                        startTotal = total;
                        appleCount = 0;
                        beerCount = 0;
                        waterCount = 0;
                        cheeseCount = 0;

                    }

                })

                $(".close1").click(function () {
                    $(".num").html("0");
                    $(".UPS").css("display", "none");
                    $(".shopingList").css("display", "none");
                    $(".totalPurch").html("0$");
                    $(".thanks").css("display", "none");
                    $(".contactChoice1").prop('checked', false);
                    $(".contactChoice2").prop('checked', false);

                })






            }
        });
    }

}

let a = new Request();
a.ajax_search();


$(".star").mouseover(function () {
    $(this).attr("src", "img/stargood.png")
    $(this).prevAll().attr("src", "img/stargood.png")
})
$(".star").mouseout(function () {
    $(this).attr("src", "img/starnotgood.png")
    $(this).prevAll().attr("src", "img/starnotgood.png")
})
$(".star").click(function () {
    let mark = $(this).index() + 1;
    let product = $(this).parent().attr("class").split(' ')[1].toLowerCase()








    $.ajax({
        type: "POST",
        url: "dateRating.php",
        data: "mark=" + mark + "&product=" + product,
        success: function (data) {
            console.log(data)
            a.ajax_search();





        }
    });


})


