import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {auth} from '../../redux/actions/auth'
import { Switch, Route, Link } from 'react-router-dom';
import {connect} from 'react-redux';
import MainLayout from '../../hoc/MainLayout/MainLayout';
import UserLayout from '../../hoc/UserLayout/UserLayout';
import Alerts from '../Alert/Alert';
import Tours from '../Tours/Tours';
import UserSettings from '../../pages/UserSettings/UserSettings'
import UpdatePassword from '../../pages/UpdatePassword/UpdatePassword';
import AdminUsers from '../../pages/AdminUsers/AdminUsers'
import TourPage from '../../pages/TourPage/TourPage'
import MainPage from '../../pages/MainPage/MainPage'



export function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(auth());
  }, [dispatch]);
  return (
    <div className='App'>
      <MainLayout>
        <Alerts />
        <Switch>
          <Route exact path='/' component={MainPage} />
          <Route exact path='/tours' component={Tours} />
          <Route path='/tour' component={TourPage} />
          {/* ================ USER PANEL LAYOUT-------------- */}
          <Route
            path='/me'
            render={() => (
              <UserLayout>
                <Switch>
                  <Route
                    exact
                    path='/me/settings'
                    component={() => <UserSettings />}
                  />
                  <Route
                    exact
                    path='/me/updatePassword'
                    component={() => <UpdatePassword />}
                  />
                  <Route
                    exact
                    path='/me/users'
                    component={() => <AdminUsers />}
                  />
                </Switch>
              </UserLayout>
            )}
          />
        </Switch>
      </MainLayout>
    </div>
  );
}

export default connect()(App);