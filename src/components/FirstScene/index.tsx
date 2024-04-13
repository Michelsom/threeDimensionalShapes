import React from 'react';
import { GLViewComponent } from './styles';
import { useViewModelBoxScene } from './viewModel';

export const FirstScene = ({
  color,
  rotations,
  shapeType,
  stop,
  wireFrame = false
}: {
  shapeType: string;
  color: string;
  rotations: any;
  stop?: boolean;
  wireFrame?: boolean;
}) => {
  const { _onGLContextCreate } = useViewModelBoxScene()

  return (
    <GLViewComponent
      onContextCreate={(gl) => _onGLContextCreate(
        gl,
        shapeType,
        color,
        rotations,
        wireFrame
      )}
    />
  );
};
