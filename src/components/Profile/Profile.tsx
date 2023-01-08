import styled from '@emotion/styled';
import { SocialIcon } from 'react-social-icons';
import ProfileName from './ProfileName';
import ProfilePicture from './ProfilePicture';
import { mediaQueries } from '@/theme';

const { md, lg } = mediaQueries;
const StyledProfile = styled.div({
  display: 'flex',
  flexWrap: 'wrap-reverse',
  justifyContent: 'space-between',
  '.social': {
    width: '100%',
    [md]: {
      display: 'flex',
      justifyContent: 'center',
    },
    '.social-container': {
      width: '330px',
      display: 'flex',
      justifyContent: 'space-evenly'
    }
  },
  '.quote': {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    ['@media (max-width: 1100px)']: {
      display: 'none'
    },
  }
});

type Props = {}

const Profile = (props: Props) => {
  return (
    <StyledProfile>
      <div className='social'>
        <div className='social-container'>
          <SocialIcon bgColor='white' url="https://github.com/MikeDupree" />
          <SocialIcon bgColor='white' url="https://gitlab.com/mikedupree" />
          <SocialIcon bgColor='white' url="https://twitter.com/_mdupree" />
          <SocialIcon bgColor='white' url="https://www.linkedin.com/in/mike-dupree-02455899/" />
        </div>
      </div>
      <ProfileName />
      <div className='quote'>
        <h4>&quot;Be who you are and say what you will,<br /> because those who mind don&apos;t matter<br /> and those who matter don&apos;t mind.&quot;<br /> - Dr. Suess</h4>
      </div>
      <ProfilePicture />
    </StyledProfile>
  )
}

export default Profile;
