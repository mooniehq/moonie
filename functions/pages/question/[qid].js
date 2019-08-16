import { useRouter } from 'next/router';
import fetch from 'isomorphic-unfetch';


function Question({question}) {
  const router = useRouter();

  return (
    <>
      <h1>{router.query.qid}</h1>
      <p>{question}</p>
    </>
  );
}

Question.getInitialProps = async ({query}) => {
  const qid = query.qid
  const res = await fetch(`/api/question/${qid}`)
  const question = await res.json()
  return {question}
}

export default Question