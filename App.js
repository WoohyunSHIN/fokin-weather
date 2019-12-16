import React from 'react';
import { Alert } from 'react-native';
import Loading from './Loading';
import * as Location from "expo-location";
import axios from "axios";

const API_KEY = "827e4d749a8ece10a6277d4e707ad2c6";

/*
test code
*/

/* 
지역 정보를 사용하기 위해서 expo API 에서 찾아본후,
expo install expo-location 
로 설치

사용자의 현재 정보를 받기 위해서 한 작업 class를 확장해서 React에 있는 Component를 받기로 했다.
1. 현재 위치 받는 것
  getLocation = async() => {
    const location = await Location.getCurrentPositionAsync();
    console.log(location);
  }
  componentDidMount(){
    this.getLocation();
  }

2. 사용자로 부터 퍼미션을 받아야한다.
2-1. try catch 로 만약 퍼미션을 못받을 경우 만듬
try{

}catch(error){
  Alert.Alert("Can't find","So sad")
  }

2-2. 퍼미션 요구 코드
await Location.requestPermissionsAsync();
*/

/*
export default function App() {
  return <Loading />;
}

3. 알림 찍는 코드
import { Alert } from 'react-native';
Alert.alert("Can't find","So sad");

4. 좌표값을 가져오는 코드
Object {
  "coords": Object {
    "accuracy": 65,
    "altitude": 51.53416061401367,
    "altitudeAccuracy": 10,
    "heading": -1,
    "latitude": xxx,
    "longitude": xxx,
    "speed": -1,
  },
  "timestamp": xxx,
}
----> coords 오브젝트가 location 오브젝트 안에 존재한다.
(변경)
from
      const location = await Location.getCurrentPositionAsync();
      console.log(location);
to  
      const {coords : {latitude,longitude}} = await Location.getCurrentPositionAsync();
      console.log(latitude,longitude);

5. state 를 만들어서 값이 있으면 isLoading 을 true 로 다음 렌더를 보내주고 없을 경우 null를 화면에 뿌리게 한다.
5-1. 
(추가)
  state={
    isLoading:true
  }
  
  this.setState({isLoading:false});
(변경)
  const { isLoading } = this.state;
  return isLoading ? <Loading /> : null ;

6. Call API and Get informations
npm install axios
6-1. Create function 

*/
export default class extends React.Component{
  state={
    isLoading:true
  };
  getWeather = async(latitude,longitude) => {
    //const {data} = await axios.get(`api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}`);
    const {data} = await axios.get("api.openweathermap.org/data/2.5/weather?lat=37.785834&lon=-122.406417&APPID=827e4d749a8ece10a6277d4e707ad2c6");
    console.log(data);
  };

  getLocation = async() => {
    try {
      //throw Error();
      await Location.requestPermissionsAsync();
      //const location = await Location.getCurrentPositionAsync();
      //console.log(Location);
      /*
      {} 를 JS 에서는 ES6 라고 표현하는데 python flask 에 jinja2 랑 거의 같은 역활을 한다.
      */
      const {coords : {latitude,longitude}} = await Location.getCurrentPositionAsync();
      console.log(latitude,longitude);
      this.getWeather(latitude,longitude);
      this.setState({isLoading:false});
    } catch (error) {
      Alert.alert("Can't find","So sad");
    }
  };
  componentDidMount(){
    this.getLocation();
  };
  render(){
    const { isLoading } = this.state;
    return isLoading ? <Loading /> : null ;
  };
};