function SignIn () {
  return (
  <>
    <div>Sign Up</div>
    <form action="/signup" method="post">
      <label>Email</label>
      <input name="username"/>
      <label>Password</label>
      <input name="password"/>
      <button type="submit">Submit</button>
    </form>
  </>
  )
}

export default SignIn
