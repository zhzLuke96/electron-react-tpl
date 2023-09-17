import styled from 'styled-components';
import { ReactNode } from 'react';

const AppLayoutContainer = styled.div`
  display: flex;
  flex-flow: row;
  height: calc(100vh - 30px);
  width: 100vw;
`;

type nodeView = ReactNode | ReactNode[] | null;

export const AppLayout = ({
  components: { view },
}: {
  components: {
    view: nodeView;
  };
}) => {
  return <AppLayoutContainer>{view}</AppLayoutContainer>;
};
