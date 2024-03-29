import Link from "next/link";
import { useRouter } from "next/router";
import styled from "@emotion/styled";
import { mediaQueries } from "@/theme";

import { TypeAnimation } from "react-type-animation";

const { sm } = mediaQueries;

type Props = {};

const DynamicNavigationLink = () => {
  const { asPath } = useRouter();
  const uriArgs = asPath.split("/");
  if (uriArgs.length > 2) {
    return (
      <Link href={`/${uriArgs[1]}`}>
        <>
          <div
            style={{ color: "#DA7110", display: "inline", fontSize: "1.5rem" }}
          >
            {`↚`}
          </div>
          {`${uriArgs[1].toUpperCase()}`}
        </>
      </Link>
    );
  }
  return <></>;
};

const StyledHeader = styled.div({
  padding: "0 25px",
  position: "sticky",
  top: 0,
  width: "100%",
  height: "51px",
  background: "#080808",
});

const Header = (props: Props) => {
  const { asPath } = useRouter();
  if (asPath === "/") return <></>;

  return (
    <StyledHeader>
      <div
        style={{
          padding: "10px 0",
          borderBottom: "1px solid rgba(255, 255, 255, 0.13)",
          fontSize: "1.2rem",
          display: "flex",
          alignContent: "space-between",
        }}
      >
        <div
          css={{
            width: "33%",
            [sm]: {
              width: "50%",
            },
          }}
        >
          <Link href="/">
            <TypeAnimation
              className="TypeAnimation"
              sequence={[
                "Mike Dupree", // Types 'One'
                1000, // Waits 1s
                "Software Developer", // Deletes 'One' and types 'Two'
                2000, // Waits 2s
                "< Back", // Types 'Three' without deleting 'Two'
                3000,
                () => {
                  console.log("Done typing!"); // Place optional callbacks anywhere in the array
                },
              ]}
              wrapper="div"
              cursor={true}
              repeat={Infinity}
              style={{
                fontSize: "1em",
              }}
            />
          </Link>
        </div>
        <div
          style={{ width: "33%", textAlign: "center", verticalAlign: "center" }}
        >
          <div style={{ padding: "6px 20px" }}>{asPath.split("/").pop()}</div>
        </div>
        <div
          css={{
            width: "33%",
            display: "flex",
            justifyContent: "flex-end",
            [sm]: {
              width: "50%",
            },
          }}
        >
          <DynamicNavigationLink />
        </div>
      </div>
    </StyledHeader>
  );
};

export default Header;
