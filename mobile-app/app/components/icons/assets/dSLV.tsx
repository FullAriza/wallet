import * as React from 'react'
import Svg, { Path, SvgProps, Circle } from 'react-native-svg'

export function dSLV (props: SvgProps): JSX.Element {
  return (
    <Svg
      height={32}
      width={32}
      viewBox='0 0 32 32'
      {...props}
    >
      <Circle cx='16' cy='16' r='16' fill='#DC7E00' />
      <Path
        d='M8.29476 17.2905H6.66692C6.65978 17.7617 6.74545 18.1687 6.92394 18.5114C7.10244 18.8541 7.34161 19.1361 7.64148 19.3574C7.94849 19.5788 8.29833 19.7394 8.69101 19.8394C9.09083 19.9465 9.50137 20 9.92261 20C10.4438 20 10.9007 19.9393 11.2934 19.8179C11.6932 19.6966 12.0252 19.5288 12.2894 19.3146C12.5607 19.0933 12.7642 18.8327 12.8998 18.5328C13.0355 18.2329 13.1033 17.9081 13.1033 17.5582C13.1033 17.1299 13.0105 16.78 12.8249 16.5087C12.6464 16.2303 12.4322 16.0089 12.1823 15.8447C11.9324 15.6805 11.679 15.5627 11.4219 15.4913C11.172 15.4128 10.9757 15.3592 10.8329 15.3307C10.3546 15.2093 9.96544 15.1093 9.66558 15.0308C9.37285 14.9523 9.14081 14.8737 8.96946 14.7952C8.80525 14.7166 8.69458 14.631 8.63746 14.5382C8.58035 14.4453 8.55179 14.324 8.55179 14.174C8.55179 14.0098 8.58749 13.8742 8.65888 13.7671C8.73028 13.66 8.81953 13.5707 8.92662 13.4993C9.04086 13.4279 9.1658 13.378 9.30145 13.3494C9.43711 13.3208 9.57276 13.3066 9.70842 13.3066C9.91547 13.3066 10.1047 13.3244 10.276 13.3601C10.4545 13.3958 10.6116 13.4565 10.7472 13.5422C10.8829 13.6278 10.99 13.7456 11.0685 13.8956C11.1542 14.0455 11.2042 14.2347 11.2185 14.4632H12.8463C12.8463 14.0205 12.7606 13.6457 12.5893 13.3387C12.4251 13.0245 12.2002 12.7675 11.9146 12.5676C11.629 12.3677 11.3006 12.2249 10.9293 12.1392C10.5652 12.0464 10.1832 12 9.78338 12C9.44068 12 9.09797 12.0464 8.75527 12.1392C8.41257 12.232 8.10556 12.3748 7.83425 12.5676C7.56294 12.7604 7.34161 13.0031 7.17026 13.2958C7.00605 13.5814 6.92394 13.9206 6.92394 14.3133C6.92394 14.6631 6.9882 14.963 7.11671 15.2129C7.25237 15.4556 7.42729 15.6591 7.64148 15.8233C7.85567 15.9875 8.09842 16.1232 8.36973 16.2303C8.64103 16.3302 8.91948 16.4159 9.20507 16.4873C9.48352 16.5658 9.75839 16.6372 10.0297 16.7015C10.301 16.7657 10.5438 16.8407 10.7579 16.9264C10.9721 17.012 11.1435 17.1191 11.272 17.2477C11.4077 17.3762 11.4755 17.544 11.4755 17.751C11.4755 17.9438 11.4255 18.1044 11.3256 18.2329C11.2256 18.3543 11.1007 18.4507 10.9507 18.5221C10.8008 18.5935 10.6401 18.6435 10.4688 18.672C10.2974 18.6934 10.1368 18.7041 9.98686 18.7041C9.76553 18.7041 9.55134 18.6792 9.34429 18.6292C9.13724 18.5721 8.95518 18.49 8.79811 18.3829C8.64817 18.2686 8.5268 18.1223 8.43398 17.9438C8.34117 17.7653 8.29476 17.5475 8.29476 17.2905Z'
        fill='white'
      />
      <Path d='M14.1037 12.1821V19.8286H19.512V18.415H15.7851V12.1821H14.1037Z' fill='white' />
      <Path
        d='M23.0245 19.8286L25.5627 12.1821H23.8277L22.1035 17.5582H22.0821L20.3793 12.1821H18.655L21.1289 19.8286H23.0245Z'
        fill='white'
      />
    </Svg>
  )
}