import React, { useState, useRef } from 'react'
import VideoModal from './VideoModal'
import ReactPlayer from 'react-player'

function Home() {
    // Specific Order
    const gearList = [
        'GPI Pro Sled (w/Volt)',
        'Tiffen Exovest',
        'Sachtler/Artemis Arm (70lbs Max Load)',
        'SmallHD 703 Monitor',
        'Blackmagic 5” Monitor/Recorder',
        'Steadicam Stand w/Casters',
    ]

    const gearList2 = [
        'Gold Mount Batteries (x6)',
        'Sony L-Series Batteries (x4)',
        'Low Mode Bracket',
        'S.O.S. Plate',
        'Decimator MD-LX HDMI/SDI Converter',
        'Misc. Video/Power Cables',
    ]

    const [modal, setModal] = useState(false)
    const [pause, setPause] = useState(false)

    const vidRef = useRef(null)
    const pauseVid = () => {
        vidRef.current.pause()
    }
    const playVid = () => {
        vidRef.current.play()
    }

    const modalHandler = (e) => {
        setModal(!modal)
        pause ? playVid() : pauseVid()
        setPause(!pause)
    }

    return (
        <>
            <VideoModal show={modal} pause={pause} modalHandler={modalHandler}>
                <p>
                    <i
                        className="fas fa-window-close fa-lg"
                        onClick={modalHandler}
                    ></i>
                </p>
                <ReactPlayer
                    key="nickreel"
                    className="react-player-home"
                    url={'https://youtu.be/DiTD--ceH_U'}
                    controls={true}
                    playing={pause ? true : false}
                    width="100%"
                    height="100%"
                    volume={1}
                    muted={false}
                />
            </VideoModal>
            <div className="player-wrapper-home">
                <div className="overlay-box">
                    <h2>Play Reel</h2>
                    <button className="reel-button" onClick={modalHandler}>
                        Watch
                    </button>
                </div>

                <video ref={vidRef} playsInline autoPlay muted loop id="bgvid">
                    <source
                        src="https://nick-portfolio.s3-us-west-2.amazonaws.com/Website+Loop++1.mp4"
                        type="video/mp4"
                    />
                </video>
            </div>

            <div className="home-container">
                <div className="me">
                    <div className="self-portrait">
                        <img
                            src="https://nick-portfolio.s3.us-west-2.amazonaws.com/nick-profile-2-25.jpg"
                            alt="Self portrait of Nick Almanza"
                        />
                    </div>

                    <div className="bio">
                        <h2>Bio</h2>

                        <div className='bio-text-div'>
                            <p>
                                Nick currently resides in Los Angeles where he
                                graduated from California State University
                                Northridge with a degree in Cinema and
                                Television Arts.
                                <br />
                                <br />
                                His work as an operator has been featured on
                                Jimmy Fallon, Stephen Colbert, Good Morning
                                America, the Ellen Show and The Today Show.
                                Besides live television, Nick was able to
                                finally achieve his dream of working in the film
                                industry when he was given the opportunity to
                                work with Lifetime and a small handful of
                                independent movies. But the dream continues to
                                grow as does his passion for filmmaking in the
                                pursuit of more challenging projects. However,
                                what stands our more to him are the talented
                                individuals he gets to meet along the way!
                                <br />
                                <br />
                                Nick is local to Los Angeles but that hasn’t
                                stopped him from working across borders or
                                overseas. The range of projects that he works on
                                span from narratives to commercials as well as
                                music videos. So feel free to navigate towards
                                the “Contact” page for rates, availability or
                                any inquiries to get your project started!
                            </p>
                        </div>
                    </div>
                </div>

                <div className="gear">
                    <h2>Steadicam Kit:</h2>
                    <div className="gear-list-flex">
                        <ul>
                            {gearList.map((gear, index) => (
                                <li key={index}>{gear}</li>
                            ))}
                        </ul>
                        <ul>
                            {gearList2.map((gear, index) => (
                                <li key={index}>{gear}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
