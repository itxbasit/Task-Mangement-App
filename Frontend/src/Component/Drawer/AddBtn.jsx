import { Button } from '@mui/material'
import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const AddButton = () => {
    return (
        <div className='flex'>
            <div className='flex items-center mt-20'>
                <div>
                    <ArrowBackIcon />
                    </div>
                <div style={{ marginLeft: "2rem" }}>
                    <h4 style={{ color: 'black', fontSize: '1.5rem', }}>Add Tasks</h4>
                    </div>
            </div>
        </div>
    )
}

export default AddButton