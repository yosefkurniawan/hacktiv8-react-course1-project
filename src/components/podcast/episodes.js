import React from "react";

function Episodes(props) {
    return (
        <div className="episodes">
            <h4>
                <strong>Episode: </strong>
            </h4>
            {(props.episodes) ? (
                <>
                    <div>
                        {props.episodes.map(episode => (
                            <audio controls key={episode.id}>
                                <source src={episode.audio} type="audio/mpeg" />
                            </audio>
                        ))}
                    </div>
                </>
            ) : (
                <span>Coming Soon...</span>
            )}
        </div>
    )
}

export default Episodes;