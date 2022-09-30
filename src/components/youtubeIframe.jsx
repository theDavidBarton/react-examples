import React, { useState } from 'react'

export default function YoutubeIframe() {
  const [youtubeID,] = useState('dg0Y6gSH-So')

  return (
    <main className='bg-light height-keep'>
      <section className='container p-5'>
        <iframe
          className='video'
          title='Youtube player'
          sandbox='allow-same-origin allow-forms allow-popups allow-scripts allow-presentation'
          src={`https://youtube.com/embed/${youtubeID}?autoplay=0`}></iframe>
      </section>
    </main>
  )
}
