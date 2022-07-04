import styled from '@modern-js/runtime/styled';

export const TodoFormWrapper = styled.div`
  .NewTodoForm {
    margin-top: 3rem;
    display: flex;
    flex-wrap: wrap;
  }

  .NewTodoForm label {
    min-width: 100%;
    margin-bottom: 0.5rem;
    font-size: 1.3rem;
  }

  .NewTodoForm input {
    flex-grow: 1;
    border: none;
    background: #f7f1f1;
    padding: 0 1.5em;
    font-size: initial;
  }

  .NewTodoForm button {
    padding: 0 1.3rem;
    border: none;
    background: #ff6666;
    color: white;
    text-transform: uppercase;
    font-weight: bold;
    border: 1px solid rgba(255, 255, 255, 0.3);
    margin-left: 5px;
    cursor: pointer;
    transform: background 0.2s ease-out;
  }

  .NewTodoForm button:hover {
    background: #ff5e5e;
  }

  .NewTodoForm input,
  .NewTodoForm button {
    font-family: 'Quicksand', sans-serif;
    height: 3rem;
  }
`;
