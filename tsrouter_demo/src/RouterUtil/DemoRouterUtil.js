

export default class DemoRouterUtil {
    /**
     * 进入到指定的界面
     *
     * @param history    导航栏
     * @param routeName     要进入的页面
     * @param params        参数
     */
    static push(history, routeName = '', params = {}) {
        history && history.push(routeName, params);
    }

    /**
     * 返回指定个数的页面
     *
     * @param history    导航栏
     * @param backCount  要返回的页数个数
     */
    static pop(history, backCount) {
        if (backCount) {
            history.go(backCount);
        } else {
            history.go(-1);
        }
    }

    // /**
    //  * 返回到根页面
    //  *
    //  * @param history    导航栏
    //  */
    // static popToRootPage(history) {
    //
    // }

}