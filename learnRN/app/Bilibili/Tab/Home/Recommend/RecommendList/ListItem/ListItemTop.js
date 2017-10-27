import React, { PureComponent  } from 'react';
import { SectionList, StyleSheet, Text, View, Image } from 'react-native';
import { Config, Images } from "../../../../../config";

class InfoItem extends PureComponent {
  render() {
    const {
      title,
      style,
      icon
    } = this.props;

    return (
      <View style={ style }>
        <Image
          source={ icon }
          style={ styles.infoIcon }
        />
        <Text style={ styles.info_text }>{ title }</Text>
      </View>
    )
  }
}

class ListItemTop extends PureComponent {

  render() {

    const {
      imageStyle,
      source,
      play,
      danmu,
      videoTime,
      imageHeight,
    } = this.props;

    // cover contain stretch repeat center
    return (
      <View style={ styles.wrap }>
        {/*本来想用ImageBackGround的设置了圆角没反应就不用了*/}
        <Image
          source={ source }
          style={ [imageStyle, { height: imageHeight + infoHeight }] }
          resizeMode='cover' />
        <View style={[ styles.info, {top: imageHeight} ]}>
            <View style={ styles.infoLeft }>
              <InfoItem
                icon={ Images.player }
                style={ styles.infoItem }
                title={ play }
              />
              <InfoItem
                icon={ Images.danmu }
                style={ styles.infoItem }
                title={ danmu }
              />
            </View>
            <View style={ styles.infoRight }>
              <Text style={ styles.infoRight_text }>{ videoTime }</Text>
            </View>
        </View>
      </View>
    )
  }
}

const infoHeight = 25;
const styles = StyleSheet.create({
  wrap: {
    // alignItems: 'center',
    justifyContent: 'space-around',
  },
  info: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    //flex: 0.5,
    width: '100%',
    height: infoHeight,
    backgroundColor: 'rgba(0,0,0,0.3)',
    position: 'absolute',
    //top: 20
  },
  // infoLeft
  infoLeft: {
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  infoItem: {
    height: '100%',
    marginLeft: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoIcon: {
    height: 21,
    width: 18,
    tintColor: '#fff'
  },
  info_text: {
    color: '#fff',
    fontSize: 12,
    marginLeft: 5
  },
  // infoRight
  infoRight: {
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  infoRight_text: {
    color: '#fff',
    fontSize: 12,
    marginRight: 10
  },
});

export default ListItemTop;