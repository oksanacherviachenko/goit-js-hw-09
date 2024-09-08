import"./assets/styles-CfavSTuS.js";const t=document.querySelector(".feedback-form"),a="feedback-form-state";let e={email:"",message:""};const s=localStorage.getItem(a);s&&(e=JSON.parse(s),t.email.value=e.email||"",t.message.value=e.message||"");t.addEventListener("input",o=>{e[o.target.name]=o.target.value.trim(),localStorage.setItem(a,JSON.stringify(e))});t.addEventListener("submit",o=>{if(o.preventDefault(),!e.email||!e.message){alert("Fill please all fields");return}console.log(e),localStorage.removeItem(a),t.reset(),e={email:"",message:""}});const d=`
  .feedback-form {
    max-width: 408px;
    margin: 24px auto;
    padding: 24px;
    background-color: #fff;
    border-radius: 8px;
    
  }

  .feedback-form label {
    display: block;
    margin-bottom: 8px;
font-size: 16px;
    font-weight: bold;
  }

  .feedback-form input, .feedback-form textarea {
    width: 360px;
    padding: 8px;
    margin-bottom: 16px;
    border-radius: 5px;
    border: 1px solid #ccc;
    font-size: 14px;
  }

  .feedback-form button {
    width: 95px;
    padding: 10px;
    background-color: #4e75ff;
    color: white;
    font-size: 16px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .feedback-form button:hover {
    background-color: #6c8cff;
  }
`,r=document.createElement("style");r.type="text/css";r.innerText=d;document.head.appendChild(r);
//# sourceMappingURL=2-form.js.map
