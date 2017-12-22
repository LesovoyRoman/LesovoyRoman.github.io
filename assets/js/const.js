function ChangeTextFront() {
    var rarr=document.getElementsByName("font");
    if(rarr[2].checked){
        var newText = document.getElementById("NameTextFront").value;
        document.getElementById("TextFront").innerHTML=newText;
        var ff = document.getElementById("TextFront").value;
        var er = $('.add_item').data('text1');
        $('.add_item').data('text1',newText);
    }
    else{
        var str = document.getElementById("NameTextFront").value;
        var space = '-';
        var link = '';
        var transl = {
            'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd', 'е': 'e', 'ё': 'e', 'ж': 'zh',
            'з': 'z', 'и': 'i', 'й': 'j', 'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n',
            'о': 'o', 'п': 'p', 'р': 'r','с': 's', 'т': 't', 'у': 'u', 'ф': 'f', 'х': 'h',
            'ц': 'c', 'ч': 'ch', 'ш': 'sh', 'щ': 'sh','ъ': space,
            'ы': 'y', 'ь': space, 'э': 'e', 'ю': 'yu', 'я': 'ya'
        }
        if (str != '')
            str = str.toLowerCase();

        for (var i = 0; i < str.length; i++){
            if (/[а-яё]/.test(str.charAt(i))){ // заменяем символы на русском
                link += transl[str.charAt(i)];
            } else if (/[a-z0-9]/.test(str.charAt(i))){ // символы на анг. оставляем как есть
                link += str.charAt(i);
            } else {
                if (link.slice(-1) !== space) link += space; // прочие символы заменяем на space
            }
        }
        document.getElementById("TextFront").innerHTML=link;
        var ff = document.getElementById("TextFront").value;
        var er = $('.add_item').data('text1');
        $('.add_item').data('text1',(link));
    }


    var NameTextFront = $('#NameTextFront').val();
    if(NameTextFront.length != 0) {
        var SelectType=document.getElementsByName("title");
        if (SelectType[0].checked){
            var SelectColor=document.getElementsByName("ColorFont");
            if (SelectColor[0].checked || SelectColor[1].checked){
                var price = $('#type-1').attr('data-price');
                $('#type-1').val(parseInt(price)+250);
                $(".price strong").text($("#type-1").val());
                var er = $('.add_item').data('price');
                $('.add_item').data('price',($("#type-1").val()));
            } else {
                var price = $('#type-1').attr('data-price');
                $('#type-1').val(parseInt(price)+150);
                $(".price strong").text($("#type-1").val());
                var er = $('.add_item').data('price');
                $('.add_item').data('price',($("#type-1").val()));
            }
        } else {}
        var SelectType=document.getElementsByName("title");
        if (SelectType[1].checked){
            var SelectColor=document.getElementsByName("ColorFont");
            if (SelectColor[0].checked || SelectColor[1].checked){
                var price = $('#type-2').attr('data-price');
                $('#type-2').val(parseInt(price)+250);
                $(".price strong").text($("#type-2").val());
                var er = $('.add_item').data('price');
                $('.add_item').data('price',($("#type-2").val()));
            } else {
                var price = $('#type-2').attr('data-price');
                $('#type-2').val(parseInt(price)+150);
                $(".price strong").text($("#type-2").val());
                var er = $('.add_item').data('price');
                $('.add_item').data('price',($("#type-2").val()));
            }
        } else {}
        var SelectType=document.getElementsByName("title");
        if (SelectType[2].checked){
            var SelectColor=document.getElementsByName("ColorFont");
            if (SelectColor[0].checked || SelectColor[1].checked){
                var price = $('#type-3').attr('data-price');
                $('#type-3').val(parseInt(price)+250);
                $(".price strong").text($("#type-3").val());
                var er = $('.add_item').data('price');
                $('.add_item').data('price',($("#type-3").val()));
            } else {
                var price = $('#type-3').attr('data-price');
                $('#type-3').val(parseInt(price)+150);
                $(".price strong").text($("#type-3").val());
                var er = $('.add_item').data('price');
                $('.add_item').data('price',($("#type-3").val()));
            }
        } else {}
    } else {
        var SelectType=document.getElementsByName("title");
        if (SelectType[0].checked){
            var SelectColor=document.getElementsByName("ColorFont");
            if (SelectColor[0].checked || SelectColor[1].checked){
                var price = $('#type-1').attr('data-price');
                $('#type-1').val(parseInt(price)+100);
                $(".price strong").text($("#type-1").val());
                var er = $('.add_item').data('price');
                $('.add_item').data('price',($("#type-1").val()));
            } else {
                var price = $('#type-1').attr('data-price');
                $('#type-1').val(price);
                $(".price strong").text($("#type-1").val());
                var er = $('.add_item').data('price');
                $('.add_item').data('price',($("#type-1").val()));
            }
        } else {}
        var SelectType=document.getElementsByName("title");
        if (SelectType[1].checked){
            var SelectColor=document.getElementsByName("ColorFont");
            if (SelectColor[0].checked || SelectColor[1].checked){
                var price = $('#type-2').attr('data-price');
                $('#type-2').val(parseInt(price)+100);
                $(".price strong").text($("#type-2").val());
                var er = $('.add_item').data('price');
                $('.add_item').data('price',($("#type-2").val()));
            } else {
                var price = $('#type-2').attr('data-price');
                $('#type-2').val(price);
                $(".price strong").text($("#type-2").val());
                var er = $('.add_item').data('price');
                $('.add_item').data('price',($("#type-2").val()));
            }
        } else {}
        var SelectType=document.getElementsByName("title");
        if (SelectType[2].checked){
            var SelectColor=document.getElementsByName("ColorFont");
            if (SelectColor[0].checked || SelectColor[1].checked){
                var price = $('#type-3').attr('data-price');
                $('#type-3').val(parseInt(price)+100);
                $(".price strong").text($("#type-3").val());
                var er = $('.add_item').data('price');
                $('.add_item').data('price',($("#type-3").val()));
            } else {
                var price = $('#type-3').attr('data-price');
                $('#type-3').val(price);
                $(".price strong").text($("#type-3").val());
                var er = $('.add_item').data('price');
                $('.add_item').data('price',($("#type-3").val()));
            }
        } else {}
    }
    var textLength = $('#TextFront').text().length;
    var fontSize = Math.min(50, (4 / textLength) * 58);
    $('#TextFront').css('font-size', fontSize+'px');


}

function ChangeTextBack() {
    var rarr=document.getElementsByName("font");
    if(rarr[2].checked){
        var newText = document.getElementById("name").value;
        document.getElementById("tb1").innerHTML=newText;
        var ff = document.getElementById("tb1").value;
        var er = $('.add_item').data('textback');
        $('.add_item').data('textback', newText);
    }
    else{
        var str = document.getElementById("name").value;
        var space = '-';
        var link = '';
        var transl = {
            'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd', 'е': 'e', 'ё': 'e', 'ж': 'zh',
            'з': 'z', 'и': 'i', 'й': 'j', 'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n',
            'о': 'o', 'п': 'p', 'р': 'r','с': 's', 'т': 't', 'у': 'u', 'ф': 'f', 'х': 'h',
            'ц': 'c', 'ч': 'ch', 'ш': 'sh', 'щ': 'sh','ъ': space,
            'ы': 'y', 'ь': space, 'э': 'e', 'ю': 'yu', 'я': 'ya'
        }
        if (str != '')
            str = str.toLowerCase();

        for (var i = 0; i < str.length; i++){
            if (/[а-яё]/.test(str.charAt(i))){ // заменяем символы на русском
                link += transl[str.charAt(i)];
            } else if (/[a-z0-9]/.test(str.charAt(i))){ // символы на анг. оставляем как есть
                link += str.charAt(i);
            } else {
                if (link.slice(-1) !== space) link += space; // прочие символы заменяем на space
            }
        }
        document.getElementById("tb1").innerHTML=link;
        var ff = document.getElementById("tb1").value;
        var er = $('.add_item').data('textback');
        $('.add_item').data('textback',(link));
    }

    if($('#TextSmall').prop('checked')) {
        var textLength = $('#tb1').text().length;
        var fontSize = Math.min(50, (4 / textLength) * 58);
        $('#tb1').css('font-size', fontSize+'px');
    } else {
        var textLength = $('#tb1').text().length;
        var fontSize = Math.min(50, (4 / textLength) * 58);
        $('#tb1').css('font-size', fontSize+'px');
    }
}

