/**
 * CJTSTableChooseBasePage.js
 *
 * @Description: 用于测试各种选择的列表选择视图
 *
 * @author      ciyouzen
 * @email       dvlproad@163.com
 * @date        2019-07-26 09:48:50
 *
 * Copyright (c) dvlproad. All rights reserved.
 */
import React, {Component} from 'react';
import CJTSSectionTableView from './CJTSSectionTableView';
// import CJTSRoute from "../Navigation/CJTSRoute";

// let screenHeight = Dimensions.get('window').height;
// let screenBottomHeight = Platform.OS === 'ios' ? screenHeight >= 812 ? 34 : 0 : 0;
let screenHeight = window.screen.height;
let screenBottomHeight = 0;

export default class CJTSTableHomeBasePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sectionDataModels: [],
        };
    }

    _execModuleModel= (moduleModel)=>{
        if (moduleModel.clickButtonHandle) {
            moduleModel.clickButtonHandle(moduleModel);
        } else if (moduleModel.nextPageName && moduleModel.nextPageName.length > 0) {
            console.log("准备跳转到" + moduleModel.nextPageName);
            this.props.history.push(moduleModel.nextPageName);
            // this.props.navigation.navigate(moduleModel.nextPageName);
            // CJTSRoute.push(this.props.navigation, moduleModel.nextPageName, {});
        } else {
            window.alert("提示：请至少设置 moduleModel.clickButtonHandle 或 moduleModel.nextPageName");
        }
    }
    
    /**
     * 子类请重写此类
     * @returns {null}
     */
    renderChooseComponents() {
        // let chooseComponents = [];
        // chooseComponents.push(this.getDatePicker1());
        // chooseComponents.push(this.getDatePicker2());
        // return chooseComponents;
        return null;
    }

    /**
     * 更新detailText
     * @param section
     * @param row
     * @param detailText
     */
    updateIndexPathWithDetailText(section, row, detailText) {
        let sectionDataModel = this.state.sectionDataModels[section];
        let dataModel = sectionDataModel.data[row];
        dataModel.detailText = detailText;

        this.setState({
            sectionDataModels: this.state.sectionDataModels,
        }, ()=>{

        })
    }
    

    render() {
        //const screenWidth = Dimensions.get('window').width;
        const screenWidth = window.screen.width;
        const listWidth = screenWidth;

        return (
            <div style={{ flex: 1 }}>
                <CJTSSectionTableView
                    style={{marginBottom: screenBottomHeight}}
                    sectionDataModels={this.state.sectionDataModels}
                    clickModuleModel={this._execModuleModel}
                />

                {this.renderChooseComponents()}
            </div>
        );
    }
}
