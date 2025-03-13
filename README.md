# Loqui

- Leverages [ComfyJS](https://github.com/instafluff/comfyjs) CDN example, for simplicity

### Features

- [x] Renders `{username}: {message}`
- [x] User chat color is used
- [x] Emotes ( bugs: 1,2 )
- [ ] Badges

### Upcoming

- Themes, perhaps?

### Styling

- [CodePen effect example](https://codepen.io/ss/pen/wGXOxa)
- RuneScape font found [here](https://fontstruct.com/fontstructions/show/855573/runescape_chat_07)
- [RuneScape Color Codes](https://oldschool.runescape.wiki/w/RuneScape:Colour_codes)

### Developer Notes/Attribution

- [ComfyJS Tutorial](https://dev.to/annetawamono/how-to-build-a-twitch-chat-overlay-326b)
- [Stefan Judis' notes on Emotes](https://www.stefanjudis.com/blog/how-to-display-twitch-emotes-in-tmi-js-chat-messages/)
- [giambaJ's "jchat"](https://www.giambaj.it/twitch/jchat/)

### How to use

_Eventually, there'll be a proper input but right now its very dev heavy_

1. Change the `channel` variable in `js/channel.js` to the Twitch channel you want
2. Pick your theme by commenting in/out the css file you want in `index.html`
3. Create a Browswer source in OBS, click "Local File", and link `index.html`
4. If you make any changes you'll need to click "Refresh" on the Browswer source

### Testing

Open `index.html` in your favorite browswer and type some stuff in the Twitch channel
you're following and watch it populate.

### Known Bugs

1. Sometimes emotes "stomp" each other so youu'll see 2 of the same emote instead of 1

Duplication method: A chat message with _emoteA_ and _emoteB_ may show up both as _emoteA_.

2. Animated emotes API seems to not work, need to investigate (everything defaulted to static image)


### Styling

- No semicolons
- For now, using JS. Plans to switch to TypeScript when a v0 works
