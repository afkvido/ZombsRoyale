import type { PlasmoCSConfig } from "plasmo"

export const config: PlasmoCSConfig = {
  matches: ["*://zombsroyale.io/*"]
}


/*
 *	Removes advertisements from ZombsRoyale by settings game.shouldShowAds
 *  This is not a replacement for uBlock Origin, however it does fix the annoying ads in ZombsRoyale.
 */

setInterval(() => {

    // @ts-expect-error
    window.game?.shouldShowAds = false;

}, 1000);