(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a(38)},,,,,,function(e,t,a){},,function(e,t,a){},,,,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(7),s=a.n(l),c=(a(14),a(1)),i=a(2),o=a(4),m=a(3),u=a(5),p=(a(16),a(20),function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"onImageClick",value:function(e){var t=e.currentTarget.getAttribute("src");document.querySelector(".carousel .primary").setAttribute("src",t)}},{key:"onMagnifyingClick",value:function(e){}},{key:"render",value:function(){for(var e=this,t=new RegExp(this.props.imageData.PrimaryImage[0].image),a=this.props.imageData.AlternateImages,n=[],l=0;l<3;l++)n.push(a[l]);return r.a.createElement("div",{className:"carousel"},r.a.createElement("img",{src:t.source,alt:"",className:"primary"}),r.a.createElement("span",{className:"view-larger"},r.a.createElement("i",{className:"fas fa-search-plus"})," View larger"),r.a.createElement("div",{className:"text-center"},r.a.createElement("i",{className:"fas fa-angle-left arrows"}),n.map(function(t){return r.a.createElement("img",{onClick:e.onImageClick,src:t.image,alt:"",className:"rounded thumbnail"})}),r.a.createElement("i",{className:"fas fa-angle-right arrows"})))}}]),t}(n.Component)),f=(a(22),function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"price"},r.a.createElement("h2",null,this.props.priceData.formattedPriceValue," ",r.a.createElement("small",{className:"text-lowercase"},this.props.priceData.priceQualifier)))}}]),t}(n.Component)),d=(a(24),function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"primary-button-group row"},r.a.createElement(function(e){return r.a.createElement("button",{type:"button",className:"col-md btn btn-primary btn-lg text-uppercase available-in-store"},"pick up in store")},{availableInStores:this.props.availableInStores}),r.a.createElement(function(e){return r.a.createElement("button",{type:"button",className:"col-md btn btn-primary btn-lg text-uppercase available-online"},"add to cart")},{availableOnline:this.props.availableOnline}))}}]),t}(n.Component)),h=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"product-highlights"},r.a.createElement("h2",{className:"text-lowercase"},"product highlights"),r.a.createElement("ul",null,this.props.features.map(function(e){return r.a.createElement("li",{dangerouslySetInnerHTML:{__html:e}})})))}}]),t}(n.Component),E=(a(26),function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"promotions"},r.a.createElement("hr",null),this.props.promotions.map(function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",{className:"text-lowercase"},r.a.createElement("i",{className:"fas fa-tag"}),"\xa0",e.Description[0].shortDescription))}),r.a.createElement("hr",null))}}]),t}(n.Component)),b=(a(28),function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"onPlusClick",value:function(e){document.querySelector(".quantity-picker .quantity").innerHTML++}},{key:"onMinusClick",value:function(e){document.querySelector(".quantity-picker .quantity").innerHTML--}},{key:"render",value:function(){return r.a.createElement("div",{className:"quantity-picker col-xs-12 col-md-5 col-lg-7"},r.a.createElement("label",null,"quantity:"),r.a.createElement("i",{onClick:this.onPlusClick,className:"fas fa-plus-circle"}),r.a.createElement("div",{className:"quantity"},this.props.quantity),r.a.createElement("i",{onClick:this.onMinusClick,className:"fas fa-minus-circle"}))}}]),t}(n.Component)),v=(a(30),function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"ratings-and-reviews col-md-12 col-lg-6"},r.a.createElement("div",{className:"ratings"},r.a.createElement("fieldset",{className:"stars"},r.a.createElement("label",{className:"full",for:"star5",title:"5 stars"}),r.a.createElement("input",{type:"radio",id:"star5",name:"rating",value:"5"}),r.a.createElement("label",{className:"half",for:"star4half",title:"4.5 stars"}),r.a.createElement("input",{type:"radio",id:"star4half",name:"rating",value:"4 and a half"}),r.a.createElement("label",{className:"full",for:"star4",title:"4 stars"}),r.a.createElement("input",{type:"radio",id:"star4",name:"rating",value:"4"}),r.a.createElement("label",{className:"half",for:"star3half",title:"3.5 stars"}),r.a.createElement("input",{type:"radio",id:"star3half",name:"rating",value:"3 and a half"}),r.a.createElement("label",{className:"full",for:"star3",title:"3 stars"}),r.a.createElement("input",{type:"radio",id:"star3",name:"rating",value:"3"}),r.a.createElement("label",{className:"half",for:"star2half",title:"2.5 stars"}),r.a.createElement("input",{type:"radio",id:"star2half",name:"rating",value:"2 and a half"}),r.a.createElement("label",{className:"full",for:"star2",title:"2 stars"}),r.a.createElement("input",{type:"radio",id:"star2",name:"rating",value:"2"}),r.a.createElement("label",{className:"half",for:"star1half",title:"1.5 stars"}),r.a.createElement("input",{type:"radio",id:"star1half",name:"rating",value:"1 and a half"}),r.a.createElement("label",{className:"full",for:"star1",title:"1 star"}),r.a.createElement("input",{type:"radio",id:"star1",name:"rating",value:"1"}),r.a.createElement("label",{className:"half",for:"starhalf",title:"0.5 stars"}),r.a.createElement("input",{type:"radio",id:"starhalf",name:"rating",value:"half"})),r.a.createElement("p",{className:"text-lowercase"},"overall"),r.a.createElement("a",{className:"text-lowercase",href:"/"},"view all ",this.props.reviews.length," reviews")),r.a.createElement("div",{className:"clearfix"}),r.a.createElement("div",{className:"reviews"},r.a.createElement("div",{className:"reviews-header"},r.a.createElement("div",{className:"pro col-sm"},r.a.createElement("h3",{className:"text-uppercase"},"pro"),r.a.createElement("p",{className:"text-lowercase"},r.a.createElement("small",null,"most helpful 4-5 star review"))),r.a.createElement("div",{className:"con col-sm"},r.a.createElement("h3",{className:"text-uppercase"},"con"),r.a.createElement("p",{className:"text-lowercase"},r.a.createElement("small",null,"most helpful 1-2 star review")))),r.a.createElement("hr",null),r.a.createElement("div",{className:"reviews-body"},r.a.createElement("div",{className:"pro-review col-sm"},r.a.createElement("h4",null,this.props.usefulProReview.title),r.a.createElement("p",null,this.props.usefulProReview.review),r.a.createElement("p",null,r.a.createElement("a",{href:"/"},this.props.usefulProReview.screenName),", ",this.props.usefulProReview.datePosted)),r.a.createElement("div",{className:"con-review col-sm"},r.a.createElement("h4",null,this.props.usefulConReview.title),r.a.createElement("p",null,this.props.usefulConReview.review),r.a.createElement("p",null,r.a.createElement("a",{href:"/"},this.props.usefulConReview.screenName),", ",this.props.usefulConReview.datePosted)))))}}]),t}(n.Component)),y=(a(32),function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"return-policy align-items-center"},r.a.createElement("p",{className:"lead text-lowercase"},"returns"),r.a.createElement("p",{className:"copy"},"This item must be returned within 30 days of the ship date. See ",r.a.createElement("a",{href:"/"},"return policy")," for details. Prices, promotions, styles and availability may vary by store and online."))}}]),t}(n.Component)),N=(a(34),function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"secondary-button-group row"},r.a.createElement("button",{type:"button",className:"col-sm btn btn-secondary btn-sm text-uppercase"},"add to registry"),r.a.createElement("button",{type:"button",className:"col-sm btn btn-secondary btn-sm text-uppercase"},"add to list"),r.a.createElement("button",{type:"button",className:"col-sm btn btn-secondary btn-sm text-uppercase"},"share"))}}]),t}(n.Component)),O=(a(36),function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"title"},r.a.createElement("h1",null,this.props.title))}}]),t}(n.Component)),j=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={error:null,isLoaded:!1,data:null},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("http://localhost:3000/item-data.json").then(function(e){return e.json()}).then(function(t){e.setState({isLoaded:!0,data:t})},function(t){e.setState({isLoaded:!0,error:t})})}},{key:"render",value:function(){var e=this.state,t=e.error,a=e.isLoaded,n=e.data;if(t)return r.a.createElement("div",null,"Error: ",t.message);if(a){var l=n.CatalogEntryView[0],s=l.Images[0],c=l.Offers[0].OfferPrice[0],i=l.Promotions,o=l.purchasingChannelCode,m="0"===o||"2"===o,u="0"===o||"1"===o,j=l.ItemDescription[0].features,g=l.CustomerReview[0].Pro[0],w=l.CustomerReview[0].Con[0],C=l.CustomerReview[0].Reviews;return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md"},r.a.createElement(O,{title:l.title}),r.a.createElement(p,{imageData:s})),r.a.createElement("div",{className:"col-md"},r.a.createElement(f,{priceData:c}),r.a.createElement(E,{promotions:i}),r.a.createElement(b,{quantity:"1"}),r.a.createElement("div",{className:"clearfix"}),r.a.createElement(d,{availableInStores:m,availableOnline:u}),r.a.createElement(y,null),r.a.createElement(N,null),r.a.createElement(h,{features:j}))),r.a.createElement("div",{className:"row"},r.a.createElement(v,{reviews:C,usefulProReview:g,usefulConReview:w}))))}return r.a.createElement("div",null,"Loading...")}}]),t}(n.Component);s.a.render(r.a.createElement(j,null),document.getElementById("root"))}],[[8,2,1]]]);
//# sourceMappingURL=main.9d4f71bf.chunk.js.map