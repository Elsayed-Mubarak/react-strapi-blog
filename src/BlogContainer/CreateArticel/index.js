import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import Navbar from '../Nav/Navbar';


function CreateArticle(props) {


    URL = `http://54.220.211.123:2020`

    const [error, setError] = useState('');
    const [files, setFiles] = useState(null);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [category, setCategory] = useState('');

    const handleForm = (e) => { e.preventDefault() }
    const titleChange = (e) => { setTitle(e.target.value) }
    const contentChange = (e) => { setContent(e.target.value) }
    const categoryChange = (e) => { setCategory(e.target.value) }
    const uploadImgHandeler = (e) => { setFiles(e.target.files[0]) }


    console.log("..titleChange..", title);
    console.log("..categoryChange..", category);
    console.log("..contentChange..", content);


    const saveFiles = async () => {

    }

    const saveArticel = async () => {

        try {
            await fetch(`${URL}/articles`, {
                method: "POST",
                headers: { "Content-Type": "Application/json" },
                body: JSON.stringify({
                    title,
                    content,
                    category,
                })
            }).then(res => {
                if (!title || !content || !category || res.status !== 200) {
                    throw new Error('Please Fill All Feild With Data');
                }
                props.history.push('/');
                return res.json();
            })
        } catch (e) {
            setError(e.toString())
        }

    }


    return (
        <div>

            {/**Navbar */}
            <Navbar />
            {/* Main container */}
            <main className="main-content">
                <section className="section">
                    <div className="container">
                        <div className="aler alert-danger">
                            {error && <h5 className="text-center" style={{ color: "red" }}>{error}</h5>}
                        </div>
                        <div className="row">
                            <div className="col-12 col-lg-12">

                                <form className="p-30 bg-gray rounded" method="POST" data-form="mailer" onSubmit={handleForm}>
                                    <div className="row">
                                        <div className="form-group col-md-12 my-5">
                                            <input type="file" name="files" onChange={uploadImgHandeler} className="form-control" />

                                        </div>
                                        <div className="form-group col-12 col-md-6">
                                            <input className="form-control form-control-lg" onChange={titleChange} type="text" name="title" placeholder="Title" />
                                        </div>
                                        <div className="form-group col-12 col-md-6">
                                            <select name="category" onChange={categoryChange} className="form-control form-control-lg">
                                                <option value>Artificial Intelligence</option>
                                                <option value>ElectronicLibraries</option>
                                                <option value>Knowledge_And_Research_Centers</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <textarea className="form-control form-control-lg" rows={4} onChange={contentChange} placeholder="Content" name="content" defaultValue={""} />
                                    </div>
                                    <div className="text-center">
                                        <button className="btn btn-lg btn-primary" type="submit" onClick={saveArticel}>Create Article</button>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                </section>
            </main>
            {/* END Main container */}
        </div>

    );
};
export default CreateArticle;