function ChangeTextBackSmall() {
    var rarr=document.getElementsByName("font");
    if(rarr[2].checked){
        var newText = document.getElementById("name2").value;
        document.getElementById("TextBackSmall").innerHTML=newText;
        var ff = document.getElementById("tb1").value;
        var er = $('.add_item').data('text2');
        $('.add_item').data('text2',newText);
    }
    else{
        var str = document.getElementById("name2").value;
        var space = '-';
        var link = '';
        var transl = {
            'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd', 'е': 'e', 'ё': 'e', 'ж': 'zh',
            'з': 'z', 'и': 'i', 'й': 'j', 'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n',
            'о': 'o', 'п': 'p', 'р': 'r','с': 's', 'т': 't', 'у': 'u', 'ф': 'f', 'х': 'h',
            'ц': 'c', 'ч': 'ch', 'ш': 'sh', 'щ': 'sh','ъ': space,
            'ы': 'y', 'ь': space, 'э': 'e', 'ю': 'yu', 'я': 'ya'
        }
        if (str != '')
            str = str.toLowerCase();

        for (var i = 0; i < str.length; i++){
            if (/[а-яё]/.test(str.charAt(i))){ // заменяем символы на русском
                link += transl[str.charAt(i)];
            } else if (/[a-z0-9]/.test(str.charAt(i))){ // символы на анг. оставляем как есть
                link += str.charAt(i);
            } else {
                if (link.slice(-1) !== space) link += space; // прочие символы заменяем на space
            }
        }

        document.getElementById("TextBackSmall").innerHTML=link;
        var ff = document.getElementById("TextBackSmall").value;
        var er = $('.add_item').data('text2');
        $('.add_item').data('text2',(link));

        var textLength = $('#TextBackSmall').text().length;
        var fontSize = Math.min(30, (4 / textLength) * 55);
        $('#TextBackSmall').css('font-size', fontSize+'px');
    }
}
//Номер
function numer() {
    document.getElementById("tb2").innerHTML=document.getElementById("number").value;
    var ff = document.getElementById("number").value;
    var er = $('.add_item').data('number');
    $('.add_item').data('number',(ff));
    var textLength = $('#tb2').text().length;
    var fontSize = Math.min(110, (2 / textLength) * 125);
    $('#tb2').css('font-size', fontSize+'px');

}

