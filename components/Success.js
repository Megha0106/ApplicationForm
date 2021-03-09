
import React from 'react'
import { Field, Form, Formik } from 'formik'
import { View ,Text} from 'react-native'
export const Success = (formikProps)=>{
    const { firstName, lastName, email, middleName, city, state } = formikProps.values;
    return(
       <View>
           <Text>
               {firstName}
           </Text>
       </View>
    )
}