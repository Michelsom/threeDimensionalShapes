import React from 'react';
import { FlatList, View } from 'react-native';
import { GlobalLoading } from '../../components/LoadingGlobal';
import { ButtonCreateShape } from './components/ButtonCreateShape';
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
    userData
  } = useViewModelHome();

  const RenderFooterComponent = () => <S.Separator />;
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
      <ButtonCreateShape />
    </S.SafeArea>
  );
};