//Цвет текста
function ct1(){
    document.getElementById("tb1").className = 'tc-1';
    document.getElementById("tb2").className = 'tc-1';
    document.getElementById("TextBackSmall").className = 'tc-1';
    document.getElementById("TextFront").className = 'tc-1';
    var er = $('.add_item').data('textcolor');
    $('.add_item').data('textcolor',('Голограмма золото'));

    var NameTextFront = $('#NameTextFront').val();
    if(NameTextFront.length != 0) {
        var SelectType=document.getElementsByName("title");
        if (SelectType[0].checked){
            var price = $('#type-1').attr('data-price');
            $('#type-1').val(parseInt(price)+250);
            $(".price strong").text($("#type-1").val());
            var er = $('.add_item').data('price');
            $('.add_item').data('price',($("#type-1").val()));
        } else{}
        var SelectType=document.getElementsByName("title");
        if (SelectType[1].checked){
            var price = $('#type-2').attr('data-price');
            $('#type-2').val(parseInt(price)+250);
            $(".price strong").text($("#type-2").val());
            var er = $('.add_item').data('price');
            $('.add_item').data('price',($("#type-2").val()));
        } else{}
        var SelectType=document.getElementsByName("title");
        if (SelectType[2].checked){
            var price = $('#type-3').attr('data-price');
            $('#type-3').val(parseInt(price)+250);
            $(".price strong").text($("#type-3").val());
            var er = $('.add_item').data('price');
            $('.add_item').data('price',($("#type-3").val()));
        } else{}
    } else {
        var SelectType=document.getElementsByName("title");
        if (SelectType[0].checked){
            var price = $('#type-1').attr('data-price');
            $('#type-1').val(parseInt(price)+100);
            $(".price strong").text($("#type-1").val());
            var er = $('.add_item').data('price');
            $('.add_item').data('price',($("#type-1").val()));
        } else{}
        var SelectType=document.getElementsByName("title");
        if (SelectType[1].checked){
            var price = $('#type-2').attr('data-price');
            $('#type-2').val(parseInt(price)+100);
            $(".price strong").text($("#type-2").val());
            var er = $('.add_item').data('price');
            $('.add_item').data('price',($("#type-2").val()));
        } else{}
        var SelectType=document.getElementsByName("title");
        if (SelectType[2].checked){
            var price = $('#type-3').attr('data-price');
            $('#type-3').val(parseInt(price)+100);
            $(".price strong").text($("#type-3").val());
            var er = $('.add_item').data('price');
            $('.add_item').data('price',($("#type-3").val()));
        } else{}
    }
}
function ct2(){
    document.getElementById("tb1").className = 'tc-2';
    document.getElementById("tb2").className = 'tc-2';
    document.getElementById("TextBackSmall").className = 'tc-2';
    document.getElementById("TextFront").className = 'tc-2';
    var er = $('.add_item').data('textcolor');
    $('.add_item').data('textcolor',('Голограмма серебро'));

    var NameTextFront = $('#NameTextFront').val();
    if(NameTextFront.length != 0) {
        var SelectType=document.getElementsByName("title");
        if (SelectType[0].checked){
            var price = $('#type-1').attr('data-price');
            $('#type-1').val(parseInt(price)+250);
            $(".price strong").text($("#type-1").val());
            var er = $('.add_item').data('price');
            $('.add_item').data('price',($("#type-1").val()));
        } else{}
        var SelectType=document.getElementsByName("title");
        if (SelectType[1].checked){
            var price = $('#type-2').attr('data-price');
            $('#type-2').val(parseInt(price)+250);
            $(".price strong").text($("#type-2").val());
            var er = $('.add_item').data('price');
            $('.add_item').data('price',($("#type-2").val()));
        } else{}
        var SelectType=document.getElementsByName("title");
        if (SelectType[2].checked){
            var price = $('#type-3').attr('data-price');
            $('#type-3').val(parseInt(price)+250);
            $(".price strong").text($("#type-3").val());
            var er = $('.add_item').data('price');
            $('.add_item').data('price',($("#type-3").val()));
        } else{}
    } else {
        var SelectType=document.getElementsByName("title");
        if (SelectType[0].checked){
            var price = $('#type-1').attr('data-price');
            $('#type-1').val(parseInt(price)+100);
            $(".price strong").text($("#type-1").val());
            var er = $('.add_item').data('price');
            $('.add_item').data('price',($("#type-1").val()));
        } else{}
        var SelectType=document.getElementsByName("title");
        if (SelectType[1].checked){
            var price = $('#type-2').attr('data-price');
            $('#type-2').val(parseInt(price)+100);
            $(".price strong").text($("#type-2").val());
            var er = $('.add_item').data('price');
            $('.add_item').data('price',($("#type-2").val()));
        } else{}
        var SelectType=document.getElementsByName("title");
        if (SelectType[2].checked){
            var price = $('#type-3').attr('data-price');
            $('#type-3').val(parseInt(price)+100);
            $(".price strong").text($("#type-3").val());
            var er = $('.add_item').data('price');
            $('.add_item').data('price',($("#type-3").val()));
        } else{}
    }
}
function ct3(){
    document.getElementById("tb1").className = 'tc-3';
    document.getElementById("tb2").className = 'tc-3';
    document.getElementById("TextBackSmall").className = 'tc-3';
    document.getElementById("TextFront").className = 'tc-3';
    var er = $('.add_item').data('textcolor');
    $('.add_item').data('textcolor',('Золото матовый'));

    var NameTextFront = $('#NameTextFront').val();
    if(NameTextFront.length != 0) {
        var SelectType=document.getElementsByName("title");
        if (SelectType[0].checked){
            var price = $('#type-1').attr('data-price');
            $('#type-1').val(parseInt(price)+150);
            $(".price strong").text($("#type-1").val());
            var er = $('.add_item').data('price');
            $('.add_item').data('price',($("#type-1").val()));
        } else{}
        var SelectType=document.getElementsByName("title");
        if (SelectType[1].checked){
            var price = $('#type-2').attr('data-price');
            $('#type-2').val(parseInt(price)+150);
            $(".price strong").text($("#type-2").val());
            var er = $('.add_item').data('price');
            $('.add_item').data('price',($("#type-2").val()));
        } else{}
        var SelectType=document.getElementsByName("title");
        if (SelectType[2].checked){
            var price = $('#type-3').attr('data-price');
            $('#type-3').val(parseInt(price)+150);
            $(".price strong").text($("#type-3").val());
            var er = $('.add_item').data('price');
            $('.add_item').data('price',($("#type-3").val()));
        } else{}
    } else {
        var SelectType=document.getElementsByName("title");
        if (SelectType[0].checked){
            var price = $('#type-1').attr('data-price');
            $('#type-1').val(price);
            $(".price strong").text($("#type-1").val());
            var er = $('.add_item').data('price');
            $('.add_item').data('price',($("#type-1").val()));
        } else{}
        var SelectType=document.getElementsByName("title");
        if (SelectType[1].checked){
            var price = $('#type-2').attr('data-price');
            $('#type-2').val(price);
            $(".price strong").text($("#type-2").val());
            var er = $('.add_item').data('price');
            $('.add_item').data('price',($("#type-2").val()));
        } else{}
        var SelectType=document.getElementsByName("title");
        if (SelectType[2].checked){
            var price = $('#type-3').attr('data-price');
            $('#type-3').val(price);
            $(".price strong").text($("#type-3").val());
            var er = $('.add_item').data('price');
            $('.add_item').data('price',($("#type-3").val()));
        } else{}
    }
}
function ct4(){
    document.getElementById("tb1").className = 'tc-4';
    document.getElementById("tb2").className = 'tc-4';
    document.getElementById("TextBackSmall").className = 'tc-4';
    document.getElementById("TextFront").className = 'tc-4';
    var er = $('.add_item').data('textcolor');
    $('.add_item').data('textcolor',('Серебро матовый'));

    var NameTextFront = $('#NameTextFront').val();
    if(NameTextFront.length != 0) {
        var SelectType=document.getElementsByName("title");
        if (SelectType[0].checked){
            var price = $('#type-1').attr('data-price');
            $('#type-1').val(parseInt(price)+150);
            $(".price strong").text($("#type-1").val());
            var er = $('.add_item').data('price');
            $('.add_item').data('price',($("#type-1").val()));
        } else{}
        var SelectType=document.getElementsByName("title");
        if (SelectType[1].checked){
            var price = $('#type-2').attr('data-price');
            $('#type-2').val(parseInt(price)+150);
            $(".price strong").text($("#type-2").val());
            var er = $('.add_item').data('price');
            $('.add_item').data('price',($("#type-2").val()));
        } else{}
        var SelectType=document.getElementsByName("title");
        if (SelectType[2].checked){
            var price = $('#type-3').attr('data-price');
            $('#type-3').val(parseInt(price)+150);
            $(".price strong").text($("#type-3").val());
            var er = $('.add_item').data('price');
            $('.add_item').data('price',($("#type-3").val()));
        } else{}
    } else {
        var SelectType=document.getElementsByName("title");
        if (SelectType[0].checked){
            var price = $('#type-1').attr('data-price');
            $('#type-1').val(price);
            $(".price strong").text($("#type-1").val());
            var er = $('.add_item').data('price');
            $('.add_item').data('price',($("#type-1").val()));
        } else{}
        var SelectType=document.getElementsByName("title");
        if (SelectType[1].checked){
            var price = $('#type-2').attr('data-price');
            $('#type-2').val(price);
            $(".price strong").text($("#type-2").val());
            var er = $('.add_item').data('price');
            $('.add_item').data('price',($("#type-2").val()));
        } else{}
        var SelectType=document.getElementsByName("title");
        if (SelectType[2].checked){
            var price = $('#type-3').attr('data-price');
            $('#type-3').val(price);
            $(".price strong").text($("#type-3").val());
            var er = $('.add_item').data('price');
            $('.add_item').data('price',($("#type-3").val()));
        } else{}
    }
}
function ct5(){
    document.getElementById("tb1").className = 'tc-5';
    document.getElementById("tb2").className = 'tc-5';
    document.getElementById("TextBackSmall").className = 'tc-5';
    document.getElementById("TextFront").className = 'tc-5';
    var er = $('.add_item').data('textcolor');
    $('.add_item').data('textcolor',('Серебро глянец'));

    var NameTextFront = $('#NameTextFront').val();
    if(NameTextFront.length != 0) {
        var SelectType=document.getElementsByName("title");
        if (SelectType[0].checked){
            var price = $('#type-1').attr('data-price');
            $('#type-1').val(parseInt(price)+150);
            $(".price strong").text($("#type-1").val());
            var er = $('.add_item').data('price');
            $('.add_item').data('price',($("#type-1").val()));
        } else{}
        var SelectType=document.getElementsByName("title");
        if (SelectType[1].checked){
            var price = $('#type-2').attr('data-price');
            $('#type-2').val(parseInt(price)+150);
            $(".price strong").text($("#type-2").val());
            var er = $('.add_item').data('price');
            $('.add_item').data('price',($("#type-2").val()));
        } else{}
        var SelectType=document.getElementsByName("title");
        if (SelectType[2].checked){
            var price = $('#type-3').attr('data-price');
            $('#type-3').val(parseInt(price)+150);
            $(".price strong").text($("#type-3").val());
            var er = $('.add_item').data('price');
            $('.add_item').data('price',($("#type-3").val()));
        } else{}
    } else {
        var SelectType=document.getElementsByName("title");
        if (SelectType[0].checked){
            var price = $('#type-1').attr('data-price');
            $('#type-1').val(price);
            $(".price strong").text($("#type-1").val());
            var er = $('.add_item').data('price');
            $('.add_item').data('price',($("#type-1").val()));
        } else{}
        var SelectType=document.getElementsByName("title");
        if (SelectType[1].checked){
            var price = $('#type-2').attr('data-price');
            $('#type-2').val(price);
            $(".price strong").text($("#type-2").val());
            var er = $('.add_item').data('price');
            $('.add_item').data('price',($("#type-2").val()));
        } else{}
        var SelectType=document.getElementsByName("title");
        if (SelectType[2].checked){
            var price = $('#type-3').attr('data-price');
            $('#type-3').val(price);
            $(".price strong").text($("#type-3").val());
            var er = $('.add_item').data('price');
            $('.add_item').data('price',($("#type-3").val()));
        } else{}
    }
}
function ct6(){
    document.getElementById("tb1").className = 'tc-6';
    document.getElementById("tb2").className = 'tc-6';
    var er = $('.add_item').data('textcolor');
    $('.add_item').data('textcolor',('Золото глянец'));
    document.getElementById("TextBackSmall").className = 'tc-6';
    document.getElementById("TextFront").className = 'tc-6';

    var NameTextFront = $('#NameTextFront').val();
    if(NameTextFront.length != 0) {
        var SelectType=document.getElementsByName("title");
        if (SelectType[0].checked){
            var price = $('#type-1').attr('data-price');
            $('#type-1').val(parseInt(price)+150);
            $(".price strong").text($("#type-1").val());
            var er = $('.add_item').data('price');
            $('.add_item').data('price',($("#type-1").val()));
        } else{}
        var SelectType=document.getElementsByName("title");
        if (SelectType[1].checked){
            var price = $('#type-2').attr('data-price');
            $('#type-2').val(parseInt(price)+150);
            $(".price strong").text($("#type-2").val());
            var er = $('.add_item').data('price');
            $('.add_item').data('price',($("#type-2").val()));
        } else{}
        var SelectType=document.getElementsByName("title");
        if (SelectType[2].checked){
            var price = $('#type-3').attr('data-price');
            $('#type-3').val(parseInt(price)+150);
            $(".price strong").text($("#type-3").val());
            var er = $('.add_item').data('price');
            $('.add_item').data('price',($("#type-3").val()));
        } else{}
    } else {
        var SelectType=document.getElementsByName("title");
        if (SelectType[0].checked){
            var price = $('#type-1').attr('data-price');
            $('#type-1').val(price);
            $(".price strong").text($("#type-1").val());
            var er = $('.add_item').data('price');
            $('.add_item').data('price',($("#type-1").val()));
        } else{}
        var SelectType=document.getElementsByName("title");
        if (SelectType[1].checked){
            var price = $('#type-2').attr('data-price');
            $('#type-2').val(price);
            $(".price strong").text($("#type-2").val());
            var er = $('.add_item').data('price');
            $('.add_item').data('price',($("#type-2").val()));
        } else{}
        var SelectType=document.getElementsByName("title");
        if (SelectType[2].checked){
            var price = $('#type-3').attr('data-price');
            $('#type-3').val(price);
            $(".price strong").text($("#type-3").val());
            var er = $('.add_item').data('price');
            $('.add_item').data('price',($("#type-3").val()));
        } else{}
    }
}
function ct7(){
    document.getElementById("tb1").className = 'tc-7';
    document.getElementById("tb2").className = 'tc-7';
    document.getElementById("TextBackSmall").className = 'tc-7';
    document.getElementById("TextFront").className = 'tc-7';
    var er = $('.add_item').data('textcolor');
    $('.add_item').data('textcolor',('Черный'));

    var NameTextFront = $('#NameTextFront').val();
    if(NameTextFront.length != 0) {
        var SelectType=document.getElementsByName("title");
        if (SelectType[0].checked){
            var price = $('#type-1').attr('data-price');
            $('#type-1').val(parseInt(price)+150);
            $(".price strong").text($("#type-1").val());
            var er = $('.add_item').data('price');
            $('.add_item').data('price',($("#type-1").val()));
        } else{}
        var SelectType=document.getElementsByName("title");
        if (SelectType[1].checked){
            var price = $('#type-2').attr('data-price');
            $('#type-2').val(parseInt(price)+150);
            $(".price strong").text($("#type-2").val());
            var er = $('.add_item').data('price');
            $('.add_item').data('price',($("#type-2").val()));
        } else{}
        var SelectType=document.getElementsByName("title");
        if (SelectType[2].checked){
            var price = $('#type-3').attr('data-price');
            $('#type-3').val(parseInt(price)+150);
            $(".price strong").text($("#type-3").val());
            var er = $('.add_item').data('price');
            $('.add_item').data('price',($("#type-3").val()));
        } else{}
    } else {
        var SelectType=document.getElementsByName("title");
        if (SelectType[0].checked){
            var price = $('#type-1').attr('data-price');
            $('#type-1').val(price);
            $(".price strong").text($("#type-1").val());
            var er = $('.add_item').data('price');
            $('.add_item').data('price',($("#type-1").val()));
        } else{}
        var SelectType=document.getElementsByName("title");
        if (SelectType[1].checked){
            var price = $('#type-2').attr('data-price');
            $('#type-2').val(price);
            $(".price strong").text($("#type-2").val());
            var er = $('.add_item').data('price');
            $('.add_item').data('price',($("#type-2").val()));
        } else{}
        var SelectType=document.getElementsByName("title");
        if (SelectType[2].checked){
            var price = $('#type-3').attr('data-price');
            $('#type-3').val(price);
            $(".price strong").text($("#type-3").val());
            var er = $('.add_item').data('price');
            $('.add_item').data('price',($("#type-3").val()));
        } else{}
    }
}
function ct8(){
    document.getElementById("tb1").className = 'tc-8';
    document.getElementById("tb2").className = 'tc-8';
    document.getElementById("TextBackSmall").className = 'tc-8';
    document.getElementById("TextFront").className = 'tc-8';
    var er = $('.add_item').data('textcolor');
    $('.add_item').data('textcolor',('Белый'));
    var NameTextFront = $('#NameTextFront').val();
    if(NameTextFront.length != 0) {
        var SelectType=document.getElementsByName("title");
        if (SelectType[0].checked){
            var price = $('#type-1').attr('data-price');
            $('#type-1').val(parseInt(price)+150);
            $(".price strong").text($("#type-1").val());
            var er = $('.add_item').data('price');
            $('.add_item').data('price',($("#type-1").val()));
        } else{}
        var SelectType=document.getElementsByName("title");
        if (SelectType[1].checked){
            var price = $('#type-2').attr('data-price');
            $('#type-2').val(parseInt(price)+150);
            $(".price strong").text($("#type-2").val());
            var er = $('.add_item').data('price');
            $('.add_item').data('price',($("#type-2").val()));
        } else{}
        var SelectType=document.getElementsByName("title");
        if (SelectType[2].checked){
            var price = $('#type-3').attr('data-price');
            $('#type-3').val(parseInt(price)+150);
            $(".price strong").text($("#type-3").val());
            var er = $('.add_item').data('price');
            $('.add_item').data('price',($("#type-3").val()));
        } else{}
    } else {
        var SelectType=document.getElementsByName("title");
        if (SelectType[0].checked){
            var price = $('#type-1').attr('data-price');
            $('#type-1').val(price);
            $(".price strong").text($("#type-1").val());
            var er = $('.add_item').data('price');
            $('.add_item').data('price',($("#type-1").val()));
        } else{}
        var SelectType=document.getElementsByName("title");
        if (SelectType[1].checked){
            var price = $('#type-2').attr('data-price');
            $('#type-2').val(price);
            $(".price strong").text($("#type-2").val());
            var er = $('.add_item').data('price');
            $('.add_item').data('price',($("#type-2").val()));
        } else{}
        var SelectType=document.getElementsByName("title");
        if (SelectType[2].checked){
            var price = $('#type-3').attr('data-price');
            $('#type-3').val(price);
            $(".price strong").text($("#type-3").val());
            var er = $('.add_item').data('price');
            $('.add_item').data('price',($("#type-3").val()));
        } else{}
    }
}
function ct9(){
    document.getElementById("tb1").className = 'tc-9';
    document.getElementById("tb2").className = 'tc-9';
    document.getElementById("TextBackSmall").className = 'tc-9';
    document.getElementById("TextFront").className = 'tc-9';
    var er = $('.add_item').data('textcolor');
    $('.add_item').data('textcolor',('Красный'));
    var NameTextFront = $('#NameTextFront').val();
    if(NameTextFront.length != 0) {
        var SelectType=document.getElementsByName("title");
        if (SelectType[0].checked){
            var price = $('#type-1').attr('data-price');
            $('#type-1').val(parseInt(price)+150);
            $(".price strong").text($("#type-1").val());
            var er = $('.add_item').data('price');
            $('.add_item').data('price',($("#type-1").val()));
        } else{}
        var SelectType=document.getElementsByName("title");
        if (SelectType[1].checked){
            var price = $('#type-2').attr('data-price');
            $('#type-2').val(parseInt(price)+150);
            $(".price strong").text($("#type-2").val());
            var er = $('.add_item').data('price');
            $('.add_item').data('price',($("#type-2").val()));
        } else{}
        var SelectType=document.getElementsByName("title");
        if (SelectType[2].checked){
            var price = $('#type-3').attr('data-price');
            $('#type-3').val(parseInt(price)+150);
            $(".price strong").text($("#type-3").val());
            var er = $('.add_item').data('price');
            $('.add_item').data('price',($("#type-3").val()));
        } else{}
    } else {
        var SelectType=document.getElementsByName("title");
        if (SelectType[0].checked){
            var price = $('#type-1').attr('data-price');
            $('#type-1').val(price);
            $(".price strong").text($("#type-1").val());
            var er = $('.add_item').data('price');
            $('.add_item').data('price',($("#type-1").val()));
        } else{}
        var SelectType=document.getElementsByName("title");
        if (SelectType[1].checked){
            var price = $('#type-2').attr('data-price');
            $('#type-2').val(price);
            $(".price strong").text($("#type-2").val());
            var er = $('.add_item').data('price');
            $('.add_item').data('price',($("#type-2").val()));
        } else{}
        var SelectType=document.getElementsByName("title");
        if (SelectType[2].checked){
            var price = $('#type-3').attr('data-price');
            $('#type-3').val(price);
            $(".price strong").text($("#type-3").val());
            var er = $('.add_item').data('price');
            $('.add_item').data('price',($("#type-3").val()));
        } else{}
    }
}


