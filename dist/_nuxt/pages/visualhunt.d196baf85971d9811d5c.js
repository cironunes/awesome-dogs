webpackJsonp([2],{"5cZS":function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"ad-page ad-page--image"},[s("div",{staticClass:"ad-page__container ad-page__container--full"},[s("Carousel",{attrs:{dogs:t.dogs}})],1)])},o=[],a={render:i,staticRenderFns:o};e.a=a},DSEk:function(t,e,s){"use strict";function i(t){s("fjIA")}var o=s("xI8k"),a=s("aUq5"),n=s("VU/8"),r=i,l=n(o.a,a.a,!1,r,null,null);e.a=l.exports},LGCC:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s("p2ND"),o=s("5cZS"),a=s("VU/8"),n=a(i.a,o.a,!1,null,null,null);e.default=n.exports},M4kC:function(t,e,s){e=t.exports=s("FZ+f")(!1),e.push([t.i,".Carousel{position:relative}.Carousel__controls{position:absolute;top:0;left:0;z-index:10;width:100%;height:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.Carousel__canvas{margin:0 auto;overflow:hidden;border:5px solid #444;max-width:970px;height:540px;position:relative}.Carousel__container{list-style:none;margin:0;padding:0;display:-webkit-box;display:-ms-flexbox;display:flex;position:absolute;top:0;left:0;z-index:2}.Carousel__dashboard{display:none}.Carousel__control{-webkit-box-flex:1;-ms-flex:1;flex:1;background-color:transparent;border:0;outline:0;font-family:consolas,monospace;font-weight:700;font-size:60px;color:#fff;cursor:pointer}.Carousel__control:hover{background-color:rgba(0,0,0,.1)}.Carousel__control--left{text-align:left}.Carousel__control--right{text-align:right}.Carousel__image{width:960px;min-height:540px}@media only screen and (min-width:320px) and (max-width:610px){.Carousel__canvas{max-width:320px;height:180px}.Carousel__image{width:320px;min-height:180px}}@media only screen and (min-width:611px) and (max-width:910px){.Carousel__canvas{max-width:768px;height:432px}.Carousel__image{width:768px;min-height:432px}}.Carousel-ghost{z-index:1;visibility:hidden}.Carousel-ghost--active{visibility:visible}",""])},aUq5:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"Carousel"},[s("div",{staticClass:"Carousel__dashboard"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.amountPerTime,expression:"amountPerTime"}],attrs:{type:"text",placeholder:"amount of items per time"},domProps:{value:t.amountPerTime},on:{input:function(e){e.target.composing||(t.amountPerTime=e.target.value)}}}),s("br"),s("span",[t._v("Total: "+t._s(t.total))]),s("br"),s("span",[t._v("Current step: "+t._s(t.currentStep))]),s("br"),s("span",[t._v("Steps: "+t._s(Math.floor(t.steps)))]),s("br"),s("span",[t._v("Position: "+t._s(t.position))]),s("br"),s("span",[t._v("Ghost position: "+t._s(t.ghostPosition))]),s("br"),s("span",[t._v("Is ghost visible? "+t._s(t.isGhostVisible))]),s("br"),s("span",[t._v("Visible amount: "+t._s(t.visibleAmount))]),s("br"),s("span",[t._v("Item size: "+t._s(t.itemSize))]),s("br")]),s("div",{staticClass:"Carousel__canvas"},[s("ul",{staticClass:"Carousel__container"},t._l(t.dogs,function(t,e){return s("li",{key:t.id,staticClass:"Carousel__item"},[s("img",{staticClass:"Carousel__image",attrs:{src:t.url}})])})),s("ul",{staticClass:"Carousel-ghost Carousel__container",class:{"Carousel-ghost--active":t.isGhostVisible}},t._l(t.dogs,function(t,e){return s("li",{key:t.id,staticClass:"Carousel__item"},[s("img",{staticClass:"Carousel__image",attrs:{src:t.url}})])})),s("div",{staticClass:"Carousel__controls"},[s("button",{staticClass:"Carousel__control Carousel__control--left",on:{click:function(e){t.prev()}}},[t._v("<")]),s("button",{staticClass:"Carousel__control Carousel__control--right",on:{click:function(e){t.forward()}}},[t._v(">")])])])])},o=[],a={render:i,staticRenderFns:o};e.a=a},fjIA:function(t,e,s){var i=s("M4kC");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);s("rjj0")("c8dd52a2",i,!0)},p2ND:function(t,e,s){"use strict";var i=s("NYxO"),o=s("DSEk");e.a={computed:Object(i.mapState)(["dogs"]),mounted:function(){this.$store.dispatch("GET_DOGS_VISUAL")},components:{Carousel:o.a}}},xI8k:function(t,e,s){"use strict";e.a={name:"Carousel",props:{dogs:{},step:{type:Number,default:0}},data:function(){return{amountPerTime:1,visibleAmount:1,currentStep:0,itemSize:960}},mounted:function(){var t=this;this.$nextTick(function(){t.$ghost=t.$el.querySelector(".Carousel-ghost"),t.$carouselContainer=t.$el.querySelector(".Carousel__container"),t.$carouselCanvas=t.$el.querySelector(".Carousel__canvas"),t.$carouselImages=t.$el.querySelector(".Carousel__image"),window.addEventListener("resize",t.onWindowResize),t.currentStep=t.step,t.setVisibleAmount(),t.setItemSize()})},computed:{total:function(){return this.dogs.length},steps:function(){return this.total/this.amountPerTime},isGhostVisible:function(){return this.currentStep<0||this.total<this.visibleAmount+this.currentStep},position:function(){var t=this.itemSize*Math.abs(this.currentStep);return this.currentStep>=0?-1*t:t},ghostPosition:function(){return this.currentStep>=0?this.itemSize*(this.total-this.currentStep):this.itemSize*(this.total+this.currentStep)*-1}},methods:{onWindowResize:function(){this.setVisibleAmount(),this.setItemSize()},setItemSize:function(){this.itemSize=this.$el?this.$el.querySelector(".Carousel__image").clientWidth:960},setVisibleAmount:function(){this.visibleAmount=Math.max(Math.floor(this.$carouselCanvas.clientWidth/this.itemSize),1)},prev:function(){this.currentStep=this.currentStep-1,Math.abs(this.currentStep)===this.steps&&(this.currentStep=0)},forward:function(){this.currentStep=this.currentStep+1,this.currentStep===this.steps&&(this.currentStep=0)},draw:function(){this.$carouselContainer.style.transform="translateX("+this.position+"px)",this.$ghost.style.transform="translateX("+this.ghostPosition+"px)"}},watch:{currentStep:function(t){this.draw()}}}}});
//# sourceMappingURL=visualhunt.d196baf85971d9811d5c.js.map