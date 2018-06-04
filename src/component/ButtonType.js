import React from 'react';
import ReactDOM from 'react-dom';

export default class ButtonType extends React.Component{
    render(){
        const {
            title,
            label,
            active,
            iconClassName,
        } = this.props;
        let classNames;
        if(active){
            //有的话，加上这个CSS类名
            classNames = 'editorActiveButton'
        }
        return(
            <span className={classNames + ' ' + iconClassName}
                  title={title}
                  onClick={this.props.onToggle}
            >
                {label}
            </span>
        )
    }
}
