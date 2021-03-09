import React from "react"
import {Button} from '@material-ui/core'

export const StepButton = props =>{
    const {step}  =props
    switch(step)
    {
        case 1:
            return(
                <>
                    <Button
                    variant = "contained"
                    type = "submit"
                    color = "primary"
                   
                    >
                        Continue
                    </Button>
                </>
            );
            break;
        case 2:
            return(
                <>
                 <Button
                    variant = "contained"
                    type = "submit"
                    color = "primary"
                   
                    >
                        Submit
                    </Button> 
                </>
            );
            break;
        default:
            return(
                <>
                </>
            )
    }
}