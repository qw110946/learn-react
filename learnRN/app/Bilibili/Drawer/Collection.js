import React, { Component } from 'react';
import {ScrollView, StyleSheet, Text, View } from 'react-native';
import DrawerHeader from '../components/DrawerHeader';
// import HeaderIcon from '../components/HeaderIcon';

class Collection extends Component{

  render() {

    const {
      screenProps,
      navigation
      } = this.props;

    return (
      <View style={ styles.wrap }>
        <DrawerHeader
          title="收藏"
          navigation={ navigation }
          mainColor={ screenProps.mainColor }
        />
        <ScrollView >
          <View style={ styles.content }>


          </View>
          <Text>收藏</Text>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  content:{
    flex: 1,
    backgroundColor: "#000"
  }
})

export default Collection;