function SignIn () {
  return (
  <>
    <div>Sign in</div>
    <form action="/signin" method="post">
      <label htmlFor="subdomain">Community</label>
      <input id="subdomain" name="subdomain" />
      <label htmlFor="email">Email</label>
      <input id="email" name="email" />
      <label htmlFor="password">Password</label>
      <input id="password" name="password" />
      <button type="submit">Submit</button>
    </form>
  </>
  )
}

export default SignIn
