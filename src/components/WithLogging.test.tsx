import React from 'react';
import { render } from '@testing-library/react';
import WithLogging from './WithLogging';

const MockComponent = () => <div>Mock Component</div>;

describe('WithLogging', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('logs message with component name', () => {
    const WrappedComponent = WithLogging(MockComponent, 'TestComponent');
    render(<WrappedComponent />);

    expect(consoleSpy).toHaveBeenCalledWith('Hello from TestComponent');
  });
});
