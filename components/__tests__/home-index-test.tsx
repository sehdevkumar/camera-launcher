import HomeScreen from "@/app/(home)";
import { ThemedText } from "@/components/ThemedText";
import * as React from "react";
import renderer from "react-test-renderer";


describe("Testing the Home Index file",()=> {
  
  it(`Home renders correctly`, () => {
    const tree = renderer
      .create(<HomeScreen></HomeScreen>)
      .toJSON();

    expect(tree).toMatchSnapshot();

  });

 

})
