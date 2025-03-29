import React, { useState } from "react";
import { Container, Form, Button, ProgressBar, ListGroup } from "react-bootstrap";

const DataUpload = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setSelectedFiles(files);
  };

  const handleUpload = () => {
    if (selectedFiles.length === 0) {
      alert("Please select files to upload.");
      return;
    }

    let progress = 0;
    const interval = setInterval(() => {
      progress += 20;
      setUploadProgress(progress);
      if (progress >= 100) {
        clearInterval(interval);
        alert("Files uploaded successfully!");
      }
    }, 500);
  };

  return (
    <Container className="mt-4">
      <h2>Data Upload</h2>
      <p>Upload any file type (e.g., images, documents, spreadsheets, PDFs).</p>
      
      <Form.Group controlId="fileUpload" className="mb-3">
        <Form.Label>Select Files</Form.Label>
        <Form.Control type="file" multiple onChange={handleFileChange} />
      </Form.Group>

      {selectedFiles.length > 0 && (
        <>
          <h5>Selected Files:</h5>
          <ListGroup className="mb-3">
            {selectedFiles.map((file, index) => (
              <ListGroup.Item key={index}>
                {file.name} ({(file.size / 1024).toFixed(2)} KB)
              </ListGroup.Item>
            ))}
          </ListGroup>
        </>
      )}

      <Button variant="primary" onClick={handleUpload} disabled={selectedFiles.length === 0}>
        Upload
      </Button>

      {uploadProgress > 0 && (
        <ProgressBar now={uploadProgress} label={`${uploadProgress}%`} className="mt-3" />
      )}
    </Container>
  );
};

export default DataUpload;
