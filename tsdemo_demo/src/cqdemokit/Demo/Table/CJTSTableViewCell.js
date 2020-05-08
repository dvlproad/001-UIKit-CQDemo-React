// CJTSTableViewCell.js
import React, {Component} from 'react';
import PropTypes from "prop-types";

export default class CJTSTableViewCell extends Component {
    static propTypes = {
        text: PropTypes.string,
        detailText: PropTypes.string,
        shouldAddSeparateLine: PropTypes.bool,
        clickAction: PropTypes.func,
        // arrowImageSource: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
    };

    static defaultProps = {
        text: "",
        detailText: null,
        shouldAddSeparateLine: false,
        clickAction: (nextPageName)=>{},
        arrowImageSource: require("./resources/item_arrow_right.png"),
    };

    constructor(props) {
        super(props);
        this.state = {

        };
    }


    render() {
        //const {navigate} = this.props.navigation;

        return (
            <div
                style={{
                    display: 'flex',
                    flex: 1,
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: 'center',
                    borderBottom: this.props.shouldAddSeparateLine ? 'solid #E5E5E5 1px' : null,
                }}
                onClick={this.props.clickAction}
            >
                <div
                    style={{   //单行文本水平&垂直居中
                        height: '44px',
                        lineHeight:'44px',
                        textAlign: 'center',
                        backgroundColor: "#FFFFFF",
                        fontSize: 17,
                        color: '#5C5C5C',
                        marginHorizontal: 10
                    }}
                >
                    {this.props.text}
                </div>
                <div
                    style={{
                        display: 'flex',
                        marginRight: 10,
                        flex: 1,
                        flexDirection: "row",
                        justifyContent: "flex-end",
                        alignItems: 'center',
                    }}
                >
                    <div
                        style={{   //单行文本水平&垂直居中
                            height: '44px',
                            lineHeight: '44px',
                            textAlign: 'center',
                            backgroundColor: "transparent",
                            fontSize: 15,
                            color: '#333333',
                            paddingRight: '10px'
                        }}
                    >
                        {this.props.detailText}
                    </div>
                    <img src={this.props.arrowImageSource} />
                </div>
            </div>
        );
    }
}

