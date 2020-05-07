// CJTableViewCell.js
import React, {Component} from 'react';
import PropTypes from "prop-types";

export default class CJTableViewCell extends Component {
    static propTypes = {
        text: PropTypes.string,
        detailText: PropTypes.string,
        clickAction: PropTypes.func,
        // arrowImageSource: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
    };

    static defaultProps = {
        text: "",
        detailText: null,
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
                    flex: 1,
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: 'center'
                }}
                onClick={this.props.clickAction}
            >
                <div
                    style={{   //单行文本水平&垂直居中
                        height: 44,
                        lineHeight:44,
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
                        marginRight: 10,
                        flex: 1,
                        flexDirection: "row",
                        justifyContent: "flex-end",
                        alignItems: 'center'
                    }}
                >
                    <div
                        style={{   //单行文本水平&垂直居中
                            height: 44,
                            lineHeight:44,
                            textAlign: 'center',
                            backgroundColor: "transparent",
                            fontSize: 15,
                            color: '#333333',
                            marginHorizontal: 10
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

