import React from 'react'
import  './MarkdownEditor.css'
class Title extends React.Component {
    render() {
        return(
            <div className="Title">
                <h2>Simple markdown editor.</h2>
                <p>Usage :</p>
                <ul>
                    <li>Write markdown in the text area</li>
                    <li>See the result</li>
                    <li>Click the "Copy to clipboard" button to copy the markdown you wrote.</li>
                </ul>
            </div>


        )
    }
}

export default Title;