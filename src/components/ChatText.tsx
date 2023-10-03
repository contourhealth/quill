"use client"

import { useEffect, useRef } from 'react';
import Typed from 'typed.js';

export interface ChatTextProps {
  strings: string[];
}

const ChatText: React.FC<ChatTextProps> = ({ strings }) => {
  const typedTargetRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!typedTargetRef.current) return;

    const typed = new Typed(typedTargetRef.current, {
      strings,
      typeSpeed: 50,
      fadeOut: true,
      showCursor: false,
      backDelay: 2000,
      loop: true,
    });

    return () => typed.destroy(); // Cleanup
  }, [strings]);

  return <span ref={typedTargetRef} className="text-primary"></span>;
};

export default ChatText;