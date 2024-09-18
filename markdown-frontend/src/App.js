import React, { useState } from 'react';
import { marked } from 'marked'; // Update here
import axios from 'axios';

function App() {
  const [markdown, setMarkdown] = useState('');

  const handleMarkdownChange = (event) => {
    setMarkdown(event.target.value);
  };

  const getHtmlFromBackend = async () => {
    try {
      const response = await axios.post('/convert', { markdown });
      return response.data.html;
    } catch (error) {
      console.error("Error converting markdown:", error);
      return '';
    }
  };

  return (
    <div className="App">
      <div className="editor">
        <textarea
          value={markdown}
          onChange={handleMarkdownChange}
          placeholder="Type your markdown here..."
        />
      </div>
      <div className="preview" dangerouslySetInnerHTML={{ __html: marked(markdown) }} />
    </div>
  );
}

export default App;
