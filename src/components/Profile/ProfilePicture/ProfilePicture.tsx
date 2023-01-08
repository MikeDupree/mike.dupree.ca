import styled from "@emotion/styled";
import Image from "next/image";
import { styles } from "./ProfilePicture.css"

type Props = {}

const StyledProfilePicture = styled.div(styles);


const ProfilePicture = (props: Props) => {
  return (
    <StyledProfilePicture>
      <Image src="/profile.jpeg" width={250} height={250} alt="Mike Dupree" style={{ borderRadius: "50%" }} />
    </StyledProfilePicture>
  )
}

export default ProfilePicture
