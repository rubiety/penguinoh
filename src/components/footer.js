import React from "react"
import config from "../config.yaml"

export default class Footer extends React.Component {

    constructor(props) {
        super(props);

        this.handleTextChange = this.handleTextChange.bind(this)

        this.state = {
          showMoreText: false,
        };
    }

    handleTextChange(showMoreText) {
    this.setState((prevState, props) => {
            if (prevState.showMoreText === showMoreText) {
                return { showMoreText: false }
            }
            return { showMoreText: showMoreText }
    })
    }

    componentDidUpdate(prevProps, prevState) {
        /* handleTextChange shows text under footer, so we want to scroll down to see the text.
         * It's not a big jump; the text appears right under the link that the user clicked. */
        if (!prevState.showMoreText && this.state.showMoreText) {
            window.scrollTo(0, 100000);
        }
    }

    render() {
        return (
            <footer>
                <br/><br/>
                <center>
                    <div>
                        {this.state.showMoreText}
                    </div>
                </center>
                <br/>
            </footer>
        )
    }
}
