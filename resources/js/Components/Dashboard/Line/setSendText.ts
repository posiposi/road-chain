const setSendTextByLine = (inputValue: string) => {
  const sendToText = 'みかたんへ';
  const sendText = 'メッセージを送ります。';
  const sendTestUrl = 'https://www.google.com';
  const encodeText = encodeURIComponent(
    [sendToText, sendText, sendTestUrl, inputValue].join('\n')
  );
  const sendButton = document.getElementById(
    'line_send_text_icon'
  ) as HTMLAnchorElement;

  sendButton.href = 'https://line.me/R/share?text=' + encodeText;
};

export default setSendTextByLine;
