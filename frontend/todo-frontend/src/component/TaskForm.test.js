import { render, screen, fireEvent } from "@testing-library/react";
import TaskForm from "./TaskForm";
import { createTask } from "../api";

jest.mock("../api", () => ({
  createTask: jest.fn()
}));

test("shows error when title is empty", () => {

  const refreshMock = jest.fn();

  render(<TaskForm refresh={refreshMock} />);

  fireEvent.click(screen.getByText("Add"));

  expect(screen.getByText("Title is required")).toBeInTheDocument();

});

test("calls API when title provided", async () => {

  const refreshMock = jest.fn();

  createTask.mockResolvedValue({});

  render(<TaskForm refresh={refreshMock} />);

  fireEvent.change(screen.getByPlaceholderText("Title"), {
    target: { value: "Test Task" }
  });

  fireEvent.click(screen.getByText("Add"));

  expect(createTask).toHaveBeenCalledWith({
    title: "Test Task",
    description: "",
    completed: false
  });

});