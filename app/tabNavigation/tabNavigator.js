import React, { Component } from 'react';
import { TabNavigator, TabBarBottom, TabBarTop } from 'react-navigation';
import Market from '../market/marketListContainer';
import BodyData from '../bodyData/bodyData';
export default TabNavigation = TabNavigator(
    {
        BodyData: { screen: BodyData },
        Market: { screen: Market }
    },
    {
        tabBarOptions: {
            activeTintColor: '#999',
            inactiveTintColor:'#666',
            style:{
                backgroundColor:'#333'
            }
        }
    }
)