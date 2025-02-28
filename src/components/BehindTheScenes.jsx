import React, { useState, useEffect } from 'react'
import ReactPlayer from 'react-player'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'

import Lightbox from 'yet-another-react-lightbox'
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen'
import Inline from 'yet-another-react-lightbox/plugins/inline'
import Slideshow from 'yet-another-react-lightbox/plugins/slideshow'
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails'
import Zoom from 'yet-another-react-lightbox/plugins/zoom'
import 'yet-another-react-lightbox/plugins/thumbnails.css'
import 'yet-another-react-lightbox/styles.css'


function BehindTheScenes() {
  const thumbnailArray = [
    'https://nick-portfolio.s3-us-west-2.amazonaws.com/thumbnails/0ADSC03760.jpg',
    'https://nick-portfolio.s3-us-west-2.amazonaws.com/thumbnails/0ADSC03870.jpg',
    'https://nick-portfolio.s3-us-west-2.amazonaws.com/thumbnails/0ADSC03883.jpg',
    'https://nick-portfolio.s3-us-west-2.amazonaws.com/thumbnails/DSC03496.jpg',
    'https://nick-portfolio.s3-us-west-2.amazonaws.com/thumbnails/DSC03567.jpg',
    'https://nick-portfolio.s3-us-west-2.amazonaws.com/thumbnails/DSC04021.jpg',
    'https://nick-portfolio.s3-us-west-2.amazonaws.com/thumbnails/DSC04065.jpg',
    'https://nick-portfolio.s3-us-west-2.amazonaws.com/thumbnails/DSC04180.jpg',
    'https://nick-portfolio.s3-us-west-2.amazonaws.com/thumbnails/DSC04185.jpg',
    'https://nick-portfolio.s3-us-west-2.amazonaws.com/thumbnails/IMG_0435.jpg',
    'https://nick-portfolio.s3-us-west-2.amazonaws.com/thumbnails/IMG_6486.jpg',
    'https://nick-portfolio.s3-us-west-2.amazonaws.com/thumbnails/IMG_9798.jpg',
    'https://nick-portfolio.s3-us-west-2.amazonaws.com/thumbnails/VLB+Shoot.jpg',
    'https://nick-portfolio.s3-us-west-2.amazonaws.com/IMG_5225.jpg',
    'https://nick-portfolio.s3-us-west-2.amazonaws.com/thumbnails/R4030F08.jpg',
  ]

  const imgArray = [
    { src: 'https://nick-portfolio.s3-us-west-2.amazonaws.com/001.jpg' },
    { src: 'https://nick-portfolio.s3-us-west-2.amazonaws.com/002.jpg' },
    { src: 'https://nick-portfolio.s3-us-west-2.amazonaws.com/003.jpg' },
    { src: 'https://nick-portfolio.s3-us-west-2.amazonaws.com/005.jpg' },
    { src: 'https://nick-portfolio.s3-us-west-2.amazonaws.com/006.jpg' },
    { src: 'https://nick-portfolio.s3-us-west-2.amazonaws.com/007.jpg' },
    { src: 'https://nick-portfolio.s3-us-west-2.amazonaws.com/008.jpg' },
    { src: 'https://nick-portfolio.s3-us-west-2.amazonaws.com/009.jpg' },
    { src: 'https://nick-portfolio.s3-us-west-2.amazonaws.com/010.jpg' },
    { src: 'https://nick-portfolio.s3-us-west-2.amazonaws.com/011.JPG' },
    { src: 'https://nick-portfolio.s3-us-west-2.amazonaws.com/013.JPG' },
    { src: 'https://nick-portfolio.s3-us-west-2.amazonaws.com/014.JPG' },
    { src: 'https://nick-portfolio.s3-us-west-2.amazonaws.com/015.JPG' },
    { src: 'https://nick-portfolio.s3-us-west-2.amazonaws.com/IMG_5225.jpeg' },
    { src: 'https://nick-portfolio.s3-us-west-2.amazonaws.com/R4030F08.jpg' },
  ]

  const inline = {
    style: {
      width: '100%',
      maxWidth: '900px',
      aspectRatio: '3 / 2',
      margin: '0 auto',
      minHeight: '500px',
    },
  }

  const responsive = {
    0: { items: 1 },
    800: { items: 2 },
    1024: { items: 2 },
    1500: { items: 3 },
  }

  const urlArray = [
    'https://youtu.be/SsEqGBjcIcI',
    'https://youtu.be/lrHUvmsDo08',
    'https://youtu.be/3Ti9Z21HWzg',
  ]

  const vidItems = []
  urlArray.map((url, index) =>
    vidItems.push(
      <div className='player-wrapper' data-value={index}>
        <ReactPlayer
          className='react-player'
          url={url}
          controls={true}
          width='100%'
          height='100%'
        />
      </div>
    )
  )

  return (
    <div className='bts-container'>
      <div className='bts-pics-container'>
        <h2>Photos</h2>
        <Lightbox
          slides={imgArray}
          inline={inline}
          slideshow={{ autoplay: true, delay: 5000 }}
          thumbnails={{ position: 'bottom', hidden: false, showToggle: true, }}
          plugins={[Inline, Fullscreen, Slideshow, Thumbnails, Zoom]}
        />
      </div>

      <div className='bts-vids-container'>
        <h2>Videos</h2>
          <AliceCarousel
            mouseTracking
            touchTracking
            infinite
            animationDuration={1400}
            items={vidItems}
            responsive={responsive}
          />
      </div>
    </div>
  )
}

export default BehindTheScenes
