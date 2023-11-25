// QRCode.js
import QRCodeReact from 'qrcode.react';

import styled from 'styled-components';
const Div = styled.div`
 @media (max-width:768px){
  display: none;
 }
`

const QRCode = () => {
  const websiteUrl = 'https://www.latinaweb.site';

  return (
    <Div>
      <QRCodeReact value={websiteUrl} size={100} />
    </Div>
  );
};

export default QRCode;