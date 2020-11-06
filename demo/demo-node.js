const UePaySDK = require('../dist/index.js');

UePaySDK.config({
    appid:'nihao',
    signature: 'test'
});
UePaySDK.ready(function(res){
    console.log(res);
})
UePaySDK.error(function(err){
    console.log(err);
})
UePaySDK.payment({
    orderId: '111',
    money: 100,
    success:function(res) {
        console.log(res);
    }
})
