import"./assets/styles-BBNPYZY5.js";const a=document.querySelector(".feedback-form"),l="feedback-form-state";let e={email:"",message:""};const s=localStorage.getItem(l);s&&(e=JSON.parse(s),a.email.value=e.email||"",a.message.value=e.message||"");a.addEventListener("input",t=>{e[t.target.name]=t.target.value.trim(),localStorage.setItem(l,JSON.stringify(e))});a.addEventListener("submit",t=>{if(t.preventDefault(),!e.email||!e.message){alert("Fill please all fields");return}console.log(e),localStorage.removeItem(l),a.reset(),e={email:"",message:""}});
//# sourceMappingURL=2-form.js.map
