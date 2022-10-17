import React from 'react';
import { CCard, CCardBody, CForm, CFormInput, CFormLabel, CFormTextarea, CButton } from "@coreui/react";
import { Link } from 'react-router-dom';
import Constants, { userToken } from 'src/Constants';
import { toast, ToastContainer } from 'react-toastify';

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
const TermsConditions = () => {
    const [content, setContent] = React.useState('')
    const modules =  {
        toolbar: [
            [{ 'header': [1, 2, false] }],
            ['bold', 'italic', 'underline','strike', 'blockquote'],
            [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
            ['link', 'image'],
            ['clean']
          ]
    }

    const formats = [
        'header',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'link', 'image'
      ]
    const handleSubmit = async (e) => {
        e.preventDefault();
        let url = Constants.staticContentUpdate + 'terms';
        let body = JSON.stringify({content})
        // console.log(body)
        let response = await fetch(url, {
            method: 'POST',
            headers: {
                'Authorization': userToken(),
                'content-Type': 'application/json'
            },
            body
        })

        let data = await response.json();
        // console.log(data);
        if(data.status === 200){
            toast.success(data.message);
        } else {
            toast.error('Something Went Wrong!');
        }
        

    }

    React.useEffect(() => {
        let url = Constants.staticContent + 'terms';


        (async () => {
            let response = await fetch(url,{
                method: 'GET',
                headers: {
                    'Authorization': userToken(),

                }
            })
            let data = await response.json();
            // console.log(data);
            if(data.status === 200){
                setContent(data?.data?.content);
            }
        })()
    }, [])

    return (

        <>

            <ToastContainer
                position="top-right"
                theme="colored"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover />

            <CCard>
                <CCardBody>
                    <CForm onSubmit={handleSubmit}>
                        <div className="mb-3">
                        <ReactQuill theme="snow" modules={modules} formats={formats} value={content} onChange={setContent}/>
                        </div>
  
                        <div className="mb-3">
                            <CButton type='submit' color="primary" className="px-4">
                                Update
                            </CButton>
                        </div>
                    </CForm>
                </CCardBody>
            </CCard>



        </>
    );
}
export default TermsConditions;