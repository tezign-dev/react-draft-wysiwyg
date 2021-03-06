/* @flow */

import React, { useRef } from 'react';
import { Editor } from '../../src';

/**
 * Default trigger is '@' and default separator between words is ' '.
 * thus there fields are optional.
*/


const data = [
  { label: 'APPLE', value: 'apple', url: 'apple' },
  { label: 'BANANA', value: 'banana', url: 'banana' },
  { label: 'CHERRY', value: 'cherry', url: 'cherry' },
  { label: 'DURIAN', value: 'durian', url: 'durian' },
  { label: 'EGGFRUIT-EGGFRUIT', value: 'eggfruit', url: 'eggfruit' },
  { label: 'FIG', value: 'fig', url: 'fig' },
  { label: '我的', value: 'grapefruit', url: 'grapefruit' },
  { label: '我们', value: 'honeydew', url: 'honeydew' },
  { label: 'nisdf', value: '12', url: 'grapefruit' },
  { label: 'sfasdfs', value: '234', url: 'honeydew' },
  { label: 'werwer', value: 'asf', url: 'grapefruit' },
  { label: 'sdfsd', value: 'asd', url: 'honeydew' },
  { label: 'sfsdf', value: 'sdf', url: 'grapefruit' },
  { label: '我234234们', value: 'dfs', url: 'honeydew' },
]

const Mention = () => {
  const editorRef = useRef()
  function addMention(event) {
    event.preventDefault();
    event.stopPropagation();
    editorRef.current.addMention(data[0]);
  }
  return (<div className="rdw-storybook-root">
  <span>Type @ to see suggestions</span>
  <div onMouseDown={addMention}>
  addMention
  </div>
  <Editor
    ref={editorRef}
    mention={{
      separator: '',
      trigger: '@',
      remote: true,
      filterSuggestions: (keyword) => {
        console.log('keyword is ', keyword)
        return new Promise((resolve, reject) => {
          setTimeout(function () {
            if (!keyword) return resolve(data) 
            resolve(data.filter(item => item.label.indexOf(keyword.toUpperCase()) !== -1))  
          })
        })
      },
      renderSuggestion: (sug) => {
        return (
          <div>{sug.label}</div>
        )
      },
      filteringContent: '',
      notFoundContent: '没有匹配'
    }}
    toolbarClassName="rdw-storybook-toolbar"
    wrapperClassName="rdw-storybook-wrapper"
    editorClassName="rdw-storybook-editor"
  />
</div>)
}
;

export default Mention;
