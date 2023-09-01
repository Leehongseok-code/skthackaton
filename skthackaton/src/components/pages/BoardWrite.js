// src/components/BoardWrite.js

import React, { useState } from 'react';
import '../BoardWrite.css';

function BoardWrite() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [newPost, setNewPost] = useState({ title: '', content: '' });

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
    <div className='App-back'>
      <div className="board-write-container">
        <h1>게시글 작성</h1>
        <form onSubmit={handleFormSubmit} encType="multipart/form-data">
          <input
            type="text"
            placeholder="제목"
            value={newPost.title}
            onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
          />
          <textarea
            placeholder="내용"
            value={newPost.content}
            onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
            rows={6}
          />
          <input type="file" name="file" onChange={handleFileChange} />
          <div className="submit-button-container"> {/* 새로운 div 추가 */}
            <input type="submit" value="게시글 작성" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default BoardWrite;
