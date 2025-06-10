import { Center, Loader, Alert } from '@mantine/core';
import type { LoaderWithErrorProps } from '../types';

export const LoaderWithError = ({ isLoading, error, children }:LoaderWithErrorProps) => {
  if (isLoading) {
    return (
      <Center m={60}>
        <Loader size="lg" type="dots" />
      </Center>
    );
  }

  if (error) {
    return (
      <Alert color="red" title="Ошибка">
        {error}
      </Alert>
    );
  }

  return children;
};