// pages/calc/calc.wxml.js
Page({
  submitcalc:function(e)
  {
    var num1 =0;
    console.log(num1);
    num1 = e.detail.value.num1;
    var num2 = e.detail.value.num2;
    var num3 = parseInt(num1)+parseInt(num2);
    console.log(num1);
    this.setData({res:num3});
  }
})