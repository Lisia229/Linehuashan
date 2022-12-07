import axios from 'axios'
import * as cheerio from 'cheerio'
import templates from '../templates/News.js'
import writejson from '../utils/writejson.js'

export default async (event) => {
  try {
    const { data } = await axios.get('https://www.huashan1914.com/w/huashan1914/traffic')
    const $ = cheerio.load(data)
    const news = []
    $('.traffic-option').each(function () {
      const bubble = JSON.parse(JSON.stringify(templates))
      bubble.body.contents[0].text = $(this).find('.card-title').eq(0).text()
      bubble.body.contents[1].contents[0].contents[1].text = $(this).find('.card-text-info').eq(0).find('li').text()
      // bubble.body.contents[1].contents[1].contents[1].text = $(this).find('.card-text-info').eq(0).find('li').text()
      news.push(bubble)
    })
    const reply = {
      type: 'flex',
      altText: '交通查詢結果',
      contents: {
        type: 'carousel',
        contents: news
      }
    }
    event.reply(reply)
    writejson(reply, 'news')
  } catch (error) {
    console.error(error)
  }
}
