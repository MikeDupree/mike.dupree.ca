import styled from "@emotion/styled"
import { styles } from "./ProfileName.css";
import { TypeAnimation } from 'react-type-animation';

type Props = {}

const StyledProfile = styled.div(styles);

const ProfileName = (props: Props) => {
  return (
    <StyledProfile>
      <h1>
        Mike Dupree
      </h1>
      <h2>
        Software Engineer
      </h2>
      <h3>
        🇨🇦 BC, Canada
      </h3>

    </StyledProfile>
  )
}

export default ProfileName
