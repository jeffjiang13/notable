"use client"
import React, { useEffect } from 'react';

const ChatbotIframe = () => {
  useEffect(() => {
    const iframe = document.createElement("iframe");

    const iframeStyles = (styleString: string) => {
      const style = document.createElement('style');
      style.textContent = styleString;
      document.head.append(style);
    };
console.log(iframe)
    iframeStyles(`
      .chat-frame {
        position: fixed;
        bottom: 20px;
        right: 20px;
        border: none;
        z-index: 999;
      }
    `);

    iframe.src = "http://localhost:3001/chatbot";
    iframe.classList.add('chat-frame');

    document.body.appendChild(iframe);

    const handleMessage = (e: MessageEvent) => {
      if (e.origin !== "http://localhost:3001") return null;
      try {
        const dimensions = JSON.parse(e.data);
        iframe.style.width = dimensions.width + 'px';
        iframe.style.height = dimensions.height + 'px';
      } catch (error) {
        console.error('Invalid message data:', e.data);
      }
      iframe.contentWindow?.postMessage("b77ba080-5537-4a71-bbe5-7b984d16e06c", "http://localhost:3001/");
    };

    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
      document.body.removeChild(iframe);
    };
  }, []);

  return null;
};

export default ChatbotIframe;