import Mock from 'mockjs'
import homeApi from './mockServerData/home'

//Mock.mock(url, function())
Mock.mock('/home/getData', homeApi.getStatisticalData)