import styled from "@emotion/styled"
import { styles } from "./ProfileName.css";
import { TypeAnimation } from 'react-type-animation';

type Props = {}

const StyledProfile = styled.div(styles);

const ProfileName = (props: Props) => {
  return (
    <StyledProfile>
      <h1>
 <TypeAnimation
          className='TypeAnimation'
          sequence={[
            'Michael Dupree',
          ]}
          wrapper="div"
          cursor={false}
        />

      </h1>
      <h2>
        <TypeAnimation
          className='TypeAnimation'
          sequence={[
            1000,
            'Software Developer',
            700, // Waits 1s
            'Software Engineer',
            700, // Waits 2s
            'Software Architect',
            3000,
          ]}
          wrapper="div"
          cursor={true}
          style={{
            fontSize: '1em',
          }}
        />
        </h2>
      <h3>
        <TypeAnimation
          className='TypeAnimation'
          sequence={[
            5700,
            '🇨🇦 BC, Canada'
          ]}
          wrapper="div"
          cursor={true}
          style={{
            fontSize: '1em',
          }}
        />
        </h3>

    </StyledProfile>
  )
}

export default ProfileName