//Шрифт
function tf1(){
    document.getElementById("tb1").style.fontFamily="superstar";
    document.getElementById("tb2").style.fontFamily="superstar";
    document.getElementById("TextFront").style.fontFamily="superstar";
    document.getElementById("TextBackSmall").style.fontFamily="superstar";
    var er = $('.add_item').data('font');
    $('.add_item').data('font',('SUPERSTAR'));
    var str = document.getElementById("name").value;
    var space = '-';
    var link = '';
    var transl = {
        'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd', 'е': 'e', 'ё': 'e', 'ж': 'zh',
        'з': 'z', 'и': 'i', 'й': 'j', 'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n',
        'о': 'o', 'п': 'p', 'р': 'r','с': 's', 'т': 't', 'у': 'u', 'ф': 'f', 'х': 'h',
        'ц': 'c', 'ч': 'ch', 'ш': 'sh', 'щ': 'sh','ъ': space,
        'ы': 'y', 'ь': space, 'э': 'e', 'ю': 'yu', 'я': 'ya'
    }
    if (str != '')
        str = str.toLowerCase();

    for (var i = 0; i < str.length; i++){
        if (/[а-яё]/.test(str.charAt(i))){ // заменяем символы на русском
            link += transl[str.charAt(i)];
        } else if (/[a-z0-9]/.test(str.charAt(i))){ // символы на анг. оставляем как есть
            link += str.charAt(i);
        } else {
            if (link.slice(-1) !== space) link += space; // прочие символы заменяем на space
        }
    }
    document.getElementById("tb1").innerHTML=link;

    var str = document.getElementById("name2").value;
    var space = '-';
    var link = '';
    var transl = {
        'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd', 'е': 'e', 'ё': 'e', 'ж': 'zh',
        'з': 'z', 'и': 'i', 'й': 'j', 'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n',
        'о': 'o', 'п': 'p', 'р': 'r','с': 's', 'т': 't', 'у': 'u', 'ф': 'f', 'х': 'h',
        'ц': 'c', 'ч': 'ch', 'ш': 'sh', 'щ': 'sh','ъ': space,
        'ы': 'y', 'ь': space, 'э': 'e', 'ю': 'yu', 'я': 'ya'
    }
    if (str != '')
        str = str.toLowerCase();

    for (var i = 0; i < str.length; i++){
        if (/[а-яё]/.test(str.charAt(i))){ // заменяем символы на русском
            link += transl[str.charAt(i)];
        } else if (/[a-z0-9]/.test(str.charAt(i))){ // символы на анг. оставляем как есть
            link += str.charAt(i);
        } else {
            if (link.slice(-1) !== space) link += space; // прочие символы заменяем на space
        }
    }
    document.getElementById("TextBackSmall").innerHTML=link;
    var str = document.getElementById("NameTextFront").value;
    var space = '-';
    var link = '';
    var transl = {
        'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd', 'е': 'e', 'ё': 'e', 'ж': 'zh',
        'з': 'z', 'и': 'i', 'й': 'j', 'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n',
        'о': 'o', 'п': 'p', 'р': 'r','с': 's', 'т': 't', 'у': 'u', 'ф': 'f', 'х': 'h',
        'ц': 'c', 'ч': 'ch', 'ш': 'sh', 'щ': 'sh','ъ': space,
        'ы': 'y', 'ь': space, 'э': 'e', 'ю': 'yu', 'я': 'ya'
    }
    if (str != '')
        str = str.toLowerCase();

    for (var i = 0; i < str.length; i++){
        if (/[а-яё]/.test(str.charAt(i))){ // заменяем символы на русском
            link += transl[str.charAt(i)];
        } else if (/[a-z0-9]/.test(str.charAt(i))){ // символы на анг. оставляем как есть
            link += str.charAt(i);
        } else {
            if (link.slice(-1) !== space) link += space; // прочие символы заменяем на space
        }
    }
    document.getElementById("TextFront").innerHTML=link;
}
function tf2(){
    document.getElementById("tb1").style.fontFamily="allstars";
    document.getElementById("tb2").style.fontFamily="allstars";
    document.getElementById("TextBackSmall").style.fontFamily="allstars";
    document.getElementById("TextFront").style.fontFamily="allstars";
    var er = $('.add_item').data('font');
    $('.add_item').data('font',('ALLSTARS'));
    var str = document.getElementById("name").value;
    var space = '-';
    var link = '';
    var transl = {
        'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd', 'е': 'e', 'ё': 'e', 'ж': 'zh',
        'з': 'z', 'и': 'i', 'й': 'j', 'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n',
        'о': 'o', 'п': 'p', 'р': 'r','с': 's', 'т': 't', 'у': 'u', 'ф': 'f', 'х': 'h',
        'ц': 'c', 'ч': 'ch', 'ш': 'sh', 'щ': 'sh','ъ': space,
        'ы': 'y', 'ь': space, 'э': 'e', 'ю': 'yu', 'я': 'ya'
    }
    if (str != '')
        str = str.toLowerCase();

    for (var i = 0; i < str.length; i++){
        if (/[а-яё]/.test(str.charAt(i))){ // заменяем символы на русском
            link += transl[str.charAt(i)];
        } else if (/[a-z0-9]/.test(str.charAt(i))){ // символы на анг. оставляем как есть
            link += str.charAt(i);
        } else {
            if (link.slice(-1) !== space) link += space; // прочие символы заменяем на space
        }
    }
    document.getElementById("tb1").innerHTML=link;
    var str = document.getElementById("NameTextFront").value;
    var space = '-';
    var link = '';
    var transl = {
        'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd', 'е': 'e', 'ё': 'e', 'ж': 'zh',
        'з': 'z', 'и': 'i', 'й': 'j', 'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n',
        'о': 'o', 'п': 'p', 'р': 'r','с': 's', 'т': 't', 'у': 'u', 'ф': 'f', 'х': 'h',
        'ц': 'c', 'ч': 'ch', 'ш': 'sh', 'щ': 'sh','ъ': space,
        'ы': 'y', 'ь': space, 'э': 'e', 'ю': 'yu', 'я': 'ya'
    }
    if (str != '')
        str = str.toLowerCase();

    for (var i = 0; i < str.length; i++){
        if (/[а-яё]/.test(str.charAt(i))){ // заменяем символы на русском
            link += transl[str.charAt(i)];
        } else if (/[a-z0-9]/.test(str.charAt(i))){ // символы на анг. оставляем как есть
            link += str.charAt(i);
        } else {
            if (link.slice(-1) !== space) link += space; // прочие символы заменяем на space
        }
    }
    document.getElementById("TextFront").innerHTML=link;
    var str = document.getElementById("name2").value;
    var space = '-';
    var link = '';
    var transl = {
        'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd', 'е': 'e', 'ё': 'e', 'ж': 'zh',
        'з': 'z', 'и': 'i', 'й': 'j', 'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n',
        'о': 'o', 'п': 'p', 'р': 'r','с': 's', 'т': 't', 'у': 'u', 'ф': 'f', 'х': 'h',
        'ц': 'c', 'ч': 'ch', 'ш': 'sh', 'щ': 'sh','ъ': space,
        'ы': 'y', 'ь': space, 'э': 'e', 'ю': 'yu', 'я': 'ya'
    }
    if (str != '')
        str = str.toLowerCase();

    for (var i = 0; i < str.length; i++){
        if (/[а-яё]/.test(str.charAt(i))){ // заменяем символы на русском
            link += transl[str.charAt(i)];
        } else if (/[a-z0-9]/.test(str.charAt(i))){ // символы на анг. оставляем как есть
            link += str.charAt(i);
        } else {
            if (link.slice(-1) !== space) link += space; // прочие символы заменяем на space
        }
    }
    document.getElementById("TextBackSmall").innerHTML=link;
}
function tf3(){
    document.getElementById("tb1").innerHTML=document.getElementById("name").value;
    document.getElementById("TextBackSmall").innerHTML=document.getElementById("name2").value;
    document.getElementById("TextFront").innerHTML=document.getElementById("NameTextFront").value;
    document.getElementById("tb1").style.fontFamily="bnt";
    document.getElementById("tb2").style.fontFamily="bnt";
    document.getElementById("TextFront").style.fontFamily="bnt";
    document.getElementById("TextBackSmall").style.fontFamily="bnt";
    var er = $('.add_item').data('font');
    $('.add_item').data('font',('BIGNOODLETITLING'));
}
function tf4(){
    document.getElementById("tb1").style.fontFamily="jersey";
    document.getElementById("tb2").style.fontFamily="jersey";
    document.getElementById("TextBackSmall").style.fontFamily="jersey";
    document.getElementById("TextFront").style.fontFamily="jersey";
    var er = $('.add_item').data('font');
    $('.add_item').data('font',('Jersey M54'));
    var str = document.getElementById("name").value;
    var space = '-';
    var link = '';
    var transl = {
        'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd', 'е': 'e', 'ё': 'e', 'ж': 'zh',
        'з': 'z', 'и': 'i', 'й': 'j', 'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n',
        'о': 'o', 'п': 'p', 'р': 'r','с': 's', 'т': 't', 'у': 'u', 'ф': 'f', 'х': 'h',
        'ц': 'c', 'ч': 'ch', 'ш': 'sh', 'щ': 'sh','ъ': space,
        'ы': 'y', 'ь': space, 'э': 'e', 'ю': 'yu', 'я': 'ya'
    }
    if (str != '')
        str = str.toLowerCase();

    for (var i = 0; i < str.length; i++){
        if (/[а-яё]/.test(str.charAt(i))){ // заменяем символы на русском
            link += transl[str.charAt(i)];
        } else if (/[a-z0-9]/.test(str.charAt(i))){ // символы на анг. оставляем как есть
            link += str.charAt(i);
        } else {
            if (link.slice(-1) !== space) link += space; // прочие символы заменяем на space
        }
    }
    document.getElementById("tb1").innerHTML=link;
    var str = document.getElementById("NameTextFront").value;
    var space = '-';
    var link = '';
    var transl = {
        'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd', 'е': 'e', 'ё': 'e', 'ж': 'zh',
        'з': 'z', 'и': 'i', 'й': 'j', 'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n',
        'о': 'o', 'п': 'p', 'р': 'r','с': 's', 'т': 't', 'у': 'u', 'ф': 'f', 'х': 'h',
        'ц': 'c', 'ч': 'ch', 'ш': 'sh', 'щ': 'sh','ъ': space,
        'ы': 'y', 'ь': space, 'э': 'e', 'ю': 'yu', 'я': 'ya'
    }
    if (str != '')
        str = str.toLowerCase();

    for (var i = 0; i < str.length; i++){
        if (/[а-яё]/.test(str.charAt(i))){ // заменяем символы на русском
            link += transl[str.charAt(i)];
        } else if (/[a-z0-9]/.test(str.charAt(i))){ // символы на анг. оставляем как есть
            link += str.charAt(i);
        } else {
            if (link.slice(-1) !== space) link += space; // прочие символы заменяем на space
        }
    }
    document.getElementById("TextFront").innerHTML=link;
    var str = document.getElementById("name2").value;
    var space = '-';
    var link = '';
    var transl = {
        'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd', 'е': 'e', 'ё': 'e', 'ж': 'zh',
        'з': 'z', 'и': 'i', 'й': 'j', 'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n',
        'о': 'o', 'п': 'p', 'р': 'r','с': 's', 'т': 't', 'у': 'u', 'ф': 'f', 'х': 'h',
        'ц': 'c', 'ч': 'ch', 'ш': 'sh', 'щ': 'sh','ъ': space,
        'ы': 'y', 'ь': space, 'э': 'e', 'ю': 'yu', 'я': 'ya'
    }
    if (str != '')
        str = str.toLowerCase();

    for (var i = 0; i < str.length; i++){
        if (/[а-яё]/.test(str.charAt(i))){ // заменяем символы на русском
            link += transl[str.charAt(i)];
        } else if (/[a-z0-9]/.test(str.charAt(i))){ // символы на анг. оставляем как есть
            link += str.charAt(i);
        } else {
            if (link.slice(-1) !== space) link += space; // прочие символы заменяем на space
        }
    }
    document.getElementById("TextBackSmall").innerHTML=link;

}
function tf5(){
    document.getElementById("tb1").style.fontFamily="engr";
    document.getElementById("tb2").style.fontFamily="engr";
    document.getElementById("TextBackSmall").style.fontFamily="engr";
    document.getElementById("TextFront").style.fontFamily="engr";
    var er = $('.add_item').data('font');
    $('.add_item').data('font',('Engravers'));
    var str = document.getElementById("name").value;
    var space = '-';
    var link = '';
    var transl = {
        'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd', 'е': 'e', 'ё': 'e', 'ж': 'zh',
        'з': 'z', 'и': 'i', 'й': 'j', 'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n',
        'о': 'o', 'п': 'p', 'р': 'r','с': 's', 'т': 't', 'у': 'u', 'ф': 'f', 'х': 'h',
        'ц': 'c', 'ч': 'ch', 'ш': 'sh', 'щ': 'sh','ъ': space,
        'ы': 'y', 'ь': space, 'э': 'e', 'ю': 'yu', 'я': 'ya'
    }
    if (str != '')
        str = str.toLowerCase();

    for (var i = 0; i < str.length; i++){
        if (/[а-яё]/.test(str.charAt(i))){ // заменяем символы на русском
            link += transl[str.charAt(i)];
        } else if (/[a-z0-9]/.test(str.charAt(i))){ // символы на анг. оставляем как есть
            link += str.charAt(i);
        } else {
            if (link.slice(-1) !== space) link += space; // прочие символы заменяем на space
        }
    }
    document.getElementById("tb1").innerHTML=link;
    var str = document.getElementById("NameTextFront").value;
    var space = '-';
    var link = '';
    var transl = {
        'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd', 'е': 'e', 'ё': 'e', 'ж': 'zh',
        'з': 'z', 'и': 'i', 'й': 'j', 'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n',
        'о': 'o', 'п': 'p', 'р': 'r','с': 's', 'т': 't', 'у': 'u', 'ф': 'f', 'х': 'h',
        'ц': 'c', 'ч': 'ch', 'ш': 'sh', 'щ': 'sh','ъ': space,
        'ы': 'y', 'ь': space, 'э': 'e', 'ю': 'yu', 'я': 'ya'
    }
    if (str != '')
        str = str.toLowerCase();

    for (var i = 0; i < str.length; i++){
        if (/[а-яё]/.test(str.charAt(i))){ // заменяем символы на русском
            link += transl[str.charAt(i)];
        } else if (/[a-z0-9]/.test(str.charAt(i))){ // символы на анг. оставляем как есть
            link += str.charAt(i);
        } else {
            if (link.slice(-1) !== space) link += space; // прочие символы заменяем на space
        }
    }
    document.getElementById("TextFront").innerHTML=link;
    var str = document.getElementById("name2").value;
    var space = '-';
    var link = '';
    var transl = {
        'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd', 'е': 'e', 'ё': 'e', 'ж': 'zh',
        'з': 'z', 'и': 'i', 'й': 'j', 'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n',
        'о': 'o', 'п': 'p', 'р': 'r','с': 's', 'т': 't', 'у': 'u', 'ф': 'f', 'х': 'h',
        'ц': 'c', 'ч': 'ch', 'ш': 'sh', 'щ': 'sh','ъ': space,
        'ы': 'y', 'ь': space, 'э': 'e', 'ю': 'yu', 'я': 'ya'
    }
    if (str != '')
        str = str.toLowerCase();

    for (var i = 0; i < str.length; i++){
        if (/[а-яё]/.test(str.charAt(i))){ // заменяем символы на русском
            link += transl[str.charAt(i)];
        } else if (/[a-z0-9]/.test(str.charAt(i))){ // символы на анг. оставляем как есть
            link += str.charAt(i);
        } else {
            if (link.slice(-1) !== space) link += space; // прочие символы заменяем на space
        }
    }
    document.getElementById("TextBackSmall").innerHTML=link;
}
function tf6(){
    document.getElementById("tb1").style.fontFamily="eng";
    document.getElementById("tb2").style.fontFamily="eng";
    document.getElementById("TextBackSmall").style.fontFamily="eng";
    document.getElementById("TextFront").style.fontFamily="eng";
    var er = $('.add_item').data('font');
    $('.add_item').data('font',('Old English'));
    var str = document.getElementById("name").value;
    var space = '-';
    var link = '';
    var transl = {
        'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd', 'е': 'e', 'ё': 'e', 'ж': 'zh',
        'з': 'z', 'и': 'i', 'й': 'j', 'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n',
        'о': 'o', 'п': 'p', 'р': 'r','с': 's', 'т': 't', 'у': 'u', 'ф': 'f', 'х': 'h',
        'ц': 'c', 'ч': 'ch', 'ш': 'sh', 'щ': 'sh','ъ': space,
        'ы': 'y', 'ь': space, 'э': 'e', 'ю': 'yu', 'я': 'ya'
    }
    if (str != '')
        str = str.toLowerCase();

    for (var i = 0; i < str.length; i++){
        if (/[а-яё]/.test(str.charAt(i))){ // заменяем символы на русском
            link += transl[str.charAt(i)];
        } else if (/[a-z0-9]/.test(str.charAt(i))){ // символы на анг. оставляем как есть
            link += str.charAt(i);
        } else {
            if (link.slice(-1) !== space) link += space; // прочие символы заменяем на space
        }
    }
    document.getElementById("tb1").innerHTML=link;
    var str = document.getElementById("NameTextFront").value;
    var space = '-';
    var link = '';
    var transl = {
        'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd', 'е': 'e', 'ё': 'e', 'ж': 'zh',
        'з': 'z', 'и': 'i', 'й': 'j', 'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n',
        'о': 'o', 'п': 'p', 'р': 'r','с': 's', 'т': 't', 'у': 'u', 'ф': 'f', 'х': 'h',
        'ц': 'c', 'ч': 'ch', 'ш': 'sh', 'щ': 'sh','ъ': space,
        'ы': 'y', 'ь': space, 'э': 'e', 'ю': 'yu', 'я': 'ya'
    }
    if (str != '')
        str = str.toLowerCase();

    for (var i = 0; i < str.length; i++){
        if (/[а-яё]/.test(str.charAt(i))){ // заменяем символы на русском
            link += transl[str.charAt(i)];
        } else if (/[a-z0-9]/.test(str.charAt(i))){ // символы на анг. оставляем как есть
            link += str.charAt(i);
        } else {
            if (link.slice(-1) !== space) link += space; // прочие символы заменяем на space
        }
    }
    document.getElementById("TextFront").innerHTML=link;
    var str = document.getElementById("name2").value;
    var space = '-';
    var link = '';
    var transl = {
        'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd', 'е': 'e', 'ё': 'e', 'ж': 'zh',
        'з': 'z', 'и': 'i', 'й': 'j', 'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n',
        'о': 'o', 'п': 'p', 'р': 'r','с': 's', 'т': 't', 'у': 'u', 'ф': 'f', 'х': 'h',
        'ц': 'c', 'ч': 'ch', 'ш': 'sh', 'щ': 'sh','ъ': space,
        'ы': 'y', 'ь': space, 'э': 'e', 'ю': 'yu', 'я': 'ya'
    }
    if (str != '')
        str = str.toLowerCase();

    for (var i = 0; i < str.length; i++){
        if (/[а-яё]/.test(str.charAt(i))){ // заменяем символы на русском
            link += transl[str.charAt(i)];
        } else if (/[a-z0-9]/.test(str.charAt(i))){ // символы на анг. оставляем как есть
            link += str.charAt(i);
        } else {
            if (link.slice(-1) !== space) link += space; // прочие символы заменяем на space
        }
    }
    document.getElementById("TextBackSmall").innerHTML=link;
}
//Вид
function ChangeView1(){
    document.getElementById("view2").style.display="none";
    document.getElementById("view1").style.display="block";
}
function ChangeView2(){
    document.getElementById("view1").style.display="none";
    document.getElementById("view2").style.display="block";
}
function ChangeImageBlack(){
    var SelectPol=document.getElementsByName("pol");
    if(SelectPol[0].checked){
        var mbb = $('#type-1').attr('data-mbb');
        var img = document.getElementById("image1");
        img.src = mbb;
        var er = $('.add_item').data('img');
        $('.add_item').data('img',(mbb));
        var mfb = $('#type-1').attr('data-mfb');
        var img = document.getElementById("image2");
        img.src = mfb;
    } else{
        var wbb = $('#type-1').attr('data-wbb');
        var img = document.getElementById("image1");
        img.src = wbb;
        var er = $('.add_item').data('img');
        $('.add_item').data('img',(wbb));
        var wfb = $('#type-1').attr('data-wfb');
        var img = document.getElementById("image2");
        img.src = wfb;
    }
    var er = $('.add_item').data('color');
    $('.add_item').data('color',('Черный'));
}
function ChangeImageWhite(){
    var SelectPol=document.getElementsByName("pol");
    if(SelectPol[0].checked){
        var mbw = $('#type-1').attr('data-mbw');
        var img = document.getElementById("image1");
        img.src = mbw;
        var er = $('.add_item').data('img');
        $('.add_item').data('img',(mbw));
        var mfw = $('#type-1').attr('data-mfw');
        var img = document.getElementById("image2");
        img.src = mfw;
    } else{
        var wbw = $('#type-1').attr('data-wbw');
        var img = document.getElementById("image1");
        img.src = wbw;
        var er = $('.add_item').data('img');
        $('.add_item').data('img',(wbw));
        var wfw = $('#type-1').attr('data-wfw');
        var img = document.getElementById("image2");
        img.src = wfw;
    }
    var er = $('.add_item').data('color');
    $('.add_item').data('color',('Белый'));
}
function ChangeImageAsphalt(){
    var SelectPol=document.getElementsByName("pol");
    if(SelectPol[0].checked){
        var mba = $('#type-1').attr('data-mba');
        var img = document.getElementById("image1");
        img.src = mba;
        var er = $('.add_item').data('img');
        $('.add_item').data('img',(mba));
        var mfa = $('#type-1').attr('data-mfa');
        var img = document.getElementById("image2");
        img.src = mfa;
    } else{
        var wba = $('#type-1').attr('data-wba');
        var img = document.getElementById("image1");
        img.src = wba;
        var er = $('.add_item').data('img');
        $('.add_item').data('img',(wba));
        var wfa = $('#type-1').attr('data-wfa');
        var img = document.getElementById("image2");
        img.src = wfa;
    }
    var er = $('.add_item').data('color');
    $('.add_item').data('color',('Серый'));
}



