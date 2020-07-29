module.exports = api => {
    return {
        plugins: [
            '@babel/plugin-proposal-class-properties', // 高级class属性
            '@babel/plugin-transform-runtime' // async await promise 异步运行时
        ],
        presets: [
            [
                "@babel/preset-env",
                {
                    // caller.target will be the same as the target option from webpack
                    targets: api.caller(caller => caller && caller.target === "node")
                        ? { node: "current" }
                        : { chrome: "58", ie: "11" }
                }
            ]
        ]
    }
}