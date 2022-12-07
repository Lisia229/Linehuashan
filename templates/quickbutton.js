export default (event) => {
  event.reply({
    type: 'text',
    text: '您要怎麼去呢～？',
    quickReply: {
      items: [
        {
          type: 'action',
          imageUrl: 'https://cdn-icons-png.flaticon.com/128/3774/3774278.png',
          action: {
            type: 'message',
            label: '開車',
            text: '開車'
          }
        },
        {
          type: 'action',
          imageUrl: 'https://cdn-icons-png.flaticon.com/128/744/744537.png',
          action: {
            type: 'message',
            label: '捷運',
            text: '捷運'
          }
        },
        {
          type: 'action',
          imageUrl: 'https://cdn-icons-png.flaticon.com/128/1042/1042263.png',
          action: {
            type: 'message',
            label: '公車',
            text: '公車'
          }
        }
      ]
    }

  })
}
