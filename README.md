# reduxtoolkit

````
npx create-react-app .
````

````
yarn add @reduxjs/toolkit react-redux
````
# src/redux/store.js
````
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {},
})
````
# index.js
````
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {store} from './redux/store';
import {Provider} from 'react-redux';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);

````
# redux/todos/todosSlice.js
````
import { createSlice } from "@reduxjs/toolkit";


export const todosSlice = createSlice({
    name: "todos",
    initialState:{
        items:[]
    },
    reducers:{},
})

````
yukarıdaki kodta neler yaptık:
Redux Toolkit kütüphanesi kullanılarak bir todosSlice adında bir Redux slice oluşturduk.

Bir slice, Redux mağazasında belirli bir durumu ve o durumla ilgili işlemleri yöneten bir parçadır.

createSlice fonksiyonu, bir slice oluşturmak için kullanılır ve bir obje döndürür. Bu obje, slice'ın durumunu ve durumla ilgili işlemleri tanımlayan reducer'ları içerir.

todosSlice objesi şu özellikleri içerir:

name: slice'ın adı. Bu, Redux Toolkit tarafından kullanılmaz ve sadece slice'ı tanımlamak için kullanılır.
initialState: slice'ın başlangıç durumu. Burada, slice'ın sadece bir öğeler dizisi içerdiği boş bir durum tanımlanmıştır.
reducers: slice'ın işlemlerini tanımlayan bir nesne. Henuz bir işlem tanımlamadık.
Bu örnek kod, henüz herhangi bir işlevsellik eklemeyen temel bir slice tanımlamak için kullanılabilir. Daha sonra, reducers nesnesi içindeki fonksiyonlar, slice'ın durumunu güncellemek için kullanılabilir.