import { useState } from 'react';
import React, { Component } from 'react';
import axios, { Axios } from "axios";
import './UploadNFT.css';
const http = require('http');



export class UploadNFT extends Component {







const [file, setFile] = useState();
const send = event =>{

const data = new FormData();
data.append("file",file);
Axios.post("http://localhost:3000/upload",data).then(res=>console.log(res)).catch(err=>console.log(err));
};





    // constructor()
    // {   
    //     super();
    //     this.state={value:''};
    // }
    // charallow(e)
    // {
    //     this.setState({inputtxt:e.target.value.replace(/[^a-zA-Z]/ig,'')})
    // }

constructor(props){
    super(props);
    this.state ={
        NFTname: '',
        Title: '',
        Amount: '',
        AssetID: '',
        Tags: '',
        Creatorname: '',
    };
}

handleInputChange = e =>{
    this.setState({
        [e.target.name]:e.target.value,
    });
};

handleSubmit = e =>{
    e.preventDefault();
    const { NFTname, Title, Amount, AssetID, Tags, Creatorname} = this.state;
    const NFT = {
        NFTname,
        Title,
        Amount,
        AssetID,
        Tags,
        Creatorname,
    };
axios
.post('http://localhost:5000/createnft',NFT)
.then(()=> console.log('NFT created'),


)
.catch(err =>{
    console.err(err);
});
};


    state = {
        profileImg: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'

    }
    imageHandler = (e) => {
        const reader = new FileReader();
        reader.onload = () => {
            if (reader.readyState === 2) {
                this.setState({ profileImg: reader.result })
            }
        }
        reader.readAsDataURL(e.target.files[0])




const file = e.target.files[0];
setFile(file);

    };








    render() {
        const { profileImg } = this.state

        // form submit steps
        // const submitHandler = (event) => {
        //     event.preventDefault();
        //     // const image = event.target.image - upload.value;
        //     const NFTname = event.target.NFTname.value;
        //     const Title = event.target.Title.value;
        //     const Amount = event.target.Amount.value;
        //     axios.post("http://localhost:5000/nft", {
        //         NFTname,
        //         Title,
        //         Amount
        //     })
        //         .then(response => {
        //             console.log(response);
        //         })
        //         .catch((error) => {
        //             console.log(error);
        //         });
        // };


        return (



            <div>

                <form class="row g-3 needs-validation"  onSubmit={this.handleSubmit} checkValidity>

                    <div className="page" id='page'>
                        <div className="container" id='container'>
                            <h1 className="heading" id='heading'>Add your Image</h1>
                            <div className="img-holder" id='img-holder'>
                                <img src={profileImg} alt="" id="img" className="img" />
                            </div>
                            <input type="file" accept=".png, .jpeg" name="image-upload" id="file" onChange={this.imageHandler} />
                            <div className="label" id='label'>
                                <label className="image-upload" id='image-upload' htmlFor="input">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-image-fill" viewBox="0 0 16 16">
                                        <path d="M.002 3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-12a2 2 0 0 1-2-2V3zm1 9v1a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12zm5-6.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0z" />
                                    </svg>
                                    Choose your asset
                                </label>
                            </div>
                        </div>
                    </div>


                    <h2 class="accordion-header p-4" id="headingOne">

                        <i className="fa fa-chevron-down"></i> 2.Fill in the below details

                    </h2>

                    <div class="col-md-4">
                        <label for="validationServer01" class="form-label">NFT name</label>
                        <input type="text" name='NFTname' class="form-control " id="validationServer01" onChange={this.handleInputChange} required />
                        <div class="valid-feedback">
                            Looks good!
                        </div>
                    </div>
                    <div class="col-md-4">
                        <label for="validationServer02" class="form-label">Title</label>
                        <input type="text" name='Title' class="form-control " id="validationServer02" onChange={this.handleInputChange}  required/>
                        <div class="valid-feedback">
                            Looks good!
                        </div>
                    </div>
                    <div class="col-md-4">
                        <label for="validationServer02" class="form-label">Amount</label>
                        <input type="number"  name='Amount' class="form-control "  step='any' id="validationServer02" onChange={this.handleInputChange} required />
                        <div class="valid-feedback">
                            Looks good!
                        </div>
                    </div>
                    <div class="col-md-4">
                        <label for="validationServer02" class="form-label">Asset ID</label>
                        <input type="text" name='AssetID' class="form-control " id="validationServer02" onChange={this.handleInputChange} required />
                        <div class="valid-feedback">
                            Looks good!
                        </div>
                    </div>
                    <div class="col-md-8">
                        <label for="validationServer02" class="form-label">Tags</label>
                        <input type="text" name='Tags' class="form-control " id="validationServer02" onChange={this.handleInputChange} required />
                        <div class="valid-feedback">
                            Looks good!
                        </div>
                    </div>
                    <div class="col-md-6">
                        <label for="validationServer02" class="form-label">Creator name</label>
                        <input type="text" name='Creatorname' class="form-control " id="validationServer02"   onChange={this.handleInputChange} required />
                        <div class="valid-feedback">
                            Looks good!
                        </div>
                    </div>

                    <div class="col-12">
                        <button onClick={send} class="btn btn-primary" type="submit">Submit</button>
                    </div>






                </form>


            </div>
        );
    }
}


export default UploadNFT;
