import React from 'react';
import {
    Card,
    CardContent,
   } from '@material-ui/core';
import InputComponent from './InputComponent';



const AddNewEmployee = () => {
    
    return (  
        <div >
            <Card>
                <CardContent>
                    <InputComponent/>
                </CardContent>
            </Card>
             
        </div>
    );
}
 
export default AddNewEmployee;