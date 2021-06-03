import React from 'react'

export const JournalEntry = () => {
    return (
        <div className="journal__entry">
            <div 
                className="journal__entry-picture"
                style={{
                    backgroundSize: 'cover',
                    backgroundImage: 'url(https://lh3.googleusercontent.com/proxy/ekCeHzn5O1UFvXkcCVrOrMxk_1YYtM9TJ3faA5Y6ghifvndr5Q5SfJnLblcJKXxzE4d3teBRg4m5unEbSoPhOP9BYkOln2Le4TiR1PZOEBaN3NtgHZENvP0m8QfhMQwcivaGTLEAbnygqhV8XnfFgZEFxaiIi60)'
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
