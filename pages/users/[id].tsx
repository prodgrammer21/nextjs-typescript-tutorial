import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { IUser } from '../../interfaces/User';
import styles from '../../styles/UserView.module.css';

type Props = {
  user: IUser | null;
};

const UserViewPage: NextPage<Props> = ({ user }) => {
  return (
    <div className={styles.user_view_main}>
      <div>ID: {user?.id || ''}</div>
      <div>NAME: {user?.name || ''}</div>
      <div>USERNAME: {user?.username || ''}</div>
      <div>EMAIL: {user?.email || ''}</div>
    </div>
  );
};

export default UserViewPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const results = await data.json();

  const paths = results.map((result: IUser) => {
    return {
      params: { id: String(result.id) },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const userId = context.params?.id;
  let results: IUser | null = null;

  if (userId) {
    const data = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    results = await data.json();
  }

  return {
    props: {
      user: results,
    },
  };
};
