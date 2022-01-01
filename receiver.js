const context = cast.framework.CastReceiverContext.getInstance();
const playerManager = context.getPlayerManager();
context.start();

var generateRandomString = function (length) {
  var text = '';
  var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (var i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};
const access_token = 'BQAayZAZaMkaEv20_g0x_XoOOe7EkldylZqLnCSSWg5Trd6G_8c9Z9lqJLrB0vNsRhFU9qXvV8TES0_lRVNgHkP27Gz8aOPSghEJ2jXBs9BdvOtVYk4dq0UTreBgxDd0AqEfDRLIXpQKl22e55ctaaj9YwbH0Oram0Q'
const script = document.createElement("script");
    script.src = "https://sdk.scdn.co/spotify-player.js";
    script.async = true;
