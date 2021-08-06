import * as React from 'react'
import Svg, { EMaskUnits, G, Mask, Path, SvgProps } from 'react-native-svg'

export function IconUSDC (props: SvgProps): JSX.Element {
  return (
    <Svg width={32} height={32} viewBox='0 0 24 24' {...props}>
      <Mask id='mask0' maskUnits={'userSpaceOnUse' as EMaskUnits.USER_SPACE_ON_USE} x='0' y='0' width='24' height='24'>
        {/* Cast userSpaceOnUse to pass type checking since enum of react-native-svg is used in runtime */}
        {/* Related open issue: https://github.com/react-native-svg/react-native-svg/issues/1210 */}
        <Path d='M0 6.10352e-05H24V24H0V6.10352e-05Z' fill='white' />
      </Mask>
      <G mask='url(#mask0)'>
        <Path fillRule='evenodd' clipRule='evenodd' d='M12 6.10352e-05C18.6275 6.10352e-05 24 5.37252 24 12.0001C24 18.6271 18.6275 24.0001 12 24.0001C5.37245 24.0001 0 18.6271 0 12.0001C0 5.37252 5.37245 6.10352e-05 12 6.10352e-05Z' fill='#2775CA' />
      </G>
      <Path fillRule='evenodd' clipRule='evenodd' d='M9.75091 20.3433C9.75091 20.6255 9.52987 20.7859 9.25687 20.7007C5.62864 19.5432 2.99805 16.1411 2.99805 12.1268C2.99805 8.11268 5.62864 4.7104 9.25687 3.55295C9.52987 3.46827 9.75091 3.62809 9.75091 3.91036V4.60718C9.75091 4.79509 9.60527 5.01627 9.42623 5.07749C6.55564 6.13159 4.49927 8.88927 4.49927 12.122C4.49927 15.3548 6.55564 18.113 9.42623 19.1666C9.60527 19.2326 9.75091 19.4489 9.75091 19.6374V20.3433Z' fill='white' />
      <Path fillRule='evenodd' clipRule='evenodd' d='M12.7483 17.7502C12.7483 17.9575 12.579 18.1269 12.372 18.1269H11.6236C11.4166 18.1269 11.2472 17.9575 11.2472 17.7502V16.5646C9.6095 16.3435 8.80973 15.4256 8.59318 14.1787C8.55541 13.9667 8.72478 13.7739 8.94132 13.7739H9.79782C9.97659 13.7739 10.1273 13.9011 10.1649 14.0796C10.325 14.8232 10.7532 15.3926 12.066 15.3926C13.0354 15.3926 13.7226 14.8514 13.7226 14.0424C13.7226 13.2326 13.3178 12.9269 11.8966 12.6914C9.79782 12.4091 8.80496 11.7737 8.80496 10.1267C8.80496 8.85619 9.76509 7.8681 11.252 7.65619V6.49382C11.252 6.28669 11.4215 6.11719 11.6284 6.11719H12.3767C12.5837 6.11719 12.7531 6.28669 12.7531 6.49382V7.68919C13.9625 7.90601 14.7295 8.5926 14.9791 9.73137C15.026 9.94819 14.8566 10.1501 14.6356 10.1501H13.8448C13.6755 10.1501 13.5343 10.0371 13.4826 9.87251C13.2709 9.14814 12.7531 8.83764 11.8542 8.83764C10.8613 8.83764 10.3483 9.31751 10.3483 9.99032C10.3483 10.7009 10.6403 11.0583 12.1651 11.2799C14.226 11.5622 15.2897 12.1503 15.2897 13.906C15.2897 15.2376 14.3014 16.3153 12.7531 16.5646V17.7502H12.7483Z' fill='white' />
      <Path fillRule='evenodd' clipRule='evenodd' d='M14.7431 20.7007C14.4703 20.7859 14.249 20.6255 14.249 20.3433V19.647C14.249 19.4399 14.3761 19.247 14.5737 19.1761C17.4443 18.122 19.5007 15.3644 19.5007 12.1316C19.5007 8.89882 17.4443 6.14114 14.5737 5.08705C14.3949 5.02105 14.249 4.80478 14.249 4.61618V3.91991C14.249 3.63764 14.4703 3.47305 14.7431 3.56196C18.3713 4.72009 21.0019 8.12223 21.0019 12.1364C20.9974 16.141 18.3713 19.5385 14.7431 20.7007Z' fill='white' />
    </Svg>
  )
}