import React, { Component } from 'react'
import { Icon } from 'semantic-ui-react'
import './tasklist.css'

class TastList extends Component {
    render() {
        return (
            <ul>
                {this.props.data.map((item,index) => {
                    return item.isFinished?
                        <div key = {item.title} className='border_item' onClick = {this.props.onFinishedItem.bind(this,index)} >
                            <Icon name= 'checkmark' color= 'green'/>{item.title}
                            <Icon style={{float: 'right'}} name= 'delete' color= 'red' onClick = {this.props.onDeleteItem.bind(this,index)}/>
                        </div>
                        : <div key = {item.title} className='border_item' onClick = {this.props.onFinishedItem.bind(this,index)}>
                            <Icon name= 'calendar plus' color= 'blue'/>{item.title}
                            <Icon style={{float: 'right'}} name= 'delete' color= 'red'onClick = {this.props.onDeleteItem.bind(this,index)} />
                        </div>
                })}
            </ul>
        );
    }
}

export default TastList;