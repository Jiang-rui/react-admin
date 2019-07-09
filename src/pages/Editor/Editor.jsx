import React, { Component } from 'react';
import { Card, Button } from 'antd';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState, convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import editorLess from './editor.module.less';
export default class RichTextEditor extends Component {
  state = {
    editorState: EditorState.createEmpty(),
  }
  getEditorContent = () => {
    const { editorState } = this.state;
    console.log(draftToHtml(convertToRaw(editorState.getCurrentContent())));
  }
  EditorStateChange = (editorState) => {
    this.setState({ editorState })
  }

  render() {
    const { editorState } = this.state;
    return (
      <Card style={{ width: '70%' }}>
        <Editor
          editorState={editorState}
          // onContentStateChange={this.ContentStateChange}
          onEditorStateChange={this.EditorStateChange}
          editorClassName={editorLess.editor}
        />
        <Button type="primary" onClick={this.getEditorContent}>获取富文本框内容</Button>
      </Card>
    )
  }
}