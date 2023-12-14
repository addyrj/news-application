import React, { useState } from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import Quill's CSS

// const TextEditor = () => {
//   return (
//     <div>
//       <h1>Text Editor</h1>
//     </div>
//   );
// };

function TextEditor() {
  const [image, setImage] = useState('');

  // Handle image selection from OS
  const handleImageSelect = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div>
      <input type="file" onChange={handleImageSelect} />
      <ReactQuill
        value={image}
        onChange={setImage}
        modules={{ toolbar: false }}
        readOnly={true}
      />
    </div>
  );
}


export default TextEditor;
