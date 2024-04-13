import { FlashList } from '@shopify/flash-list';
import React from 'react';
import { ArrowBlack } from '../../assets';
import { shapeTypes } from '../../common/arrayPickShapes';
import { pickVelocity } from '../../common/arrayVelocity';
import { colorsToPick } from '../../common/colors';
import { GlobalButton } from '../../components/Button';
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
    selectShapeType,
    params
  } = useViewModelSettings();

  return (
    <S.Container>
      <S.ContentHeader>
        <S.ButtonExit onPress={clearData}>
          <ArrowBlack width={20} height={20} />
        </S.ButtonExit>
        <S.Title>{`${params?.item ? 'Edite' : 'Configure'} sua formula`}</S.Title>
      </S.ContentHeader>
      <S.Card>
        <S.Content>
          <FlashList
            ListHeaderComponent={
              <S.TitleHeaderComponent>Escolha a cor</S.TitleHeaderComponent>
            }
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            data={colorsToPick}
            numColumns={6}
            extraData={[selectColor]}
            renderItem={renderItem}
          />
        </S.Content>

        <S.ContentTypeShape>
          <S.TitleHeaderComponent>Escolha a forma</S.TitleHeaderComponent>
          <FlashList
            scrollEnabled={false}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            horizontal
            data={shapeTypes}
            extraData={[selectShapeType]}
            renderItem={renderItemShapes}
          />
        </S.ContentTypeShape>

        <S.ContentVelocity>
          <S.TitleHeaderComponent>Escolha a velocidade</S.TitleHeaderComponent>
          <FlashList
            scrollEnabled={false}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            horizontal
            data={pickVelocity}
            extraData={[selectRotation]}
            renderItem={renderItemVelocity}
          />
        </S.ContentVelocity>
        <GlobalButton
          color='secondaryColor'
          handleButton={editDataFn}
          text={params?.item ? 'Editar forma' : 'Criar nova forma'}
          type='solid'
          disable={
            !selectRotation ||
            !selectColor ||
            !selectShapeType
          }
          width={100}
        />
      </S.Card>
    </S.Container>
  );
};
