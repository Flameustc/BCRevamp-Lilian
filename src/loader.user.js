// ==UserScript==
// @name BCRevamp-Lilian (Loader)
// @namespace https://www.bondageprojects.com/
// @version 1.0
// @description Bondage Club Revamp by Lilian Script Loader
// @author Lilian
// @match bondageprojects.elementfx.com/*/BondageClub/*
// @match www.bondageprojects.elementfx.com/*/BondageClub/*
// @match bondage-europe.com/*/BondageClub/*
// @match www.bondage-europe.com/*/BondageClub/*
// @grant none
// @run-at document-end
// ==/UserScript==

(function () {
    "use strict";
    const src = `__DEPLOY_SITE__?v=${Date.now()}`;
    if (typeof BCRevampLilian_Loaded === "undefined") {
        const n = document.createElement("script");
        n.setAttribute("type", "text/javascript");
        n.setAttribute("src", src);
        n.setAttribute("id", "BCRevampLilianLoader");
        document.head.appendChild(n);
    }
})();
