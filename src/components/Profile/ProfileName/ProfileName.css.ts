import { mediaQueries } from '@/theme';

const { md } = mediaQueries;

const attributes = {
  textAlign: "center",
} as const;

export const styles = (props: any) => ({
  h1: {
    margin: 0,
    fontSize: '3.5rem'
  },
  [md]: {
    width: '100%',
    ...attributes
  }
});
