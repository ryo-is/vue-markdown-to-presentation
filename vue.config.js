module.exports = {
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.md/,
          exclude: /(node_modules|bower_components)/,
          use: [
            "vue-loader",
            {
              loader: "markdown-to-vue-loader",
              options: {
                exportSource: true,
                markdownOptions: {
                  highlight(str, lang) {
                    return str;
                  }
                }
              }
            }
          ]
        }
      ]
    }
  }
}
