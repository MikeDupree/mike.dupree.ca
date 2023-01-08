import styled from "@emotion/styled"
import { styles } from "./ProfileName.css";

type Props = {}

const StyledProfile = styled.div(styles);

const ProfileName = (props: Props) => {
  return (
    <StyledProfile>
      <h1>Michael Dupree</h1>
      <h2>Software Engineer at Acro Media</h2>
      <h3>🇨🇦 BC, Canada</h3>
    </StyledProfile>
  )
}

export default ProfileName
