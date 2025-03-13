const emoteCache = {}
const badgeCache = {}

async function populateGlobalBadges() {
  const response = await fetch(`https://vellicare-38b605504fb2.herokuapp.com/global/badges`)
  const json = await response.json()

  return JSON.parse(json)
}

async function populateGlobalEmotes() {
  const response = await fetch(`https://vellicare-38b605504fb2.herokuapp.com/global/emotes`)
  const json = await response.json()

  return JSON.parse(json)
}

async function populdateEmotesCache() {
  const response = await fetch(`https://vellicare-38b605504fb2.herokuapp.com/user/${channel}/emotes`)
  const json = await response.json()

  return JSON.parse(json)
}

async function populateBadgesCache() {
  const response = await fetch(`https://vellicare-38b605504fb2.herokuapp.com/user/${channel}/badges`)
  const json = await response.json()

  return JSON.parse(json)
}

async function populateCaches() {
  const globalEmotes = await populateGlobalEmotes()
  for (let i = 0; i < globalEmotes.data.length; i++) {
    let globalEmote = globalEmotes.data[i]
    emoteCache[globalEmote.name] = globalEmote.images.url_1x // assume
  }

  const globalBadges = await populateGlobalBadges()
  for (let i = 0; i < globalBadges.data.length; i++) {
    let globalBadge = globalBadges.data[i]
    if (!badgeCache[globalBadge.set_id]) {
      badgeCache[globalBadge.set_id] = globalBadge.versions.map(ver => {
        return {
          id: ver.id,
          image: ver.image_url_1x
        }
      })
    } else {
      throw 'Conflict. Investigate'
    }
  }

  const emotes = await populdateEmotesCache()
  for (let i = 0; i < emotes.data.length; i++) {
    let emote = emotes.data[i]
    emoteCache[emote.name] = emote.images.url_1x
  }

  const badges = await populateBadgesCache()
  for (let i = 0; i < badges.data.length; i++) {
    let badge = badges.data[i]
    if (!badgeCache[badge.set_id]) {
      badgeCache[badge.set_id] = badge.versions.map(ver => {
        return {
          id: ver.id,
          image: ver.image_url_1x
        }
      })
    } else {
      badge.versions.forEach(ver => {
        badgeCache[badge.set_id].push({
          id: ver.id,
          image: ver.image_url_1x
        })
      })
    }
  }
}
