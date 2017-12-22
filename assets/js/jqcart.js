
function rrr(){
    document.getElementById("ttt").disabled =("disabled");
    document.getElementById("summpost").style.display="none";
    document.getElementById("b").className = 'jqcart-post';
    document.getElementById("a").className = 'jqcart-post-fff';
    document.getElementById("ttt").value =("РЎР°РјРѕРІС‹РІРѕР·");
}
function rr(){
    document.getElementById("ttt").disabled =("");
    document.getElementById("summpost").style.display="inline-block";
    document.getElementById("a").className = 'jqcart-post';
    document.getElementById("b").className = 'jqcart-post-fff';
    document.getElementById("ttt").value =("");
}

function HideCar(){
    $('.jqcart-layout').fadeOut('fast', function() {
        $(this).remove();
    });
    return false;
}
;(function($) {
    'use strict';
    var cartData,
        itemData,
        orderPreview = '',
        totalCnt = 0,
        visibleLabel = false,
        label = $('<img src="cart.png"><p>РўРѕРІР°СЂРѕРІ <span class="jqcart-total-cnt">0</span><br>РћС„РѕСЂРјРёС‚СЊ</p>'),
        modal = '<div class="jqcart-layout"><div class="jqcart-checkout">123</div></div>',
        orderform = '<hr><p class="jqcart-cart-title">РљРѕРЅС‚Р°РєС‚РЅР°СЏ РёРЅС„РѕСЂРјР°С†РёСЏ:</p><form class="jqcart-orderform"><input type="text" name="user_name" placeholder="Р’РІРµРґРёС‚Рµ РІР°С€Рµ РёРјСЏ"><input  type="text" id="user_phone" name="user_phone" placeholder="Р’Р°С€ С‚РµР»РµС„РѕРЅ"><input type="text" name="user_mail" placeholder="Р’Р°С€ email"><input type="text" id="ttt" style="margin-right:0px; width: 230px;" name="user_address" value="" placeholder="РђРґСЂРµСЃ РґРѕСЃС‚Р°РІРєРё"><br><bR><textarea name="user_comment" placeholder="РљРѕРјРјРµРЅС‚Р°СЂРёР№ Рє Р·Р°РєР°Р·Сѓ"></textarea><br><br><input type="submit" class="input-button" value="РћС‚РїСЂР°РІРёС‚СЊ Р·Р°РєР°Р·"></form>';
    var opts = {
        buttons: '.add_item',
        cartLabel: 'body',
        visibleLabel: false,
        openByAdding: false,
        handler: '/',
        currency: '$'
    };
    var actions = {
        init: function(o) {
            opts = $.extend(opts, o);
            cartData = actions.getStorage();
            if (cartData !== null && Object.keys(cartData).length) {
                for (var key in cartData) {
                    if (cartData.hasOwnProperty(key)) {
                        totalCnt += cartData[key].count;
                    }
                }
                visibleLabel = true;
            }
            label.prependTo(opts.cartLabel)[visibleLabel || opts.visibleLabel ? 'show' : 'hide']()
                .on('click', actions.openCart)
                .find('.jqcart-total-cnt').text(totalCnt);
            $(document)
                .on('click', opts.buttons, actions.addToCart)
                .on('click', '.jqcart-layout', function(e) {
                    if (e.target === this) {
                        actions.hideCart();
                    }
                })
                .on('click', '.jqcart-incr', actions.changeAmount)
                .on('input keyup', '.jqcart-amount', actions.changeAmount)
                .on('click', '.jqcart-del-item', actions.delFromCart)
                .on('submit', '.jqcart-orderform', actions.sendOrder)
                .on('reset', '.jqcart-orderform', actions.hideCart)
                .on('click', '.jqcart-print-order', actions.printOrder);
            return false;
        },
        addToCart: function(e) {
            e.preventDefault();
            itemData = $(this).data();
            addToCartStatHandler(itemData);
            if(typeof itemData.id === 'undefined') {
                console.log('РћС‚СЃСѓС‚СЃС‚РІСѓРµС‚ ID С‚РѕРІР°СЂР°');
                return false;
            }
            cartData = actions.getStorage() || {};
            if (cartData.hasOwnProperty(itemData.id)) {
                cartData[itemData.id].count++;
            } else {
                itemData.count = 1;
                cartData[itemData.id] = itemData;
            }
            actions.setStorage(cartData);
            actions.changeTotalCnt(1);
            label.show();
            if(opts.openByAdding) {
                actions.openCart();
            }
            return false;

        },
        delFromCart: function() {
            var $that = $(this),
                line = $that.closest('.jqcart-tr'),
                itemId = line.data('id');
            cartData = actions.getStorage();
            actions.changeTotalCnt(-cartData[itemId].count);
            delete cartData[itemId];
            actions.setStorage(cartData);
            line.remove();
            actions.recalcSum();
            return false;
        },
        changeAmount: function() {
            var $that = $(this),
                manually = $that.hasClass('jqcart-amount'),
                amount = +(manually ? $that.val() : $that.data('incr')),
                itemId = $that.closest('.jqcart-tr').data('id');
            cartData = actions.getStorage();
            if(manually) {
                cartData[itemId].count = isNaN(amount) || amount < 1 ? 1 : amount;
            } else {
                cartData[itemId].count += amount;
            }
            if (cartData[itemId].count < 1) {
                cartData[itemId].count = 1;
            }
            if(manually) {
                $that.val(cartData[itemId].count);
            } else {
                $that.siblings('input').val(cartData[itemId].count);
            }
            actions.setStorage(cartData);
            actions.recalcSum();
            return false;
        },
        recalcSum: function() {
            var subtotal = 0,
                amount,
                sum = 0,
                totalCnt = 0;
            $('.jqcart-tr').each(function() {
                amount = +$('.jqcart-amount', this).val();
                sum = Math.ceil((amount * $('.jqcart-price', this).text()) * 100) / 100;
                $('.jqcart-sum', this).html(sum + ' ' + opts.currency);
                subtotal = Math.ceil((subtotal + sum) * 100) / 100;
                totalCnt += amount;
            });
            $('.jqcart-subtotal strong').text(subtotal);
            $('.jqcart-total-cnt').text(totalCnt);
            if (totalCnt <= 0) {
                actions.hideCart();
                if(!opts.visibleLabel) {
                    label.hide();
                }
            }
            return false;
        },
        changeTotalCnt: function(n) {
            var cntOutput = $('.jqcart-total-cnt');
            cntOutput.text((+cntOutput.text() + n));
            return false;
        },
        openCart: function() {
            var subtotal = 0,
                cartHtml = '';
            cartData = actions.getStorage();
            orderPreview = '<p onclick="HideCar()" class="jqcart-close"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" enable-background="new 0 0 18 18"><path fill="#DD5044" d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.151 17.943l-4.143-4.102-4.117 4.159-1.833-1.833 4.104-4.157-4.162-4.119 1.833-1.833 4.155 4.102 4.106-4.16 1.849 1.849-4.1 4.141 4.157 4.104-1.849 1.849z"/></svg></p><div  id="content-1" class="jqcart-table-wrapper"  ><div class="jqcart-manage-order"><div class="jqcart-thead"><div>в„–</div><div></div><div>РќР°РёРјРµРЅРѕРІР°РЅРёРµ</div><div style="text-align:center">Р¦РµРЅР°</div><div  style="text-align:center">РљРѕР»-РІРѕ</div><div style="text-align:center">РЎСѓРјРјР°</div><div></div></div>';
            var key, sum = 0;
            for (key in cartData) {
                if (cartData.hasOwnProperty(key)) {
                    sum = Math.ceil((cartData[key].count * cartData[key].price) * 100) / 100;
                    subtotal = Math.ceil((subtotal + sum) * 100) / 100;

                    orderPreview += '<div class="jqcart-tr" data-id="' + cartData[key].id + '">';
                    orderPreview += '<div class="jqcart-small-td">' + cartData[key].id + '</div>';
                    orderPreview += '<div class="jqcart-small-td jqcart-item-img"><img src="' + cartData[key].img + '" alt=""></div>';
                    orderPreview += '<div style="text-align:left;"><b style="font-size:15px;">' + cartData[key].title + ' ('+ cartData[key].pol +  ')</b><br>Р Р°Р·РјРµСЂ: <b>' + cartData[key].size + '</b><br>Р¦РІРµС‚ РѕРґРµР¶РґС‹: <b>' + cartData[key].color + '</b><br>РўРµРєСЃС‚ РЅР°РґРїРёСЃРё: <b>' + cartData[key].textback + '</b><br>РўРµРєСЃС‚ РІС‚РѕСЂРѕР№ СЃС‚СЂРѕРєРё: <b>' + cartData[key].text2 + '</b><br>РўРµРєСЃС‚ СЃ Р»РёС†РµРІРѕР№ СЃС‚РѕСЂРѕРЅС‹: <b>' + cartData[key].text1 + '</b><br>РќРѕРјРµСЂ: <b>' + cartData[key].number + '</b><br>Р¦РІРµС‚ РЅР°РґРїРёСЃРё: <b>' + cartData[key].textcolor + '</b><br>РЁСЂРёС„С‚: <b>' + cartData[key].font + '</b></div>';
                    orderPreview += '<div class="jqcart-price">' + cartData[key].price + '</div>';
                    orderPreview += '<div><span class="jqcart-incr" data-incr="-1">&#8211;</span><input type="text" class="jqcart-amount" value="' + cartData[key].count + '"><span class="jqcart-incr" data-incr="1">+</span></div>';
                    orderPreview += '<div class="jqcart-sum">' + sum + ' ' + opts.currency + '</div>';
                    orderPreview += '<div class="jqcart-small-td"><span class="jqcart-del-item"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" enable-background="new 0 0 18 18"><path id="delet" fill="#6BA942" d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.151 17.943l-4.143-4.102-4.117 4.159-1.833-1.833 4.104-4.157-4.162-4.119 1.833-1.833 4.155 4.102 4.106-4.16 1.849 1.849-4.1 4.141 4.157 4.104-1.849 1.849z"/></svg></span></div>';
                    orderPreview += '</div>';
                }
            }
            orderPreview += '</div></div>';
            orderPreview += '<hr><div class="jqcart-subtotal-post"><a class="jqcart-post" id="a" onclick="rr()"> Р”РѕСЃС‚Р°РІРєР°</a>  <a id="b" onclick="rrr()" class="jqcart-post-fff"> СЃР°РјРѕРІС‹РІРѕР·</a></div><div class="jqcart-subtotal">РС‚РѕРіРѕ: <strong>' + subtotal + '</strong> ' + opts.currency + ' <span id="summpost">+ (Р”РѕСЃС‚Р°РІРєР° <b>350</b> в‚Ѕ)</span></div>';

            cartHtml = subtotal ? (orderPreview + orderform) : '<p onclick="HideCar()" class="jqcart-close"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" enable-background="new 0 0 18 18"><path fill="#DD5044" d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.151 17.943l-4.143-4.102-4.117 4.159-1.833-1.833 4.104-4.157-4.162-4.119 1.833-1.833 4.155 4.102 4.106-4.16 1.849 1.849-4.1 4.141 4.157 4.104-1.849 1.849z"/></svg></p><h2 class="jqcart-empty-cart">РљРѕСЂР·РёРЅР° РїСѓСЃС‚Р°</h2>';
            $(modal).appendTo('body').find('.jqcart-checkout').html(cartHtml);

        },
        hideCart: function() {
            $('.jqcart-layout').fadeOut('fast', function() {
                $(this).remove();
            });
            return false;
        },
        sendOrder: function(e) {
            e.preventDefault();
            boughtStatHandler(actions.getStorage());
            var $that = $(this);
            if ($.trim($('[name=user_name]', $that).val()) === '' || $.trim($('[name=user_phone]', $that).val()) === '') {
                $('<p class="jqcart-error">РџРѕР¶Р°Р»СѓР№СЃС‚Р°, СѓРєР°Р¶РёС‚Рµ СЃРІРѕРµ РёРјСЏ Рё РєРѕРЅС‚Р°РєС‚РЅС‹Р№ С‚РµР»РµС„РѕРЅ!</p>').insertBefore($that).delay(3000).fadeOut();
                return false;
            }
            $.ajax({
                url: opts.handler,
                type: 'POST',
                dataType: 'json',
                data: {
                    orderlist: $.param(actions.getStorage()),
                    userdata: $that.serialize()
                },
                error: function() {},
                success: function(resp) {
                    swal("Р—Р°РєР°Р· РїСЂРёРЅСЏС‚ РІ РѕР±СЂР°Р±РѕС‚РєСѓ!", "Р’ Р±Р»РёР¶Р°Р№С€РµРµ РІСЂРµРјСЏ РјС‹ СЃ РІР°РјРё СЃРІСЏР¶РµРјСЃСЏ!", "success");
                    if(!resp.errors) {
                        setTimeout(methods.clearCart, 0);
                    }
                }
            });
        },
        printOrder: function (){
            var data = $(this).closest('.jqcart-checkout').prop('outerHTML');
            if(!data) {
                return false;
            }
            var win = window.open('', 'РџРµС‡Р°С‚СЊ Р·Р°РєР°Р·Р°', 'width='+screen.width+',height='+screen.height),
                cssHref = $(win.opener.document).find('link[href$="jqcart.css"]').attr('href'),
                d = new Date(),
                curDate = ('0' + d.getDate()).slice(-2) + '-' + ('0' + (d.getMonth() + 1)).slice(-2) + '-' + d.getFullYear() + ' ' + ('0' + d.getHours()).slice(-2) + ':' + ('0' + d.getMinutes()).slice(-2) + ':' + ('0' + d.getSeconds()).slice(-2);


            win.document.write('<html><head><title>Р—Р°РєР°Р· ' + curDate + '</title>');
            win.document.write('<link rel="stylesheet" href="' + cssHref + '" type="text/css" />');
            win.document.write('</head><body >');
            win.document.write(data);
            win.document.write('</body></html>');

            win.document.close(); // РЅСѓР¶РЅРѕ РґР»СЏ IE >= 10
            win.focus(); // РЅСѓР¶РЅРѕ РґР»СЏ IE >= 10

            win.print();
            win.close();

            return true;
        },
        setStorage: function(o) {
            localStorage.setItem('jqcart', JSON.stringify(o));
            return false;
        },
        getStorage: function() {
            return JSON.parse(localStorage.getItem('jqcart'));
        }
    };
    var methods = {
        clearCart: function(){
            localStorage.removeItem('jqcart');
            label[opts.visibleLabel ? 'show' : 'hide']().find('.jqcart-total-cnt').text(0);
            actions.hideCart();
        },
        openCart: actions.openCart,
        printOrder: actions.printOrder,
        test: function(){
            actions.getStorage();
        }
    };
    $.jqCart = function(opts) {
        if (methods[opts]) {
            return methods[opts].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof opts === 'object' || !opts) {
            return actions.init.apply(this, arguments);
        } else {
            $.error('РњРµС‚РѕРґ СЃ РёРјРµРЅРµРј "' + opts + '" РЅРµ СЃСѓС‰РµСЃС‚РІСѓРµС‚!');
        }
    };
})(jQuery);
