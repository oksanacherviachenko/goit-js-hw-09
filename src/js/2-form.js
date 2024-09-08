const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';
let formData = { email: '', message: '' };

const savedData = localStorage.getItem(STORAGE_KEY);
if (savedData) {
  formData = JSON.parse(savedData);
  form.email.value = formData.email || '';
  form.message.value = formData.message || '';
}

form.addEventListener('input', event => {
  formData[event.target.name] = event.target.value.trim();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

form.addEventListener('submit', event => {
  event.preventDefault();

  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);
  localStorage.removeItem(STORAGE_KEY);
  form.reset();
  formData = { email: '', message: '' };
});

const styles = `
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
`;

const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);