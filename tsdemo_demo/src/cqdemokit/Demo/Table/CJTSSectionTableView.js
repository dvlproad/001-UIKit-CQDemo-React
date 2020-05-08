// CJTSSectionTableView.js
import React, {Component} from 'react';
import PropTypes from "prop-types";
import CJTSTableViewCell from "./CJTSTableViewCell";
import {CJTSTheme} from "../../Theme/CJTSTheme";

export default class CJTSSectionTableView extends Component {
    static propTypes = {
        listHeaderTitle: PropTypes.string,
        listFooterTitle: PropTypes.string,
        sectionDataModels: PropTypes.array,
        clickModuleModel: PropTypes.func,
    };

    static defaultProps = {
        listHeaderTitle: '',
        listFooterTitle: '',
        sectionDataModels: [],
        clickModuleModel: (moduleModel)=>{},
    };

    constructor(props) {
        super(props);
    }


    _sectionComp = (sectionModel, index) => {
        let txt = sectionModel.theme;
        return (
            <div
                style={{
                    height: '50px', lineHeight: '50px',
                    textAlign: 'center', textAlignVertical: 'center',
                    backgroundColor: CJTSTheme.style.themeColor,
                    color: 'white',
                    fontSize: 30,
                }}
            >
                {txt}
            </div>
        )
    }


    _renderItem = (moduleModel, itemIndex, isLastItem) => {
        return (
            <CJTSTableViewCell
                key={itemIndex.toString()}
                text={moduleModel.title}
                detailText={moduleModel.content}
                arrowImageSource={this.props.arrowImageSource}
                shouldAddSeparateLine={!isLastItem}
                clickAction={() => (
                    this.props.clickModuleModel(moduleModel)
                )}
            />
        )
    }

    render() {
        let listHeaderComponent = null;
        if (this.props.listHeaderTitle.length > 0) {
            listHeaderComponent = ()=>{
                return <ListHeaderFooter title={this.props.listHeaderTitle} />
            }
        }

        let listFooterComponent = null;
        if (this.props.listFooterTitle.length > 0) {
            listFooterComponent = ()=>{
                return <ListHeaderFooter title={this.props.listFooterTitle} />
            }
        }

        // return (
        //     <SectionList
        //         keyExtractor={(item, index) => index.toString()}
        //         style={this.props.style}
        //         renderSectionHeader={this._sectionComp}
        //         renderItem={this._renderItem}
        //         sections={this.props.sectionDataModels}
        //         ItemSeparatorComponent={() => <div style={{backgroundColor: "#E5E5E5", height: 1}} />}
        //         ListHeaderComponent= {listHeaderComponent}
        //         ListFooterComponent= {listFooterComponent}
        //     />
        // );

        let renderSectionModels = this.props.sectionDataModels;
        let children = (
            renderSectionModels.map((sectionModel, sectionIndex) => {
                // let dataModels = sectionModel.values;
                // let currentSectionCells = [];
                // for (let itemIndex = 0, itemLength=dataModels.length; itemIndex < itemLength; itemIndex++) {
                //     let dataModel = dataModels[itemIndex];
                //     let isLastItem = itemIndex == itemLength - 1 ? true : false;
                //     let cell = this._renderItem(dataModel, itemIndex, isLastItem);
                //     currentSectionCells.push(cell);
                // }

                return (
                    <div key={sectionIndex.toString()}>
                        {this._sectionComp(sectionModel, sectionIndex)}
                        {/*{currentSectionCells}*/}
                        {
                            sectionModel.values.map((dataModel, itemIndex, array) => {
                                let itemLength=array.length;
                                let isLastItem = itemIndex == itemLength - 1 ? true : false;
                                return (
                                    this._renderItem(dataModel, itemIndex, isLastItem)
                                )
                            })
                        }
                    </div>

                )
            })
        );

        return (
            <div
                style={this.props.style}
            >
                {listHeaderComponent}
                <div>
                    {children}
                </div>
                {listFooterComponent}
            </div>
        );


        // HTML表格与列表:https://www.cnblogs.com/yyhh/p/4208951.html
        // return (
        //     <ol>
        //         <li>人物</li>
        //         <ul>
        //             <li>斯蒂芬·保罗·乔布斯</li>
        //             <li>丹尼斯·里奇</li>
        //             <li>比尔·盖茨</li>
        //         </ul>
        //
        //         <li>动物</li>
        //         <ul>
        //             <li>猫</li>
        //             <li>狗</li>
        //             <li>熊</li>
        //         </ul>
        //     </ol>
        // )
    }
}

class ListHeaderFooter extends Component {
    static propTypes = {
        title: PropTypes.string,
    };

    static defaultProps = {
        title: "",
    };

    render() {
        return (
            <div style={{ backgroundColor: CJTSTheme.style.themeColor, alignItems: 'center', height: 30 }}>
                <div style={{ fontSize: 18, color: '#ffffff' }}>
                    {this.props.title}
                </div>
            </div>
        )
    }
}
