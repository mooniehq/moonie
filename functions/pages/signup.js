import {  withTranslation } from '../i18n';

function SignUp ({t}) {
  return (
  <>
    <div>{t('sign-up')}</div>
    <form action="/signup" method="post">
      <label>{t('email')}</label>
      <input name="username"/>
      <label>{t('password')}</label>
      <input name="password"/>
      <button type="submit">{t('submit')}</button>
    </form>
  </>
  )
}

SignUp.getInitialProps = () => ({
  namespacesRequired: ['common'] 
});

export default withTranslation('common')(SignUp);
