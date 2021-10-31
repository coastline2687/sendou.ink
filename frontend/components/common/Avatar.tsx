import { styled } from "stitches.config";

export function Avatar({ src }: { src: string }) {
  return (
    <S_Container>
      <S_Avatar src={src} />
    </S_Container>
  );
}

const S_Container = styled("div", {
  position: "relative",
  userSelect: "none",
  overflow: "hidden",
  width: "38px",
  minWidth: "38px",
  height: "38px",
  borderRadius: "16px",
});

const S_Avatar = styled("img", {
  objectFit: "cover",
  width: "100%",
  height: "100%",
  display: "block",
});
