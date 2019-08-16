import { useRouter } from 'next/router';
import fetch from 'isomorphic-unfetch';

function Question({}) {
  const router = useRouter();

  return (
    <>
      <h1>{router.query.qid}</h1>
      <p>This is the queston post content.</p>
    </>
  );
}

Question.getInitialProps = async ({query}) => {
  const qid = query.qid
  const question = await fetch(`/api/question/${qid}`)
  return {question}
}

export default Question