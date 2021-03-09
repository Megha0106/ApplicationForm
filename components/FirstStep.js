import React from 'react'
import {Field, Form,FormikProps} from 'formik'
import {TextField} from '@material-ui/core'
import { TextInput, View } from 'react-native';

export const FirstStep = FormikProps =>{
    const {errors,touched} = FormikProps;
    return(
        <>
           < Field 
           name = "firstName"
           label = "First Name*"
           as = {TextField}
           error={touched.firstName && errors.firstName}
           helperText={touched.firstName && errors.firstName}
           /> 
           
           
            <Field 
           name = "middleName"
           label = "Middle Name *"
           as = {TextField}
           />
            <Field 
           name = "lastName"
           label = "Last Name *"
           as = {TextField}
           error={touched.firstName && errors.firstName}
           helperText={touched.firstName && errors.firstName}
           />
        </>
    )
}