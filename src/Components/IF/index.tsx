import React, {ReactNode} from 'react';

interface Props {
  loading: boolean;
  loader: React.ReactNode;
}

const LoadingState: React.FC<Props> = ({loading, loader, children}) => (
  <>{loading ? loader : children}</>
);

export default LoadingState;
