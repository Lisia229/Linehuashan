const axios = require('axios')
const cheerio = require('cheerio')

const url = 'https://www.google.com.tw/maps/search/'

async function getData (text) {
  const { data } = await axios.get(`${url}${text}`)
  const $ = cheerio.load(data)
  console.log(
    $('head')
      .find('meta')
      .eq(10)
      .attr('content')
      .split('center=')[1]
      .split('&zoom=')[0]
      .split('%2C')
  )
}

getData('華山1914文化創意產業園區')
// 25.033652
// 121.5641607&
