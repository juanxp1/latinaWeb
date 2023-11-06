// QRCode.js
import QRCodeReact from 'qrcode.react';

const QRCode = () => {
  const websiteUrl = 'https://www.latinaweb.site'; 

  return (
    <div>
      <QRCodeReact value={websiteUrl} size={128} />
      <p>Escanea el código QR para visitar nuestra página web</p>
    </div>
  );
};

export default QRCode;