(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{269:function(e,t,r){"use strict";r.r(t);var n=r(0),a=Object(n.a)({},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"content"},[r("h1",[e._v("Categories")]),r("p",[e._v("Use the Category Element Importer to import categories.")]),r("code-toggle",{attrs:{languages:["craft3"]}},[r("template",{slot:"craft3"},[r("div",{staticClass:"language-craft3 extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('[\n  {\n    "@model": "barrelstrength\\\\sproutbase\\\\app\\\\import\\\\importers\\\\elements\\\\Category",\n    "attributes": {\n      "groupId": 1,\n      "slug": "category-slug",\n      "enabled": true\n    },\n    "content": {\n      "title": "Category Title"\n    }\n  }\n]\n')])])])])],2),e._m(0),r("p",[e._v("There are several ways to import categories with hierarchy. For small data sets the easiest may be to just import your categories without hierarchy and then manually drag them into the right order within the Craft user interface.")]),e._m(1),e._m(2),r("code-toggle",{attrs:{languages:["craft3"]}},[r("template",{slot:"craft3"},[r("div",{staticClass:"language-craft3 extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('[\n  {\n    "@model": "barrelstrength\\\\sproutbase\\\\app\\\\import\\\\importers\\\\elements\\\\Category",\n    "attributes": {\n      "groupId": 1,\n      "slug": "category-slug",\n      "enabled": true,\n      "newParentId": 123\n    },\n    "content": { ... }\n  }\n]\n')])])])])],2),e._m(3),e._m(4),r("code-toggle",{attrs:{languages:["craft3"]}},[r("template",{slot:"craft3"},[r("div",{staticClass:"language-craft3 extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('[  \n {\n    "@model": "barrelstrength\\\\sproutbase\\\\app\\\\import\\\\importers\\\\elements\\\\Category",\n    "attributes": {\n      "groupId": 1,\n      "slug": "category-slug-child",\n      "enabled": true,\n      "related": {\n        "newParentId": {\n          "@model": "barrelstrength\\\\sproutbase\\\\app\\\\import\\\\importers\\\\elements\\\\Category",\n          "params": {\n            "slug": "category-slug"\n          }\n        }\n      }\n    },\n    "content": { ... }\n  }\n]\n')])])])])],2),r("p",[e._v("In the following example, we import Categories with three levels of hierarchy. Be sure to import the parent categories before you target them via the children categories.")]),r("code-toggle",{attrs:{languages:["craft3"]}},[r("template",{slot:"craft3"},[r("div",{staticClass:"language-craft3 extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('[\n  {\n    "@model": "barrelstrength\\\\sproutbase\\\\app\\\\import\\\\importers\\\\elements\\\\Category",\n    "attributes": {\n      "groupId": 1,\n      "slug": "parent-one",\n      "enabled": true\n    },\n    "content": {\n      "title": "Parent 1"\n    }\n  },\n  {\n    "@model": "barrelstrength\\\\sproutbase\\\\app\\\\import\\\\importers\\\\elements\\\\Category",\n    "attributes": {\n      "groupId": 1,\n      "slug": "parent-two",\n      "enabled": true\n    },\n    "content": {\n      "title": "Parent 2"\n    }\n  },\n  {\n    "@model": "barrelstrength\\\\sproutbase\\\\app\\\\import\\\\importers\\\\elements\\\\Category",\n    "attributes": {\n      "groupId": 1,\n      "slug": "child-one-level-one",\n      "enabled": true,\n      "related": {\n        "newParentId": {\n          "@model": "barrelstrength\\\\sproutbase\\\\app\\\\import\\\\importers\\\\elements\\\\Category",\n          "params": {\n            "slug": "parent-one"\n          }\n        }\n      }\n    },\n    "content": {\n      "title": "Child 1 - Level 1"\n    }\n  },\n  {\n    "@model": "barrelstrength\\\\sproutbase\\\\app\\\\import\\\\importers\\\\elements\\\\Category",\n    "attributes": {\n      "groupId": 1,\n      "slug": "child-two-level-one",\n      "enabled": true,\n      "related": {\n        "newParentId": {\n          "@model": "barrelstrength\\\\sproutbase\\\\app\\\\import\\\\importers\\\\elements\\\\Category",\n          "params": {\n            "slug": "parent-two"\n          }\n        }\n      }\n    },\n    "content": {\n      "title": "Child 2 - Level 1"\n    }\n  },\n  {\n    "@model": "barrelstrength\\\\sproutbase\\\\app\\\\import\\\\importers\\\\elements\\\\Category",\n    "attributes": {\n      "groupId": 1,\n      "slug": "child-one-level-two",\n      "enabled": true,\n      "related": {\n        "newParentId": {\n          "@model": "barrelstrength\\\\sproutbase\\\\app\\\\import\\\\importers\\\\elements\\\\Category",\n          "params": {\n            "slug": "child-one-level-one"\n          }\n        }\n      }\n    },\n    "content": {\n      "title": "Child 1 - Level 2"\n    }\n  }\n]\n')])])])])],2)],1)},[function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"hierarchy"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#hierarchy","aria-hidden":"true"}},[this._v("#")]),this._v(" Hierarchy")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"parent-id"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#parent-id","aria-hidden":"true"}},[this._v("#")]),this._v(" Parent ID")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{pre:!0},[t("p",[this._v("To import categories with a hierarchy where you know the parentId, you can set the "),t("code",[this._v("newParentId")]),this._v(" attribute:")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"parent-params"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#parent-params","aria-hidden":"true"}},[this._v("#")]),this._v(" Parent Params")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{pre:!0},[r("p",[e._v("As you may not always know the "),r("code",[e._v("parentId")]),e._v(", you can let Sprout Import find the "),r("code",[e._v("parentId")]),e._v(" value for you by providing alternate values for "),r("code",[e._v("parentId")]),e._v(". Below, we look up the parent ID by matching it by "),r("code",[e._v("slug")]),e._v(".")])])}],!1,null,null,null);a.options.__file="categories.md";t.default=a.exports}}]);