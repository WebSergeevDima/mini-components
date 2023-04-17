"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[531],{"./src/components/Select/Select.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{SelectBase:function(){return Select_stories_SelectBase},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return Select_stories}});var _templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,_templateObject6,slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react=__webpack_require__("./node_modules/react/index.js"),taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),SelectBase=styled_components_browser_esm.ZP.div(_templateObject||(_templateObject=(0,taggedTemplateLiteral.Z)(["\n  position: relative;\n  width: 200px;\n  border-bottom: 1px #000 solid;\n  padding: 10px 0 10px 0;\n  cursor: pointer;\n  background: #ebebeb;\n  &:hover {\n    background: rgb(213 213 213);\n  }\n\n\n  &.open .SelectList,\n  &.open .SelectWrapper {\n    display: block;\n  }\n\n  &.open .SelectArrow {\n    transform: rotate(180deg);\n  }\n"]))),SelectArrow=styled_components_browser_esm.ZP.div(_templateObject2||(_templateObject2=(0,taggedTemplateLiteral.Z)(["\n  transition: all 0.2s ease 0s;\n  width: 0px;\n  height: 0px;\n  border-left: 6px solid transparent;\n  border-right: 6px solid transparent;\n  border-top: 8px solid grey;\n"]))),SelectTitle=styled_components_browser_esm.ZP.div.attrs((function(_ref){_ref.value}))(_templateObject3||(_templateObject3=(0,taggedTemplateLiteral.Z)(["\n  display: flex;\n  align-items: center;\n  padding: 0px 10px;\n  justify-content: space-between;\n"]))),SelectWrapper=styled_components_browser_esm.ZP.div(_templateObject4||(_templateObject4=(0,taggedTemplateLiteral.Z)(["\n  display: none;\n  position: absolute;\n  background: none;\n  inset: 0px;\n  height: 100vh;\n  width: 100vw;\n  z-index: 99;\n"]))),SelectList=styled_components_browser_esm.ZP.div(_templateObject5||(_templateObject5=(0,taggedTemplateLiteral.Z)(["\n  display: none;\n  position: absolute;\n  top: 0;\n  left: 0;\n  background: #fff;\n  z-index: 100;\n  width: 100%;\n  margin: 42px 0 0 0;\n  box-sizing: border-box;\n  font-size: 16px;\n"]))),SelectListItem=styled_components_browser_esm.ZP.div.attrs((function(_ref2){_ref2.value}))(_templateObject6||(_templateObject6=(0,taggedTemplateLiteral.Z)(["\n  cursor: pointer;\n  padding: 10px;\n\n  &:hover {\n    background-color: rgba(25, 118, 210, 0.08);\n  }\n"]))),Select=function Select(props){var _useState=(0,react.useState)(!1),_useState2=(0,slicedToArray.Z)(_useState,2),open=_useState2[0],setOpen=_useState2[1],selectClickHandler=function selectClickHandler(){setOpen(!open)},selectItem=props.list.find((function(item){return item.value===props.value}));return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsxs)(SelectBase,{onClick:selectClickHandler,className:open?"open":"",children:[(0,jsx_runtime.jsxs)(SelectTitle,{value:null==selectItem?void 0:selectItem.value,children:[(0,jsx_runtime.jsx)("div",{children:null==selectItem?void 0:selectItem.title}),(0,jsx_runtime.jsx)(SelectArrow,{className:"SelectArrow"})]}),(0,jsx_runtime.jsx)(SelectList,{className:"SelectList",children:props.list.map((function(item,index){return(0,jsx_runtime.jsx)(SelectListItem,{value:item.value,onClick:function onClick(e){return function changeSelectHandler(e){var value=e.currentTarget.getAttribute("value");value&&props.changeSelect(value),selectClickHandler()}(e)},children:item.title},index)}))}),(0,jsx_runtime.jsx)(SelectWrapper,{onClick:function onClickWrapperHandler(){selectClickHandler()},className:"SelectWrapper"})]})})},Select_Select=Select;try{Select.displayName="Select",Select.__docgenInfo={description:"",displayName:"Select",props:{changeSelect:{defaultValue:null,description:"",name:"changeSelect",required:!0,type:{name:"(value: string) => void"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}},list:{defaultValue:null,description:"",name:"list",required:!0,type:{name:"ListType[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Select/Select.tsx#Select"]={docgenInfo:Select.__docgenInfo,name:"Select",path:"src/components/Select/Select.tsx#Select"})}catch(__react_docgen_typescript_loader_error){}var Select_stories={title:"Select",component:Select_Select},Select_stories_SelectBase=function SelectBase(){var _useState=(0,react.useState)("1"),_useState2=(0,slicedToArray.Z)(_useState,2),value=_useState2[0],setValue=_useState2[1];return(0,jsx_runtime.jsx)(Select_Select,{value:value,list:[{value:"1",title:"Name 1"},{value:"2",title:"Name 2"},{value:"3",title:"Name 3"}],changeSelect:function changeSelect(value){setValue(value)}})},__namedExportsOrder=["SelectBase"];Select_stories_SelectBase.parameters={...Select_stories_SelectBase.parameters,docs:{...Select_stories_SelectBase.parameters?.docs,source:{originalSource:"function SelectBase() {\n  var selectList = [{\n    value: '1',\n    title: 'Name 1'\n  }, {\n    value: '2',\n    title: 'Name 2'\n  }, {\n    value: '3',\n    title: 'Name 3'\n  }];\n  var _useState = useState('1'),\n    _useState2 = _slicedToArray(_useState, 2),\n    value = _useState2[0],\n    setValue = _useState2[1];\n  var changeSelect = function changeSelect(value) {\n    setValue(value);\n  };\n  return /*#__PURE__*/_jsx(Select, {\n    value: value,\n    list: selectList,\n    changeSelect: changeSelect\n  });\n}",...Select_stories_SelectBase.parameters?.docs?.source}}}}}]);