import React from "react";

import { VectorX } from "../../../../assets";
import * as S from "./styles";

export const HeaderComponent = ({ clearAllData }: { clearAllData: () => void }) => {

  return (
    <S.BoxHeader accessible={true}>
      <S.Title accessible={true}>Suas figuras</S.Title>
      <S.ButtonExit onPress={clearAllData}>
        <VectorX width={30} height={30} />
      </S.ButtonExit>
    </S.BoxHeader>
  )
}