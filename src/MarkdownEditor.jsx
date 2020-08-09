import React from 'react';
import MDReactComponent from 'markdown-react-js';
import Title from './Title';
import  './MarkdownEditor.css'

class MarkdownEditor extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {value : '_this_ **is** ***A*** Markdown editor'};
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
                <div className="Output">
                    <h2>Output</h2>
                    <MDReactComponent text={this.state.value}/>
                </div>
            </div>
        )
    }
}

export default MarkdownEditor;