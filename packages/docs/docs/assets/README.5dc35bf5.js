import{d as p,r as g,b as r,o as l,c as s,e as n,f as t,u as h,_ as b,w as _,a as w}from"./index.663b4037.js";const P={style:{width:"800px",height:"200px"},flex:"~ col","justify-center":"","items-center":"","bg-dark":""},$=p({setup(i){const e=g({value:66}),o=()=>{e.value=Math.floor(Math.random()*(100-1))+1};return(a,c)=>{const d=r("dv-percent-pond");return l(),s("div",P,[n("div",null,[t(d,{config:h(e),style:{width:"200px",height:"100px"}},null,8,["config"])]),n("div",{pt5:""},[n("button",{btn:"",onClick:o}," \u66F4\u65B0\u6570\u636E ")])])}}}),k={style:{width:"800px",height:"200px"},flex:"~ ","justify-center":"","items-center":"","bg-dark":""},N=p({setup(i){const e=g({value:66,borderWidth:5,borderRadius:10,borderGap:5});return(o,a)=>{const c=r("dv-percent-pond");return l(),s("div",k,[t(c,{config:h(e),style:{width:"200px",height:"100px"}},null,8,["config"])])}}}),W={style:{width:"800px",height:"200px"},flex:"~ ","justify-center":"","items-center":"","bg-dark":""},C=p({setup(i){const e=g({value:66,lineDash:[10,2]});return(o,a)=>{const c=r("dv-percent-pond");return l(),s("div",W,[t(c,{config:h(e),style:{width:"200px",height:"100px"}},null,8,["config"])])}}}),G={style:{width:"800px",height:"200px"},flex:"~ ","justify-center":"","items-center":"","bg-dark":""},B=p({setup(i){const e=g({value:66,localGradient:!0});return(o,a)=>{const c=r("dv-percent-pond");return l(),s("div",G,[t(c,{config:h(e),style:{width:"200px",height:"100px"}},null,8,["config"])])}}});const S={style:{width:"800px",height:"200px"},flex:"~ ","justify-center":"","items-center":"","bg-dark":""},j=p({setup(i){const d=[.25,.5,.25],y=3,f=d.map(x=>[288*x,y]).reduce((x,u)=>[...x,...u],[]),m=g({value:100,colors:["#01c4f9","#c135ff"],lineDash:f});return(x,u)=>{const v=r("dv-percent-pond");return l(),s("div",S,[t(v,{config:h(m),style:{width:"200px",height:"50px"}},null,8,["config"])])}}});var D=b(j,[["__scopeId","data-v-1bbd2f5f"]]);const A={class:"markdown-body"},E=n("h1",null,"\u8FDB\u5EA6\u6C60",-1),F=n("p",null,"\u8FDB\u5EA6\u6C60",-1),V=n("h2",null,"\u57FA\u7840\u7528\u6CD5",-1),M=n("h2",null,"\u8C03\u8282\u8FB9\u6846",-1),R=n("h2",null,"\u7EBF\u6761\u95F4\u9699",-1),I=n("h2",null,"\u5C40\u90E8\u6E10\u53D8",-1),L=n("h2",null,"\u5B9A\u5236\u5757\u9699\u957F\u5EA6",-1),q=w('<p><strong>\u767E\u5206\u6BD4\u6807\u7B7E\u5DF2\u901A\u8FC7CSS<code>display:none</code>\u9690\u85CF\u3002</strong></p><h2>config\u5C5E\u6027</h2><table><thead><tr><th style="text-align:center;">\u53C2\u6570</th><th style="text-align:center;">\u8BF4\u660E</th><th style="text-align:center;">\u7C7B\u578B</th><th style="text-align:center;">\u53EF\u9009\u503C</th><th style="text-align:center;">\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td style="text-align:center;">value</td><td style="text-align:center;">\u8FDB\u5EA6\u6C60\u6570\u503C</td><td style="text-align:center;"><code>Number</code></td><td style="text-align:center;"><code>0-100</code></td><td style="text-align:center;"><code>0</code></td></tr><tr><td style="text-align:center;">colors</td><td style="text-align:center;">\u8FDB\u5EA6\u6C60\u914D\u8272</td><td style="text-align:center;"><code>Array&lt;String&gt;</code></td><td style="text-align:center;"><code>[1]</code></td><td style="text-align:center;"><code>[2]</code></td></tr><tr><td style="text-align:center;">borderWidth</td><td style="text-align:center;">\u8FB9\u6846\u5BBD\u5EA6</td><td style="text-align:center;"><code>Number</code></td><td style="text-align:center;">\u2014</td><td style="text-align:center;"><code>3</code></td></tr><tr><td style="text-align:center;">borderGap</td><td style="text-align:center;">\u8FB9\u6846\u95F4\u9699</td><td style="text-align:center;"><code>Number</code></td><td style="text-align:center;">\u2014</td><td style="text-align:center;"><code>3</code></td></tr><tr><td style="text-align:center;">lineDash</td><td style="text-align:center;">\u7EBF\u6761\u95F4\u9699</td><td style="text-align:center;"><code>Array&lt;Number&gt;</code></td><td style="text-align:center;">\u2014</td><td style="text-align:center;"><code>[5, 1]</code></td></tr><tr><td style="text-align:center;">textColor</td><td style="text-align:center;">\u6587\u5B57\u989C\u8272</td><td style="text-align:center;"><code>String</code></td><td style="text-align:center;"><code>[1]</code></td><td style="text-align:center;"><code>#fff</code></td></tr><tr><td style="text-align:center;">borderRadius</td><td style="text-align:center;">\u8FB9\u6846\u534A\u5F84</td><td style="text-align:center;"><code>Number</code></td><td style="text-align:center;">\u2014</td><td style="text-align:center;"><code>5</code></td></tr><tr><td style="text-align:center;">localGradient</td><td style="text-align:center;">\u5C40\u90E8\u6E10\u53D8</td><td style="text-align:center;"><code>Boolean</code></td><td style="text-align:center;">\u2014</td><td style="text-align:center;"><code>false</code></td></tr><tr><td style="text-align:center;">formatter</td><td style="text-align:center;">\u4FE1\u606F\u683C\u5F0F\u5316</td><td style="text-align:center;"><code>String</code></td><td style="text-align:center;">\u2014</td><td style="text-align:center;"><code>&#39;{value}%&#39;</code> <code>[3]</code></td></tr></tbody></table><h2>\u6CE8\u91CA</h2><ul><li><p>[1] \u989C\u8272\u652F\u6301<code>hex | rgb | rgba</code>\u989C\u8272\u5173\u952E\u5B57\u7B49\u56DB\u79CD\u7C7B\u578B\u3002</p></li><li><p>[2] \u9ED8\u8BA4\u914D\u8272\u4E3A<code>[&#39;#3DE7C9&#39;, &#39;#00BAFF&#39;]</code>, \u81EA\u52A8\u5E94\u7528\u6E10\u53D8\u8272\uFF0C\u82E5\u4E0D\u60F3\u4F7F\u7528\u6E10\u53D8\u8272\uFF0C\u8BF7\u914D\u7F6E\u4E24\u4E2A\u76F8\u540C\u7684\u989C\u8272\u3002</p></li><li><p>[3] \u81EA\u52A8\u4F7F\u7528value\u7684\u503C\u66FF\u6362\u5B57\u7B26\u4E32\u4E2D\u7684<code>&#39;{value}&#39;</code>\u6807\u8BB0\u3002</p></li></ul>',5),H={setup(i,{expose:e}){return e({frontmatter:{}}),(a,c)=>{const d=r("Preview");return l(),s("div",A,[E,F,V,t(d,{"comp-name":"PercentPond","demo-name":"demo1"},{default:_(()=>[t($)]),_:1}),M,t(d,{"comp-name":"PercentPond","demo-name":"demo2"},{default:_(()=>[t(N)]),_:1}),R,t(d,{"comp-name":"PercentPond","demo-name":"demo3"},{default:_(()=>[t(C)]),_:1}),I,t(d,{"comp-name":"PercentPond","demo-name":"demo4"},{default:_(()=>[t(B)]),_:1}),L,t(d,{"comp-name":"PercentPond","demo-name":"demo5"},{default:_(()=>[t(D)]),_:1}),q])}}};export{H as default};
