import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

interface LoadingProps {
  text?: string;
  speed?: number;
}

const Loading: React.FC<LoadingProps> = ({ text = 'Loading', speed = 300 }) => {
  const [content, setContent] = useState(text);

  useEffect(() => {
    //every 300ms either add a dot or reset to 'Loading'
    const intervalId = setInterval(() => {
      setContent((content) => {
        return content === `${text}...` ? text : `${content}.`;
      });
    }, [speed]);

    // Clear the interval timer when the component is unmounted
    return () => clearInterval(intervalId);
  }, [text, speed]);

  return <LoadingContent>{content}</LoadingContent>;
};

export default Loading;

// Styled component
const LoadingContent = styled.h2`
  position: absolute;
  left: 0;
  right: 0;
  margin-top: 20px;
  text-align: center;
`;
