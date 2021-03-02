import { memo } from 'react';
import { gql, useQuery } from '@apollo/client';

export const ROOT_QUERY = gql`
  query {
    totalUsers
    allUsers {
      githubLogin
      name
      avatar
    }
  }
`;

const User = () => {
  const { loading, error, data } = useQuery(ROOT_QUERY);

  return <div>사용자 로딩 중: {loading ? '네' : '아니오'}</div>;
};

export default memo(User);
