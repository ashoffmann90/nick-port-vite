import React from 'react'
import ReactPlayer from 'react-player'

function Videos() {
    const videos = [
        {
            artist: 'Lizzy Small',
            url: 'https://youtu.be/wn97IF3-Im4',
        },
        {
            artist: 'Cochise',
            url: 'https://youtu.be/FGZMQam5AEM',
        },
        {
            artist: 'Ayron Jones',
            url: 'https://youtu.be/wB593WIQ674',
        },
        {
            artist: 'Dirty Honey',
            url: 'https://youtu.be/UiD_Dycn7Ck',
        },
        {
            artist: 'Inayah',
            url: 'https://youtu.be/xdzwEaIKo9M',
        },
        {
            artist: 'Muni Long',
            url: 'https://youtu.be/szuAq2v9TSI',
        },
        {
            artist: 'Woosung',
            url: 'https://youtu.be/3YFZyOpF7tU',
        },
        {
            artist: 'Jojo',
            url: 'https://youtu.be/ZlAayK06ofY',
        },
        {
            artist: 'The Game & Blaneoh',
            url: 'https://youtu.be/XpW4pNvY0bs',
        },
        {
            artist: 'Dirty Honey',
            url: 'https://youtu.be/w2lro88_-kM',
        },
        {
            artist: 'Saint Jhn',
            url: 'https://youtu.be/qbfQgK0tjTg',
        },
        {
            artist: 'Vel the Wonder',
            url: 'https://youtu.be/lcQPskvkG9k',
        },
        {
            artist: 'Amber Riley',
            url: 'https://youtu.be/q2mdhTCZch8',
        },
        {
            artist: 'Dirty Honey',
            url: 'https://youtu.be/H_hXyzj3ZEc',
        },
        {
            artist: 'MadeinTYO',
            url: 'https://youtu.be/s-HuzExvQO8',
        },
        {
            artist: 'Say Grace',
            url: 'https://youtu.be/5WnU4G4LL3E',
        },
        {
            artist: 'Rudi',
            url: 'https://youtu.be/r224Mu2W5jQ',
        },
        {
            artist: 'Almighty Suspect',
            url: 'https://youtu.be/--bAW6ZFxuI',
        },
        {
            artist: 'Symba',
            url: 'https://youtu.be/djpDAHiaoy0',
        },
    ]

    return (
        <div className="player-wrapper">
            {videos.map((video, index) => (
                <ReactPlayer
                    className="react-player"
                    url={video.url}
                    key={index}
                    controls={true}
                    volume={1}
                    muted={false}
                    width="30%"
                    height="30vh"
                />
            ))}
        </div>
    )
}

export default Videos
