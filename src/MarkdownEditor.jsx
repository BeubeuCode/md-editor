import React from 'react';
import Footer from './footer';
import MDReactComponent from 'markdown-react-js';
import Title from './Title';
import  './MarkdownEditor.css'

class MarkdownEditor extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {value : 'Enter your **markdown** in the text area. It will show up below !'};
    }

    handleChange(e) {
        this.setState({ value : e.target.value });
    }

    copyToClipboard = (e) => {
        this.textArea.select();
        document.execCommand('copy');
        e.target.focus();
        window.alert("copied !");
    }

    render() {
        return(
            <div className="MarkdownEditor">
                <Title />
                <div className="editor">
                    <textarea
                        rows={10}
                        cols={50}
                        className="mdInput"
                        ref={textArea => this.textArea = textArea}
                        type="text" 
                        value={this.state.value} 
                        onChange={this.handleChange}
                    />
                    <br />
                    <button onClick={this.copyToClipboard}>
                        Copy To Clipboard
                    </button>
                </div>
                <hr />
                <div className="Output">
                    <MDReactComponent text={this.state.value}/>
                </div>
                <Footer />
            </div>
        )
    }
}

export default MarkdownEditor;