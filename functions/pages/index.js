import Link from 'next/link'

function Home () {
  return (
    <>
      <ul>
        <li>Home</li>
        <li>
          <Link href="/signin">
            <a>Sign In</a>
          </Link>
        </li>
        <li>
          <Link href="/signup">
            <a>Sign Up</a>
          </Link>
        </li>
      </ul>

      <h1>This is our homepage.</h1>
    </>
  )
}

export default Home
