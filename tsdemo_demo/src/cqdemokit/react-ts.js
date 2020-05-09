/**
 * react-ts.js
 *
 * @Description: cjrn-demo-base
 *
 * @author      ciyouzen
 * @email       dvlproad@163.com
 * @date        2019-12-03 11:38:31
 *
 * Copyright (c) dvlproad. All rights reserved.
 */

'use strict';

// theme
import {CJTSTheme} from "./Theme/CJTSTheme";

// default
import { CJTSDefaultImages } from "./Default/CJTSDefault";

// demo base Page的基类
import CJTSTableHomeBasePage from "./Demo/Table/CJTSTableHomeBasePage";
import CJTSCollectionHomeBasePage from "./Demo/Collection/CJTSCollectionHomeBasePage";




var CJTSBase = {
    // theme
    CJTSTheme,

    // default
    CJTSDefaultImages,

    // demo base Page的基类
    CJTSTableHomeBasePage,
    CJTSCollectionHomeBasePage,
};

module.exports = CJTSBase;
