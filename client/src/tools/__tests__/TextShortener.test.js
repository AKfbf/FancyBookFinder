import shortenText from "../TextShortener";

describe("Testing TextShortener", () => {
  test("Inserted long text is shortened to one sentence nad max length =  length + 3 characters", () => {
    const length = 100;
    const longText =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit Vestibulum ligula metus, tincidunt id feugiat vel, porta ullamcorper lacus Aliquam vulputate ut ipsum sed congue. Nunc eu mauris nunc Phasellus odio nulla, tincidunt at tincidunt eget, sagittis at magna Cras sit amet ipsum eu lacus tempor fringilla sit amet tincidunt nisi Aliquam vitae lorem sit amet orci rhoncus gravida. Nullam lacinia massa in sapien blandit, ut pharetra turpis pellentesque. Sed in vestibulum dolor. Vestibulum rutrum consectetur urna vel finibus. Vivamus tempus scelerisque metus, scelerisque facilisis metus rutrum nec. Quisque gravida sapien sit amet justo venenatis efficitur. Sed maximus leo at lectus volutpat, quis faucibus odio gravida. Aliquam eu ante turpis. Nullam ac magna placerat ligula venenatis ultricies.";
    const shortText = shortenText(longText, length);
    expect(shortText).toHaveLength(length + 3);
  });
});
