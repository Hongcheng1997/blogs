(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{212:function(e,a,t){"use strict";t.r(a);var s=t(28),n=Object(s.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"前言"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[e._v("#")]),e._v(" 前言")]),e._v(" "),t("p",[e._v("搭建一个基于 webpack 运行的 cli，方便平时写一些 demo 使用，同时做一个简单的记录")]),e._v(" "),t("h2",{attrs:{id:"entry、output"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#entry、output"}},[e._v("#")]),e._v(" entry、output")]),e._v(" "),t("p",[e._v("新建一个目录 webpack-starter，进入目录")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("生成一个 package.json 文件\nnpm init -y\n\n在本地项目安装 webpack\nnpm install webpack webpack-cli --save-dev\n")])])]),t("p",[e._v("项目结构如下：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("webpack-starter\n  |- node_modules\n  |- package.json\n")])])]),t("p",[e._v("创建 src 以及 webpack 的配置文件")]),e._v(" "),t("p",[t("strong",[e._v("src/index.js")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("console.log('hello webpack')\n")])])]),t("p",[t("strong",[e._v("webpack.config.js")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("const path = require('path');\n\nmodule.exports = {\n  entry: './src/index.js',\n  output: {\n    path: path.resolve(__dirname, 'dist')\n  }\n};\n")])])]),t("p",[e._v("项目结构如下：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("webpack-starter\n  |- node_modules\n  |- package.json\n+ |- webpack.config.js\n+ |- /src\n+   |- index.js\n")])])]),t("p",[e._v("通过命令：npx webpack 打包代码，打包完成后项目会多一个 dist 目录就是 webpack 打包后的代码。 在 dist 目录下 创建 index.html，并将 main.js 引入。打开 html 可以看见控制台输出了 hello webpack")]),e._v(" "),t("h2",{attrs:{id:"plugins"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#plugins"}},[e._v("#")]),e._v(" plugins")]),e._v(" "),t("h3",{attrs:{id:"clean-webpack-plugin"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#clean-webpack-plugin"}},[e._v("#")]),e._v(" clean-webpack-plugin")]),e._v(" "),t("p",[e._v("clean-webpack-plugin 的作用是在 webpack 打包之前会先删除 dist 目录")]),e._v(" "),t("p",[e._v("安装 clean-webpack-plugin")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("npm install --save-dev clean-webpack-plugin\n")])])]),t("p",[e._v("修改配置文件")]),e._v(" "),t("p",[t("strong",[e._v("webpack.config.js")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("const path = require('path');\n\nmodule.exports = {\n  entry: './src/index.js',\n  output: {\n    filename: 'bundle.js',\n    path: path.resolve(__dirname, 'dist')\n  },\n+ |-  plugins: [\n+ |-    new CleanWebpackPlugin()\n+ |-  ]\n};\n")])])]),t("p",[e._v("再次打包发现 dist 目录下的 html 不见了，说明在打包之前，dist 目录被删除了。但是麻烦的是每次重新打包完成后，都要手动创建 html 打开网页。然而，可以通过一些插件，会使这个过程更容易操控。")]),e._v(" "),t("h3",{attrs:{id:"html-webpack-plugin"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#html-webpack-plugin"}},[e._v("#")]),e._v(" html-webpack-plugin")]),e._v(" "),t("p",[e._v("html-webpack-plugin 会自动生成 html 入口，并且将 js 引入 html")]),e._v(" "),t("p",[e._v("安装 html-webpack-plugin")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("npm install --save-dev html-webpack-plugin\n")])])]),t("p",[e._v("修改配置文件")]),e._v(" "),t("p",[t("strong",[e._v("webpack.config.js")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("const path = require('path');\n\nmodule.exports = {\n  entry: './src/index.js',\n  output: {\n    filename: 'bundle.js',\n    path: path.resolve(__dirname, 'dist')\n  },\n  plugins: [\n    new CleanWebpackPlugin(),\n+ |- new HtmlWebpackPlugin({\n+ |-   template: 'src/index.html'\n+ |- })\n  ]\n};\n")])])]),t("p",[e._v("此时在去打包会发现 dist 目录自动创建了 html，并且引入了对应的 js 文件。但是每次修改代码都要重新打包一次，这个开发效率太低了。然而，可以配置模块热替换")]),e._v(" "),t("h2",{attrs:{id:"webpack-dev-server"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#webpack-dev-server"}},[e._v("#")]),e._v(" webpack-dev-server")]),e._v(" "),t("p",[e._v("安装 webpack-dev-server")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("npm install --save-dev webpack-dev-server\n")])])]),t("p",[e._v("修改配置文件")]),e._v(" "),t("p",[t("strong",[e._v("webpack.config.js")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("const path = require('path');\n\nmodule.exports = {\n  entry: './src/index.js',\n  output: {\n    filename: 'bundle.js',\n    path: path.resolve(__dirname, 'dist')\n  },\n+ |- devServer: {\n+ |-    contentBase: './dist'\n+ |-  },\n  plugins: [\n    new CleanWebpackPlugin(),\n    new HtmlWebpackPlugin({\n      template: 'src/index.html'\n    })\n  ]\n};\n")])])]),t("p",[e._v("运行命令 npx webpack-dev-server --open 程序会自己跑起来，并且打开一个网页。当再去修改代码时，程序就会自动打包，并且网页也会自动刷新。")]),e._v(" "),t("h2",{attrs:{id:"loader"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#loader"}},[e._v("#")]),e._v(" loader")]),e._v(" "),t("p",[e._v("什么是 loader ？实际上webpack 打包时只能识别 js 文件，对于其他类型文件比如（css、vue、ts）等是无法识别的。因此要打包其他的类型文件就需要通过 loader 来告诉 webpack 要怎么去处理这类型的文件。")]),e._v(" "),t("p",[t("strong",[e._v("style-loader、css-loader")])]),e._v(" "),t("p",[e._v("为了从 JavaScript 模块中 import 一个 CSS 文件，需要在 module 配置中安装并添加 style-loader 和 css-loader")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("npm install --save-dev style-loader css-loader\n")])])]),t("p",[t("strong",[e._v("webpack.config.js")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("const path = require('path');\n\nmodule.exports = {\n    entry: './src/index.js',\n    output: {\n       path: path.resolve(__dirname, 'dist')\n    },\n+ |- module: {\n  + |- rules: [{\n    + |- test: /\\.css$/,\n      + |- use: [\n        + |- 'style-loader',\n        + |- 'css-loader'\n      + |- ]\n  + |- }]\n+ |- },\n    devServer: {\n      contentBase: './dist'\n    },\n    plugins: [\n      new CleanWebpackPlugin(),\n      new HtmlWebpackPlugin({\n        template: 'src/index.html'\n      })\n    ]\n};\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);