function ChangeImageBla2(){
    var img=document.getElementById("image1");
    img.src="assets/images/const/dress/coft_black_1.png";
    var img=document.getElementById("image2");
    img.src="assets/images/const/dress/coft_black_2.png";
    //Изображение
    var er = $('.add_item').data('img');
    $('.add_item').data('img',('assets/images/const/dress/coft_black_2.png'));
    //Цвет
    var er = $('.add_item').data('color');
    $('.add_item').data('color',('Черный'));
}
function ChangeImageAsp2(){
    var img=document.getElementById("image1");
    img.src="assets/images/const/dress/coft_asphalt_1.png";
    var img=document.getElementById("image2");
    img.src="assets/images/const/dress/coft_asphalt_2.png";
    //Изображение
    var er = $('.add_item').data('img');
    $('.add_item').data('img',('assets/images/const/dress/coft_asphalt_2.png'));
    //Цвет
    var er = $('.add_item').data('color');
    $('.add_item').data('color',('Серый'));
}
function ChangeImageWhi2(){
    var img=document.getElementById("image1");
    img.src="assets/images/const/dress/coft_white_1.png";
    var img=document.getElementById("image2");
    img.src="assets/images/const/dress/coft_white_2.png";
    //Изображение
    var er = $('.add_item').data('img');
    $('.add_item').data('img',('assets/images/const/dress/coft_white_2.png'));
    //Цвет
    var er = $('.add_item').data('color');
    $('.add_item').data('color',('Белый'));
}
function ChangeImageBla3(){
    var img=document.getElementById("image1");
    img.src="assets/images/const/dress/tols_black_2.png";
    var img=document.getElementById("image2");
    img.src="assets/images/const/dress/tols_black_1.png";
    //Изображение
    var er = $('.add_item').data('img');
    $('.add_item').data('img',('assets/images/const/dress/tols_black_2.png'));
    //Цвет
    var er = $('.add_item').data('color');
    $('.add_item').data('color',('Черный'));
}
function ChangeImageAsp3(){
    var img=document.getElementById("image1");
    img.src="assets/images/const/dress/tols_asphalt_1.png";
    var img=document.getElementById("image2");
    img.src="assets/images/const/dress/tols_asphalt_2.png";
    //Изображение
    var er = $('.add_item').data('img');
    $('.add_item').data('img',('assets/images/const/dress/tols_asphalt_2.png'));
    //Цвет
    var er = $('.add_item').data('color');
    $('.add_item').data('color',('Серый'));
}
function ChangeImageWhi3(){
    var img=document.getElementById("image1");
    img.src="assets/images/const/dress/tols_white_1.png";
    var img=document.getElementById("image2");
    img.src="assets/images/const/dress/tols_white_2.png";
    //Изображение
    var er = $('.add_item').data('img');
    $('.add_item').data('img',('assets/images/const/dress/tols_white_2.png'));
    //Цвет
    var er = $('.add_item').data('color');
    $('.add_item').data('color',('Белый'));
}

