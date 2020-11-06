// mock bridge
class bridge {
    constructor() {}

    static pay(args) {
        console.log('bridge args', args);
        args.success && args.success({msg: '支付成功'});
    }
}

export default bridge;
