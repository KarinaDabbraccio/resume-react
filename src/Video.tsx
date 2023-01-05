// JavaScript source code
import React from 'react';

function Video() {
    return (
        <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/<video-id>"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
        />
    );
}

export default Video;
