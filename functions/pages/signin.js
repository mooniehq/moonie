import {  withTranslation } from '../i18n';

const SignIn = ({t}) => {
  return (
  <>
    <div>{t('sign-in')}</div>
    <form action="/signin" method="post">
        <label htmlFor="subdomain">{t('community')}</label>
        <input id="subdomain" name="subdomain" />
        <label htmlFor="email">{t('email')}</label>
        <input id="email" name="email" />
        <label htmlFor="password">{t('password')}</label>
        <input id="password" name="password" />
        <button type="submit">{t('submit')}</button>
      </form>
  </>
  )
}

SignIn.getInitialProps = () => ({
  namespacesRequired: ['common'] 
});

export default withTranslation(['common'])(SignIn);
