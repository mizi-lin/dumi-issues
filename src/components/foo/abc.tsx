import React from 'react';


interface MtsCircleBubbleProps {
  title: string;
  value?: number;
}

const MtsCircleBubble: React.FC<MtsCircleBubbleProps> = (props) => {
  console.log(1111112343)
    return <div>Abc Def GHL {props.title}</div>
}

export default MtsCircleBubble