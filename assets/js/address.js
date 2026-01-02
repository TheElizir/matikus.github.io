document.addEventListener('DOMContentLoaded', function () {
    var part1 = 'Rua Ponta da Cruz 32, ';
    var part2 = 'Edf. Centromar, ';
    var part3 = 'Blc B, ';
    var part4 = 'Apt. BG';
    var part5 = '9000-103 Funchal';

    var nodes = document.querySelectorAll('.address');
    nodes.forEach(function (span) {
        span.innerHTML = '<strong>' + part1 + part2 + part3 + part4 + '</strong><br />' + '<strong>' + part5 + '</strong><br />' + '<strong>Portugal</strong>';
    });
});
