import * as React from 'react'
import Svg, { Path, SvgProps, Circle } from 'react-native-svg'

export function dGLD (props: SvgProps): JSX.Element {
  return (
    <Svg
      height={32}
      width={32}
      viewBox='0 0 32 32'
      {...props}
    >
      <Circle cx='16' cy='16' r='16' fill='#F5E045' />
      <Path
        d='M11.1916 18.9612L11.3629 19.8286H12.4339V15.6948H9.22105V16.9478H10.9131C10.8632 17.4833 10.6847 17.8938 10.3777 18.1794C10.0778 18.4578 9.64943 18.5971 9.09253 18.5971C8.71413 18.5971 8.39284 18.5257 8.12868 18.3829C7.86451 18.2329 7.65032 18.0366 7.48611 17.7938C7.32189 17.5511 7.20052 17.2798 7.12198 16.9799C7.05059 16.6729 7.01489 16.3588 7.01489 16.0375C7.01489 15.7019 7.05059 15.3771 7.12198 15.0629C7.20052 14.7488 7.32189 14.4703 7.48611 14.2276C7.65032 13.9777 7.86451 13.7813 8.12868 13.6386C8.39284 13.4886 8.71413 13.4137 9.09253 13.4137C9.49949 13.4137 9.84577 13.5207 10.1314 13.7349C10.4169 13.9491 10.6097 14.2704 10.7097 14.6988H12.3161C12.2733 14.2633 12.1555 13.8777 11.9627 13.5422C11.7699 13.2066 11.5236 12.9246 11.2237 12.6961C10.931 12.4676 10.599 12.2963 10.2277 12.1821C9.86362 12.0607 9.48521 12 9.09253 12C8.50708 12 7.97874 12.1035 7.50753 12.3106C7.04345 12.5176 6.65077 12.8032 6.32948 13.1673C6.00819 13.5315 5.76188 13.9598 5.59052 14.4525C5.41917 14.938 5.3335 15.4663 5.3335 16.0375C5.3335 16.5944 5.41917 17.1156 5.59052 17.6011C5.76188 18.0794 6.00819 18.4971 6.32948 18.8541C6.65077 19.2111 7.04345 19.4931 7.50753 19.7001C7.97874 19.9 8.50708 20 9.09253 20C9.46379 20 9.83149 19.925 10.1956 19.7751C10.5597 19.618 10.8917 19.3467 11.1916 18.9612Z'
        fill='#284033'
      />
      <Path d='M13.7917 12.1821V19.8286H19.2V18.415H15.4731V12.1821H13.7917Z' fill='#284033' />
      <Path
        d='M21.8214 18.415V13.5957H23.0209C23.435 13.5957 23.7813 13.6564 24.0597 13.7778C24.3453 13.892 24.5738 14.0598 24.7451 14.2811C24.9165 14.5025 25.0379 14.7702 25.1093 15.0843C25.1878 15.3913 25.2271 15.7376 25.2271 16.1232C25.2271 16.5444 25.1735 16.9014 25.0664 17.1941C24.9593 17.4868 24.8165 17.726 24.638 17.9116C24.4596 18.0901 24.2561 18.2187 24.0276 18.2972C23.7991 18.3757 23.5635 18.415 23.3208 18.415H21.8214ZM20.1401 12.1821V19.8286H23.4386C24.024 19.8286 24.531 19.7323 24.9593 19.5395C25.3949 19.3396 25.7554 19.0683 26.041 18.7256C26.3337 18.3829 26.5515 17.9759 26.6943 17.5047C26.8371 17.0335 26.9085 16.5194 26.9085 15.9625C26.9085 15.3271 26.8192 14.7738 26.6407 14.3025C26.4694 13.8313 26.2266 13.4386 25.9125 13.1245C25.6055 12.8104 25.2378 12.5747 24.8094 12.4177C24.3882 12.2606 23.9312 12.1821 23.4386 12.1821H20.1401Z'
        fill='#284033'
      />
    </Svg>
  )
}
