import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { locationSelector } from '@/recoil/user';
import { useRecoilValue } from 'recoil';

const Index = () => {
  const getLocation = useRecoilValue(locationSelector);
  const [route, setRoute] = useState([]);



  useEffect(() => {
    // 주소로 위도 경도 찾기 - 목적지
    axios
      .get("https://next-13test.pages.dev/api/navermap", {
        params: {
          query: "서울 관악구 관악로 1",
        },
      })
      // 경로 탐색
      .then((response) => {
        console.log('변환 : ', response);
        console.log('컨버터1: ', response.data.data.addresses[0].x)
        console.log('컨버터2: ', response.data.data.addresses[0].y)
        axios
          .get("https://next-13test.pages.dev/api/path", {
            params: {
              start: `${getLocation.longitude},${getLocation.latitude}`,
              goal: `${response.data.data.addresses[0].x}, ${response.data.data.addresses[0].y}`,
              option: "trafast"
            },
          })
          .then((response) => {
            console.log('경로탐색 : ', response.data.data.route.trafast[0].path);
            // 경로 정보 설정
            setRoute(response.data.data.route.trafast[0].path);
          })
      })

  }, [getLocation])

  useEffect(() => {
    if (route.length > 0) {
      const map = new window.naver.maps.Map('map', {
        center: new window.naver.maps.LatLng(getLocation.latitude, getLocation.longitude), // 초기 지도 중심 좌표 설정
        zoom: 14, // 초기 줌 레벨 설정 - 높을수록 확대
      });

      // 경로를 표시할 Polyline 추가
      const polyline = new window.naver.maps.Polyline({
        map,
        path: route,
        strokeColor: '#ff0000', // 선 색상
        strokeWeight: 3, // 선 굵기
      });

      const path = route.map(coordPair => {
        const [latitude, longitude] = coordPair;
        return new window.naver.maps.LatLng(longitude, latitude);
      });


      // 출발지, 경유지, 도착지 마커 추가
      const markers = route.map((coordinate, index) => {
        if (index === 0 || index === path.length - 1) {
          return new window.naver.maps.Marker({
            position: coordinate,
            map
          });
        }
        return null;
      }).filter(marker => marker !== null);

      return () => {
        // 컴포넌트가 언마운트되면 지도 객체를 정리
        markers.forEach((marker: any) => marker.setMap(null));
        polyline.setMap(null);
      };
    }
  }, [route, getLocation])

  return (
    <div>
      맵
      <div id="map" style={{ width: '100%', height: '500px' }}></div>
    </div>
  )
}

export default Index