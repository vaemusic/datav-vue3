import{b as p,m as g,a as y}from"./mapCenterPoint.a0166fdc.js";import{f as u,r as x,b as s,o as l,c as d,d as t,e as n,u as h,w as m,a as k}from"./index.3b37b155.js";const b={w200:"",h160:"",flex:"~ ","justify-center":"","items-center":"","bg-dark":""},f={w740px:"",h600px:""},_=u({setup(c){const e=x({centerPoint:[.48,.35],points:[{position:[.52,.235],text:"\u65B0\u4E61"},{position:[.43,.29],text:"\u7126\u4F5C"},{position:[.59,.35],text:"\u5F00\u5C01"},{position:[.53,.47],text:"\u8BB8\u660C"},{position:[.45,.54],text:"\u5E73\u9876\u5C71"},{position:[.36,.38],text:"\u6D1B\u9633"},{position:[.62,.55],text:"\u5468\u53E3"},{position:[.56,.56],text:"\u6F2F\u6CB3"},{position:[.37,.66],text:"\u5357\u9633"},{position:[.55,.81],text:"\u4FE1\u9633"},{position:[.55,.67],text:"\u9A7B\u9A6C\u5E97"},{position:[.37,.29],text:"\u6D4E\u6E90"},{position:[.2,.36],text:"\u4E09\u95E8\u5CE1"},{position:[.76,.41],text:"\u5546\u4E18"},{position:[.59,.18],text:"\u9E64\u58C1"},{position:[.68,.17],text:"\u6FEE\u9633"},{position:[.59,.1],text:"\u5B89\u9633"}],bgImgUrl:p,centerPointImg:{url:g},pointsImg:{url:y}});return(o,r)=>{const a=s("dv-flyline-chart");return l(),d("div",b,[t("div",f,[n(a,{config:h(e),dev:!0,style:{width:"100%",height:"100%"}},null,8,["config"])])])}}}),v={class:"markdown-body"},C=t("h1",null,"\u98DE\u7EBF\u56FE",-1),N=t("p",null,"\u98DE\u7EBF\u56FE",-1),E=t("h2",null,"\u57FA\u7840\u7528\u6CD5",-1),P=k(`<ul><li>\u66F4\u591A\u793A\u4F8B\u89C1<a href="http://datav.jiaminghi.com/guide/flylineChart.html" target="_blank">DataV FlylineChart</a></li></ul><h2>dev\u6A21\u5F0F</h2><p>\u7EC4\u4EF6\u63D0\u4F9B\u4E86<code>dev</code>\u6A21\u5F0F (\u672C\u9875\u5C55\u793A\u7684Demo\u5747\u5DF2\u5F00\u542F)\uFF0C\u53EF\u4EE5\u5E2E\u4F60\u5FEB\u901F\u786E\u5B9A\u98DE\u7EBF\u70B9\u4F4D\u7F6E\uFF0C\u8BBE\u7F6E\u7EC4\u4EF6\u5C5E\u6027<code>dev</code>\u4E3A<code>true</code>\u5373\u53EF\u542F\u7528dev\u6A21\u5F0F\uFF1A</p><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dv-flyline-chart</span> <span class="token attr-name">:config</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>config<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:dev</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">width</span><span class="token punctuation">:</span>100%<span class="token punctuation">;</span><span class="token property">height</span><span class="token punctuation">:</span>100%<span class="token punctuation">;</span></span><span class="token punctuation">&quot;</span></span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><p>\u5F00\u542Fdev\u6A21\u5F0F\u540E\uFF0C\u8BF7\u6253\u5F00\u6D4F\u89C8\u5668\u63A7\u5236\u53F0\uFF0C\u7136\u540E\u70B9\u51FB\u98DE\u7EBF\u56FE\u7EC4\u4EF6\u4E2D\u4F60\u60F3\u8981\u8BBE\u7F6E\u7684\u98DE\u7EBF\u7684\u8D77\u59CB\u70B9\u4F4D\u7F6E\u6216\u4E2D\u5FC3\u70B9\u4F4D\u7F6E\uFF0C\u63A7\u5236\u53F0\u4F1A\u8F93\u51FA\u8BE5\u70B9\u5728\u7EC4\u4EF6\u4E2D\u7684\u4F4D\u7F6E\u4FE1\u606F\uFF1A</p><pre class="language-html"><code class="language-html">dv-flyline-chart DEV:
Click Position is [100, 100]
Relative Position is [0.10, 0.10]
</code></pre><p>\u7EC4\u4EF6\u9ED8\u8BA4\u4F7F\u7528\u76F8\u5BF9\u5750\u6807\uFF0C\u5E94\u9009\u7528<code>Relative Position</code>\uFF0C\u5173\u95ED\u76F8\u5BF9\u5750\u6807\u6A21\u5F0F\uFF0C\u5219\u9700\u8981\u4F7F\u7528<code>Click Position</code>\uFF0C\u5982\u4F55\u5F00\u542F\u548C\u5173\u95ED\u76F8\u5BF9\u5750\u6807\u6A21\u5F0F\u8BF7\u67E5\u9605<code>config\u5C5E\u6027</code>\u3002</p><h2>config\u5C5E\u6027</h2><table><thead><tr><th style="text-align:center;">\u53C2\u6570</th><th style="text-align:center;">\u8BF4\u660E</th><th style="text-align:center;">\u7C7B\u578B</th><th style="text-align:center;">\u53EF\u9009\u503C</th><th style="text-align:center;">\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td style="text-align:center;">centerPoint</td><td style="text-align:center;">\u4E2D\u5FC3\u70B9\u5750\u6807</td><td style="text-align:center;"><code>Array&lt;Number&gt;</code></td><td style="text-align:center;">\u2014</td><td style="text-align:center;"><code>[0, 0]</code></td></tr><tr><td style="text-align:center;">points</td><td style="text-align:center;">\u98DE\u7EBF\u8D77\u59CB\u70B9\u6570\u636E</td><td style="text-align:center;"><code>Array[1]</code></td><td style="text-align:center;">\u2014</td><td style="text-align:center;"><code>[]</code></td></tr><tr><td style="text-align:center;">lineWidth</td><td style="text-align:center;">\u98DE\u7EBF\u5BBD\u5EA6</td><td style="text-align:center;"><code>Number</code></td><td style="text-align:center;">\u2014</td><td style="text-align:center;"><code>1</code></td></tr><tr><td style="text-align:center;">orbitColor</td><td style="text-align:center;">\u8F68\u8FF9\u989C\u8272</td><td style="text-align:center;"><code>String</code></td><td style="text-align:center;">\u2014</td><td style="text-align:center;"><code>[2]</code></td></tr><tr><td style="text-align:center;">flylineColor</td><td style="text-align:center;">\u98DE\u7EBF\u989C\u8272</td><td style="text-align:center;"><code>String</code></td><td style="text-align:center;">\u2014</td><td style="text-align:center;"><code>#ffde93</code></td></tr><tr><td style="text-align:center;">k</td><td style="text-align:center;"><code>\u98DE\u7EBF\u6536\u675F\u7A0B\u5EA6[3]</code></td><td style="text-align:center;"><code>Number</code></td><td style="text-align:center;"><code>-1 - 1</code></td><td style="text-align:center;"><code>-0.5</code></td></tr><tr><td style="text-align:center;">curvature</td><td style="text-align:center;"><code>\u98DE\u7EBF\u66F2\u7387[4]</code></td><td style="text-align:center;"><code>Number</code></td><td style="text-align:center;"><code>1 - 10</code></td><td style="text-align:center;"><code>5</code></td></tr><tr><td style="text-align:center;">flylineRadius</td><td style="text-align:center;"><code>\u98DE\u7EBF\u663E\u793A\u534A\u5F84[5]</code></td><td style="text-align:center;"><code>Number</code></td><td style="text-align:center;">\u2014</td><td style="text-align:center;"><code>100</code></td></tr><tr><td style="text-align:center;">duration</td><td style="text-align:center;">\u98DE\u7EBF\u52A8\u753B\u65F6\u957F</td><td style="text-align:center;"><code>Array&lt;Number&gt;</code></td><td style="text-align:center;">\u2014</td><td style="text-align:center;"><code>[20, 30] [6]</code></td></tr><tr><td style="text-align:center;">relative</td><td style="text-align:center;"><code>\u4F7F\u7528\u76F8\u5BF9\u5750\u6807[7]</code></td><td style="text-align:center;"><code>Boolean</code></td><td style="text-align:center;">true/false</td><td style="text-align:center;"><code>true</code></td></tr><tr><td style="text-align:center;">bgImgUrl</td><td style="text-align:center;">\u80CC\u666F\u56FEurl</td><td style="text-align:center;"><code>String</code></td><td style="text-align:center;">\u2014</td><td style="text-align:center;"><code>&#39;&#39;</code></td></tr><tr><td style="text-align:center;">text</td><td style="text-align:center;">\u6587\u672C\u914D\u7F6E\u9879</td><td style="text-align:center;"><code>Object</code></td><td style="text-align:center;">\u2014</td><td style="text-align:center;"><code>\u89C1\u4E0B\u65B9text\u5C5E\u6027</code></td></tr><tr><td style="text-align:center;">halo</td><td style="text-align:center;">\u5149\u6655\u73AF\u914D\u7F6E\u9879</td><td style="text-align:center;"><code>Object</code></td><td style="text-align:center;">\u2014</td><td style="text-align:center;"><code>\u89C1\u4E0B\u65B9halo\u5C5E\u6027</code></td></tr><tr><td style="text-align:center;">centerPointImg</td><td style="text-align:center;">\u4E2D\u5FC3\u70B9\u56FE\u7247\u914D\u7F6E</td><td style="text-align:center;"><code>Object</code></td><td style="text-align:center;">\u2014</td><td style="text-align:center;"><code>\u89C1\u4E0B\u65B9centerPointImg\u5C5E\u6027</code></td></tr><tr><td style="text-align:center;">pointsImg</td><td style="text-align:center;">\u98DE\u7EBF\u70B9\u56FE\u7247\u914D\u7F6E</td><td style="text-align:center;"><code>Object</code></td><td style="text-align:center;">\u2014</td><td style="text-align:center;"><code>\u89C1\u4E0B\u65B9pointsImg\u5C5E\u6027</code></td></tr></tbody></table><h2>config\u76F8\u5173\u6CE8\u91CA</h2><ul><li>[1] \u98DE\u7EBF\u8D77\u59CB\u70B9\u6570\u636E\u7684\u5B50\u5143\u7D20\u53EF\u4EE5\u4E3A\u6570\u7EC4\u6216\u5BF9\u8C61\uFF0C\u5F53\u4E3A\u6570\u7EC4\u65F6\uFF0C\u5373\u70B9\u5750\u6807\u6570\u636E\uFF1B\u5F53\u4E3A\u5BF9\u8C61\u65F6\uFF0C\u8BE5\u5BF9\u8C61\u5305\u6DB5\u70B9\u5750\u6807\u4F4D\u7F6E\u548C\u6587\u672C\u4FE1\u606F\u3002\u4E24\u79CD\u793A\u4F8B\u5982\u4E0B\uFF1A</li></ul><pre class="language-js"><code class="language-js"><span class="token comment">// \u5B50\u5143\u7D20\u4E3A\u6570\u7EC4</span>
points <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token comment">// \u98DE\u7EBF\u8D77\u59CB\u70B9\u7684\u5750\u6807</span>
  <span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>

<span class="token comment">// \u5B50\u5143\u7D20\u4E3A\u5BF9\u8C61</span>
points <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">position</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0.33</span><span class="token punctuation">,</span> <span class="token number">0.52</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// \u98DE\u7EBF\u56FE\u81EA\u52A8\u663E\u793A\u8BE5\u70B9\u6587\u672C\u4FE1\u606F</span>
    <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;\u98DE\u7EBF\u70B9A&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>
</code></pre><ul><li><p>[2] \u98DE\u7EBF\u7684\u8F68\u8FF9\u7EBF\u9ED8\u8BA4\u989C\u8272\u4E3A<code>rgba(103, 224, 227, .2)</code>\uFF0C\u5982\u679C\u60F3\u8981\u9690\u85CF\u8F68\u8FF9\u7EBF\uFF0C\u53EF\u4EE5\u8BBE\u7F6E<code>orbitColor</code>\u4E3A<code>transparent</code>\u3002</p></li><li><p>[3] <code>k</code>\u503C\u51B3\u5B9A\u4E86\u98DE\u7EBF\u7684\u6536\u675F\u7A0B\u5EA6\uFF0C\u5176\u53D6\u503C\u8303\u56F4\u4E3A<code>-1 - 1</code>\uFF0C\u5F53\u4E3A\u8D1F\u503C\u65F6\u98DE\u7EBF\u5448\u51F8\u5F62\u805A\u5408\uFF0C\u4E3A\u6B63\u503C\u65F6\u98DE\u7EBF\u5448\u51F9\u5F62\u805A\u5408\u3002</p></li><li><p>[4] <code>curvature</code>\u51B3\u5B9A\u4E86\u98DE\u7EBF\u7684\u5F2F\u66F2\u7A0B\u5EA6\uFF0C\u5176\u53D6\u503C\u8303\u56F4\u4E3A<code>1 - 10</code>\uFF0C\u8BE5\u503C\u8D8A\u5C0F\uFF0C\u98DE\u7EBF\u66F2\u7387\u8D8A\u5927\uFF0C\u8BE5\u503C\u8D8A\u5927\uFF0C\u98DE\u7EBF\u66F2\u7387\u8D8A\u5C0F\u3002</p></li><li><p>[5] <code>flylineRadius</code>\u63A7\u5236\u4E86\u98DE\u7EBF\u7684\u663E\u793A\u533A\u57DF\u534A\u5F84\uFF0C\u8BE5\u503C\u8D8A\u5927\uFF0C\u98DE\u7EBF\u663E\u793A\u8303\u56F4\u8D8A\u5927\uFF0C\u98DE\u7EBF\u8D8A\u957F\uFF0C\u8BE5\u503C\u8D8A\u5C0F\uFF0C\u98DE\u7EBF\u8D8A\u77ED\u3002</p></li><li><p>[6] <code>duration</code>\u7528\u4E8E\u8BA1\u7B97\u6BCF\u4E00\u6761\u98DE\u7EBF\u7684\u52A8\u753B\u65F6\u957F\uFF0810 = 1s\uFF09\uFF0C<code>duration[0]</code>\u7528\u4E8E\u63A7\u5236\u52A8\u753B\u6700\u77ED\u65F6\u957F\uFF0C<code>duration[1]</code>\u7528\u4E8E\u63A7\u5236\u52A8\u753B\u6700\u957F\u65F6\u957F\uFF0C\u98DE\u7EBF\u7684\u52A8\u753B\u65F6\u957F\u5C06\u5728\u6B64\u8303\u56F4\u968F\u673A\u3002\u5982\u679C\u60F3\u8981\u6BCF\u4E00\u6761\u98DE\u7EBF\u7684\u52A8\u753B\u65F6\u957F\u90FD\u76F8\u7B49\u53EF\u4EE5\u5C06\u4ED6\u4EEC\u7684\u503C\u8BBE\u4E3A\u76F8\u540C\u7684\u3002</p></li><li><p>[7] <code>relative</code>\u7528\u4E8E\u63A7\u5236\u662F\u5426\u542F\u7528<strong>\u76F8\u5BF9\u5750\u6807\u6A21\u5F0F</strong>\uFF0C\u56E0\u4E3A\u98DE\u7EBF\u56FE\u7EC4\u4EF6\u7684\u5BBD\u9AD8\u53EF\u80FD\u662F\u81EA\u9002\u5E94\u7684\uFF0C\u5982\u6309\u767E\u5206\u6BD4\u8BA1\u7B97\u5BBD\u9AD8\uFF0C\u4F7F\u7528\u76F8\u5BF9\u5750\u6807\u6A21\u5F0F\u53EF\u4F7F\u98DE\u7EBF\u70B9\u7684\u4F4D\u7F6E\u540C\u6837\u6309\u98DE\u7EBF\u56FE\u7EC4\u4EF6\u5BBD\u9AD8\u7684\u767E\u5206\u6BD4\u8BA1\u7B97\u3002\u9ED8\u8BA4\u542F\u7528\u76F8\u5BF9\u5750\u6807\u6A21\u5F0F\uFF0C\u8BF7\u6839\u636E\u60C5\u51B5\uFF0C\u9009\u7528Dev\u6A21\u5F0F\u4E0B\u8F93\u51FA\u7684\u70B9\u5750\u6807\u4FE1\u606F\u3002</p></li></ul><h2>text\u5C5E\u6027</h2><table><thead><tr><th style="text-align:center;">\u53C2\u6570</th><th style="text-align:center;">\u8BF4\u660E</th><th style="text-align:center;">\u7C7B\u578B</th><th style="text-align:center;">\u53EF\u9009\u503C</th><th style="text-align:center;">\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td style="text-align:center;">offset</td><td style="text-align:center;">\u6587\u672C\u4F4D\u7F6E\u504F\u79FB</td><td style="text-align:center;"><code>Array&lt;Number&gt;</code></td><td style="text-align:center;">\u2014</td><td style="text-align:center;"><code>[0, 15]</code></td></tr><tr><td style="text-align:center;">color</td><td style="text-align:center;">\u6587\u672C\u989C\u8272</td><td style="text-align:center;"><code>String</code></td><td style="text-align:center;">\u2014</td><td style="text-align:center;"><code>#ffdb5c</code></td></tr><tr><td style="text-align:center;">fontSize</td><td style="text-align:center;">\u6587\u672C\u6587\u5B57\u5927\u5C0F</td><td style="text-align:center;"><code>Number</code></td><td style="text-align:center;">\u2014</td><td style="text-align:center;"><code>12</code></td></tr></tbody></table><h2>halo\u5C5E\u6027</h2><table><thead><tr><th style="text-align:center;">\u53C2\u6570</th><th style="text-align:center;">\u8BF4\u660E</th><th style="text-align:center;">\u7C7B\u578B</th><th style="text-align:center;">\u53EF\u9009\u503C</th><th style="text-align:center;">\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td style="text-align:center;">show</td><td style="text-align:center;">\u662F\u5426\u663E\u793A\u5149\u6655\u73AF</td><td style="text-align:center;"><code>Boolean</code></td><td style="text-align:center;">\u2014</td><td style="text-align:center;"><code>true</code></td></tr><tr><td style="text-align:center;">duration</td><td style="text-align:center;">\u52A8\u753B\u65F6\u957F</td><td style="text-align:center;"><code>Number</code></td><td style="text-align:center;">\u2014</td><td style="text-align:center;"><code>30</code></td></tr><tr><td style="text-align:center;">color</td><td style="text-align:center;">\u5149\u6655\u989C\u8272</td><td style="text-align:center;"><code>String</code></td><td style="text-align:center;">\u2014</td><td style="text-align:center;"><code>#fb7293</code></td></tr><tr><td style="text-align:center;">radius</td><td style="text-align:center;">\u5149\u6655\u6700\u5927\u534A\u5F84</td><td style="text-align:center;"><code>Number</code></td><td style="text-align:center;">\u2014</td><td style="text-align:center;"><code>120</code></td></tr></tbody></table><h2>centerPointImg\u5C5E\u6027</h2><table><thead><tr><th style="text-align:center;">\u53C2\u6570</th><th style="text-align:center;">\u8BF4\u660E</th><th style="text-align:center;">\u7C7B\u578B</th><th style="text-align:center;">\u53EF\u9009\u503C</th><th style="text-align:center;">\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td style="text-align:center;">width</td><td style="text-align:center;">\u56FE\u7247\u5BBD\u5EA6</td><td style="text-align:center;"><code>Number</code></td><td style="text-align:center;">\u2014</td><td style="text-align:center;"><code>40</code></td></tr><tr><td style="text-align:center;">height</td><td style="text-align:center;">\u56FE\u7247\u9AD8\u5EA6</td><td style="text-align:center;"><code>Number</code></td><td style="text-align:center;">\u2014</td><td style="text-align:center;"><code>40</code></td></tr><tr><td style="text-align:center;">url</td><td style="text-align:center;">\u56FE\u7247url</td><td style="text-align:center;"><code>String</code></td><td style="text-align:center;">\u2014</td><td style="text-align:center;"><code>&#39;&#39;</code></td></tr></tbody></table><h2>pointsImg\u5C5E\u6027</h2><table><thead><tr><th style="text-align:center;">\u53C2\u6570</th><th style="text-align:center;">\u8BF4\u660E</th><th style="text-align:center;">\u7C7B\u578B</th><th style="text-align:center;">\u53EF\u9009\u503C</th><th style="text-align:center;">\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td style="text-align:center;">width</td><td style="text-align:center;">\u56FE\u7247\u5BBD\u5EA6</td><td style="text-align:center;"><code>Number</code></td><td style="text-align:center;">\u2014</td><td style="text-align:center;"><code>15</code></td></tr><tr><td style="text-align:center;">height</td><td style="text-align:center;">\u56FE\u7247\u9AD8\u5EA6</td><td style="text-align:center;"><code>Number</code></td><td style="text-align:center;">\u2014</td><td style="text-align:center;"><code>15</code></td></tr><tr><td style="text-align:center;">url</td><td style="text-align:center;">\u56FE\u7247url</td><td style="text-align:center;"><code>String</code></td><td style="text-align:center;">\u2014</td><td style="text-align:center;"><code>&#39;&#39;</code></td></tr></tbody></table>`,21),I={setup(c,{expose:e}){return e({frontmatter:{}}),(r,a)=>{const i=s("Preview");return l(),d("div",v,[C,N,E,n(i,{"comp-name":"FlylineChart","demo-name":"demo"},{default:m(()=>[n(_)]),_:1}),P])}}};export{I as default};