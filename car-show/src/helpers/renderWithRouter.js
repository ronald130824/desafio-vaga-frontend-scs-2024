import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';

const renderWithRouter = (ui, { route = '/' } = {}) => {
  window.history.pushState({}, 'Test page', route);

  return {
    ...render(ui, { wrapper: MemoryRouter }),
  };
};

export default renderWithRouter;
