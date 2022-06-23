import { Lesson } from "./lesson";
import renderer from "react-test-renderer";

it("renders correctly", () => {
  const tree = renderer
    .create(
      <Lesson
        title="Aula 01"
        slug="aula-01"
        availableAt={new Date("2020-01-01")}
        type="live"
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
