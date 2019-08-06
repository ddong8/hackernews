<script>
import { validFeeds } from '~/common/api'

export default {
  fetch({ redirect, app }) {
    redirect(app.i18n.path(validFeeds[0]))
  }
}
</script>
