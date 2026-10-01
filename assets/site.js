/* ============================================================
   Frameskip Games — shared behaviour
   1. Theme toggle (dark by default, choice remembered)
   2. Table of contents for legal pages
   ============================================================ */

(function () {
    'use strict';

    var STORAGE_KEY = 'frameskip-theme';

    /* --- Theme ------------------------------------------------ */

    var toggle = document.getElementById('theme-toggle');

    function labelFor(theme) {
        return theme === 'light' ? 'Dark' : 'Light';
    }

    function apply(theme) {
        document.documentElement.setAttribute('data-theme', theme);

        if (!toggle) return;

        var next = theme === 'light' ? 'dark' : 'light';
        toggle.querySelector('.theme-toggle-label').textContent = labelFor(theme);
        toggle.setAttribute('aria-label', 'Switch to ' + next + ' theme');
    }

    apply(document.documentElement.getAttribute('data-theme') || 'dark');

    if (toggle) {
        toggle.addEventListener('click', function () {
            var theme =
                document.documentElement.getAttribute('data-theme') === 'light'
                    ? 'dark'
                    : 'light';

            apply(theme);

            try {
                localStorage.setItem(STORAGE_KEY, theme);
            } catch (e) {
                /* private browsing — the toggle still works for this visit */
            }
        });
    }

    /* --- Table of contents ------------------------------------ */

    var toc = document.getElementById('toc');
    var headings = document.querySelectorAll('.prose section[id] h2');

    if (toc && headings.length) {
        var list = document.createElement('ol');

        for (var i = 0; i < headings.length; i++) {
            var item = document.createElement('li');
            var link = document.createElement('a');
            var num = headings[i].querySelector('.num');

            link.href = '#' + headings[i].parentNode.id;

            /* Reuse the section's own zero-padded number so the contents
               list and the headings always agree. */
            link.textContent =
                (num ? num.textContent.trim() + '  ' : '') +
                headings[i].textContent.replace(/^\s*[\d.]+\s*/, '');

            item.appendChild(link);
            list.appendChild(item);
        }

        toc.querySelector('.toc-list').appendChild(list);
        toc.hidden = false;
    }
})();
