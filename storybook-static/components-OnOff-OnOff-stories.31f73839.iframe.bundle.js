/*! For license information please see components-OnOff-OnOff-stories.31f73839.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[598],{"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_x,_r,_arr=[],_n=!0,_d=!1;try{if(_x=(_i=_i.call(arr)).next,0===i){if(Object(_i)!==_i)return;_n=!1}else for(;!(_n=(_s=_x.call(_i)).done)&&(_arr.push(_s.value),_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{if(!_n&&null!=_i.return&&(_r=_i.return(),Object(_r)!==_r))return}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(o){if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);return"Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n?Array.from(o):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(o,minLen):void 0}}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}__webpack_require__.d(__webpack_exports__,{Z:function(){return _slicedToArray}})},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":function(__unused_webpack_module,exports,__webpack_require__){var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":function(module,__unused_webpack_exports,__webpack_require__){module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./src/components/OnOff/OnOff.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ChangeOnOff:function(){return ChangeOnOff},FalseOnOff:function(){return FalseOnOff},TrueOnOff:function(){return TrueOnOff},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return OnOff_stories}});var slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react=__webpack_require__("./node_modules/react/index.js"),OnOff_module_onOff="OnOff_onOff__VPa1Z",OnOff_module_green="OnOff_green__aKMeg",OnOff_module_active="OnOff_active__sOLrF",OnOff_module_red="OnOff_red__sHlGo",OnOff_module_ball="OnOff_ball__IOV3S",jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),OnOff=function OnOff(props){return(0,jsx_runtime.jsxs)("div",{className:OnOff_module_onOff,children:[(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)("div",{className:"".concat(OnOff_module_green," ").concat(props.on&&OnOff_module_active),onClick:function onClick(){props.changeOnOff(!0)}})}),(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)("div",{className:"".concat(OnOff_module_red," ").concat(!props.on&&OnOff_module_active),onClick:function onClick(){props.changeOnOff(!1)}})}),(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)("div",{className:"".concat(OnOff_module_ball," ").concat(props.on&&OnOff_module_active)})})]})},OnOff_OnOff=OnOff;try{OnOff.displayName="OnOff",OnOff.__docgenInfo={description:"",displayName:"OnOff",props:{on:{defaultValue:null,description:"",name:"on",required:!0,type:{name:"boolean"}},changeOnOff:{defaultValue:null,description:"",name:"changeOnOff",required:!0,type:{name:"(isOn: boolean) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/OnOff/OnOff.tsx#OnOff"]={docgenInfo:OnOff.__docgenInfo,name:"OnOff",path:"src/components/OnOff/OnOff.tsx#OnOff"})}catch(__react_docgen_typescript_loader_error){}var OnOff_stories={title:"OnOff",component:OnOff_OnOff},TrueOnOff=function TrueOnOff(){return(0,jsx_runtime.jsx)(OnOff_OnOff,{on:!0,changeOnOff:function changeOnOff(){}})},FalseOnOff=function FalseOnOff(){return(0,jsx_runtime.jsx)(OnOff_OnOff,{on:!1,changeOnOff:function changeOnOff(){}})},ChangeOnOff=function ChangeOnOff(){var _useState=(0,react.useState)(!0),_useState2=(0,slicedToArray.Z)(_useState,2),on=_useState2[0],setOn=_useState2[1];return(0,jsx_runtime.jsx)(OnOff_OnOff,{on:on,changeOnOff:setOn})},__namedExportsOrder=["TrueOnOff","FalseOnOff","ChangeOnOff"];TrueOnOff.parameters={...TrueOnOff.parameters,docs:{...TrueOnOff.parameters?.docs,source:{originalSource:"function TrueOnOff() {\n  return /*#__PURE__*/_jsx(OnOff, {\n    on: true,\n    changeOnOff: function changeOnOff() {}\n  });\n}",...TrueOnOff.parameters?.docs?.source}}},FalseOnOff.parameters={...FalseOnOff.parameters,docs:{...FalseOnOff.parameters?.docs,source:{originalSource:"function FalseOnOff() {\n  return /*#__PURE__*/_jsx(OnOff, {\n    on: false,\n    changeOnOff: function changeOnOff() {}\n  });\n}",...FalseOnOff.parameters?.docs?.source}}},ChangeOnOff.parameters={...ChangeOnOff.parameters,docs:{...ChangeOnOff.parameters?.docs,source:{originalSource:"function ChangeOnOff() {\n  var _useState = useState(true),\n    _useState2 = _slicedToArray(_useState, 2),\n    on = _useState2[0],\n    setOn = _useState2[1];\n  return /*#__PURE__*/_jsx(OnOff, {\n    on: on,\n    changeOnOff: setOn\n  });\n}",...ChangeOnOff.parameters?.docs?.source}}}}}]);