define(["UIView","UIMask"],function(a,b){return _.inherit(a,{propertys:function($super){$super(),this.mask=new b,this.needMask=!0,this.maskToHide=!0,this.needReposition=!0},initialize:function($super,a){$super(a),this.clearRes()},clearRes:function(){},addEvent:function(){this.on("onCreate",function(){this.$el.addClass("cui-layer")}),this.on("onPreShow",function(){var a=this;this.needMask&&this.mask.show(),this.needMask&&this.maskToHide&&this.mask.$el.on("click.uimask"+this.mask.id,function(){a.hide()})}),this.on("onShow",function(){this.needReposition&&this.reposition(),this.setzIndexTop()}),this.on("onHide",function(){this.mask.$el.off(".uimask"+this.mask.id),this.mask.hide()})},reposition:function(){this.$el.css({"margin-left":-($(this.$el).width()/2)+"px","margin-top":-($(this.$el).height()/2)+"px"})}})});