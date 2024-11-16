import React, { useEffect, useState } from 'react';
import ApiService from '../service/ApiService';

const HomePage = () => {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const files = await ApiService.getAllFiles();
        setFiles(files);
      } catch (error) {
        console.error('There was an error fetching the files!', error);
      }
    };
    fetchFiles();
  }, []);

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">All Images</h1>
      <div className="d-flex justify-content-end mb-4">
        <a className="btn btn-primary" href="/add">Add New Image</a>
      </div>
      <div className="row">
        {files.map(file => (
          <div key={file.id} className="col-md-4 mb-4">
            <div className="card">
              <img src={file.fileUrl} alt={file.name} className="card-img-top" />
              <div className="card-body">
                <p className="card-text">{file.name}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
