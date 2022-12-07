import axios from 'axios'
import * as cheerio from 'cheerio'
import templates from '../templates/Metro.js'
import writejson from '../utils/writejson.js'

export default async (event) => {
  try {
    const { data } = await axios.get('https://www.huashan1914.com/w/huashan1914/traffic')
    const $ = cheerio.load(data)
    const bus = []
    $('.traffic-option').each(function () {
      const bubble = JSON.parse(JSON.stringify(templates))
      bubble.body.contents[0].text = $(this).find('.card-title').eq(2).text()
      bubble.body.contents[1].contents[0].contents[1].text = $(this).find('.card-text-info').eq(2).find('li').text()
      // bubble.body.contents[1].contents[1].contents[1].text = $(this).find('.card-text-info').eq(0).find('li').text()
      bus.push(bubble)
    })
    const reply = {
      type: 'flex',
      altText: '公車查詢結果',
      contents: {
        type: 'carousel',
        contents: bus
      }
    }
    event.reply(reply)
    writejson(reply, 'bus')
  } catch (error) {
    console.error(error)
  }
}
