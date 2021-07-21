import React from 'react'

/* Accepts Wrapper props of "section" to give a dynamic id for easy re-use */
const BGSect = ({section}) => {
    return (
        <div className="background-shapes">
            <div id={`rec-${section}-1`}/>
            <div id={`rec-${section}-2`}/>
            <div id={`circle-${section}`}/>
            <div id={`tri-${section}`}>
                <svg className="tri-svg" xmlns="http://www.w3.org/2000/svg" width="197.603" height="196.565" viewBox="0 0 197.603 196.565">
                    <g id="Group_11811" data-name="Group 11811" transform="translate(1855.31 342.047)">
                        <path id="Path_35376" data-name="Path 35376" d="M439.435,346.016a30,30,0,0,1-9.38-1.5L341.022,315.58A27.917,27.917,0,0,1,321.9,294.673a26.991,26.991,0,0,1,9.265-26.415l70.56-59.735a29.547,29.547,0,0,1,28.384-5.49,27.983,27.983,0,0,1,19.133,20.925l18.473,88.688a26.97,26.97,0,0,1-9.27,26.4A29.331,29.331,0,0,1,439.435,346.016ZM420.752,205.971a24.677,24.677,0,0,0-16,5.868l-70.56,59.735a22.73,22.73,0,0,0-7.791,22.219A23.5,23.5,0,0,0,342.492,311.4l89.033,28.935a24.829,24.829,0,0,0,23.885-4.611,22.7,22.7,0,0,0,7.805-22.219l-18.477-88.684a23.52,23.52,0,0,0-16.1-17.595A25.557,25.557,0,0,0,420.752,205.971Z" transform="matrix(0.883, 0.469, -0.469, 0.883, -1976.568, -670.848)" fill="#262e42"/>
                    </g>
                </svg>
            </div>
        </div>
    )
}

export default BGSect