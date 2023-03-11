import React, { useRef } from 'react';
import Button from '@mui/material/Button';
function CopyToClipboardButton({ text }) {
  const inputRef = useRef(null);

  function handleCopyToClipboard() {
    inputRef.current.select();
    document.execCommand('copy');
  }

  return (
    <div>
      <input
        type="text"
        readOnly
        value={text}
        ref={inputRef}
        style={{ position: 'absolute', left: '-9999px' }}
      />
      <Button onClick={handleCopyToClipboard}>Copy to Clipboard</Button>
    </div>
  );
}

export default CopyToClipboardButton;
