
import {createBrowserHistory} from 'history';

// 创建 History
const history =  createBrowserHistory({
    basename: 'demo',
});


// History
class DemoAppHistory {
    constructor(history) {
        this.history = history;
    }

    replace(path) {
        this.history.replace(path);
    }

    push(path) {
        this.history.push(path);
    }

    pop(num) {
        if (num) {
            this.history.go(num);
        } else {
            this.history.go(-1);
        }
    }

    setReactRouterHistory(history) {
        this.history = history;
    }
}
new DemoAppHistory().setReactRouterHistory(history);


export default DemoAppHistory;
