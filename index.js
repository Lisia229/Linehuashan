// 引用 dotenv 讀取 .env 檔的設定
import 'dotenv/config'
// 引用 linebot
import linebot from 'linebot'
import fetchEvent from './textes/fetchEvent.js'
import fetchCar from './textes/fetchCar.js'
import fetchactivity from './textes/fetchactivity.js'
import fetchBus from './textes/fetchBus.js'
import fetchMetro from './textes/fetchMetro.js'
import quickReply from './templates/quickbutton.js'
import texts from './textes/text.js'
// // 引用 axios
// import axios from 'axios'
// // 引用 Flex 模板
// import flex from './flex.js'

// 關閉 https 驗證檢查
process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0
// 設定 linebot
const bot = linebot({
  channelId: process.env.CHANNEL_ID,
  channelSecret: process.env.CHANNEL_SECRET,
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN
})

bot.on('message', event => {
  if (event.message.text === '展演活動') {
    fetchEvent(event)
  }
  if (event.message.text === '期間限定店') {
    fetchactivity(event)
  }
  if (event.message.text === '開車') {
    fetchCar(event)
  }
  if (event.message.text === '公車') {
    fetchBus(event)
  }
  if (event.message.text === '捷運') {
    fetchMetro(event)
  }
  if (event.message.text === '查交通') {
    quickReply(event)
  }
  if (event.message.text === '消息') {
    texts(event)
  }
})

// linebot 偵測指定 port 的指定路徑請求
bot.listen('/', process.env.PORT || 3000, () => {
  console.log('機器人啟動')
})
