function SignIn () {
  return (
  <>
    <div>Sign in</div>
    <form action="/login" method="post">
      <label>Email</label>
      <input name="username"/>
      <label>Password</label>
      <input name="password"/>
      <button type="submit">Login</button>
    </form>
  </>
  )
}

export default SignIn
