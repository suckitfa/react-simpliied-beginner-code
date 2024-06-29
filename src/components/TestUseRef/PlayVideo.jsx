import { useRef, useState } from "react";

function PlayVideo() {
    const [isPlaying, setIsPlaying] = useState()
    const videoRef = useRef()

    const handleClick = () => {
        const nextIsPlaying = !isPlaying;
        setIsPlaying(nextIsPlaying)

        if (nextIsPlaying) {
            videoRef.current.play();
        } else {
            videoRef.current.pause();
        }
    }
    return (
        <>
            <button onClick={handleClick}>
                {
                    isPlaying ? 'Pause' : 'Play'
                }
            </button>
            <video ref={videoRef} controls width="250" onPlay={() => setIsPlaying(true)} onPause={() => setIsPlaying(false)}>
                <source
                    src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
                    type="video/mp4"
                />
            </video>
        </>
    )
}

export default PlayVideo;