import { GetStaticProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import React from 'react';
import { IUser } from '../../interfaces/User';
import styles from '../../styles/User.module.css';

type Props = {
  users: IUser[];
};

const UserPage: NextPage<Props> = ({ users }) => {
  const { push } = useRouter();

  const redirectTo = (userId: number) => push(`/users/${userId}`);

  return (
    <div className={styles.user_main}>
      {users.map((user, idx) => (
        <div key={idx} className={styles.user_item} onClick={() => redirectTo(user.id)}>
          {user.username} | {user.name} | {user.email}
        </div>
      ))}
    </div>
  );
};

export default UserPage;

export const getStaticProps: GetStaticProps = async () => {
  const data = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const results = await data.json();

  return {
    props: {
      users: results || [],
    },
  };
};
