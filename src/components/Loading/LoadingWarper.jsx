import React, { useEffect, useState } from 'react';
import Loading from './Loading';

const LoadingWarper = ({children,delay = 1500}) => {
    const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  if (loading) {
    return <Loading></Loading>;
  }

  return <>{children}</>;
};


export default LoadingWarper;