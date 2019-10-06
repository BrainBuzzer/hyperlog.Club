import React from "react"
import { render } from "@testing-library/react"

import Header from "../header"

describe("Header", () => {
  it("renders correctly", () => {
    const { asFragment }= render(<Header />)
    expect(asFragment()).toMatchSnapshot()
  })
})
