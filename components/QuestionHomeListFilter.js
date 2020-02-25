import { withTranslation } from '../i18n'

const QuestionHomeListFilter = ({ t }) => (
  <div>
    <a href="#" title={t('filter_hot_tooltip')}>{t('hot')}</a>
    <a outline href="#" title={t('filter_week_tooltip')}>{t('week')}</a>
    <a outline href="#" title={t('filter_month_tooltip')}>{t('month')}</a>
  </div>
)

QuestionHomeListFilter.propTypes = {
}

export default withTranslation('common')(QuestionHomeListFilter)
