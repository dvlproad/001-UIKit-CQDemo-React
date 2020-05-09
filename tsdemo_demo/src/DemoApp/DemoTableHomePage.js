import React  from 'react';
import CJTSTableHomeBasePage from '../cqdemokit/Demo/Table/CJTSTableHomeBasePage';

export default class DemoTableHomePage extends CJTSTableHomeBasePage {
  constructor(props) {
    super(props);

    this.state = {
      sectionDataModels: [
        {
          theme: "测试跳转1",
          values: [
            { title: "Main", content: '返回主页', nextPageName: "main" },
            { title: "Page1", content: '第一页', nextPageName: "page1" },
          ]
        },
        { theme: "测试跳转2",
          values: [
            { title: "Page1", nextPageName: "Page1" },
            { title: "Page1", nextPageName: "Page1" },
          ]
        },
      ],
    }
  }


  render() {
    return super.render();
  }
}