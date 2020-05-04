(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(6),i=a.n(s),o=a(7),l=a(1),c=a(2),m=a(4),u=a(3),d=a(8),p=(a(14),function(e){var t=e.name;return r.a.createElement("h3",{className:"names"},r.a.createElement("p",{className:"article"},"Name: "),t)}),h=function(e){var t=e.title,a=e.user,n=e.userId,s=e.id;return r.a.createElement("ul",{className:"list"},r.a.createElement("li",{className:"list__userInfo"},r.a.createElement("h4",null,"Title: \xa0",t),r.a.createElement("p",null,"TODOs id:\xa0",s),r.a.createElement("h5",null,"User Id: \xa0",n),r.a.createElement(p,a)))},g=function(e){var t=e.todos;return r.a.createElement("div",{className:"list"},t.map((function(e){return r.a.createElement(h,Object.assign({},e,{key:e.id}))})))},b=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={tempTitle:"",tempUser:"",inputError:!1,selectError:!1,longTitle:!1,activeButton:!1},e.handleSubmit=function(t){t.preventDefault();var a=new RegExp(/\w/);0===e.state.tempTitle.split("").length||!1===a.test(e.state.tempTitle)?e.setState({inputError:!0}):0===e.state.tempUser.split("").length||"Choose a user"===e.state.tempUser?e.setState({selectError:!0}):(e.setState({tempUser:"",tempTitle:""}),e.props.saveChange({userId:+e.state.tempUser,title:e.state.tempTitle,user:e.props.users.find((function(t){return t.id===+e.state.tempUser})),id:e.props.length+1}))},e.handleChange=function(t){e.setState({tempTitle:t.target.value,inputError:!1}),e.state.tempTitle.split("").length>10?e.setState({longTitle:!0,activeButton:!0}):e.setState({longTitle:!1,activeButton:!1})},e.selectChange=function(t){e.setState({tempUser:t.target.value,selectError:!1})},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this.state,t=e.tempTitle,a=e.tempUser,n=this.props.users;return console.log(this.state.tempUser),r.a.createElement("form",{className:"form",onSubmit:this.handleSubmit},r.a.createElement("label",{htmlFor:"title"},"Please, write TODO:\xa0"),this.state.inputError&&r.a.createElement("span",{className:"inputError"},"Please enter the title:"),this.state.longTitle&&r.a.createElement("span",{className:"inputError"},"Very long title!"),r.a.createElement("input",{className:this.state.inputError?"error":"",value:t,type:"text",id:"title",onChange:this.handleChange}),r.a.createElement("label",{htmlFor:"select",className:"inputError"},this.state.selectError&&r.a.createElement("span",null,"Please choose a user!")),r.a.createElement("select",{id:"select",value:a,onChange:this.selectChange},r.a.createElement("option",null,"Choose a user"),n.map((function(e){return r.a.createElement("option",{key:e.id,value:e.id},e.name)}))),r.a.createElement("button",{disabled:this.state.activeButton,type:"submit"},"ADD"))}}]),a}(r.a.Component),y=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz",address:{street:"Kulas Light",suite:"Apt. 556",city:"Gwenborough",zipcode:"92998-3874",geo:{lat:"-37.3159",lng:"81.1496"}},phone:"1-770-736-8031 x56442",website:"hildegard.org",company:{name:"Romaguera-Crona",catchPhrase:"Multi-layered client-server neural-net",bs:"harness real-time e-markets"}},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv",address:{street:"Victor Plains",suite:"Suite 879",city:"Wisokyburgh",zipcode:"90566-7771",geo:{lat:"-43.9509",lng:"-34.4618"}},phone:"010-692-6593 x09125",website:"anastasia.net",company:{name:"Deckow-Crist",catchPhrase:"Proactive didactic contingency",bs:"synergize scalable supply-chains"}},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net",address:{street:"Douglas Extension",suite:"Suite 847",city:"McKenziehaven",zipcode:"59590-4157",geo:{lat:"-68.6102",lng:"-47.0653"}},phone:"1-463-123-4447",website:"ramiro.info",company:{name:"Romaguera-Jacobson",catchPhrase:"Face to face bifurcated interface",bs:"e-enable strategic applications"}},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org",address:{street:"Hoeger Mall",suite:"Apt. 692",city:"South Elvis",zipcode:"53919-4257",geo:{lat:"29.4572",lng:"-164.2990"}},phone:"493-170-9623 x156",website:"kale.biz",company:{name:"Robel-Corkery",catchPhrase:"Multi-tiered zero tolerance productivity",bs:"transition cutting-edge web services"}},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca",address:{street:"Skiles Walks",suite:"Suite 351",city:"Roscoeview",zipcode:"33263",geo:{lat:"-31.8129",lng:"62.5342"}},phone:"(254)954-1289",website:"demarco.info",company:{name:"Keebler LLC",catchPhrase:"User-centric fault-tolerant solution",bs:"revolutionize end-to-end systems"}},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info",address:{street:"Norberto Crossing",suite:"Apt. 950",city:"South Christy",zipcode:"23505-1337",geo:{lat:"-71.4197",lng:"71.7478"}},phone:"1-477-935-8478 x6430",website:"ola.org",company:{name:"Considine-Lockman",catchPhrase:"Synchronised bottom-line interface",bs:"e-enable innovative applications"}},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz",address:{street:"Rex Trail",suite:"Suite 280",city:"Howemouth",zipcode:"58804-1099",geo:{lat:"24.8918",lng:"21.8984"}},phone:"210.067.6132",website:"elvis.io",company:{name:"Johns Group",catchPhrase:"Configurable multimedia task-force",bs:"generate enterprise e-tailers"}},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me",address:{street:"Ellsworth Summit",suite:"Suite 729",city:"Aliyaview",zipcode:"45169",geo:{lat:"-14.3990",lng:"-120.7677"}},phone:"586.493.6943 x140",website:"jacynthe.com",company:{name:"Abernathy Group",catchPhrase:"Implemented secondary concept",bs:"e-enable extensible e-tailers"}},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io",address:{street:"Dayna Park",suite:"Suite 449",city:"Bartholomebury",zipcode:"76495-3109",geo:{lat:"24.6463",lng:"-168.8889"}},phone:"(775)976-6794 x41206",website:"conrad.com",company:{name:"Yost and Sons",catchPhrase:"Switchable contextually-based project",bs:"aggregate real-time technologies"}},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz",address:{street:"Kattie Turnpike",suite:"Suite 198",city:"Lebsackbury",zipcode:"31428-2261",geo:{lat:"-38.2386",lng:"57.2232"}},phone:"024-648-3804",website:"ambrose.net",company:{name:"Hoeger LLC",catchPhrase:"Centralized empowering task-force",bs:"target end-to-end models"}}],f=[{userId:1,id:1,title:"delectus aut autem",completed:!1},{userId:1,id:2,title:"quis ut nam facilis et officia qui",completed:!1}].map((function(e){return Object(d.a)({},e,{user:y.find((function(t){return t.id===e.userId}))})})),E=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={todos:f},e.addTodo=function(t){e.setState((function(e){return{todos:[].concat(Object(o.a)(e.todos),[t])}}))},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this.state.todos;return r.a.createElement("div",{className:"app"},r.a.createElement(g,{todos:e}),r.a.createElement(b,{saveChange:this.addTodo,users:y,length:e.length}))}}]),a}(r.a.Component);i.a.render(r.a.createElement(E,null),document.getElementById("root"))},9:function(e,t,a){e.exports=a(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.6fb8787f.chunk.js.map