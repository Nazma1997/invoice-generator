import '../style.css'
import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faXmark } from '@fortawesome/free-solid-svg-icons'

const ImageUpload = () => {
    const [image, setImage] = useState(null);
    const [imageUrl, setImageUrl] = useState(null);

    const handleImageChange = (e) => {
        let reader = new FileReader();
        let file = e.target.files[0];
        reader.onloadend = () => {
            setImage(file);
            setImageUrl(reader.result);
        }
        reader.readAsDataURL(file);
    }

    const removeImage = () => {
        setImage(null);
        setImageUrl(null);
    }

    const ref = useRef()
    const handleClick = (e) => {
      ref.current.click()
      
    }
  
    return (
        <div>
            { !imageUrl && 
               <div className='imageUpload' >
                <button  className='imageButton' onClick={handleClick} ><FontAwesomeIcon icon={faPlus} /> Add Your Logo<input type="file" ref={ref}  className='inputImage' onChange={handleImageChange}  /></button>
                </div>
            }
            { imageUrl && 
            <div className='imageDiv'>
                <img src={imageUrl} alt="uploaded-img" width='200px' height='150px' className='rounded'/>
                <button className='imageButton2 ' onClick={removeImage}><FontAwesomeIcon icon={faXmark} className='icon' /></button>
            </div>
            }
        </div>
    );
}

export default ImageUpload;
