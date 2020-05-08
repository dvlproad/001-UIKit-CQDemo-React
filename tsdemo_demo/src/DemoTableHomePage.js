/**
 * DemoTableHomePage.js
 *
 * @Description: DemoHomePage
 *
 * @author      chaoqian.li
 * @date        2020/5/8 9:52 上午
 *
 * Copyright (c) dvlproad. All rights reserved.
 */
import React  from 'react';
import CJTSTableHomeBasePage from './cqdemokit/Demo/Table/CJTSTableHomeBasePage';

export default class DemoTableHomePage extends CJTSTableHomeBasePage {
  constructor(props) {
    super(props);

    this.state = {
      sectionDataModels: [
        {
          theme: "测试跳转1",
          values: [
            { title: "Page1", content: '第一页', nextPageName: "Page1" },
            { title: "Page2", content: '第二页', nextPageName: "Page1" },
          ]
        },
        { theme: "测试跳转2",
          values: [
            { title: "Page1", nextPageName: "Page1" },
            { title: "Page2", nextPageName: "Page1" },
          ]
        },
      ],
    }
  }


  render() {
    return super.render();
  }
}