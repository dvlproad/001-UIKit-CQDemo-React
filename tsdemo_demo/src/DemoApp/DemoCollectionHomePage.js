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
import CJTSCollectionHomeBasePage from '../cqdemokit/Demo/Collection/CJTSCollectionHomeBasePage';

export default class DemoTableHomePage extends CJTSCollectionHomeBasePage {
  constructor(props) {
    super(props);

    let imageSource = 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3460118221,780234760&fm=26&gp=0.jpg';
    this.state = {
      moduleModels: [
        {
          title: "返回主页",
          imageSource: imageSource,
          nextPageName: "main"
        },
        {
          title: "Page1",
          imageSource: imageSource,
          nextPageName: "page1"
        },
      ]
    }
  }


  render() {
    return super.render();
  }
}