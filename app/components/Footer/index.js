import React from 'react';
// import { FormattedMessage } from 'react-intl';

import { Heading } from 'rebass';
// import A from 'components/A';
import LocaleToggle from 'containers/LocaleToggle';
import Wrapper from './Wrapper';
// import messages from './messages';

function Footer() {
  return (
    <Wrapper>
      <section>
        <Heading>Footer</Heading>
      </section>
      <section>
        <LocaleToggle />
      </section>
    </Wrapper>
  );
}

export default Footer;
