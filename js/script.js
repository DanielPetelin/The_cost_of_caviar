document.getElementById('count').onclick = function() {
    // переменная для черной икры в кил
    var your_b = document.getElementById('kil_black').value;
    // переменная для красной икры в кил
    var your_r = document.getElementById('kil_red').value;
    // 45000 руб за килограмм чёрной икры
    var kl_b = 45000;
    // 5000 руб за килограмм красной
    var kl_r = 5000;
    // стоимость чёрной
    var buy_b = your_b * kl_b
    // стоимость красной
    var buy_r = your_r * kl_r
    // общая стоимость
    var result = buy_b + buy_r + ' рублей'

    // выводим обющую стоимость по id адресу на страницу
    document.getElementById('out').innerHTML = result;
};