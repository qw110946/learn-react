import React, { Component } from 'react';
import {SectionList, StyleSheet, Text, View, Button, Image, ScrollView } from 'react-native';
import { DrawerNavigator, DrawerItems } from "react-navigation";
import {
  Home,
  Bangumi,
} from './Drawer'
/**
 * 给跳转stack的路由。占位置的组件
 */
class UselessRoute extends Component{
  render(){
    return <View><Text>UselessRoute</Text></View>
  }
}
/**
 * 判断是否需要跳转到stack的路由
 * @param route 路由对象
 * @param callback(routeName) 回调
 */
const isStackRoute = (route, callback) => {
  const stackRoute = {
    HistoryDrawer: 'HistoryStack',
    DownloadDrawer: 'DownloadStack'
  };
  const newRoute = stackRoute[route.routeName];

  callback(newRoute !== undefined? newRoute: route.routeName);
};

const styles = StyleSheet.create({
  icon: {
    width: 22,
    height: 22,
  },
  drawer: {
    marginBottom: 30
  }
});

const MyApp = DrawerNavigator({
  HomeDrawer: {
    screen: Home,
    navigationOptions: {
      drawerLabel: '首页',
      drawerIcon: ({ tintColor }) => (
        <Image
          source={require('./../../../../../images/icon/home/home2.png')}
          style={[styles.icon, {tintColor: tintColor}]}
        />
      ),
    }
  },
  BangumiDrawer: {
    screen: Bangumi,
    navigationOptions: {
      drawerLabel: '番剧',
      drawerIcon: ({ tintColor }) => (
        <Image
          source={require('./../../../../../images/icon/tv/tv.png')}
          style={[styles.icon, {tintColor: tintColor}]}
        />
      )
    }
  },
  /**
   * 跳Stack
   */
  HistoryDrawer: {
    screen: UselessRoute, // 占位，不跳路由
    navigationOptions: {
      drawerLabel: '历史记录',
      drawerIcon: ({ tintColor }) => (
        <Image
          source={require('./../../../../../images/icon/time/time.png')}
          style={[styles.icon, {tintColor: tintColor}]}
        />
      )
    }
  },
  DownloadDrawer: {
    screen: UselessRoute,
    navigationOptions: {
      drawerLabel: '下载',
      drawerIcon: ({ tintColor }) => (
        <Image
          source={require('./../../../../../images/icon/download/download.png')}
          style={[styles.icon, {tintColor: tintColor}]}
        />
      )
    }
  },
},{
  contentComponent: props => (
    <ScrollView
      style={styles.drawer}
      >
      <Text>sadasd</Text>
      <Text>sadasd</Text>
      <Text>sadasd</Text>
      <Text>sadasd</Text>
      <Text>sadasd</Text>
      <Text>sadasd</Text>
      <Text>sadasd</Text>
      <DrawerItems
        {...props}
        onItemPress={
          ({route}) => isStackRoute(route,(routeName) => {
            props.navigation.navigate('DrawerClose');
            setTimeout(() => props.navigation.navigate(routeName), 0);
          })
        }
      />
    </ScrollView>

  ),
  contentOptions: {
    items: [
      'Home',
      'Bangumi',
    ]
  },
  drawerWidth: 300, // 侧拉的宽度
});

export default MyApp;



