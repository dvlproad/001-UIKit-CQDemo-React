import React, {Component} from "react";
// import PropTypes from "prop-types";

export default class DemoAppNavigationBar extends Component {
    // static propTypes = {
    //     navigationTitle: PropTypes.string,
    // };
    //
    // static defaultProps = {
    //     navigationTitle: null,
    // };

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div style={{display:'flex', flexDirection:'row', height: '64px', justifyContent: "center", backgroundColor:'white'}}>
                <div style={{flex: 1, lineHeight:'64px', fontSize:'24px', alignItems: 'center', color:'#333333'}}>
                    {this.props.navigationTitle}
                </div>
            </div>
        )
    }
}