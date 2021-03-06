import React, { Component } from 'react';
import { SectionList, StyleSheet, Text, View, Button, Image } from 'react-native';
import IconButton from '../../../../components/g/IconButton';
import SimplePropTypes from '../../../../components/g/simple-prop-types';
import { Config, Images } from "../../../../config";
import ImgSwiper from "./ImgSwiper";
import ClassifyBtn from "./ClassifyBtn";
import SubHeader from "./SubHeader";

class RecommendList extends Component {

  //static defaultProps = {
  //
  //};

  render() {
    const {
      images,
      onItemPress,
      navigation,
      isRender,
      mainColor
    } = this.props;

    return isRender ?
      <View>
        <View style={styles.wrapper}>
          <ImgSwiper data={ images } mainColor={ mainColor }/>
          <ClassifyBtn onItemPress={onItemPress}/>
        </View>
        <SubHeader navigation={ navigation } mainColor={ mainColor }/>
      </View>
      : <View />
  }
}

const styles = StyleSheet.create({
  wrapper: {
    padding: Config.TabNavScreenPadding,
    paddingBottom: 0,
    borderBottomWidth: 1,
    borderColor: '#ccc'
  }
});

RecommendList.propTypes = SimplePropTypes(({ arrOfRq, shapeRq, strRq, boolRq, funcRq })=>({
  images: arrOfRq(strRq),
  onItemPress: funcRq,
  navigation: shapeRq({
    navigate: funcRq,
  }),
  isRender: boolRq
}))


export default RecommendList;