import React from 'react'
import { render } from 'react-dom'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import MUI from 'material-ui'
import SvgIcons from 'material-ui/lib/svg-icons'

const {
  ListItem,
  Toggle,
} = MUI

const {
  ActionBugReport,
} = SvgIcons

const Service = props => (
  <ListItem
    rightToggle={<Toggle name={props.key} defaultToggled={props.enabled} disabled={props.locked} />}
    primaryText={props.name}
  />
)

Service.mixins = [PureRenderMixin]

Service.propTypes = {
  key:     React.PropTypes.string,
  name:    React.PropTypes.string,
  enabled: React.PropTypes.bool,
  locked:  React.PropTypes.bool,
}

export default Service
