import React from 'react'
import { NotesAppbar } from './NotesAppbar'

export const NoteScreen = () => {
    return (
        <div className="notes__main-content">
            <NotesAppbar />

            <div className="notes__content">
                <input 
                    type="text"
                    placeholder="Some awesome title"
                    className="notes__title-input"
                    autoComplete="off"
                />
                <textarea
                    placeholder="What happened today"
                    className="notes__textarea"
                ></textarea>

                <div className="notes__image">
                    <img 
                        src="https://d25rq8gxcq0p71.cloudfront.net/dictionary-images/324/landscape.jpg"
                        alt="a landscape image"
                    />
                </div>
            </div>
        </div>
    )
}
