import {  withTranslation } from '../i18n';

const SignIn = ({t}) => {
  return (
  <>
    <div>{t('sign-in')}</div>
    <form action="/login" method="post">
      <label>{t('email')}</label>
      <input name="username"/>
      <label>{t('password')}</label>
      <input name="password"/>
      <button type="submit">{t('login')}</button>
    </form>
  </>
  )
}

SignIn.getInitialProps = () => ({
  namespacesRequired: ['common'] 
});

export default withTranslation(['common'])(SignIn);
