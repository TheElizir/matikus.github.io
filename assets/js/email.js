document.addEventListener('DOMContentLoaded', function () {
    var user = 'dev';
    var domain = 'matikusgames.com';
    var email = user + '@' + domain;

    var nodes = document.querySelectorAll('.email-dev');
    nodes.forEach(function (span) {
        span.innerHTML = '<a href="mailto:' + email + '">' + email + '</a>';
    });
});
