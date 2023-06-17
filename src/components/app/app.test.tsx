import { fireEvent, render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom';
import renderer from "react-test-renderer";
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { App } from './app';
import { Store, AnyAction } from '@reduxjs/toolkit'


let domTree: renderer.ReactTestRenderer;
let store: Store<unknown, AnyAction>

beforeAll(() => {
  const mockStore = configureStore();
    const initialState = {
      todoList: {
        todoList: []
      },
      todoSelect: {
        select: "all"
      },
      setModalOpen: {
        isOpen: false
      }
    }
    store = mockStore(initialState);
});

describe("Components/App", () => {
  it("Matches DOM Snapshot", () => {
    domTree = renderer.create(
      <Provider store={store}>
        <App />
      </Provider>
    );

    expect(domTree).toMatchSnapshot();
  });

  it("Open modal", async () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    )

    const button = screen.getByTestId("button-openModal");

    expect(screen.queryByText("Title")).toBeNull();

    await userEvent.click(button);

    expect(screen.queryByText("Title")).toBeDefined();
  })
})
