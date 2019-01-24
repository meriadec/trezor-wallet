/* @flow */

import * as React from 'react';
import PropTypes from 'prop-types';
import { KEY_CODE } from 'config/variables';
import type { Props as BaseProps } from '../Container';

const withCancel = (WrappedComponent: typeof React.Component | any) => {
    type Props = {
        onCancel: $ElementType<$ElementType<BaseProps, 'modalActions'>, 'onCancel'>;
    }

    return class extends React.Component<Props> {
        constructor(props: Props) {
            super(props);
            this.escapeHandler = this.escapeHandler.bind(this);
        }

        componentDidMount() {
            window.addEventListener('keydown', this.escapeHandler, false);
        }

        componentWillUnmount() {
            window.removeEventListener('keydown', this.escapeHandler, false);
        }

        escapeHandler(event: KeyboardEvent) {
            switch (event.keyCode) {
                case KEY_CODE.KEY_ESCAPE:
                    this.props.onCancel();
                    break;
                default:
                    break;
            }
        }

        escapeHandler: (event: KeyboardEvent) => void;

        render() {
            return <WrappedComponent {...this.props} />;
        }
    };
};

withCancel.propTypes = {
    onCancel: PropTypes.func.isRequired,
};

export default withCancel;