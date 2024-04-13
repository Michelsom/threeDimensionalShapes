import { FlashList } from '@shopify/flash-list';
import React from 'react';
import { ArrowBlack } from '../../assets';
import { shapeTypes } from '../../common/arrayPickShapes';
import { pickVelocity } from '../../common/arrayVelocity';
import { colorsToPick } from '../../common/colors';
import * as S from './styles';
import { useViewModelSettings } from './viewModel';

export const Settings = () => {
  const {
    clearData,
    renderItem,
    renderItemShapes,
    selectColor,
    renderItemVelocity,
    selectRotation,
    editDataFn,
    selectShapeType
  } = useViewModelSettings();

  return (
    <S.Container>
      <S.ContentHeader>
        <S.ButtonExit onPress={clearData}>
          <ArrowBlack width={20} height={20} />
        </S.ButtonExit>
        <S.Title>Configure sua formula</S.Title>
      </S.ContentHeader>
      <S.Card>
        <S.Content>
          <FlashList
            ListHeaderComponent={
              <S.TitleHeaderComponent>Escolha a cor</S.TitleHeaderComponent>
            }
            data={colorsToPick}
            numColumns={6}
            extraData={[selectColor]}
            renderItem={renderItem}
          />
        </S.Content>

        <S.ContentTypeShape>
          <S.TitleHeaderComponent>Escolha a forma</S.TitleHeaderComponent>
          <FlashList
            horizontal
            data={shapeTypes}
            extraData={[selectShapeType]}
            renderItem={renderItemShapes}
          />
        </S.ContentTypeShape>

        <S.ContentVelocity>
          <S.TitleHeaderComponent>Escolha a velocidade</S.TitleHeaderComponent>
          <FlashList
            horizontal
            data={pickVelocity}
            extraData={[selectRotation]}
            renderItem={renderItemVelocity}
          />
        </S.ContentVelocity>
        <S.ButtonSave disabled={
          !selectRotation ||
          !selectColor ||
          !selectShapeType
        } onPress={editDataFn}>
          <S.TextSave>Salvar</S.TextSave>
        </S.ButtonSave>
      </S.Card>
    </S.Container>
  );
};
