import bridge from './bridge';

class UePaySDK {

    constructor() {
        this.appid = '';
        this.isOk = false;
    }

    config(args) {
        // 传入appid等基础参数，并对基础参数做校验，校验通过后才可以进行业务接口的调用
        // 并且这些基础参数可以供业务接口使用
        const { appid, signature, callback } = args;
        // 验签
        if(!signature) {
            // 校验失败，直接返回错误
            callback && callback({isOk: false});
            return;
        }

        this.appid = appid;
        this.isOk = true;
        callback && callback({isOk: true});
    }

    payment(args) {
        if (!this.isOk) {
            console.log('基础参数不合法');
            return;
        }

        const { orderId, money } = args;
        bridge.pay({ 
            orderId,
            money,
            appid: this.appid,
            success: (res) => {
                console.log('success', res);
            }
        });
    }
}
// 返回单例
export default new UePaySDK();
