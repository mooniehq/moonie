import { withTranslation } from '../i18n'
import {
  Button,
  ButtonGroup,
  ButtonToolbar
} from 'reactstrap'

const QuestionHomeListFilter = ({ t }) => (
  <div className="d-flex justify-content-end mb-3">
    <ButtonToolbar>
      <ButtonGroup>
        <Button outline active href="#" title={t('filter_hot_tooltip')}>{t('hot')}</Button>
        <Button outline href="#" title={t('filter_week_tooltip')}>{t('week')}</Button>
        <Button outline href="#" title={t('filter_month_tooltip')}>{t('month')}</Button>
      </ButtonGroup>
    </ButtonToolbar>
  </div>
)

QuestionHomeListFilter.propTypes = {
}

export default withTranslation('common')(QuestionHomeListFilter)
