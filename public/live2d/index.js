L2Dwidget?.on('*', name => {
    // console.log(
    //     '%c EVENT ' + '%c -> ' + name,
    //     'background: #222; color: yellow',
    //     'background: #fff; color: #000'
    // );
}).init({
    // model: {
    //     jsonPath:
    //         '/live2d/packages/live2d-widget-model-shizuku/assets/shizuku.model.json'
    // },
    display: {
        // 居左
        position: 'left',
        // 宽度
        width: 200,
        // 高度
        height: 400,
        // 距左右
        hOffset: 35,
        // 距下
        vOffset: -20
    },

    mobile: {
        // 移动端，false为关闭
        show: true,
        scale: 0.5
    },

    dialog: {
        // 开启对话框，false为关闭
        enable: true,
        script: {
            // 每空闲 10 秒钟，显示一条一言
            'every idle 10s': '$hitokoto$',
            // 当触摸到角色身体
            'tap body': '哎呀！别碰我！',
            // 当触摸到角色头部
            'tap face': '人家已经不是小孩子了！'
        }
    }
});
