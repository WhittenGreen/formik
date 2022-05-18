
import './App.css';
import {useFormik} from 'formik';

function App() {
  const formik = useFormik({
    initialValues: {
      name: '',
      emailField: '',
      pswField: ''
    },
    onSubmit: values =>{
      console.log('form:', values);
    },
    validate: values => {
       let errors = {};
       if(!values.name) errors.name = 'Field Required';
       if(!values.emailField) errors.emailField = 'Field Required';
       if(!values.pswField) errors.pswField = 'Required';
       if(values.emailField && values.pswField === true){
        <alert>Login Successful</alert>;
       };
      return errors;
    },
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit} >
        <div>Name</div>
        <input id = 'name' type = 'text' onChange={formik.handleChange} value={formik.values.name} />
        {formik.errors.name ? <div style={{color: 'red'}}>{formik.errors.name}</div>: null}
        <div>Email</div>
        <input id='emailField' type='text' onChange={formik.handleChange} value={formik.values.emailField}/>
        {formik.errors.emailField ? <div style={{color: 'red'}}>{formik.errors.emailField}</div>: null}
        <div>Password</div>
        <input id='pswField' type='text' onChange={formik.handleChange} value={formik.values.pswField} />
        {formik.errors.pswField ? <div style={{color: 'red'}}>{formik.errors.pswField}</div>: null}
        <button id='submitBtn' type='submit'>Submit</button>

      </form>
    </div>
  );
}

export default App;
