(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{298:function(t,e,a){"use strict";a.r(e);var s=a(0),r=Object(s.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[a("h1",[t._v("FAQ")]),t._m(0),a("p",[t._v("This is usually due to an incorrect setting or configuration somewhere. Check your settings and make sure you've assigned the right Element Metadata field to your Field Layout. Make sure your Custom Sections are enabled.")]),t._m(1),t._m(2),t._m(3),t._m(4),t._m(5),t._m(6),a("p",[t._v("Usually, this is because you have lots of entries and the sitemap tag is trying to output them all and running out of memory.")]),a("p",[t._v("To troubleshoot, first de-select all of the sections in your sitemap and then add them back one by one, starting with your Singles or smaller sections.")]),a("div",{pre:!0},[a("p",[t._v("Once you have identified the larger section that may be causing the issue, de-select it from your sitemap settings.  You'll need to manage the sitemap for this section manually.  Review our help doc on "),a("a",{attrs:{href:"http://sprout.barrelstrengthdesign.com/craft-plugins/seo/docs/examples/large-sitemaps",target:"_blank",rel:"noopener noreferrer"}},[t._v("Large Sitemaps"),a("OutboundLink")],1),t._v(" for an example of how to manage a "),a("code",[t._v("sitemapindex")]),t._v(" and multiple sitemaps.")])])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"my-page-is-outputting-the-wrong-metadata"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#my-page-is-outputting-the-wrong-metadata","aria-hidden":"true"}},[this._v("#")]),this._v(" My page is outputting the wrong metadata?")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{pre:!0},[e("p",[this._v("A tricker one to troubleshoot is when matched variable names may take priority over one another in your template. Make sure you don't override the primary variable ("),e("code",[this._v("entry")]),this._v(", "),e("code",[this._v("category")]),this._v(", "),e("code",[this._v("product")]),this._v(", etc.) that Craft or a Custom Element Type makes available to the page, or any other URL-enabled pages:")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{pre:!0},[e("p",[this._v("For example, a line that defines a "),e("code",[this._v("category")]),this._v(" variable:")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-twig extra-class"},[a("pre",{pre:!0,attrs:{class:"language-twig"}},[a("code",[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token ld"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("{%")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("set")])]),t._v(" "),a("span",{attrs:{class:"token property"}},[t._v("category")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token property"}},[t._v("product")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token property"}},[t._v("category")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token property"}},[t._v("last")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token rd"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("%}")])])]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{pre:!0},[e("p",[this._v("May override the expected "),e("code",[this._v("category")]),this._v(" variable that Craft makes available to a Category page with URLs and also may override the "),e("code",[this._v("entry")]),this._v(" or "),e("code",[this._v("product")]),this._v(" variables on an Entry or Product Page with URLs.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{pre:!0},[e("p",[this._v("Avoid using the generic variable names that Craft depends on when possible and use more specific variable names such as "),e("code",[this._v("productCategory")]),this._v(" to avoid unexpected behavior.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"my-sitemap-is-returning-blank-what-do-i-do"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#my-sitemap-is-returning-blank-what-do-i-do","aria-hidden":"true"}},[this._v("#")]),this._v(" My sitemap is returning blank!?  What do I do?")])}],!1,null,null,null);e.default=r.exports}}]);