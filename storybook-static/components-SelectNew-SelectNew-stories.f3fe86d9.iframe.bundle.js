/*! For license information please see components-SelectNew-SelectNew-stories.f3fe86d9.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[419],{"./node_modules/react/cjs/react-jsx-runtime.production.min.js":function(__unused_webpack_module,exports,__webpack_require__){var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":function(module,__unused_webpack_exports,__webpack_require__){module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./src/components/SelectNew/SelectNew.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{SelectNewBase:function(){return SelectNewBase},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return SelectNew_stories}});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),SelectNew_SelectNew=function SelectNewStories(props){return(0,jsx_runtime.jsx)("div",{children:props.items.map((function(item){return item.title}))})};try{SelectNew.displayName="SelectNew",SelectNew.__docgenInfo={description:"",displayName:"SelectNew",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}},items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"ItemsType[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/SelectNew/SelectNew.tsx#SelectNew"]={docgenInfo:SelectNew.__docgenInfo,name:"SelectNew",path:"src/components/SelectNew/SelectNew.tsx#SelectNew"})}catch(__react_docgen_typescript_loader_error){}var SelectNew_stories={title:"SelectNew",component:SelectNew_SelectNew},SelectNewBase=function SelectNewBase(){return(0,jsx_runtime.jsx)(SelectNew_SelectNew,{value:"21312",items:[{title:"213",value:"1"},{title:"213",value:"2"},{title:"213",value:"3"},{title:"213",value:"4"}]})},__namedExportsOrder=["SelectNewBase"];SelectNewBase.parameters={...SelectNewBase.parameters,docs:{...SelectNewBase.parameters?.docs,source:{originalSource:"function SelectNewBase() {\n  return /*#__PURE__*/_jsx(SelectNew, {\n    value: '21312',\n    items: [{\n      title: '213',\n      value: '1'\n    }, {\n      title: '213',\n      value: '2'\n    }, {\n      title: '213',\n      value: '3'\n    }, {\n      title: '213',\n      value: '4'\n    }]\n  });\n}",...SelectNewBase.parameters?.docs?.source}}}}}]);