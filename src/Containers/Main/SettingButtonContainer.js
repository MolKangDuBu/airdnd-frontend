import React, { useState } from 'react';
import SettingButton from '../../Components/Main/SettingButton';
import SettingPopup from '../../Components/Main/SettingPopup';

const SettingButtonContainer = ({ isScrollTop }) => {
  const [popupVisible, setPopupVisible] = useState(false);

  const closePopup = () => {
    setPopupVisible(false);
  };

  const togglePopup = () => {
    console.log('=====toggle');
    setPopupVisible(prevState => !prevState);
  };

  return (
    <>
      <SettingButton
        isScrollTop={isScrollTop}
        togglePopup={togglePopup}
      ></SettingButton>
      <SettingPopup
        popupVisible={popupVisible}
        closePopup={closePopup}
      ></SettingPopup>
    </>
  );
};

export default SettingButtonContainer;
