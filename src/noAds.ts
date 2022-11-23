/*
 *	Removes advertisements from ZombsRoyale by settings game.shouldShowAds
 *  This is not a replacement for uBlock Origin, however it does fix the annoying ads in ZombsRoyale.
 */

 // @ts-nocheck

 // game.shouldShowAds=false

alert("Working.");

setInterval(() => {
    try  {
        globalThis["window"]["game"]["init"] = function () {
            globalThis["window"]["game"]["init"].bind(globalThis["window"]["game"])();
            globalThis["window"]["game"]["shouldShowAds"] = false;
        }
    } catch (err) {
        console.error(err)
    }
}, 1000);
