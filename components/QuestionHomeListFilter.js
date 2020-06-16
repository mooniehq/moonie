import { withTranslation } from '../i18n'

const QuestionHomeListFilter = ({ t }) => (
  <div className="ui three item menu">
    <a className="active item" href="#" title={t('filter_hot_tooltip')}>{t('hot')}</a>
    <a className="item" outline href="#" title={t('filter_week_tooltip')}>{t('week')}</a>
    <a className="item" outline href="#" title={t('filter_month_tooltip')}>{t('month')}</a>
  </div>
)

QuestionHomeListFilter.propTypes = {
}

export default withTranslation('common')(QuestionHomeListFilter)
