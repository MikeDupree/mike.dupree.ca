import { mediaQueries } from '@/theme';

const { md } = mediaQueries;

export const styles = (props: any) => ({
  display: 'flex',
  justifyContent: 'center',
  [md]: {
    width: '100%'
  }
});
