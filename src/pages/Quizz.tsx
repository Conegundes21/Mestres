import React from "react";

export default function Quizz() {
  React.useEffect(() => {
    // Adiciona o script do GA4 dinamicamente
    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = 'https://www.googletagmanager.com/gtag/js?id=G-0LH5V00NQP';
    document.head.appendChild(script1);

    const script2 = document.createElement('script');
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-0LH5V00NQP');
    `;
    document.head.appendChild(script2);

    return () => {
      document.head.removeChild(script1);
      document.head.removeChild(script2);
    };
  }, []);

  return (
    <div style={{ color: 'red', fontSize: 32, textAlign: 'center', marginTop: 40 }}>
      Novo arquivo Quizzz React puro!
    </div>
  );
} 