//import React from 'react';
import React, { useState } from 'react';
import '../../App.css';

function Board() {

  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (!selectedFile) {
      alert("Please select a file to upload.");
      return;
    }

    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      const response = await fetch('/upload', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Uploaded file URL:', data);
        // Handle the response data here
      } else {
        console.error('Upload failed:', response.statusText);
        // Handle error here
      }
    } catch (error) {
      console.error('Upload error:', error);
      // Handle error here
    }
  };

  return (
    <div className="App-header">
     <div>
      <>
        Hi
      </>
      <form onSubmit={handleFormSubmit} encType="multipart/form-data">
        <input type="file" name="file" onChange={handleFileChange} />
        <input type="submit" value="Upload" />
      </form>
     </div>
    </div>
  );
}

export default Board;