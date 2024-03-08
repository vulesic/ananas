import React from 'react';

const WithLogging = (Component: React.ComponentType<any>, componentName: string) => {
  const WrappedComponent = (props: any) => {
    console.log(`Hello from ${componentName}`);
    return <Component {...props} />;
  };

  return WrappedComponent;
};

export default WithLogging;
