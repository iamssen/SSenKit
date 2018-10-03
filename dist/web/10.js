(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{573:function(e,t){e.exports='<p>입력 제한 기능을 가지는 Text Input</p>\n<h2 id="props">Props</h2>\n<ul>\n<li><code>value: string</code></li>\n<li><code>onChange: (value: string) =&gt; void</code></li>\n<li><code>onSubmit: (value: string) =&gt; void</code> Enter Key에 의해서 Submit이 일어날때 발생한다.</li>\n<li><code>availableCharacterPattern: RegExp</code> 입력 가능한 Character 범위를 정규식으로 입력한다. <code>[a-b]{2,3}</code>과 같이 Range는 지정하지 않는다. 허용 가능한 Character의 범위이지, 허용 가능한 문장을 체크하지 않는다.</li>\n<li><code>children?: JSX.Element = &lt;input type=&quot;text&quot;/&gt;</code> 필요한 경우 <code>&lt;input/&gt;</code>을 직접 입력할 수 있다.<ul>\n<li>가능한 <code>&lt;input/&gt;</code>에 대한 스타일링 용도로만 사용하는게 좋다. <code>defaultValue</code>, <code>onChange</code>, <code>onKeyPress</code>, <code>onKeyDown</code>와 같은 기능은 내부적으로 덮어쓰기 때문에 무시된다.</li>\n</ul>\n</li>\n</ul>\n'},574:function(e,t){e.exports="import * as React from 'react';\nimport RestrictedTextInput from 'ssenkit.restricted-text-input';\n\nexport interface Props {\n\n}\n\ninterface InternalProps {\n\n}\n\ninterface State {\n  text: string;\n}\n\nclass Component extends React.PureComponent<Props & InternalProps, State> {\n  static displayName: string = 'Sample.sample';\n  \n  state: State = {\n    text: '',\n  };\n  \n  render() {\n    return (\n      <div>\n        <RestrictedTextInput availableCharacterPattern={/[abcd0-9]/}\n                             value={this.state.text}\n                             onChange={this.onChange}\n                             onSubmit={this.onSubmit}/>\n        <hr/>\n        {this.state.text}\n      </div>\n    );\n  }\n  \n  onChange = (text: string) => {\n    this.setState({\n      text,\n    });\n  };\n  \n  onSubmit = (text: string) => {\n    this.setState({\n      text,\n    });\n  };\n}\n\nexport default Component as React.ComponentType<Props>;"},604:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(37),o=n(4),i=n(508),s=o.e(Object(i.a)(35,41),[8,46,9,27,13]),c=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.inputRef=a.createRef(),t.onChange=function(e){t.props.onChange(e.target.value)},t.onKeyPress=function(e){65===e.keyCode&&(e.ctrlKey||e.metaKey)||-1!==s.indexOf(e.keyCode)||t.props.availableCharacterPattern.test(String.fromCharCode(e.charCode))||(e.preventDefault(),e.stopPropagation())},t.onKeyDown=function(e){13===e.keyCode&&t.props.onSubmit(e.currentTarget.value)},t}return o.c(t,e),t.prototype.render=function(){return a.cloneElement(this.props.children,{ref:this.inputRef,defaultValue:this.props.value,onChange:this.onChange,onKeyPress:this.onKeyPress,onKeyDown:this.onKeyDown})},t.prototype.componentDidUpdate=function(){this.inputRef.current&&this.inputRef.current.value!==this.props.value&&(this.inputRef.current.value=this.props.value)},Object.defineProperty(t.prototype,"text",{get:function(){return this.inputRef.current?this.inputRef.current.value:""},set:function(e){this.inputRef.current&&this.inputRef.current.value!==e&&(this.inputRef.current.value=e,this.props.onChange(e))},enumerable:!0,configurable:!0}),t.displayName="Component9929265",t.defaultProps={children:a.createElement("input",{type:"text"})},t}(a.PureComponent),l=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={text:""},t.onChange=function(e){t.setState({text:e})},t.onSubmit=function(e){t.setState({text:e})},t}return o.c(t,e),t.prototype.render=function(){return a.createElement("div",null,a.createElement(c,{availableCharacterPattern:/[abcd0-9]/,value:this.state.text,onChange:this.onChange,onSubmit:this.onSubmit}),a.createElement("hr",null),this.state.text)},t.displayName="Sample.sample",t}(a.PureComponent);t.default=function(){return a.createElement("div",{className:"app-body"},a.createElement("div",{className:"page-header"},a.createElement("div",{className:"row"},a.createElement("h1",null,a.createElement("code",null,"import RestrictedTextInput from 'ssenkit.restricted-text-input'")))),a.createElement("div",{className:"page-body ph-30 mv-30"},a.createElement("div",{className:"box"},a.createElement("div",{className:"box-body"},a.createElement(r.a,{html:n(573)}))),a.createElement("div",{className:"box"},a.createElement("div",{className:"box-body"},a.createElement(l,null),a.createElement(r.d,{source:n(574)})))))}}}]);