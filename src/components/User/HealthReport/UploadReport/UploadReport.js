
import React, { Component } from 'react'

class UploadReport extends Component {
    render() {
        return (<div className="container ">
            Upload Your Report
         <div className="row pad-20 ">
                <div className="col-lg-12">
                    <div id="myDropZone" className="dropzone dropzone-design">
                        <div className="dz-default dz-message"><span>Drop files here to upload</span></div>
                    </div>
                </div>
                <p className="text-right w-100 text-danger">upload files as pdf/jpg/png</p>
            </div>
            <input className="btn btn-theme btn-md" type="submit" value="Submit Report" />
        </div>);
    }
}
export default UploadReport;