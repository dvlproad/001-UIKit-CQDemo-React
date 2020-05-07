//DemoHomePage.js
import React, { Component }  from 'react';
// import {
//   CJTSTableHomeBasePage,
// } from "cjrn-demo-base";
import CJTSTableHomeBasePage from './cqdemokit/Demo/CJTSTableHomeBasePage';

export default class DemoHomePage extends CJTSTableHomeBasePage {
  constructor(props) {
    super(props);

    this.state = {
      sectionDataModels: [
        { theme: "弹窗/蒙层",
          values: [
            { title: "Toast", nextPageName: "TSToastPage" },
            { title: "Alert", nextPageName: "TSAlertPage" },
            { title: "ActionSheet", nextPageName: "TSActionSheetPage" },
          ]
        },
        { theme: "列表",
          values: [
            { title: "TSImagesLookListPage(图片展示列表)", nextPageName: "TSImagesLookListPage" },
            { title: "TSImagesChooseListPage(图片选择列表)", nextPageName: "TSImagesChooseListPage" },
            { title: "TSModulesEntryListPage(模块功能入口列表)", nextPageName: "TSModulesEntryListPage" },
            { title: "TSCycleCollectionPage(轮播图)", nextPageName: "TSCycleCollectionPage" },
          ]
        },
      ],
    }
  }


  render() {
    return super.render();
  }
}