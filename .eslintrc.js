// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  plugins: [
    'html'
  ],
  globals: {
    "$": true                                 //zepto
  },
  // add your custom rules here
  rules: {
    'no-debugger': 2, //禁止使用debugger
    'no-console': 2,//禁止使用console
    'no-new-func': 1,//禁止使用new Function
    "no-new-object": 2,//禁止使用new Object()
    "no-new-require": 2,//禁止使用new require
    'no-extra-semi': 2,//禁止多余的冒号
    'no-eval': 1,//禁止使用eval
    'no-const-assign': 2,//禁止修改const声明的变量
    'no-eq-null': 2,//禁止对null使用==或!=运算符
    'no-invalid-this': 2,//禁止无效的this，只能用在构造器，类，对象字面量
    "eqeqeq": 2,//必须使用全等
    "no-unneeded-ternary": 2,//禁止不必要的嵌套 var isYes = answer === 1 ? true : false;
    // "no-unused-expressions": 2,//禁止无用的表达式
    "no-var": 2,//禁用var，用let和const代替
    // "quotes": [1, "single"],//引号类型 `` "" ''
    "no-extra-parens": 2,//禁止非必要的括号
    "no-native-reassign": 2,                  //禁止覆盖原生对象
    "no-with": 2,                             //禁用with
    "no-unused-vars": 2,                      //变量定义后未使用
    "no-labels": 2,      //禁止使用空label
  }
}
