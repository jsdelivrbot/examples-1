/*!
 * 
 * [Dojo](https://dojo.io/)
 * Copyright [JS Foundation](https://js.foundation/) & contributors
 * [New BSD license](https://github.com/dojo/meta/blob/master/LICENSE)
 * All rights reserved
 * 
 */
dojoWebpackJsonprealworld_app(["src/containers/EditorContainer"],{"./src/containers/EditorContainer.ts":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=s("./src/widgets/Editor.ts"),r=s("./src/processes/editorProcesses.ts"),n=s("./node_modules/@dojo/framework/stores/StoreInjector.mjs");e.default=Object(n.a)(o.a,"state",{paths:[["editor"],["errors"]],getProperties:function(t,e){const{get:s,path:o}=t;return{title:s(o("editor","title")),description:s(o("editor","description")),body:s(o("editor","body")),tag:s(o("editor","tag")),tags:s(o("editor","tagList")),errors:s(o("errors")),onContentInput:Object(r.b)(t),onDescriptionInput:Object(r.d)(t),onTagCreate:Object(r.a)(t),onTagDelete:Object(r.g)(t),onTagInput:Object(r.h)(t),onTitleInput:Object(r.i)(t),onPublishPost:Object(r.f)(t),slug:e.slug}}})},"./src/widgets/Editor.ts":function(t,e,s){"use strict";var o=s("./node_modules/@dojo/framework/widget-core/WidgetBase.mjs"),r=s("./node_modules/@dojo/framework/widget-core/d.mjs"),n=s("./src/widgets/ErrorList.ts");e.a=class extends o.a{_onTitleInput({target:{value:t}}){this.properties.onTitleInput({title:t})}_onDescriptionInput({target:{value:t}}){this.properties.onDescriptionInput({description:t})}_onContentInput({target:{value:t}}){this.properties.onContentInput({body:t})}_onTagInput({target:{value:t}}){this.properties.onTagInput({tag:t})}_onTagCreate(t){13===t.keyCode&&(t.preventDefault(),this.properties.onTagCreate({tag:t.target.value}))}_onPublishPost(){this.properties.onPublishPost({})}render(){const{onTagDelete:t,title:e,description:s,body:o,tag:i,errors:a,inProgress:c=!1,tags:l=[]}=this.properties;return Object(r.f)("div",{classes:"editor-page"},[Object(r.f)("div",{classes:["container","page"]},[Object(r.f)("div",{classes:"row"},[Object(r.f)("div",{classes:["col-md-10","offset-md-1","col-xs-12"]},[a?Object(r.g)(n.a,{errors:a}):null,Object(r.f)("form",[Object(r.f)("fieldset",[Object(r.f)("fieldset",{classes:"form-group"},[Object(r.f)("input",{classes:["form-control","form-control-lg"],type:"text",placeholder:"Article Title",value:e,oninput:this._onTitleInput})]),Object(r.f)("fieldset",{classes:"form-group"},[Object(r.f)("input",{classes:"form-control",type:"text",placeholder:"What's this article about?",value:s,oninput:this._onDescriptionInput})]),Object(r.f)("fieldset",{classes:"form-group"},[Object(r.f)("textarea",{classes:"form-control",type:"text",rows:8,placeholder:"Write your article (in markdown)",value:o,oninput:this._onContentInput})]),Object(r.f)("fieldset",{classes:"form-group"},[Object(r.f)("input",{classes:"form-control",type:"text",placeholder:"Enter tags",value:i,oninput:this._onTagInput,onkeyup:this._onTagCreate}),Object(r.f)("div",{classes:"tag-list"},l.map(e=>Object(r.f)("span",{classes:["tag-default","tag-pill"]},[Object(r.f)("i",{classes:"ion-close-round",onclick:()=>{t({tag:e})}}),e])))]),Object(r.f)("button",{classes:["btn","btn-lg","pull-xs-right","btn-primary"],type:"button",disabled:c,onclick:this._onPublishPost},["Publish Article"])])])])])])])}}},"./src/widgets/ErrorList.ts":function(t,e,s){"use strict";var o=s("./node_modules/@dojo/framework/widget-core/WidgetBase.mjs"),r=s("./node_modules/@dojo/framework/widget-core/d.mjs");e.a=class extends o.a{render(){const{errors:t}=this.properties,e=Object.keys(t);let s=[];for(let o=0;o<e.length;o++)s=[...s,...t[e[o]].map(t=>`${e[o]} ${t}`)];return Object(r.f)("ul",{classes:"error-messages"},s.map(t=>Object(r.f)("li",[t])))}}}});
//# sourceMappingURL=EditorContainer.fb52aa2bc8801e320320.bundle.js.map