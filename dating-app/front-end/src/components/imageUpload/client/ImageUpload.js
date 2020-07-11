import React, { Component } from 'react'
import Spinner from './Spinner'
import Images from './Images'
import Buttons from './Buttons'
//import { API_URL } from './config'

class ImageUpload extends Component {

    state = {
        uploading: false,
        images: []
    }

    onChange = e => {
        const fileToUpload = e.target.files[0];
        //const files = Array.from(e.target.files);
        this.setState({ uploading: true });
    
        const formData = new FormData();
    
        /*files.forEach((file, i) => {
          formData.append(i, file)
        })*/
        formData.append('1', fileToUpload, fileToUpload.name);
        fetch('http://localhost:3000/image-upload', {
            method: 'POST',
            body: formData
          })
          .then(res => res.json())
          .then(images => {
            this.setState({ 
              uploading: false,
              images
            })
        })
    }

    removeImage = (id) => {
        this.setState({
          images: this.state.images.filter(image => image.public_id !== id)
        })
    }

    render() {
        const { uploading, images } = this.state

        const content = () => {
            switch(true) {
                case uploading:
                    return <Spinner />;
                case images.length > 0:
                    return <Images images={images} removeImage={this.removeImage} />;
                default:
                    return <Buttons onChange={this.onChange} />;
            }
        }
        
        return (
            <div>
                <div className='buttons'>
                    {content()}
                </div>
            </div>
        )
    }
}
/*
import React from 'react'

class ImageUpload extends React.Component {

    state = {
        selectedFile: null
    }

    fileSelectedHandler = (event) => {
        const fileToUpload = event.target.files[0];
        const formData = new FormData();
        formData.append('1', fileToUpload, fileToUpload.name);
        fetch('http://localhost:3000/image-upload', {
            method: 'post',
            body: formData
        })
    }

    render() {
        return (
            <div>
                <input 
                    type="file"
                    onChange={this.fileSelectedHandler}
                />
            </div>
        )
    }
}*/

export default ImageUpload;
