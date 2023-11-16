import { afterEach, describe, expect } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';

describe('initial vitest', () => {

  afterEach(() => {
    cleanup();
  })

  it('should work vitest', function () {
    expect(true).toBeTruthy();
  });

  it('should work JSDOM', function () {
    render(<div>hello test</div>);
    expect(screen.queryByText(/hello/i)).toBeInTheDocument();
  });

});
