import React from 'react'

export const JournalEntry = () => {
    return (
        <div className="journal__entry">
            <div 
                className="journal__entry-picture"
                style={{
                    backgroundSize: 'cover',
                    backgroundImage: 'url(https://images.iphonephotographyschool.com/22685/1120/How-To-Blur-Background-On-iPhone.jpg)'
                }}
            ></div>

            <div className="journal__entry-body">
                <p className="journal__entry-title">
                    A new day
                </p>
                <p className="journal__entry-content">
                    Labore labore id laborum eiusmod sint irure amet in est fugiat pariatur.
                </p>
            </div>

            <div className="journal__entry-date-box">
                <span>Thursday</span>
                <h4>3</h4>
            </div>
        </div>
    )
}
