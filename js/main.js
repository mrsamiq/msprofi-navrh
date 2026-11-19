(function () {
    var menu = document.getElementById('menu');
    var menuTlacidlo = document.querySelector('.menu-tlacidlo');

    if (menu && menuTlacidlo) {
        menuTlacidlo.addEventListener('click', function () {
            var otvorene = menu.classList.toggle('je-otvorene');
            menuTlacidlo.setAttribute('aria-expanded', otvorene ? 'true' : 'false');
        });

        menu.addEventListener('click', function (e) {
            if (e.target.tagName === 'A') {
                menu.classList.remove('je-otvorene');
                menuTlacidlo.setAttribute('aria-expanded', 'false');
            }
        });
    }

    var poruchaTlacidlo = document.getElementById('porucha-tlacidlo');
    var porucha = document.getElementById('porucha');
    if (poruchaTlacidlo && porucha) {
        var otvor = function (zamerat) {
            porucha.hidden = false;
            poruchaTlacidlo.setAttribute('aria-expanded', 'true');
            if (zamerat) {
                var pole = porucha.querySelector('input');
                if (pole) { pole.focus({ preventScroll: true }); }
                porucha.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        };

        poruchaTlacidlo.addEventListener('click', function () {
            if (porucha.hidden) {
                otvor(true);
            } else {
                porucha.hidden = true;
                poruchaTlacidlo.setAttribute('aria-expanded', 'false');
            }
        });

        if (window.location.hash === '#porucha') {
            otvor(false);
        }
    }
}());
