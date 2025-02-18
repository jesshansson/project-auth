import React from 'react';
import { Login } from 'components/LogIn';
import { NotFound } from 'components/NotFound';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { InnerWrapper, OuterWrapper } from 'components/GlobalStyles';
import { Home } from 'components/Home';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import user from 'components/reducers/user';

const reducer = combineReducers({
  user: user.reducer,
});

const store = configureStore({reducer});
export const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <OuterWrapper> 
          <InnerWrapper>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/" element={<Home />} />
              <Route path="/404" element={<NotFound />} />
              <Route path="*" element={<Navigate to="/404" replace />} />
            </Routes>
          </InnerWrapper>
        </OuterWrapper>
      </BrowserRouter>
    </Provider>
  );
}