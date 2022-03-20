const path = require('path')
const HtmlWEbpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: { // bundling(파일을 하나로 합침) 시작점
        'js/app': ['./src/App.jsx']
    },
    output: { // bundling 결과물
        path: path.resolve(__dirname, 'dist/'),
        publicPath: '/' // 다른 파일에서, 생성된 번들을 참조할 때, '/'를 기준으로 참조
    },
    module: { // loader를 추가하여 다른 포맷의 리소스를 이해할 수 있도록 함 ex) import '../css/index.css'
        /*
            test: 어떤 파일을 변환할 지 지정
            use: 파일을 변환할 때, 어떤 loader를 사용해야 하는 지
        */
        rules: [
            {
                test:/\.(js|jsx)$/,
                use: ['babel-loader'],
                exclude: /node-modules/
            }
        ]
    },
    plugins: [
        new HtmlWEbpackPlugin({
            template: './src/index.html', // 원본으로 사용할 html
            filename: 'index.html' // dist에 index.html 생성(webpack으로 생성된 번들 파일을 추가)
        })
    ]
}