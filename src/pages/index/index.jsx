import React, { Component } from 'react';
import indexLess from './index.module.less';
import BreadcrumbCustom from '../BreadCrumb';
// import AsyncLoading from '../../components/AsyncLoad/asyncLoad';
const echarts = require('echarts');

const lineOption = {
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [{
    data: [820, 932, 901, 934, 1290, 1330, 1320],
    type: 'line'
  }]
};
const barOption = {
  color: ['#3398DB'],
  tooltip: {
    trigger: 'axis',
    axisPointer: {            // 坐标轴指示器，坐标轴触发有效
      type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
    }
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: [
    {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      axisTick: {
        alignWithLabel: true
      }
    }
  ],
  yAxis: [
    {
      type: 'value'
    }
  ],
  series: [
    {
      name: '直接访问',
      type: 'bar',
      barWidth: '60%',
      data: [10, 52, 200, 334, 390, 330, 220]
    }
  ]
};
const pieOption = {
  title: {
    text: 'Customized Pie',
    left: 'center',
    top: 20,
    textStyle: {
      color: '#ccc'
    }
  },

  tooltip: {
    trigger: 'item',
    formatter: "{a} <br/>{b} : {c} ({d}%)"
  },

  visualMap: {
    show: false,
    min: 80,
    max: 600,
    inRange: {
      colorLightness: [0, 1]
    }
  },
  series: [
    {
      name: '访问来源',
      type: 'pie',
      radius: '55%',
      center: ['50%', '50%'],
      data: [
        { value: 335, name: '直接访问' },
        { value: 310, name: '邮件营销' },
        { value: 274, name: '联盟广告' },
        { value: 235, name: '视频广告' },
        { value: 400, name: '搜索引擎' }
      ].sort(function (a, b) { return a.value - b.value; }),
      roseType: 'radius',
      label: {
        normal: {
          textStyle: {
            color: 'rgba(255, 255, 255, 0.3)'
          }
        }
      },
      labelLine: {
        normal: {
          lineStyle: {
            color: 'rgba(255, 255, 255, 0.3)'
          },
          smooth: 0.2,
          length: 10,
          length2: 20
        }
      },
      itemStyle: {
        normal: {
          color: '#c23531',
          shadowBlur: 200,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      },

      animationType: 'scale',
      animationEasing: 'elasticOut',
      animationDelay: function (idx) {
        return Math.random() * 200;
      }
    }
  ]
};
export default class Index extends Component {

  componentDidMount() {
    this.setChart()
  }
  setChart = () => {
    const line = echarts.init(this.chart1);
    const bar = echarts.init(this.chart2);
    const pie = echarts.init(this.chart3)
    line.setOption(lineOption)
    bar.setOption(barOption)
    pie.setOption(pieOption)
  }
  render() {
    return (
      <React.Fragment>
        <BreadcrumbCustom first="首页" second="图表" thread="第三序列" />
        <div>
          <div className={indexLess.charts} ref={(ele) => this.chart1 = ele} />
          <div className={indexLess.charts} ref={(ele) => this.chart2 = ele} />
          <div className={indexLess.charts} ref={(ele) => this.chart3 = ele} />
          <div className={indexLess.charts} ref={(ele) => this.chart4 = ele} />
          <div className={indexLess.charts} ref={(ele) => this.chart5 = ele} />
          <div className={indexLess.charts} ref={(ele) => this.chart6 = ele} />
        </div>
      </React.Fragment>
    )
  }
}
