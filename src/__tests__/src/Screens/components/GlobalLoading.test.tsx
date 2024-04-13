
import { render } from '@testing-library/react-native';
import React from 'react';
import { GlobalLoading } from '../../../../components/LoadingGlobal';

describe('GlobalLoading', () => {
  it('should render the text when provided', () => {
    const { getByText } = render(<GlobalLoading text="Loading..." />);
    expect(getByText('Loading...')).toBeTruthy();
  });

  it('should not render the text when not provided', () => {
    const { queryByText } = render(<GlobalLoading />);
    expect(queryByText(/./)).toBeNull();
  });
});