// Пол
function ChangeWoman(){
    var er = $('.add_item').data('pol');
    $('.add_item').data('pol',('Женская'));
}
function ChangeMan(){
    var er = $('.add_item').data('pol');
    $('.add_item').data('pol',('Мужская'));
}


// Размеры
function ChangeXS(){
    var er = $('.add_item').data('size');
    $('.add_item').data('size',('XS'));
}
function ChangeS(){
    var er = $('.add_item').data('size');
    $('.add_item').data('size',('S'));
}
function ChangeM(){
    var er = $('.add_item').data('size');
    $('.add_item').data('size',('M'));
}
function ChangeL(){
    var er = $('.add_item').data('size');
    $('.add_item').data('size',('L'));
}
function ChangeXL(){
    var er = $('.add_item').data('size');
    $('.add_item').data('size',('XL'));
}
function ChangeXXL(){
    var er = $('.add_item').data('size');
    $('.add_item').data('size',('XXL'));
}


// Титульник
function ChangeTitle1(){
    var er = $('.add_item').data('title');
    $('.add_item').data('title',('Футболка'));

    var NameTextFront = $('#NameTextFront').val();
    if(NameTextFront.length != 0) {
        var SelectColor=document.getElementsByName("ColorFont");
        if (SelectColor[0].checked || SelectColor[1].checked){
            var price = $('#type-1').attr('data-price');
            $('#type-1').val(parseInt(price)+250);
            $(".price strong").text($("#type-1").val());
            var er = $('.add_item').data('price');
            $('.add_item').data('price',($("#type-1").val()));
        } else {
            var price = $('#type-1').attr('data-price');
            $('#type-1').val(parseInt(price)+150);
            $(".price strong").text($("#type-1").val());
            var er = $('.add_item').data('price');
            $('.add_item').data('price',($("#type-1").val()));
        }

    } else {
        var SelectColor=document.getElementsByName("ColorFont");
        if (SelectColor[0].checked || SelectColor[1].checked){
            var price = $('#type-1').attr('data-price');
            $('#type-1').val(parseInt(price)+100);
            $(".price strong").text($("#type-1").val());
            var er = $('.add_item').data('price');
            $('.add_item').data('price',($("#type-1").val()));
        } else {
            var price = $('#type-1').attr('data-price');
            $('#type-1').val(price);
            $(".price strong").text($("#type-1").val());
            var er = $('.add_item').data('price');
            $('.add_item').data('price',($("#type-1").val()));
        }
    }

    document.getElementById("color1").style.display="inline-block";
    document.getElementById("color2").style.display="none";
    document.getElementById("color3").style.display="none";
    document.getElementById("color4").style.display="none";
    var img=document.getElementById("image1");
    img.src="assets/images/const/dress/shirt_black_1.png";
    var img=document.getElementById("image2");
    img.src="assets/images/const/dress/shirt_black_2.png";
}
function ChangeTitle2(){
    var er = $('.add_item').data('title');
    $('.add_item').data('title',('Свитшот'));

    var NameTextFront = $('#NameTextFront').val();
    if(NameTextFront.length != 0) {
        var SelectColor=document.getElementsByName("ColorFont");
        if (SelectColor[0].checked || SelectColor[1].checked){
            var price = $('#type-2').attr('data-price');
            $('#type-2').val(parseInt(price)+250);
            $(".price strong").text($("#type-2").val());
            var er = $('.add_item').data('price');
            $('.add_item').data('price',($("#type-2").val()));
        } else {
            var price = $('#type-2').attr('data-price');
            $('#type-2').val(parseInt(price)+150);
            $(".price strong").text($("#type-2").val());
            var er = $('.add_item').data('price');
            $('.add_item').data('price',($("#type-2").val()));
        }

    } else {
        var SelectColor=document.getElementsByName("ColorFont");
        if (SelectColor[0].checked || SelectColor[1].checked){
            var price = $('#type-2').attr('data-price');
            $('#type-2').val(parseInt(price)+100);
            $(".price strong").text($("#type-2").val());
            var er = $('.add_item').data('price');
            $('.add_item').data('price',($("#type-2").val()));
        } else {
            var price = $('#type-2').attr('data-price');
            $('#type-2').val(price);
            $(".price strong").text($("#type-2").val());
            var er = $('.add_item').data('price');
            $('.add_item').data('price',($("#type-2").val()));
        }
    }




    $(".price strong").text($("#type-2").val());

    document.getElementById("color2").style.display="inline-block";
    document.getElementById("color1").style.display="none";
    document.getElementById("color3").style.display="none";
    document.getElementById("color4").style.display="none";
    var img=document.getElementById("image1");
    img.src="assets/images/const/dress/coft_black_2.png";
    var img=document.getElementById("image2");
    img.src="assets/images/const/dress/coft_black_1.png";
}
function ChangeTitle3(){
    var er = $('.add_item').data('title');
    $('.add_item').data('title',('Толстовка'));

    var NameTextFront = $('#NameTextFront').val();
    if(NameTextFront.length != 0) {
        var SelectColor=document.getElementsByName("ColorFont");
        if (SelectColor[0].checked || SelectColor[1].checked){
            var price = $('#type-3').attr('data-price');
            $('#type-3').val(parseInt(price)+250);
            $(".price strong").text($("#type-3").val());
            var er = $('.add_item').data('price');
            $('.add_item').data('price',($("#type-3").val()));
        } else {
            var price = $('#type-3').attr('data-price');
            $('#type-3').val(parseInt(price)+150);
            $(".price strong").text($("#type-3").val());
            var er = $('.add_item').data('price');
            $('.add_item').data('price',($("#type-3").val()));
        }

    } else {
        var SelectColor=document.getElementsByName("ColorFont");
        if (SelectColor[0].checked || SelectColor[1].checked){
            var price = $('#type-3').attr('data-price');
            $('#type-3').val(parseInt(price)+100);
            $(".price strong").text($("#type-3").val());
            var er = $('.add_item').data('price');
            $('.add_item').data('price',($("#type-3").val()));
        } else {
            var price = $('#type-3').attr('data-price');
            $('#type-3').val(price);
            $(".price strong").text($("#type-3").val());
            var er = $('.add_item').data('price');
            $('.add_item').data('price',($("#type-3").val()));
        }
    }

    document.getElementById("color3").style.display="inline-block";
    document.getElementById("color1").style.display="none";
    document.getElementById("color2").style.display="none";
    document.getElementById("color4").style.display="none";
    var img=document.getElementById("image1");
    img.src="assets/images/const/dress/tols_black_2.png";
    var img=document.getElementById("image2");
    img.src="assets/images/const/dress/tols_black_1.png";
}
function ChangeTitle4(){
    var er = $('.add_item').data('title');
    $('.add_item').data('title',('Бомбер'));
}


