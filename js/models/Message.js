// returns a Message object
class Message {
  constructor({ userInfo, messageInfo }) {
    this.userInfo = userInfo
    this.messageInfo = messageInfo
    this.text = null
    this.userBadges = []
    this.subscriber = false

    this.#parseBadges()
    this.#parseEmotes()
  }

  get html() {
    const userDiv = document.createElement('div')
    userDiv.className = 'user'
    userDiv.style.color = this.userInfo.color
    userDiv.innerHTML = this.userBadges.join(' ') + ' ' + this.userInfo.name

    const messageDiv = document.createElement('div')
    messageDiv.className = 'message'
    messageDiv.innerHTML = this.text

    const li = document.createElement('li')
    if (this.subscriber) { li.classList += li.classList + 'subscriber' }
    li.append(userDiv)
    li.append(messageDiv)
    $(li).delay(20000).fadeOut()

    return li
  }

  #parseBadges() {
    if (this.userInfo.badges) {
      for (let key in this.userInfo.badges) {
        // let id = this.userInfo.badges[key]
        if (key === 'subscriber') { this.subscriber = true }
        let src = badgeCache[key].find(b => b.id === this.userInfo.badges[key]).image
        this.userBadges.push(`<img src="${src}" />`)
      }
    }
  }

  #parseEmotes() {
    if (this.messageInfo.emotes) {
      const words = this.messageInfo.text.split(' ')
      this.text = words.map(word => {
        if (emoteCache[word]) {
          return `<img src="${emoteCache[word]}"/>`
        } else {
          return word
        }
      }).join(' ')
    } else {
      this.text = this.messageInfo.text
    }
  }
}
