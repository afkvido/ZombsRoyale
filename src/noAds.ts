/*
 *	Removes advertisements from ZombsRoyale by settings game.shouldShowAds
 *  This is not a replacement for uBlock Origin, however it does fix the annoying ads in ZombsRoyale.
 */


 document.addEventListener("DOMContentLoaded", function () {

    alert("Working.");

    setInterval(() => {
        try  {
            // @ts-expect-error
            window["game"]["shouldShowAds"] = false;
        } catch (err) {
            console.error(err)
        }
    }, 1000);

});



