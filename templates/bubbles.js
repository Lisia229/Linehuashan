export default {
  type: 'bubble',
  body: {
    type: 'box',
    layout: 'vertical',
    contents: [
      {
        type: 'image',
        url: 'https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt61bcbb832dcafe7e/5f7f709a6e4e710f24012849/ashe_champthumb.jpg',
        size: 'full',
        aspectMode: 'cover',
        aspectRatio: '2:3',
        gravity: 'top'
      },
      {
        type: 'box',
        layout: 'vertical',
        contents: [
          {
            type: 'box',
            layout: 'vertical',
            contents: [
              {
                type: 'text',
                text: '艾希',
                size: 'xl',
                color: '#ffffff',
                weight: 'bold'
              }
            ]
          },
          {
            type: 'box',
            layout: 'horizontal',
            contents: [
              {
                type: 'button',
                action: {
                  type: 'uri',
                  label: 'action',
                  uri: 'http://linecorp.com/'
                },
                color: '#ffffff'
              },
              {
                type: 'button',
                action: {
                  type: 'uri',
                  label: 'action',
                  uri: 'http://linecorp.com/'
                },
                color: '#ffffff'
              }
            ],
            borderWidth: 'light',
            cornerRadius: '4px',
            spacing: 'sm',
            borderColor: '#ffffff',
            margin: 'xxl',
            height: '40px',
            position: 'relative'
          }
        ],
        position: 'absolute',
        offsetBottom: '0px',
        offsetStart: '0px',
        offsetEnd: '0px',
        backgroundColor: '#b1c4c7',
        paddingAll: '20px',
        paddingTop: '18px'
      }
    ],
    paddingAll: '0px'
  }
}
