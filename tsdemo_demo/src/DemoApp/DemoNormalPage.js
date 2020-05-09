import React, {Component}  from 'react';

export default class DemoNormalPage extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div style={{backgroundColor:"#F5F5F5"}}>
                <div
                    style={{height: '60px', marginTop:'40px', backgroundColor:"green"}}
                    onClick={()=>{this.props.history.push('main')}}
                >返回首页</div>
            </div>
        )
    }
}