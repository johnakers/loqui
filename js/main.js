let channel // ...
const menu = document.querySelector('#menu')
const chat = document.querySelector('#chat ul')
const themes = {

}

ComfyJS.onChat = (user, message, flags, _self, extra) => {
  let userInfo = {
    name: user,
    badges: extra.userBadges,
    color: extra.userState.color,
  }

  let messageInfo = {
    text: message,
    emotes: extra.messageEmotes,
  }

  // console.log(flags) // TODO

  const msg = new Message({ userInfo, messageInfo })
  chat.append(msg.html)
}

// TODO: need dev app to test this, i think
ComfyJS.onSub = (user, message, subTierInfo, extra) => {
  console.log('sub')
}

async function run() {
  channel = menu.querySelector('#channel').value
  const radios = menu.querySelectorAll('input[type="radio"]')
  let theme = null
  for (let i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      theme = radios[i].id
    }
  }

  $('head').append(`<link rel="stylesheet" type="text/css" href="css/${theme}.css" >`)

  // loading message
  menu.innerText = 'Fetching emotes & badges...'

  await populateCaches()

  document.querySelector('html').style.background = 'transparent'
  document.querySelector('body').style.background = 'transparent'
  menu.style.display = 'none'
  ComfyJS.Init(channel)
}
