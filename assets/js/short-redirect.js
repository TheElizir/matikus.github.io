document.addEventListener('DOMContentLoaded', function () {
    function getTargetFromHash(hash) {
        switch (hash) {
            case 'rec':
                return 'index.html#recommendations';
            case 'recommendation':
                return 'redirects/recommendations.html#recommendations';
            default:
                return 'index.html';
        }
    }

    var hash = window.location.hash.replace('#', '');
    var target = getTargetFromHash(hash);

    // Fallback-Link im HTML aktualisieren
    var link = document.getElementById('fallback-link');
    if (link) link.href = target;

    // Weiterleiten
    window.location.href = target;
});
