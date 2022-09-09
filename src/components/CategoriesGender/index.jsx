import React from 'react';
import Clothes from './Clothes';
const CategoriesGender = ({ gender }) => {
  return (
    <>
      {gender.map(genders => {
        return <Clothes genero={genders.categorie} />;
      })}
    </>
  );
};

export default CategoriesGender;
