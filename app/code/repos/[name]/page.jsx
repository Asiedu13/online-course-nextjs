import React from 'react'
import Link from 'next/link';
import Repo from '../../../components/Repo';
import RepoDir from "../../../components/RepoDirs";

const RepoPage = ({ params: {name}}) => {
  return (
      <div className='card'>
          <Link href='/code/repos' className='btn btn-back'>Back to repositories</Link>
      <Repo name={name} />
      <RepoDir name={name} />
    </div>
  );
}

export default RepoPage