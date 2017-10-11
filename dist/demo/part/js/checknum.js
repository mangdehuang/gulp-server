(function () {//只允许输入数组
       function CheckNum(ele,option) {
           var defaultOption = {
               maxNum:254,
               repReg:/\D|^[0]+/g,//非数字  以0开头的
               min:1,
           };
           this.$ele = $(ele);
           this.option = $.extend(true,{},defaultOption,option);
           this.numOnly();//初始化调用  绑定事件
       };
       CheckNum.prototype.numOnly = function () {
           var obj = this;//拿到当前的对象
           var options = obj.option;
           $(obj.$ele).on('keyup paste input prototype',function () {//同时绑定多个事件
               $(this).val(obj._repalceWord($(this).val()));
           }).on('blur',function () {//大于 小于边界值的处理
               var val = $(this).val();
               if(val.length >0 && val < options.min){
                   $(this).val(options.min);
               }else if($(this).val() > options.maxNum){
                   $(this).val(options.maxNum);
               }
           });
       };
        CheckNum.prototype._repalceWord = function(val) {
           return val.replace(this.option.repReg,'');//会保留其中的数组部分
       }
        $.fn.checkNum = function (option) {
            var check = new CheckNum(this,option);
            return this;//jquery链式调用
        };
})();//jquery组件