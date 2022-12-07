import axios from 'axios'
import * as cheerio from 'cheerio'
import templates from '../templates/character.js'
import writejson from '../utils/writejson.js'

export default async (event) => {
  try {
    const { data } = await axios.get('https://www.huashan1914.com/w/huashan1914/exhibition?typeId=17111317255246856')
    const $ = cheerio.load(data)
    const character = []
    $('.event-list ul li').each(function (i) {
      if (i >= 6) return false
      if (i !== 0) {
        const bubble = JSON.parse(JSON.stringify(templates))
        bubble.hero.url = $(this).find('.card-img').attr('style').split('(')[1].split(')')[0].slice(1, -1)
        bubble.body.contents[0].text = $(this).find('.card-text').find('.card-text-name').eq(0).text()
        bubble.body.contents[1].contents[0].contents[1].text = '活動日期：' + $(this).find('.card-text').find('.event-date').eq(0).text().trim()
        bubble.body.contents[1].contents[1].contents[1].text = '活動時間：' + $(this).find('.card-text').find('.event-time').eq(0).text().trim()
        bubble.footer.contents[0].action.uri = 'https://www.huashan1914.com/' + $(this).find('a').attr('href')
        character.push(bubble)
        return true
      }
    })
    const reply = {
      type: 'flex',
      altText: '展演活動查詢結果',
      contents: {
        type: 'carousel',
        contents: character
      }
    }
    event.reply(reply)
    writejson(reply, 'character')
  } catch (error) {
    console.error(error)
  }
}
