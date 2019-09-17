import React, { useState } from 'react';
import { Card, Button } from 'antd';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState, convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import BreadcrumbCustom from '../BreadCrumb';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import editorLess from './editor.module.less';


export default function RichTextEditor() {
  const [editorState, setEditorState] = useState(EditorState.createEmpty())

  const EditorStateChange = (editorState) => {
    setEditorState(editorState)
  }
  const getEditorContent=()=>{
    console.log(draftToHtml(convertToRaw(editorState.getCurrentContent())));
  }
  return (
    <React.Fragment>
      <BreadcrumbCustom />
      <Card style={{ width: '100%' }}>
        <Editor
          editorState={editorState}
          // onContentStateChange={this.ContentStateChange}
          onEditorStateChange={EditorStateChange}
          editorClassName={editorLess.editor}
        />
        <Button type="primary" onClick={getEditorContent}>获取富文本框内容</Button>
      </Card>
    </React.Fragment>
  )
}