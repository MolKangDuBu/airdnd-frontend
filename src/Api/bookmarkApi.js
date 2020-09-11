import axios from 'axios';

export const fetchWishlistsData = async () => {
  const response = await axios.get('/back/wishlists');
  console.log('===============================================');
  return response.data;
};

export const postWishlists = async payload => {
  const response = await axios.post('/back/wishlist_insert', payload);
  console.log('---------------------------------------------', response);
  return response.data;
};

export const deleteWishList = async payload => {
  const response = await axios.delete(`/back/wishlist_delete/${payload}`);
  console.log('=====================', response);
};
