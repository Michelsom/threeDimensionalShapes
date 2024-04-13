import React from 'react';
import { FlatList, View } from 'react-native';
import { GlobalButton } from '../../components/Button';
import { GlobalLoading } from '../../components/LoadingGlobal';
import { HeaderComponent } from './components/HeaderComponent';
import { RenderEmptyComponent } from './components/RenderEmptyComponent';
import * as S from './styles';
import { useViewModelHome } from './viewModel';

export const Home = () => {
  const {
    renderItem,
    loadingSendData,
    transformInArray,
    clearAllData,
    userData,
    navigateToSettings,
    RenderFooterComponent
  } = useViewModelHome();

  if (loadingSendData) return <GlobalLoading text='Aguarde...' />;

  return (
    <S.SafeArea>
      <S.Container>
        <HeaderComponent clearAllData={clearAllData} />
        <View style={{ width: 400, height: '100%', justifyContent: 'center', alignItems: 'center', padding: 20 }}>
          <FlatList
            data={transformInArray}
            renderItem={renderItem}
            extraData={[transformInArray, userData]}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={
              <RenderEmptyComponent />
            }
            ListFooterComponent={<RenderFooterComponent />}
          />
        </View>
      </S.Container>
      <S.ButtonContainer>
        <GlobalButton
          color='secondaryColor'
          handleButton={navigateToSettings}
          text='Nova forma'
          type='solid'
          width={100}
          disable={transformInArray.length > 9}
        />
      </S.ButtonContainer>
    </S.SafeArea>
  );
};