function ChangeTextSmall(){
    if($('#TextSmall').prop('checked')) {
        document.getElementById("name2").style.display="block";


        document.getElementById("TextBackSmall").style.display="block";
    } else {
        document.getElementById("name2").style.display="none";


        document.getElementById("TextBackSmall").style.display="none";
        var er = $('.add_item').data('text2');
        $('.add_item').data('text2',('-'));
    }
}

function addToCartStatHandler(item) {
    let _tmr = window._tmr || (window._tmr = []);
    let yaCounter = window.yaCounter43651284;
    _tmr.push({ id: "2910629", type: "reachGoal", goal: "addToCart", value: parseFloat(item.price) });
    yaCounter.reachGoal('addToCart', { order_price: parseFloat(item.price), currency: 'RUR' });
}

function boughtStatHandler(items) {
    let _tmr = window._tmr || (window._tmr = []);
    let yaCounter = window.yaCounter43651284;
    let totalSum = 0;
    for (let productId of Object.keys(items)) {
        let product =  items[productId];
        totalSum += parseFloat(product.price);
    }
    _tmr.push({ id: "2910629", type: "reachGoal", goal: "bought", value: totalSum });
    yaCounter.reachGoal("bought", { order_price: totalSum, currency: 'RUR' });
}

function openVkStatHandler() {
    let _tmr = window._tmr || (window._tmr = []);
    let yaCounter = window.yaCounter43651284;
    _tmr.push({ id: "2910629", type: "reachGoal", goal: "openVkGroup" });
    yaCounter.reachGoal('openVkGroup');
}

function openInstaStatHandler() {
    let _tmr = window._tmr || (window._tmr = []);
    let yaCounter = window.yaCounter43651284;
    _tmr.push({ id: "2910629", type: "reachGoal", goal: "openInstaGroup" });
    yaCounter.reachGoal('openInstaPage');
}

$(function(){
    $('#popap').click(function(){
        $('.popup,.popup_overlay').fadeIn(400); //показываем всплывающее окно
    });
    $('.closer,.popup_overlay').click(function(){
        $('.popup,.popup_overlay').fadeOut(400); //скрываем всплывающее окно
    });
    $('.open_vk_group').click(openVkStatHandler);
    $('.open_insta_page').click(openInstaStatHandler);
});
