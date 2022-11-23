/*
 *	Removes advertisements from ZombsRoyale by settings game.shouldShowAds
 *  This is not a replacement for uBlock Origin, however it does fix the annoying ads in ZombsRoyale.
 */


 // game.shouldShowAds=false



for (let script of document.getElementsByTagName("script")) {
    if (!script.src) continue;
    if (script.getAttribute("src").includes("app.js")) {
        alert("Working.");
        // @ts-expect-error
        window.appJs = script;
        script.setAttribute("onLoad", "window.game.shouldShowAds=false");
    }
}

setInterval(() => {
    for (let script of document.getElementsByTagName("script")) {
        if (!script.src) continue;
        if (script.getAttribute("src").includes("app.js")) {
            // @ts-expect-error
            window.appJs = script;
            script.setAttribute("onLoad", "window.game.shouldShowAds=false");
            script.dispatchEvent(new CustomEvent("load"))
        }
    }
}, 1000);