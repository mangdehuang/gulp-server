//用来校验输入框内容的插件
(function(){
		var Checktext = function(ele, opt){
			this.$element = ele;
			this.defaults = {
				id : '#rollTimesBtn',
				max : 254,
				min : 10
		};
		this.options = $.extend({},this.defaults,opt);
		this.numberonly();
	}
		Checktext.prototype = {
			//只能输入一定范围内的正整数
			numberonly : function(){		
				var $options = this.options;
				$($options.id).keyup(function(){
					var text = $(this).val();
					$(this).val(text.replace(/\D|^[0]+/g,''));
				}).bind("paste",function(){
					var text = $(this).val();
					$(this).val(text.replace(/\D|^[0]+/g,''));
				}).bind("input prototype",function(){
					var text = $(this).val();
					if(isNaN(text)){
						$(this).val("");
					}
				}).blur(function(){
					var max = $options.max;
					var min = $options.min;
					var text = $(this).val();
					if(text.length > 0 && text < min){
						$(this).val(min);
					}else if(text > max){
						$(this).val(max);
					}else{
						$(this).val(text);
					}
				})
			}

		}
		$.fn.checktext = function(options){
			var checktext = new Checktext(this,options);
			return this;
		}
	})(jQuery);