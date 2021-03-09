import React ,{useState}from 'react'
import { Form, Formik} from 'formik'
import {FirstStep} from './FirstStep'
import {SecondStep} from './SecondStep'
import {StepButton  } from "./StepButton"
import { Success } from "./Success"
import { View } from 'react-native'

const renderStep = (step, values, errors, touched) => {
  switch (step) {
    case 1:
      return <FirstStep errors={errors} touched={touched} />
      break;
    case 2:
      return <SecondStep errors={errors} touched={touched} />
      break;
    case 3:
      return <Success values={values} />
      break;
    default:
      return <FirstStep errors={errors} touched={touched} />
      break;
  }
};

  const Multisteps = ()=>{
    

    const [step,setStep] = useState(1)
    const formData = {
        firstName: "",
        middleName: "",
        lastName: "",
        email: "",
        city: "",
        state: "",
        country: ""
      };
      const handleSubmit = ()=> setStep(step+1)

      const validate = values=>{
          const errors = {};
          if(!values.firstName){
              errors.firstName = "Required"
          }
          if(!values.lastName){
            errors.lastName = "Required"
          }
          return errors
      };

      return(
          <View>
            <Formik 
            enableReinitialize
            initialValues = {{...formData}}
            onSubmit = {handleSubmit}
            validate = {validate}
            >
            {({ values, errors, touched }) => (
            <Form >
                {renderStep(step, values, errors, touched)}
                <StepButton step={step} />
            </Form>
        )}
            </Formik>
          </View>
      )
  }
  export default Multisteps