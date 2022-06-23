import { render } from "@testing-library/react";
import { Video } from "./video";
import renderer from "react-test-renderer";

it("text", () => {
  const { getByText } = render(<Video label="Video" />);
  expect(getByText("Video")).toBeTruthy();
});

it("renders correctly", () => {
  const tree = renderer.create(<Video label="Video" />).toJSON();
  expect(tree).toMatchSnapshot();
});
