export const loadScript = (src, callback) => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = src;
    script.async = true;
  
    if (callback) {
      script.onload = callback;
    }
  
    document.body.appendChild(script);
  };
  