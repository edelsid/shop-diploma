import { createSlice } from "@reduxjs/toolkit";

const site = createSlice({
   name: 'siteData',
   initialState: {
      navigation: [
      {
         id: 1,
         name: 'Главная',
         link: '/'
      },
      {
         id: 2,
         name: 'О магазине',
         link: '/about'
      },
      {
         id: 3,
         name: 'Каталог',
         link: '/catalog'
      },
      {
         id: 4,
         name: 'Контакты',
         link: '/contacts'
      }],
      paymentMethods: ['paypal', 'master-card', 'visa', 'yandex', 'webmoney', 'qiwi'],
      socials: ['twitter', 'vk'],
      orderTable: ['#', 'Название', 'Размер', 'Кол-во', 'Стоимость', 'Итого', 'Действия'],
      searchQuery: '',
   },
   reducers: {
      newSearch (state, action) {
         state.searchQuery = action.payload;
      }
   }
});

export const { newSearch } = site.actions;
export default site.reducer;