import React from 'react'
import { saveAs } from 'file-saver'
import Resume from '../../assets/Resume.docx'

const CTA = () => {

    const onDownload1 = () => {
        saveAs(Resume, 'Resume.docx')
        console.log('Downloaded')
    };

    return (
        <div className='cta'>
            <button onClick={onDownload1} className='btn btn-primary'>Download Resume</button>
            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
    )
}

export default CTA