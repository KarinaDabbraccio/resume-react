import React, { useState } from 'react';

function Video() {
    const [isVisible, setIsVisible] = useState(false);

    function handleClick() {
        setIsVisible(!isVisible);
    }

    return (
        <div>
            <div class="mb-2">
                <button className="btn btn-primary" onClick={handleClick} style={{ color: '#243763', backgroundColor: '#FF6E31' }}>Video</button>
            </div>

            {isVisible && (
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/2iuFNH1RdH0"
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            )}
        </div>
    );
}

export default Video;