import { h, Component, JSX } from 'preact'

class KitComponentButton extends Component<{
  block?: boolean;
}> {
  render(): JSX.Element {
    const {
      block,
    } = this.props
    return (
      <div className="kit-component-button"
        data-block={ block }
      ></div>
    )
  }
}

export default KitComponentButton
