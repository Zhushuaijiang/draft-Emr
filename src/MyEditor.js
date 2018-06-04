import React from 'react';
import ReactDOM from 'react-dom';
import {
    Editor,
    EditorState,
    convertFromRaw,
    convertToRaw,
    CompositeDecorator,
    DefaultDraftBlockRenderMap,
    ContentState,
    Entity,
    RichUtils,
    getDefaultKeyBinding,
    KeyBindingUtil,
    Modifier
} from 'draft-js';
import ButtonType from './component/ButtonType';
import './less/iconfont.less';
import './less/app.less';

const styleMap = {
    SUB: {
        verticalAlign: 'sub',
        fontSize: 26,
    },
    SUP: {
        verticalAlign: 'super',
    }
};

const BlockType = [
    {label: 'H', styleName: 'header-two',title:'小标题',iconClassName:''},
    {label: '上标', styleName: 'super',title:'上标',iconClassName:'', type:'inline'},
    {label: '下标', styleName: 'sub',title:'下标',iconClassName:'', type:'inline'},
    {label: '', styleName: 'header-two',title:'插入表格',iconClassName:'iconfont icon-table'},
];

export default class MyEditor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {editorState: EditorState.createEmpty()};
        this.onChange = this.onChange.bind(this) ;
        this.onToggle = this.onToggle.bind(this);
        this.toggleBlockType = this.toggleBlockType.bind(this);
        this.toggleInlineStyle = this.toggleInlineStyle.bind(this);
    }

    onChange(editorState){
        this.setState({editorState})
    }

    onToggle(blockType, type){
        if(type == 'inline'){
            this.toggleInlineStyle(blockType)
        }else{
            this.toggleBlockType(blockType)
        }
    }


    toggleInlineStyle(inlineStyle) {
        console.log('inlineStyle', inlineStyle)
        this.onChange(
            RichUtils.toggleInlineStyle(
                this.state.editorState,
                inlineStyle
            )
        );
    }

    toggleBlockType(blockType) {
        this.onChange(
            RichUtils.toggleBlockType(
                this.state.editorState,
                blockType
            )
        );
    }

    render() {
        return (
            <div className='editor-content'>
                <div className='button-group'>
                    {
                        BlockType.map((item,i)=>{
                            return (
                                <ButtonType
                                    key={i}
                                    active={BlockType.indexOf(item.styleName)}
                                    title={item.title}
                                    label={item.label}
                                    iconClassName = {item.iconClassName}
                                    styleName={item.styleName}
                                    onToggle = {()=>{this.onToggle(item.styleName,item.type)}}
                                />
                            )
                        })
                    }
                </div>
                <Editor
                    editorState={this.state.editorState}
                    onChange={this.onChange}
                    customStyleMap={styleMap}
                />
            </div>
        );
    }
}