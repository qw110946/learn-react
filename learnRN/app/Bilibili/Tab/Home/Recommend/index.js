import React, { PureComponent } from 'react';
import { StyleSheet, View } from 'react-native';
import FadeInView from '../../../components/g/FadeInView';
import SubTitle from './SubTitle';
import { Config,Images } from "../../../config";
import RecommendList from './RecommendList';

class Recommend extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      refreshing: false, // 刷新按钮状态 是否保持刷新
    }
    this.onRefresh = this.onRefresh.bind(this);
  this.pullUpRefresh = this.pullUpRefresh.bind(this);
}

  // 组件加载完毕
  componentDidMount() {
    // 获取数据
    // debugger
    if(this.props.screenProps.getAppState('recommend').length === 0){
      this.onRefresh();
    }
  }

  onRefresh() {
    this.setState({
      refreshing: true
    },()=>{
      this.props.screenProps.getAppState('newRecommend',[6,'before',()=>{
        this.setState({
          refreshing: false
        });
      }])
    });
  }

  pullUpRefresh(setRefreshState) {
    setRefreshState('refresh', ()=>{
      this.props.screenProps.getAppState('newRecommend',[6,'after',()=>{
        setRefreshState(null)
      }])
    })
  }


  render() {

    const {
      refreshing,
      } = this.state;
    const {
      screenProps
    } = this.props;

// debugger
    return (
      <FadeInView style={[styles.wrap]}>
        <SubTitle title="综合" style={ styles.subTitle } _navigation={ screenProps._navigation }/>
        <View style={ styles.content }>
          <RecommendList
            onRefresh={ this.onRefresh }
            pullUpRefresh={ this.pullUpRefresh }
            refreshing={ refreshing }
            data={ screenProps.getAppState('recommend') }
          />
        </View>
      </FadeInView>
    );
  }
}

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: Config.TabNavScreenColor
  },
  subTitle: {
    height: 38,
  },
  content: {
    flex: 1,
    flexDirection: 'column',
    //padding: 12,
    // alignItems: 'center',
  }
});

export default Recommend;