import React from 'react';
import Header from '../../components/Header/Header';
import './MainLayout.scss';

export default function MainLayout(props) {
  return (
    <div className='MainLayout'>
      <Header />

      <main className='Main'>{props.children}</main>
    </div>
  );
}
