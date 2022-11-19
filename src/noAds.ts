/*
 *	Removes advertisements from ZombsRoyale by settings game.shouldShowAds
 *  This is not a replacement for uBlock Origin, however it does fix the annoying ads in ZombsRoyale.
 */

// @ts-expect-error
let game = window.game;


let adsChecker = setInterval(() => {
    try  {
       game.shouldShowAds = false; 
    } catch (err) {
        console.error(err)
    }
}, 1000);

