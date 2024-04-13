import React from 'react';
import * as S from './styles';

export const GlobalLoading = ({ text }: { text?: string }) => {
  return (
    <S.GlobalViewActivityIndicator>
      {text && text.length > 0 ? <S.GlobalText>{text}</S.GlobalText> : null}
    </S.GlobalViewActivityIndicator>
  );
};
