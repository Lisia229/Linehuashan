export default {
  type: 'bubble',
  size: 'mega',
  hero: {
    type: 'image',
    url: 'https://res.klook.com/image/upload/x_168,y_0,w_667,h_434,c_crop/events/hubpage/myahd7yq3tvsp3e1xbtb.jpg',
    size: 'full',
    aspectMode: 'cover',
    aspectRatio: '20:13'
  },
  body: {
    type: 'box',
    layout: 'vertical',
    contents: [
      {
        type: 'text',
        text: 'Brown Cafe',
        weight: 'bold',
        size: 'xl'
      },
      {
        type: 'box',
        layout: 'vertical',
        margin: 'lg',
        spacing: 'sm',
        contents: [
          {
            type: 'box',
            layout: 'baseline',
            spacing: 'sm',
            contents: [
              {
                type: 'icon',
                url: 'https://img.icons8.com/office/2x/traffic-jam.png'
              },
              {
                type: 'text',
                text: 'Miraina Tower, 4-1-6 Shinjuku, Tokyo',
                wrap: true,
                color: '#666666',
                size: 'sm',
                flex: 5
              }
            ]
          }
        ]
      }
    ],
    backgroundColor: '#f4f0e6'
  }
}
