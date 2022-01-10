import React from 'react'
import './detail.css'

function Detail() {
  return (
    <div className='detail-container'>
      <div className='background'>
        <img src='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4F39B7E16726ECF419DD7C49E011DD95099AA20A962B0B10AA1881A70661CE45/scale?width=1440&aspectRatio=1.78&format=jpeg' />
      </div>
      <div className='div-image'>
        <img src='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D7AEE1F05D10FC37C873176AAA26F777FC1B71E7A6563F36C6B1B497CAB1CEC2/scale?width=1440&aspectRatio=1.78' />
      </div>
      <div className='controls'>
        <div className='play-button'>
          <button>
            <img src='/images/play-icon-black.png' alt='image' />
            <span>PLAY</span>
          </button>
        </div>
        <div className='trailer-button'>
          <button>
            <img src='/images/play-icon-white.png' alt='images' />
            <span>TRAILER</span>
          </button>
        </div>
        <div className='add-button'>
          <button>
            <span>+</span>
          </button>
        </div>
        <div className='group-watch'>
          <button>
            <img src='/images/group-icon.png' alt='imge' />
          </button>
        </div>
      </div>
      <div className='subtitle'>
        2018 . 7m . Family, Fantasy, Kids, Animation
      </div>
      <div className='discription'>
        To get started with React Router in a web app, you’ll need a React web
        app. If you need to create one, we recommend you try Create React App.
        It’s a popular tool that works really well with React Router. You can
        install React Router from the public npm registry with either npm or
        yarn. Since we’re building a web app, we’ll use react-router-dom in this
        guide.
      </div>
    </div>
  )
}

export default Detail
