import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ApiService from '../service/ApiService';

const AddFilePage = () => {
   const [file, setFile] = useState(null);
   const [name, setName] = useState('');
   const [message, setMessage] = useState('');
   const navigate = useNavigate();

   const handleFileChange = (event) => {
       setFile(event.target.files[0]);
   };

   const handleNameChange = (event) => {
       setName(event.target.value);
   };

   const handleSubmit = async (event) => {
       event.preventDefault();
       if (!file || !name) {
           setMessage('File and Name are required');
           return;
       }

       const formData = new FormData();
       formData.append('file', file);
       formData.append('name', name);

       try {
           const response = await ApiService.addFile(formData);
           console.log(response)
           if (response.id) {
               setMessage('Image uploaded successfully!');
               setTimeout(() => {
                   navigate('/');
               }, 5000);
           } else {
               setMessage(JSON.stringify(response));
               setTimeout(() => {setMessage('');}, 5000);
           }
       } catch (err) {
               setMessage('There was an error uploading the image!');
               setTimeout(() => {setMessage('');}, 5000);
       }
   };

   return (
       <div className="container my-5">
           <h1 className="text-center mb-4">Add New Image</h1>
           {message && <p className="alert alert-info text-center">{message}</p>}
           <form onSubmit={handleSubmit}>
               <div className="mb-3">
                   <label className="form-label">File:</label>
                   <input type="file" className="form-control" onChange={handleFileChange} />
               </div>
               <div className="mb-3">
                   <label className="form-label">Name:</label>
                   <input type="text" className="form-control" value={name} onChange={handleNameChange} />
               </div>
               <button type="submit" className="btn btn-primary w-100">Upload</button>
           </form>
       </div>
   );
};

export default AddFilePage;
