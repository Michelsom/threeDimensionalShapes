import React from 'react';
import {GlobalScene} from './styles';
import {useViewModelScene} from './viewModel';
export const BoxScene = () => {
  const {onGLContextCreate} = useViewModelScene();
  return <GlobalScene onContextCreate={onGLContextCreate} />;
};
