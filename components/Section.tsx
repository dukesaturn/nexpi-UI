import React from 'react';

interface SectionProps {
  id: string;
  children: React.ReactNode;
  offset?: string;
}

const Section = ({ id, children, offset = '0px' }: SectionProps) => {
  return (
    <div 
      id={id} 
      style={{
        paddingTop: offset,
        marginTop: `-${offset}`,
      }}
    >
      {children}
    </div>
  );
};

export default Section;