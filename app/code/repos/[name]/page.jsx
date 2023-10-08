import {Suspense} from 'react'
import Link from 'next/link';
import Repo from '../../../components/Repo';
import RepoDir from "../../../components/RepoDirs";

const RepoPage = ({ params: {name}}) => {
  return (
      <div className='card'>
      <Link href='/code/repos' className='btn btn-back'>Back to repositories</Link>
      <Suspense fallback={<div>loading...</div>}>
        <Repo name={name} />
      </Suspense>
      <Suspense fallback={<div>loading Directories...</div>}>
        <RepoDir name={name} />
      </Suspense>
    </div>
  );
}

export default RepoPage