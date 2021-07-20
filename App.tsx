import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { StatusBar } from 'react-native';
import RootStack from '@navigation/RootStack';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { stackContext, TGalleryStack, TPopupStack } from '@/lib/context/useStackContext';
import { NavigationContainer } from '@react-navigation/native';

type TProps = {};

// Initialize Apollo Client
const client = new ApolloClient({
  uri: 'localhost:4000/graphql',
  cache: new InMemoryCache(),
});

const App = ({}: TProps) => {
  const [GalleryStackType, setCurrentStack] = useState<TGalleryStack>('Select');
  const [PopupStackType, setPopupStackType] = useState<TPopupStack>('SelectGuide');

  return (
    <ApolloProvider client={client}>
      <StatusBar barStyle="light-content" />
      <stackContext.Provider
        value={{ GalleryStackType, setCurrentStack, PopupStackType, setPopupStackType }}>
        <NavigationContainer>
          <RootStack />
        </NavigationContainer>
      </stackContext.Provider>
    </ApolloProvider>
  );
};

export default App;
