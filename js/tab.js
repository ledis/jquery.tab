(function($){
	$.fn.extend({
		tab:function(options){
			var defaults={
				currentClass:"hover",
				tabLi:".tabBar>li",
				eventType:"click",
				tabDiv:".tab_conts>div"
			}
			var options=$.extend(defaults,options);
			this.each(function(){
				var $this=$(this);
				$this.find(options.tabLi).on(options.eventType,function(){
					$(this).addClass(options.currentClass).siblings().removeClass(options.currentClass);
					var index=$(this).index();
					$this.find(options.tabDiv).eq(index).show().siblings().hide();
				});
			})
			return this;
		}	
	})
})(jQuery);